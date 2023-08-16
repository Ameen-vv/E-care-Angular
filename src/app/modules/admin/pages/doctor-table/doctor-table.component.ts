import { Component,OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.scss']
})
export class DoctorTableComponent implements OnInit {
  
  doctors!:DoctorModel[];
  
  constructor(private adminService : AdminService){};

  ngOnInit(): void {
      this.getDoctors()
  }

  getDoctors():void{
    this.adminService.getDoctors().subscribe((response)=>{
      this.doctors = response.data;
    })
  }
}
