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
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({heroBellAlertSolid,heroCalendarSolid,heroPencilSquareSolid})
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
