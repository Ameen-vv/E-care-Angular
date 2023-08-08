import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserRegister, UserSignIn } from '../../core/models/userModels';
import { HotToastService } from '@ngneat/hot-toast'
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  authForm!: FormGroup;
  loader: boolean = false;
  authType: 'signUp' | 'otp' = 'signUp';
  private user!: UserRegister;

  constructor(private formBuilder: FormBuilder,
    private toast: HotToastService,
    private userService: UserService,
    private router: Router) {
    this.authForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required, this.phoneValidator])],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
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

  getOtp(user: UserRegister) {
    if (user.confirmPass === user.password) {
      delete user.confirmPass;
      this.user = user;
      this.loader = true;
      this.userService.getOtp(user.email).subscribe(
        (response) => {
          response.ok ? (this.authType = 'otp') :
            this.toast.error(response.message);
          this.loader = false;
        },
        () => {
          this.loader = false;
        }
      )
    } else {
      this.toast.error("passwords does'nt match");
    };
  }

  verifyOtpAndSignUp(otp: string) {
    this.loader = true;
    this.userService.verifyOtpAndSignUp(this.user, otp).subscribe(
      (response) => {
        response.ok ? this.router.navigate(['/user/signIn']) :
          this.toast.error(response.message);
        this.loader = false;
      },
      () => {
        this.loader = false;
      },
    )
  };

  resendOtp(){
    this.userService.resendOtp(this.user.email).subscribe(
      (response)=>{
        response.ok ? this.toast.success(`new otp has send to ${this.user.email}`) :
        this.toast.error('something went wrong');
      }
    )
  }

}
