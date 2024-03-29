import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { AdminLogInComponent } from './pages/admin-log-in/admin-log-in.component';
import { DoctorTableComponent } from './pages/doctor-table/doctor-table.component';
import { NewDoctorsComponent } from './pages/new-doctors/new-doctors.component';
import { DepartmentTableComponent } from './pages/department-table/department-table.component';
import { AddDepComponent } from './pages/add-dep/add-dep.component';
import { authGuard } from './core/guards/authGuard/auth.guard';
import { loginCheckGuard } from './core/guards/loginCheck/login-check.guard';


const routes:Routes = [
  {
    path:'',
    canActivate:[loginCheckGuard],
    component:AdminLogInComponent
  },
  {
    path:'a',
    component:AdminComponent,
    canActivate:[authGuard],
    children:[
      {
        path:'users',
        component:UserTableComponent
      },
      {
        path:'doctors',
        component:DoctorTableComponent
      },
      {
        path:'newDoctors',
        component:NewDoctorsComponent
      },
      {
        path:'departments',
        component:DepartmentTableComponent
      },
      {
        path:'addDep',
        component:AddDepComponent  
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
