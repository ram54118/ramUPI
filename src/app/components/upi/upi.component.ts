import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxJsonViewerService } from '../ngx-json-viewer/ngx-json-viewer.service';
import { tap } from 'rxjs';
import { ModalContentComponent } from './newJsonModal';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss']
})
export class UpiComponent implements OnInit {
  configuration: any = {
    alphanumeric: {
      valueType: 'alphanumeric',
      generationType: '',
      value: '',
      min1: '',
      max1: '',
      prefix1: '',
      sufix1: ''
    },
    number: {
      valueType: 'number',
      generationType: '',
      value: '',
      min: '',
      max: '',
      prefix: '',
      sufix: ''
    },
    date: {
      valueType: 'date',
      generationType: '',
      incrementType: '',
      startDateRange: '',
      endDateRange: '',
      dateIncrementBy: '',
    }
  };
  emailControl = new FormControl('', [Validators.required, Validators.email])
  modalRef?: BsModalRef;
  selectedAction = 'realtime';
  control = new FormControl('');
  data = {
    'simple key': 'simple value',
    'numbers': 1234567,
    'simple list': ['value1', 22222, 'value3'],

    'simple obect': {
      'simple key': 'simple value',
      'numbers': 1234567,
      'ram': ['value1', 22222, 'value3'],
      'child obect': {
        'key1': 'value1',
        'key2': 22222,
        'key3': 'value3',
        'date': '2023-12-04T09:49:48.444Z'
      }
    },
    "topping":
		[
			
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		],
    "toppin1": {
      "test": [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" }
      ],
      "test2": {
        "name": "ram"
      }
    }
  };

  typeOptions = ['alphanumeric', 'number', 'date'];
  genrationTypeOptions = ['sequential', 'random'];
  dynamicFormGroup!: FormGroup;
  selectedFieldProps!: any;
  showForm = false;
  selectedNode!: any;
  constructor(private modalService: BsModalService,
    private ngxJsonViewerService: NgxJsonViewerService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.data = this.ngxJsonViewerService.decycle(this.data);
    this.getRealTimeDetails();
    this.control.valueChanges.subscribe(value => {
      console.log(value)
    })

    this.ngxJsonViewerService.onNodeClick.pipe(
      tap((node: any) => {
        console.log(node)
        this.selectedNode = node;
        this.buildDynamicForm();
      })
    ).subscribe();

    this.ngxJsonViewerService.nodeToAddNewJson.pipe(
      tap((node: any) => {
        this.openModalWithComponent(node);
      })
    ).subscribe();
  }

  onPaste(event: any) {
   try {
    this.data = this.ngxJsonViewerService.decycle(JSON.parse(event.clipboardData.getData('text')));
   } catch {
    console.log('error')
   }
  }

  onChange(event: any) {
    event.preventDefault();
  }

  buildDynamicForm(type?: string) {
    this.dynamicFormGroup = this.formBuilder.group({});
    const selectedField = this.configuration[type || this.selectedNode.type];
    this.selectedFieldProps = Object.keys(selectedField);
    Object.keys(selectedField).forEach(controlName => {
      let value = controlName === 'value' ? this.selectedNode.value : '';
      if (controlName === 'valueType') {
        value = type ||  this.selectedNode.type;
      }
      const control = this.formBuilder.control(value);
      this.dynamicFormGroup.addControl(controlName, control);
    });
    this.showForm = true;
   this.listenTypeChange();
  }

  listenTypeChange() {
    this.dynamicFormGroup.get('valueType')?.valueChanges.pipe(tap(res => {
      while(Object.keys(this.dynamicFormGroup.controls).length){
        const toRemove = Object.keys(this.dynamicFormGroup.controls)[0];
        this.dynamicFormGroup.removeControl(toRemove)
      }   
      this.buildDynamicForm(res);
    })).subscribe();
  }

  

  onSubmit() {
    
    const editedNodes = this.ngxJsonViewerService.editedNodesList.value;
    this.ngxJsonViewerService.setEditedNodesList([...editedNodes, this.selectedNode]);
  }

  onFileSelected(event: any) {
    const file:any = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (event: any) => {
        this.data = this.ngxJsonViewerService.decycle(JSON.parse(event.target.result));
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }
    }
}






  getUpiData(action: string) {
    this.selectedAction = action;
  }
  private getRealTimeDetails() {

  }

  public opneMsgDialog(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent(node: any) {
    const initialState: ModalOptions = {
      initialState: {
        node
      }
    };
    const bsModalRef: BsModalRef = this.modalService.show(ModalContentComponent, initialState);
    bsModalRef.content.onClose.subscribe((result: any) => {
      console.log('results', result);

    let valueToChange: any = this.data;
    const paths = node.parentPath.split('/');
    for (let i=0; i<paths.length; i++) {
      if(valueToChange[paths[i]]) {
        valueToChange = valueToChange[paths[i]];
      }
    }
    // valueToChange[this.selectedNode.key] = this.dynamicFormGroup.value.value;
    if (Array.isArray(valueToChange[node.key])) {
      valueToChange[node.key].push(result.value);
    } else {
      valueToChange[node.key][result.key] = result.value;
    }
    this.data = {...this.data};
    this.showForm = false;
    })
  }

}
