import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { DoctorService } from '../../core/services/doctor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DoctorAuthFormComponent } from '../../shared/components/doctor-auth-form/doctor-auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent,DoctorAuthFormComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
