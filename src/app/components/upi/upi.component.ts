import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxJsonViewerService } from '../ngx-json-viewer/ngx-json-viewer.service';
import { tap } from 'rxjs';

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
      'simple list': ['value1', 22222, 'value3'],
      'child obect': {
        'key1': 'value1',
        'key2': 22222,
        'key3': 'value3'
      }
    }
  };

  typeOptions = ['alphanumeric', 'number'];
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
        this.selectedNode = node;
        this.buildDynamicForm();
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
    let valueToChange: any = this.data;
    const paths = this.selectedNode.parentPath.split('/');
    for (let i=0; i<paths.length; i++) {
      valueToChange = valueToChange[paths[i]];
    }
    valueToChange[this.selectedNode.key] = this.dynamicFormGroup.value.value;
    this.data = {...this.data};
    this.showForm = false;
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

}
