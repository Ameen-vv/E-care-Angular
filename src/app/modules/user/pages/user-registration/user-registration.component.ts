import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { UserRegister, UserSignIn } from '../../core/models/userModels';
import {HotToastService} from '@ngneat/hot-toast'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  authForm!:FormGroup;
  loader:boolean = false;
  authType:'signUp' | 'otp' = 'signUp';
  private user!:UserRegister;

  constructor(private formBuilder : FormBuilder,private toast : HotToastService){
    this.authForm = formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])],
      phone:['',Validators.compose([Validators.required,this.phoneValidator])],
      dob:['',Validators.required],
      address:['',Validators.required],
      password:['',Validators.required],
      confirmPass:['',Validators.required]
    })
  }

  phoneValidator(control: AbstractControl): { [key: string]: any } | null {
    const validPhoneNumber = /^\d{10}$/; 
    const value = control.value;
    if (!value || validPhoneNumber.test(value)) {
      return null; 
    }
    return { invalidPhone: true };
  }

  signUp(user:UserRegister){
    if(user.confirmPass === user.password){
      this.user = user;
      this.authType = 'otp';
    }else{
      this.toast.error("passwords does'nt match");
    };
  }

  verifyOtp(otp:string){
    console.log(otp);
  };

  

}
