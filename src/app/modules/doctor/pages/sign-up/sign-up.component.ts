import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { DoctorService } from '../../core/services/doctor.service';
import { FormDatModel } from '../../core/models/Doc.models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  doctorForm: FormGroup;
  departments!: DepModel[];

  constructor(
    private formBuilder: FormBuilder,
    private docService: DoctorService
  ) {
    this.doctorForm = this.formBuilder.group(
      {
        doctorFullName: ['', Validators.required],
        doctorPhone: [
          '',
          Validators.compose([Validators.required, this.phoneValidator]),
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
          [Validators.required, this.passwordMatchValidator],
        ],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    this.getDep();
  }

  getDep() {
    this.docService.getDep().subscribe((res) => {
      this.departments = res.data;
    });
  }

  phoneValidator(control: AbstractControl): { [key: string]: any } | null {
    const validPhoneNumber = /^\d{10}$/;
    const value = control.value;
    if (!value || validPhoneNumber.test(value)) {
      return null;
    }
    return { invalidPhone: true };
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('doctorPassword')?.value;
    const confirmPassword = control.get('doctorConfirmPass')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };

  signUp(formData:FormDatModel) {
    
    const image:File = formData.image
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      console.log(reader.result);
    };
  }
}
