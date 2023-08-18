import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './shared/components/admin-nav/admin-nav.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { AdminLogInComponent } from './pages/admin-log-in/admin-log-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/tokenInterceptor/token.interceptor';
import { AdminService } from './core/services/admin.service';
import { DoctorTableComponent } from './pages/doctor-table/doctor-table.component';
import { NewDoctorsComponent } from './pages/new-doctors/new-doctors.component';
import { DepartmentTableComponent } from './pages/department-table/department-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from 'src/app/state/user/user.reducers';
import { UserEffects } from 'src/app/state/user/user.effects';



@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    DataTableComponent,
    UserTableComponent,
    AdminLogInComponent,
    DoctorTableComponent,
    NewDoctorsComponent,
    DepartmentTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature('user',userReducer),
    EffectsModule.forFeature([UserEffects])

  ],
  providers:[
    AdminService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ]
})
export class AdminModule { }
