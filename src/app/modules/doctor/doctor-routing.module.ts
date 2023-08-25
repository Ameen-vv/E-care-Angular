import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { DoctorAuthFormComponent } from './shared/components/doctor-auth-form/doctor-auth-form.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { authCheckGuard } from './core/guards/authCheck/auth-check.guard';
import { tokenCheckGuard } from './core/guards/tokenCheck/token-check.guard';


const routes:Routes = [
  {
  path:'',
  component:DoctorComponent,
  canActivate:[authCheckGuard]
  },
  {
    path:'signUp',
    component:SignUpComponent,
    canActivate:[tokenCheckGuard]
  },
  {
    path:'signIn',
    component:SignInComponent,
    canActivate:[tokenCheckGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class DoctorRoutingModule { }
