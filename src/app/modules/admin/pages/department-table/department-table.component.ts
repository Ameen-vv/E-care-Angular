import { Component,OnInit } from '@angular/core';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss']
})
export class DepartmentTableComponent implements OnInit {
  departments!:DepModel[];

  constructor(private adminService : AdminService){};

  ngOnInit(): void {
      this.getDep()
  }

  getDep():void{
    this.adminService.getDep().subscribe(
      (response)=>{
        this.departments = response.data;
      }
    )
  }

  listDep(id:string):void{
    this.adminService.listDep(id).subscribe(
      ()=>this.getDep()
    )
  }

  unListDep(id:string):void{
    this.adminService.unListDep(id).subscribe(
      ()=>this.getDep()
    )
  }

}
