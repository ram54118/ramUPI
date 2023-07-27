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


@NgModule({
  declarations: [
    AppComponent,
    UpiComponent,
    UpiRealtimeComponent,
    UpiReconciliationComponent,
    UipUploadComponent,
    DragAndDropDirective,
    ApplicationWidgetSettingsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    ModalModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
