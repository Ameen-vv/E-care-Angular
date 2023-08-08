import { Component,Input,Output,EventEmitter,OnInit,OnDestroy,OnChanges,SimpleChanges } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { UserRegister } from '../../../core/models/userModels';


@Component({
  selector: 'app-user-auth-form',
  templateUrl: './user-auth-form.component.html',
  styleUrls: ['./user-auth-form.component.scss']
})
export class UserAuthFormComponent implements OnDestroy,OnChanges {

  @Input() formType!: 'signUp' | 'signIn' | 'otp';
  @Input() loader:boolean = false;
  @Input() title:string = '';
  @Input() formTemplate!:FormGroup;
  @Output() formSubmit = new EventEmitter();
  @Output() verifyOtp = new EventEmitter<string>();
  @Output() resendOtp = new EventEmitter();
  otp!:string;
  otpTimer:number = 30;
  interval!:any;

  
  ngOnChanges(changes: SimpleChanges): void {
    if ('formType' in changes ) {
      if (this.formType === 'otp') {
        this.startOtpTimer();
      }else {
        this.stopOtpTimer();
      }
    }
  };


  ngOnDestroy(): void {
    this.startOtpTimer();  
  };

 
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
    this.otpTimer = 30;
    this.verifyOtp.emit(this.otp);
  };


  onOtpResend():void{
    this.startOtpTimer()
    this.resendOtp.emit();
  };


  otpTimerSet():void{
    if (this.otpTimer <= 0) {
      clearInterval(this.interval);
    }else{
      this.otpTimer--;
    }
  };


  startOtpTimer(): void {
    this.otpTimer = 30;
    this.interval = setInterval(() => this.otpTimerSet(), 1000);
  };


  stopOtpTimer(): void {
    this.interval && clearInterval(this.interval);
  };
}
