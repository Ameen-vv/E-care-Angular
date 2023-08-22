import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthFormComponent } from './user-auth-form.component';
import { FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';

describe('UserAuthFormComponent', () => {
  let component: UserAuthFormComponent;
  let fixture: ComponentFixture<UserAuthFormComponent>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [UserAuthFormComponent],
      imports:[ReactiveFormsModule,],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthFormComponent);
    component = fixture.componentInstance;
    component.formTemplate = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [
        '',
        Validators.compose([Validators.required]),
      ],
      dob: ['', Validators.compose([Validators.required])],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
