import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldConfig, Validator } from './../../interfaces/ifield-config';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[] = [];
  @Output() removeField = new EventEmitter()
  dynamicForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
    this.updateFormGroup();
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['fields'];
    if (!change.firstChange) {
      this.updateFormGroup();
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.dynamicForm.valid) {
      console.log('form values', this.dynamicForm.value);
    } else {
      this.validateAllFormFields(this.dynamicForm);
    }
  }

  updateFormGroup() {
    this.fields.forEach(field => {
      if (!this.dynamicForm.get(field.label)) {
        const control = this.formBuilder.control(
          field.value,
          this.bindValidations(field.validations || [])
        );
        this.dynamicForm.addControl(field.label, control);
      }
    });

    Object.keys(this.dynamicForm.controls).forEach(controlName => {
      if(!this.fields.some(field => field.label === controlName)) {
        this.dynamicForm.removeControl(controlName);
      }
    })
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList: any = [];
      validations.forEach((valid: Validator) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control: FormControl = formGroup.get(field) as FormControl;
      control.markAsTouched({ onlySelf: true });
    });
  }

  onRemove(index: number) {
    this.removeField.emit(index);
  }

}
