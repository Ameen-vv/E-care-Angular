import { Component,OnInit } from '@angular/core';
import { AppointmentModel, DoctorModel } from 'src/app/core/Models/CommonModels';
import { DoctorService } from '../../core/services/doctor.service';
import { Subscription } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  loader = false;
  page: 'appointments' | 'timings' = 'appointments';
  doctor!:DoctorModel;
  appointments:AppointmentModel[] = [];
  cancelSub!:Subscription;
  visitedSub!:Subscription;
  unVisitedSub!:Subscription;

  constructor(private docService : DoctorService,private toast : HotToastService){};

  ngOnInit(): void {
    this.getProfile();
    this.getAppointments();
  } 
  
  getProfile():void{
    this.docService.getProfile().subscribe(
      (response)=>{
        this.doctor = response.data;
      }
    )
  }

  getAppointments():void{
    this.docService.getAppointments().subscribe(
      (response)=>{
        this.appointments = response.data;
      }
    )
  }


  logOut() {
    // Implement logout functionality
  }

  changePage(page: 'appointments' | 'timings') {
    this.page = page;
  }

  cancelAppointment(id: string) {
    this.cancelSub = this.docService.cancelAppointment(id).subscribe(
      (response)=>{
        response.ok && this.toast.success('Done');
        response.ok && this.getAppointments();
      }
     ) 
  }

  visitAppointment(id:string){
    this.visitedSub = this.docService.visitAppointment(id).subscribe(
      (response)=>{
        response.ok && this.toast.success("Done");
        response.ok && this.getAppointments();
      }
    )
  }
  
  unVisitAppointment(id:string){
    this.visitedSub = this.docService.unVisitAppointment(id).subscribe(
      (response)=>{
        response.ok && this.toast.success("Done");
        response.ok && this.getAppointments();
      }
    )
  }


}
