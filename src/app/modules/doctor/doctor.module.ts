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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { DoctorService } from './core/services/doctor.service';
import { DoctorTimingsComponent } from './shared/components/doctor-timings/doctor-timings.component';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';



@NgModule({
  declarations: [
    DoctorComponent,
    DoctorAuthFormComponent,
    SignUpComponent,
    SignInComponent,
    DoctorProfileComponent,
    AppointmentListComponent,
    DoctorTimingsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({heroBellAlertSolid,heroCalendarSolid,heroPencilSquareSolid})
  ],
  providers:[
    DoctorService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorHandlerInterceptor,
      multi:true
    }
  ]
})
export class DoctorModule { }
