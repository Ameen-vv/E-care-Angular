import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctorAuthFormComponent } from './shared/components/doctor-auth-form/doctor-auth-form.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes:Routes = [
  {
  path:'',
  component:DoctorComponent,
  },
  {
    path:'signUp',
    component:SignUpComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class DoctorRoutingModule { }
