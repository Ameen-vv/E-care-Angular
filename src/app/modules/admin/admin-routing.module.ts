import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { AdminLogInComponent } from './pages/admin-log-in/admin-log-in.component';


const routes:Routes = [
  {
    path:'',
    component:AdminLogInComponent
  },
  {
    path:'a',
    component:AdminComponent,
    children:[
      {
        path:'users',
        component:UserTableComponent
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
