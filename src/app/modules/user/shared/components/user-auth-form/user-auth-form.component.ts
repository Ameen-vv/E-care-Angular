import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister, UserSignIn } from '../../../core/models/userModels';


@Component({
  selector: 'app-user-auth-form',
  templateUrl: './user-auth-form.component.html',
  styleUrls: ['./user-auth-form.component.scss']
})
export class UserAuthFormComponent {
  @Input() formType!: 'signUp' | 'signIn' | 'otp';
  @Input() loader:boolean = false;
  @Input() title:string = '';
  @Input() formTemplate!:FormGroup;
  @Output() formSubmit = new EventEmitter();
  @Output() verifyOtp = new EventEmitter<string>();
  otp!:string;


  onSubmit(): void {
    if (this.formType === 'signUp') {
      if (this.formTemplate.valid) {
        let user: UserRegister = {
          fullName: this.formTemplate.value.name,
          email: this.formTemplate.value.email,
          password: this.formTemplate.value.password,
          phone:this.formTemplate.value.phone,
          dateOfBirth:this.formTemplate.value.dob,
          address:this.formTemplate.value.address,
          confirmPass: this.formTemplate.value.confirmPass
        };
        this.formSubmit.emit(user);
      }
    } else if (this.formType === 'signIn') {
      if (this.formTemplate.valid) {
        this.formSubmit.emit({
          email: this.formTemplate.value.email,
          password: this.formTemplate.value.password,
        });
      }
    }
  }
  onOtpSubmit():void{
    this.verifyOtp.emit(this.otp);
  };
}
