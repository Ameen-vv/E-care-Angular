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


const routes:Routes = [{
  path:'',
  component:UserComponent,
  children:[
    {
      path:'register',
      component:UserRegistrationComponent
    },
    {
      path:'signIn',
      component:SignInComponent
    },
    {
      path:'home',
      component:HomepageComponent
    },
    {
      path:'profile',
      component:ProfileDetailsComponent
    },
    {
      path:'departments',
      component:DepartmentPageComponent
    },
    {
      path:'doctors',
      component:DoctorListComponent
    },
    {
      path:'doctorDetails/:id',
      component:DoctorDetailsComponent
    },
    {
      path:'book',
      component:BookingPageComponent
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
