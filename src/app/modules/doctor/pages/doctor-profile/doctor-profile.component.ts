import { Component,OnInit } from '@angular/core';
import { AppointmentModel, DoctorModel } from 'src/app/core/Models/CommonModels';
import { DoctorService } from '../../core/services/doctor.service';

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

  constructor(private docService : DoctorService){};

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

  cancelAppointment(appointmentId: number) {
    // Implement cancel appointment functionality
  }
}
