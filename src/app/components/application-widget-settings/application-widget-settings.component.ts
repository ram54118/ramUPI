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
  chartData: any = [
    {
      stepName: 'mobileNo',
      stepCount: 113,
      stepDate: '07-31-2023'
    },
    {
      stepName: 'mobileNo1',
      stepCount: 13,
      stepDate: '07-31-2023'
    },
    {
      stepName: 'mobileNo2',
      stepCount: 3,
      stepDate: '07-31-2023'
    },
    {
      stepName: 'mobileNo3',
      stepCount: 30,
      stepDate: '07-31-2023'
    },
    {
      stepName: 'mobileNo4',
      stepCount: 40,
      stepDate: '07-31-2023'
    },
    {
      stepName: 'mobileNo5',
      stepCount: 90,
      stepDate: '07-31-2023'
    }
  ];
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

    // bar chart code starts
    const total = Math.max(...this.chartData.map((d: any) => d.stepCount));
    this.chartData.forEach((d: any) => {
      d.width = this.percentage(d.stepCount, total)+'%';
    })
    // bar chart code ends
  }

  // bar chart code starts
  percentage(value:number, total: number) {
    return (100 * value) / total;
  } 

}
