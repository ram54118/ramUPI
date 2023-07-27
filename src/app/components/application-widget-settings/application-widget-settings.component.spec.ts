import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationWidgetSettingsComponent } from './application-widget-settings.component';

describe('ApplicationWidgetSettingsComponent', () => {
  let component: ApplicationWidgetSettingsComponent;
  let fixture: ComponentFixture<ApplicationWidgetSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationWidgetSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationWidgetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
