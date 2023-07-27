import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-application-widget-settings',
  templateUrl: './application-widget-settings.component.html',
  styleUrls: ['./application-widget-settings.component.scss']
})
export class ApplicationWidgetSettingsComponent implements OnInit {

  ommWidgetsList = [{
    label: 'Incoming events',
    name: 'incomingEvents'
  }];

  alertsList = [{
    label: 'Incoming events',
    name: 'incomingEvents'
  }];


  ommWidgetsArray: any = new FormArray([]);
  alertsArray: any = new FormArray([]);

  form!: FormGroup;
  constructor(private fomrBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ommWidgetsList.forEach(item => {
        const control: FormControl = new FormControl(true);
        control.valueChanges.pipe(
          tap(value => {
            console.log(item);
            console.log(value);
          })
        ).subscribe();
      this.ommWidgetsArray.push(control);
    });

    this.alertsList.forEach(item => {
      const control: FormControl = new FormControl(true);
      control.valueChanges.pipe(
        tap(value => {
          console.log(item);
          console.log(value);
        })
      ).subscribe();
    this.alertsArray.push(control);
  });
  }

}
