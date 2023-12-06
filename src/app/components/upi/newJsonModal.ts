import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Add new JSON</h4>
      <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true" class="visually-hidden">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <input [(ngModel)]="key" *ngIf="node.type !== 'array'" />
    <textarea [(ngModel)]="value"></textarea>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
      <button type="button" class="btn btn-default" (click)="addNewJson()">Submit</button>
    </div>
  `
})
 
export class ModalContentComponent implements OnInit {
  node: any;
  value: any;
  key!: string;
  public onClose!: Subject<any>;
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.onClose = new Subject();
  }

  addNewJson() {
    try {
      const json = JSON.parse(this.value);
      console.log(json, ':::')
      this.onClose.next({key: this.key, value: json});
     } catch {
      // if (this.node.type === 'array') {
        this.onClose.next({key: this.key, value: this.value});
      // }
      console.log('error')
     }
     this.bsModalRef.hide();
  }
}