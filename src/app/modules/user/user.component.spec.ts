import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserModule } from './user.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './core/services/user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async() => {
   await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports:[UserModule,SharedModule,UserRoutingModule,RouterTestingModule],
    }).compileComponents()
  
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    TestBed.inject(RouterTestingModule)
    expect(component).toBeTruthy();
  });
});
