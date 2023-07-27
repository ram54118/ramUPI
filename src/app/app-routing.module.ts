import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiComponent } from './components/upi/upi.component';
import { ApplicationWidgetSettingsComponent } from './components/application-widget-settings/application-widget-settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'upi', pathMatch: 'full' },
  { path: 'upi', component: UpiComponent },
  { path: 'settings', component: ApplicationWidgetSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }