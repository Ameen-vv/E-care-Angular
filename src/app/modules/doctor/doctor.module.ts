import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DoctorAuthFormComponent } from './shared/components/doctor-auth-form/doctor-auth-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { NgIconsModule } from '@ng-icons/core';
import {heroBellAlertSolid,heroCalendarSolid,heroPencilSquareSolid } from '@ng-icons/heroicons/solid';
import { AppointmentListComponent } from './shared/components/appointment-list/appointment-list.component';



@NgModule({
  declarations: [
    DoctorComponent,
    DoctorAuthFormComponent,
    SignUpComponent,
    SignInComponent,
    DoctorProfileComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({heroBellAlertSolid,heroCalendarSolid,heroPencilSquareSolid})
  ]
})
export class DoctorModule { }
