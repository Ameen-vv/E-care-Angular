import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfileDetailsComponent } from './shared/components/profile-details/profile-details.component';


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
