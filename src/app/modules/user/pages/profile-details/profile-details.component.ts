import { Component, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentModel, UserModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../core/services/user.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  user!: UserModel;
  getUserSub!: Subscription;
  page: 'history' | 'appointments' | 'editProfile' = 'appointments';
  loader: boolean = false;
  appointments:AppointmentModel[] = [];
  history:AppointmentModel[] = [];
  getApmntSub!:Subscription;
  cancelApmntSub!:Subscription;

  private userService = inject(UserService);
  private toast = inject(HotToastService);

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


  changePage(name:'history' | 'appointments' | 'editProfile'):void{
    this.page = name;
  }

  getAppointments():void{
    this.getApmntSub = this.userService.getAppointments().subscribe(
      (response) => {
        this.appointments = response.data.filter(item => item.status === 'booked');
        this.history = response.data?.filter(item =>item.status !== 'booked');
      }
    )
  }
  
  cancelAppointment(id:string):void{
   this.cancelApmntSub = this.userService.cancelAppointment(id).subscribe(
      (response)=>{
        response.ok ? this.toast.success('Appointment Cancelled') :
        this.toast.error('Something Went Wrong');
        this.getAppointments();
      }
      )
  }


  
}
