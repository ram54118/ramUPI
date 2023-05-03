import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.scss']
})
export class UpiComponent implements OnInit {
  selectedAction = 'reconcillation';
  constructor() { }

  ngOnInit(): void {
    this.getRealTimeDetails();
  }

  getUpiData(action: string) {
    this.selectedAction = action;
  }
  private getRealTimeDetails() {

  }

}
