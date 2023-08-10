import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfileDetailsComponent } from './shared/components/profile-details/profile-details.component';
import { DepartmentPageComponent } from './pages/department-page/department-page.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { logInCheckGuard } from './core/guards/logInCheck/log-in-check.guard';
import { userCheckGuard } from './core/guards/authGuard/user-check.guard';


const routes:Routes = [{
  path:'',
  component:UserComponent,
  children:[
    {
      path:'register',
      component:UserRegistrationComponent,
      canActivate:[logInCheckGuard]
    },
    {
      path:'signIn',
      component:SignInComponent,
      canActivate:[logInCheckGuard]
    },
    {
      path:'home',
      component:HomepageComponent
    },
    {
      path:'profile',
      component:ProfileDetailsComponent,
      canActivate:[userCheckGuard]
    },
    {
      path:'departments',
      component:DepartmentPageComponent
    },
    {
      path:'doctors',
      component:DoctorListComponent,
    },
    {
      path:'doctorDetails/:id',
      component:DoctorDetailsComponent,
      canActivate:[userCheckGuard]
    },
    {
      path:'book',
      component:BookingPageComponent,
      canActivate:[userCheckGuard]
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
