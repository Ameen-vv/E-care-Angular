import { Component, OnInit, inject,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentModel, UserModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../core/services/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit,OnDestroy {
  user!: UserModel;
  getUserSub!: Subscription;
  page: 'history' | 'appointments' | 'editProfile' = 'appointments';
  loader: boolean = false;
  appointments: AppointmentModel[] = [];
  history: AppointmentModel[] = [];
  getApmntSub!: Subscription;
  cancelApmntSub!: Subscription;

  private userService = inject(UserService);
  private toast = inject(HotToastService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loader = true;

    this.getUserSub = this.userService.getUserDetails().subscribe(
      (response) => {
        this.user = response.data;
        this.loader = false;
      },
      () => {
        this.loader = false;
      }
    );

    this.getAppointments();
  }

  ngOnDestroy(): void {
      this.getApmntSub?.unsubscribe();
      this.getUserSub?.unsubscribe();
      this.cancelApmntSub?.unsubscribe();
  }

  changePage(name: 'history' | 'appointments' | 'editProfile'): void {
    this.page = name;
  }

  getAppointments(): void {
    this.getApmntSub = this.userService
      .getAppointments()
      .subscribe((response) => {
        this.appointments = response.data.filter(
          (item) => item.status === 'booked'
        );
        this.history = response.data?.filter(
          (item) => item.status !== 'booked'
        );
      });
  }

  cancelAppointment(id: string): void {
    this.cancelApmntSub = this.userService
      .cancelAppointment(id)
      .subscribe((response) => {
        response.ok
          ? this.toast.success('Appointment Cancelled')
          : this.toast.error('Something Went Wrong');
        this.getAppointments();
      });
  }

  logOut():void{
    localStorage.removeItem('token');
    this.router.navigate(['/user/home'])
  }
}
