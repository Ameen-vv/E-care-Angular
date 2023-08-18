import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { IDocSignUp } from '../../../core/models/Doc.models';

@Component({
  selector: '`app-doctor-auth-form`',
  templateUrl: './doctor-auth-form.component.html',
  styleUrls: ['./doctor-auth-form.component.scss'],
})
export class DoctorAuthFormComponent {
  @Input() formType!: 'signIn' | 'signUp' | 'otp';
  @Input() doctorForm!: FormGroup;
  @Input() departments: DepModel[] = [];
  @Input() loader:boolean = false;
  @Output() submitForm = new EventEmitter();
  image: File | null = null;
  imageErr: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  handleImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.image = target.files[0];
      this.imageErr = false;
    }
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      if (this.formType === 'signUp') {
        if (this.image) {
          this.submitForm.emit({ data: this.doctorForm, image: this.image });
        } else {
          this.imageErr = true;
        }
      } else {
        this.submitForm.emit(this.doctorForm);
      }
    }
  }

  checkImage(): boolean {
    if (this.image) {
      return true;
    }
    return false;
  }
}
