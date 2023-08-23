import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { DoctorService, } from '../../core/services/doctor.service';
import { IDocSignUp, IFormDatModel } from '../../core/models/Doc.models';
import { HotToastService } from '@ngneat/hot-toast';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  doctorForm: FormGroup;
  departments!: DepModel[];
  loader:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private docService: DoctorService,
    private toast: HotToastService,
    private router:Router,
    
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

  signUp(formData:IFormDatModel) {
  try{
    this.loader = true;
    const {data,image} = formData;
    const imageData:File = image;
    const user:IDocSignUp={
      fullName:data.value.doctorFullName,
      phone:data.value.doctorPhone,
      email:data.value.doctorEmail,
      dateOfBirth:data.value.doctorDateOfBirth,
      address:data.value.doctorAddress,
      hospital:data.value.doctorHospital,
      qualification:data.value.doctorQualification,
      password:data.value.doctorPassword,
      department:data.value.doctorDepartment

    }
    const reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.onloadend = () => {
      this.docService.docSignUp(user,reader.result as string).subscribe(
        (response)=>{
          if(response.ok){
            this.router.navigate(['/doctor/signIn']);
            this.toast.success('Registration success please wait for verification');
          }else{
            this.toast.error(response.message);
          }
          this.loader=false;
        },
        ()=>this.loader=false
      )
    };
    }catch(err){
      this.loader=false;
    }
  } 
}
