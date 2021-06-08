import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstFormComponent } from './app-form/first-form/first-form.component';
import { SecondFormComponent } from './app-form/second-form/second-form.component';

const routes: Routes = [
   {path: '',redirectTo: 'first', pathMatch: 'full'},
  {path: 'first', component: FirstFormComponent},
  {path: 'second', component: SecondFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstFormComponent,SecondFormComponent]
