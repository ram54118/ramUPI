import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss']
})
export class UpiComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email])
  modalRef?: BsModalRef;
  selectedAction = 'realtime';
  control = new FormControl('');
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getRealTimeDetails();
    this.control.valueChanges.subscribe(value => {
      console.log(value)
    })
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
