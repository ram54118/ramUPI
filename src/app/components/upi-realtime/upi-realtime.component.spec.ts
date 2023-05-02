import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiRealtimeComponent } from './upi-realtime.component';

describe('UpiRealtimeComponent', () => {
  let component: UpiRealtimeComponent;
  let fixture: ComponentFixture<UpiRealtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiRealtimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
