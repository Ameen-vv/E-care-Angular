import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DocTimings, DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent {
  doctor!: DoctorModel;
  date!: Date | null;
  day!: string;
  time!: DocTimings[];
  isOpen: boolean = false;
  price!: string;
  appointmentId!: string;
  loading: boolean = false;
  selectedSlot!: string;

  appointmentForm!: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.doctor = history.state;
  }

  handleDay(): void {
    if (this.date) {
      const dateObject = new Date(this.date);
      const dayOfWeek = dateObject.toLocaleDateString('en-US', {
        weekday: 'short',
      });
      switch (dayOfWeek) {
        case 'Sun':
          this.day = 'sunday';
          break;
        case 'Mon':
          this.day = 'monday';
          break;
        case 'Tue':
          this.day = 'tuesday';
          break;
        case 'Wed':
          this.day = 'wednesday';
          break;
        case 'Thu':
          this.day = 'thursday';
          break;
        case 'Fri':
          this.day = 'friday';
          break;
        case 'Sat':
          this.day = 'saturday';
          break;
        default:
          break;
      }
    }
    this.time = this.doctor.timings.filter((item) => item.day === this.day);
  }

  handleDateChange() {
    this.handleDay();
    this.selectedSlot = '';
  }

  handleSubmit(){
    if(this.date && this.selectedSlot){
      this.isOpen = true;
    }
  }

  cancel(){
    this.isOpen = false;
    this.date = null;
    this.selectedSlot = '';
  }
}
