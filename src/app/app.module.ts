import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpiComponent } from './components/upi/upi.component';
import { UpiRealtimeComponent } from './components/upi-realtime/upi-realtime.component';
import { UpiReconciliationComponent } from './components/upi-reconciliation/upi-reconciliation.component';


@NgModule({
  declarations: [
    AppComponent,
    UpiComponent,
    UpiRealtimeComponent,
    UpiReconciliationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
