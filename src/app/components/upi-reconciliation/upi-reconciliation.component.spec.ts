import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiReconciliationComponent } from './upi-reconciliation.component';

describe('UpiReconciliationComponent', () => {
  let component: UpiReconciliationComponent;
  let fixture: ComponentFixture<UpiReconciliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiReconciliationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
