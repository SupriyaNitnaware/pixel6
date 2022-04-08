import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VerificationReactiveFormComponent} from './verification-reactive-form/verification-reactive-form.component'

const routes: Routes = [
  {path : 'VerificationReactiveFormComponent', component: VerificationReactiveFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
