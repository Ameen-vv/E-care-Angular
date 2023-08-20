import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  AppointmentModel,
  DocTimings,
  DoctorModel,
} from 'src/app/core/Models/CommonModels';
import { DoctorService } from '../../core/services/doctor.service';
import { Subscription } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss'],
})
export class DoctorProfileComponent implements OnInit, OnDestroy {
  loader = false;
  page: 'appointments' | 'timings' = 'timings';
  doctor!: DoctorModel;
  appointments: AppointmentModel[] = [];
  cancelSub!: Subscription;
  visitedSub!: Subscription;
  unVisitedSub!: Subscription;
  addTimeSub!: Subscription;
  delTimeSub!: Subscription;

  constructor(
    private docService: DoctorService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProfile();
    this.getAppointments();
  }

  ngOnDestroy(): void {
    this.visitedSub?.unsubscribe();
    this.unVisitedSub?.unsubscribe();
    this.cancelSub?.unsubscribe();
    this.addTimeSub?.unsubscribe();
    this.delTimeSub?.unsubscribe();
  }

  getProfile(): void {
    this.docService.getProfile().subscribe((response) => {
      this.doctor = response.data;
    });
  }

  getAppointments(): void {
    this.docService.getAppointments().subscribe((response) => {
      this.appointments = response.data;
    });
  }

  logOut() {
    localStorage.removeItem('doctorToken');
    this.router.navigate(['/doctor/signIn']);
  }

  changePage(page: 'appointments' | 'timings') {
    this.page = page;
  }

  cancelAppointment(id: string) {
    this.cancelSub = this.docService
      .cancelAppointment(id)
      .subscribe((response) => {
        if (response.ok) {
          this.toast.success('Done');
          this.getAppointments();
        }
      });
  }

  visitAppointment(id: string) {
    this.visitedSub = this.docService
      .visitAppointment(id)
      .subscribe((response) => {
        if (response.ok) {
          this.toast.success('Done');
          this.getAppointments();
        }
      });
  }

  unVisitAppointment(id: string) {
    this.visitedSub = this.docService
      .unVisitAppointment(id)
      .subscribe((response) => {
        if (response.ok) {
          this.toast.success('Done');
          this.getAppointments();
        }
      });
  }

  addTime(time: DocTimings) {
    this.addTimeSub = this.docService.addTime(time).subscribe((response) => {
      if (response.ok) {
        this.toast.success('Slots added');
        this.getProfile();
      } else {
        this.toast.warning(response.message);
      }
    });
  }

  delTime(time: DocTimings) {
    this.delTimeSub = this.docService.deleteTime(time).subscribe((response) => {
      if (response.ok) {
        this.getProfile();
        this.toast.success('Slot Deleted');
      } else {
        this.toast.error(response.message);
      }
    });
  }
}
