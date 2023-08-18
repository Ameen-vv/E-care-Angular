import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctorAuthFormComponent } from './shared/components/doctor-auth-form/doctor-auth-form.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';


const routes:Routes = [
  {
  path:'',
  component:DoctorComponent,
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'signIn',
    component:SignInComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class DoctorRoutingModule { }
