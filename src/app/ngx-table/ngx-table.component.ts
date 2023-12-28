import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements OnInit {

  rows = [];
  selected: any = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  columns = [
    {
      name: '',

    }
  ];

  constructor() {
    
  }

  ngOnInit(): void {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSelect({ selected }: any) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event: any) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove() {
    this.selected = [];
  }

  onEdit(row: any) {
    console.log(row, 'row')
  }
}
