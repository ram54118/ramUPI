import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgxJsonViewerService } from './ngx-json-viewer.service';

export interface Segment {
  key: string;
  value: any;
  type: undefined | string;
  description: string;
  expanded: boolean;
  parentPath?: string;
}

@Component({
  selector: 'ngx-json-viewer',
  templateUrl: './ngx-json-viewer.component.html',
  styleUrls: ['./ngx-json-viewer.component.scss']
})
export class NgxJsonViewerComponent implements OnChanges {

  @Input() json: any;
  @Input() expanded = true;
  @Input() depth = -1;
  @Input() parent = '';
  @Input() parentNode = false;

  @Input() _currentDepth = 0;


  segments: Segment[] = [];

  constructor(private ngxJsonViewerService: NgxJsonViewerService) { }

  ngOnChanges() {
    this.segments = [];

    if (typeof this.json === 'object') {
      Object.keys(this.json).forEach(key => {
        this.segments.push(this.parseKeyValue(key, this.json[key], this.json.parentPath || this.parent));
      });
    } else {
      this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json));
    }
  }

  isExpandable(segment: Segment) {
    return segment.type === 'object' || segment.type === 'array';
  }

  toggle(segment: Segment) {
    if (this.isExpandable(segment)) {
      segment.expanded = !segment.expanded;
    }
  }

  private parseKeyValue(key: any, value: any, parentPath?: string): Segment {
    const segment: Segment = {
      key: key,
      value: value,
      type: undefined,
      description: '' + value,
      expanded: this.isExpanded(),
      parentPath
    };

    switch (typeof segment.value) {
      case 'number': {
        segment.type = 'number';
        break;
      }
      case 'boolean': {
        segment.type = 'boolean';
        break;
      }
      case 'function': {
        segment.type = 'function';
        break;
      }
      case 'string': {
        if(this.isDateValue(segment.value)) {
          segment.type = 'date';
        } else {
          segment.type = 'alphanumeric';
        }
        segment.description = '"' + segment.value + '"';
        break;
      }
      case 'undefined': {
        segment.type = 'undefined';
        segment.description = 'undefined';
        break;
      }
      case 'object': {
        // yea, null is object
        if (segment.value === null) {
          segment.type = 'null';
          segment.description = 'null';
        } else if (Array.isArray(segment.value)) {
          segment.type = 'array';
          segment.description = JSON.stringify(segment.value);
        } else if (segment.value instanceof Date) {
          segment.type = 'date';
        } else {
          segment.type = 'object';
          segment.description = JSON.stringify(segment.value);
        }
        break;
      }
    }

    return segment;
  }

  private isDateValue(val: string): boolean{
    return (!this.isNumeric(val)) && (this.isNumeric(new Date(val).getTime()));
  }

  private isExpanded(): boolean {
    return (
      this.expanded &&
      !(this.depth > -1 && this._currentDepth >= this.depth)
    );
  }

  private isNumeric(value: any) {
    return /^-?\d+$/.test(value);
}

  onKeyValuePairClick(segment: Segment) {
    if (!this.isExpandable(segment)) {
      console.log(segment.parentPath)
      this.ngxJsonViewerService.setSelectedNode(segment);
    }
  }

  isNodeUpdated(node: any) {
    return this.ngxJsonViewerService.editedNodesList.value.find((d: any) => d.parentPath === node.parentPath && d.key === node.key)
  }

  addNewNode(node: any, event: any) {
    event.stopPropagation();
    this.ngxJsonViewerService.addJsonIntoNewNode(node);
  }
}
