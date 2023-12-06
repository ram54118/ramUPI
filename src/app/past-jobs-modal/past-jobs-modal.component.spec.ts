import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastJobsModalComponent } from './past-jobs-modal.component';

describe('PastJobsModalComponent', () => {
  let component: PastJobsModalComponent;
  let fixture: ComponentFixture<PastJobsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastJobsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastJobsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
