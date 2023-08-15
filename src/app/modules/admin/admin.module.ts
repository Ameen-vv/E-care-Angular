import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './shared/components/admin-nav/admin-nav.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
