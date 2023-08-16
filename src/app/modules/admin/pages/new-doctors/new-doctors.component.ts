import { Component,OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/core/Models/CommonModels';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-new-doctors',
  templateUrl: './new-doctors.component.html',
  styleUrls: ['./new-doctors.component.scss']
})
export class NewDoctorsComponent implements OnInit {
  doctors!:DoctorModel[];

  constructor(private adminService : AdminService){};

  ngOnInit(): void {
      this.getDoctors();
  }

  getDoctors():void{
    this.adminService.getNewDocs().subscribe(
      (response)=>{
        this.doctors = response.data
      }
    )
  }

  approveDoc(id:string):void{
    this.adminService.approveDoc(id).subscribe(
      ()=>this.getDoctors()
    )
  }

  rejectDoc(id:string):void{
    this.adminService.rejectDoc(id).subscribe(
      ()=>this.getDoctors()
    )
  }

}
