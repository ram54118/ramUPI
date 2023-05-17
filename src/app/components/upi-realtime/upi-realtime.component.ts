import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-upi-realtime',
  templateUrl: './upi-realtime.component.html',
  styleUrls: ['./upi-realtime.component.scss']
})
export class UpiRealtimeComponent implements OnInit {
  @ViewChild('customTmpl', { static: true }) customTmpl!: TemplateRef<any>;
  rows = [
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      
    }
  ];
  columns: any;
  public pageLimitOptions = [5, 10, 20, 50];
  selectedPageOption = 5;
  constructor() { }

  ngOnInit(): void {
    this.columns =  [
      { name: 'Alert ID', prop: 'alertId', width: 500},
      { name: 'EFD11', prop: 'efd', cellTemplate: this.customTmpl},
      { name: 'EH', prop: 'eh', cellTemplate: this.customTmpl },
      { name: 'RSM', prop: 'rsm', cellTemplate: this.customTmpl },
      { name: 'EH', prop: 'eh1', cellTemplate: this.customTmpl },
      { name: 'UIP', prop: 'uip', cellTemplate: this.customTmpl },
      { name: 'EH', prop: 'eh2', cellTemplate: this.customTmpl, cellClass:'disabled', headerClass: 'disabled', sortable: false}
    ];
  }

  public onLimitChange(event: any, table: any): void {
    table.limit = event;
    table.recalculate();
  }

}

