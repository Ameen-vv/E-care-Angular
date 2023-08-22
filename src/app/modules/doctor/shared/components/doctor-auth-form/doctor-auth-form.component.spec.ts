import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAuthFormComponent } from './doctor-auth-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

describe('DoctorAuthFormComponent', () => {
  let component: DoctorAuthFormComponent;
  let fixture: ComponentFixture<DoctorAuthFormComponent>;
  let formBuilder:FormBuilder = new FormBuilder();

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [DoctorAuthFormComponent],
      imports:[ReactiveFormsModule],
      providers:[{provide:FormBuilder,useValue:formBuilder}]
    }).compileComponents()
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(DoctorAuthFormComponent);
    component = fixture.componentInstance;
    component.doctorForm = formBuilder.group({
      doctorFullName: ['', Validators.required],
        doctorPhone: [
          '',
          Validators.compose([Validators.required]),
        ],
        doctorEmail: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        doctorDateOfBirth: ['', Validators.required],
        doctorQualification: ['', Validators.required],
        doctorDepartment: ['', Validators.required],
        doctorAddress: ['', Validators.required],
        doctorHospital: ['', Validators.required],
        doctorPassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        doctorConfirmPass: [
          '',
          [Validators.required],
        ]
    })
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
