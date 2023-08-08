import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserAuthFormComponent } from './shared/components/user-auth-form/user-auth-form.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserService } from './core/services/user.service';




@NgModule({
  declarations: [
    UserComponent,
    SignInComponent,
    UserAuthFormComponent,
    UserRegistrationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
