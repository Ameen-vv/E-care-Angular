import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { UserRegister } from '../../core/models/userModels';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  authForm!:FormGroup;
  loader:boolean = false;

  constructor(private formBuilder : FormBuilder){
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
    console.log('ad')
    console.log(user);
  }

  

}
