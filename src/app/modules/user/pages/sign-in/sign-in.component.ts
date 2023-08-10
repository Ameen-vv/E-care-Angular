import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserSignIn } from '../../core/models/userModels';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  authForm!: FormGroup;
  loader: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toast: HotToastService
  ) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  signIn(user: UserSignIn) {
    this.loader = true;
    this.userService.userSignIn(user).subscribe(
      (response) => {
        if (response.ok) {
          this.router.navigate(['/user/home']);
          response.token && localStorage.setItem('token', response.token);
        } else {
          this.toast.error(response.message);
        }
        this.loader = false;
      },
      () => {
        this.loader = false;
      }
    );
  }
}
