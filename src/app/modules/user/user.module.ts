import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserAuthFormComponent } from './shared/components/user-auth-form/user-auth-form.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserService } from './core/services/user.service';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DepSectionHomeComponent } from './shared/components/dep-section-home/dep-section-home.component';
import { ProfileDetailsComponent } from './shared/components/profile-details/profile-details.component';
import {heroBellAlertSolid,heroCalendarSolid,heroPencilSquareSolid } from '@ng-icons/heroicons/solid';
import { HistoryComponent } from './shared/components/history/history.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { DepartmentPageComponent } from './pages/department-page/department-page.component';
import { DepartmentCardComponent } from './shared/components/department-card/department-card.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { DoctorCardComponent } from './shared/components/doctor-card/doctor-card.component';




@NgModule({
  declarations: [
    UserComponent,
    SignInComponent,
    UserAuthFormComponent,
    UserRegistrationComponent,
    HeroSectionComponent,
    HomepageComponent,
    DepSectionHomeComponent,
    ProfileDetailsComponent,
    HistoryComponent,
    SearchBarComponent,
    DepartmentPageComponent,
    DepartmentCardComponent,
    DoctorListComponent,
    DoctorCardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({heroBellAlertSolid,heroCalendarSolid,heroPencilSquareSolid})
  ],
  providers:[
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ]
})
export class UserModule { }
