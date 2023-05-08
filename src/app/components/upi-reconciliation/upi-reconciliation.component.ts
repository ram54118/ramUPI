import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-upi-reconciliation',
  templateUrl: './upi-reconciliation.component.html',
  styleUrls: ['./upi-reconciliation.component.scss']
})
export class UpiReconciliationComponent implements OnInit {

  @ViewChild('customTmpl', { static: true }) customTmpl!: TemplateRef<any>;
  @ViewChild('statusTmpl', { static: true }) statusTmpl!: TemplateRef<any>;
  @ViewChild('actionTmpl', { static: true }) actionTmpl!: TemplateRef<any>;
  
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
      { name: 'Alert ID', prop: 'alertId'},
      { name: 'Date/Time', prop: 'efd', cellTemplate: this.customTmpl},
      { name: 'Priority', prop: 'eh', cellTemplate: this.customTmpl },
      { name: 'EFD', prop: 'rsm', cellTemplate: this.customTmpl },
      { name: 'EH', prop: 'eh1', cellTemplate: this.customTmpl },
      { name: 'RSM', prop: 'uip', cellTemplate: this.customTmpl },
      { name: 'EH', prop: 'eh2', cellTemplate: this.customTmpl,},
      { name: 'UIP', prop: 'eh2', cellTemplate: this.customTmpl},
      { name: 'EH', prop: 'eh2', cellTemplate: this.customTmpl},
      { name: 'Status', prop: 'eh2', cellTemplate: this.statusTmpl},
      { name: 'Action', prop: 'eh2', cellTemplate: this.actionTmpl}

    ];
  }

  public onLimitChange(event: any, table: any): void {
    table.limit = event;
    table.recalculate();
  }

}
