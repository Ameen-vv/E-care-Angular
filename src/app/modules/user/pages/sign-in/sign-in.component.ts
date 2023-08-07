import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { UserSignIn } from '../../core/models/userModels';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  authForm!:FormGroup;
  loader:boolean = false;

  constructor(private formBuilder : FormBuilder){
    this.authForm = formBuilder.group({
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required],
    })
  }

  signIn(user:UserSignIn){
    console.log(user)
  }
}
