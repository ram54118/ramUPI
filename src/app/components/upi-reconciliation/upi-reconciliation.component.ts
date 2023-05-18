import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { UipUploadComponent } from '../uip-upload/uip-upload.component';

@Component({
  selector: 'app-upi-reconciliation',
  templateUrl: './upi-reconciliation.component.html',
  styleUrls: ['./upi-reconciliation.component.scss']
})
export class UpiReconciliationComponent implements OnInit {
  bsModalRef?: BsModalRef;
  @ViewChild('alertIdTmpl', { static: true }) alertIdTmpl!: TemplateRef<any>;
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
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.columns =  [
      { name: 'Alert ID', prop: 'alertId', width: 500, cellTemplate: this.alertIdTmpl},
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

  openUplodaDialog() {
    const initialState: ModalOptions = {
      initialState: {
        
      },
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(UipUploadComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
