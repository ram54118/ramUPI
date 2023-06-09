import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiComponent } from './components/upi/upi.component';

const routes: Routes = [
  { path: '', redirectTo: 'upi', pathMatch: 'full' },
  { path: 'upi', component: UpiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }