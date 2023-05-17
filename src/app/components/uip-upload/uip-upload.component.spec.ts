import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UipUploadComponent } from './uip-upload.component';

describe('UipUploadComponent', () => {
  let component: UipUploadComponent;
  let fixture: ComponentFixture<UipUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UipUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UipUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
