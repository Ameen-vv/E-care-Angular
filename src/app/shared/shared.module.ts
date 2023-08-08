import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HotToastModule.forRoot(),
  ],
  exports:[
    NavbarComponent,
    LoaderComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotToastModule,
    FooterComponent
  ]
})
export class SharedModule { }
