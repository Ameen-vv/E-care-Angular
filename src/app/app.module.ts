import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user/user.effects';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]) 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
