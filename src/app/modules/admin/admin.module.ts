import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './shared/components/admin-nav/admin-nav.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { AdminLogInComponent } from './pages/admin-log-in/admin-log-in.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    DataTableComponent,
    UserTableComponent,
    AdminLogInComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
