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

  blockDoc(id:string):void{
    this.adminService.blockDoc(id).subscribe(
      ()=>this.getDoctors()
    )
  }

  unBlockDoc(id:string):void{
    this.adminService.unBlockDoc(id).subscribe(
      ()=>this.getDoctors()
    )
  }
}
