import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpiComponent } from './components/upi/upi.component';
import { UpiRealtimeComponent } from './components/upi-realtime/upi-realtime.component';
import { UpiReconciliationComponent } from './components/upi-reconciliation/upi-reconciliation.component';
import { CommonModule } from '@angular/common';
import { UipUploadComponent } from './components/uip-upload/uip-upload.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DragAndDropDirective } from './directives/drag-drop.directive';
import { ApplicationWidgetSettingsComponent } from './components/application-widget-settings/application-widget-settings.component';
import { NumbersOnly } from './directives/allow-numbers-only.directive';
import { TtdComponent } from './ttd/ttd.component';
import { NgxJsonViewerComponent } from './components/ngx-json-viewer/ngx-json-viewer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContentComponent } from './components/upi/newJsonModal';


@NgModule({
  declarations: [
    AppComponent,
    UpiComponent,
    UpiRealtimeComponent,
    UpiReconciliationComponent,
    UipUploadComponent,
    DragAndDropDirective,
    ApplicationWidgetSettingsComponent,
    NumbersOnly,
    TtdComponent,
    NgxJsonViewerComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule { }
