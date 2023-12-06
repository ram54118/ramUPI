import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";

@Component({
  selector: 'app-past-jobs-modal',
  templateUrl: './past-jobs-modal.component.html',
  styleUrls: ['./past-jobs-modal.component.scss']
})
export class PastJobsModalComponent implements OnInit {

  jobs: any;
  public onClose!: Subject<any>;
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.onClose = new Subject();
  }

}
