import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upi-realtime',
  templateUrl: './upi-realtime.component.html',
  styleUrls: ['./upi-realtime.component.scss']
})
export class UpiRealtimeComponent implements OnInit {
  rows = [
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    },
    {
      "alertId": "Ethel Price",
      "efd": "success",
      "eh": "success",
      "rsm": "pending",
      "eh1": "pending",
      "uip": "delayed",
      "eh2": "delayed"
    }
  ];
  columns = [
    { name: 'Alert ID', prop: 'alertId'},
    { name: 'EFD', prop: 'efd' },
    { name: 'EH', prop: 'eh' },
    { name: 'RSM', prop: 'rsm' },
    { name: 'EH', prop: 'eh1' },
    { name: 'UIP', prop: 'uip' },
    { name: 'EH', prop: 'eh2' }
  ];
  public pageLimitOptions = [5, 10, 20, 50];
  selectedPageOption = 5;
  constructor() { }

  ngOnInit(): void {
  }

  public onLimitChange(event: any, table: any): void {
    table.limit = event;
    table.recalculate();
  }

}

