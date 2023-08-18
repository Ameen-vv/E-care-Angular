import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../../core/services/doctor.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm: FormGroup;
  loader: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private docService: DoctorService,
    private toast: HotToastService,
    private router: Router
  ) {
    this.signInForm = formBuilder.group({
      doctorEmail: ['', [Validators.required, Validators.email]],
      doctorPassword: ['', Validators.required],
    });
  }

  signIn(data: FormGroup) {
    this.loader = true;
    const email: string = data.value.doctorEmail;
    const password: string = data.value.doctorPassword;
    this.docService.docSignIn(email, password).subscribe(
      (res) => {
        if (res.ok) {
          this.router.navigate(['/doctor']);
          res.token && localStorage.setItem('doctorToken', res.token);
        } else {
          this.toast.error(res.message);
        }
        this.loader = false;
      },
      () => {
        this.loader = false;
      }
    );
  }
}
