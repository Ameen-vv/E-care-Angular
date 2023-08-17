import { Component,OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/Models/CommonModels';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit{
  
  users!:UserModel[];
  
  constructor(private adminService : AdminService){};

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers():void{
    this.adminService.getUsers().subscribe(
      (response)=>{
        this.users = response.data;
      }
    )
  }

  blockUser(id:string):void{
    this.adminService.blockUser(id).subscribe(()=>{
      this.getUsers();
    });
  }

  unBlockUser(id:string):void{
    this.adminService.unBlockUser(id).subscribe(()=>{
      this.getUsers();
    })
  }

}
