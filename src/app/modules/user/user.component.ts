import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavList } from 'src/app/core/Models/CommonModels';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit  {
  navList:NavList[] = [
    {
      name:"Home",
      path:"/user/home"
    },
    {
      name:"Departments",
      path:'/user/departments'
    },
    {
      name:"Doctors",
      path:"/user/doctors"
    },
    {
      name:"Wallet",
      path:"/user/wallet"
    }
  ]
  constructor(private router : Router,private userService : UserService){
  }

  userCheck():boolean{
    return this.userService.checkUserToken();
  }

  goToProfile():void{
    this.router.navigate(['/user/profile']);
  }

  ngOnInit(): void {
    if(this.router.url === '/user' || this.router.url === '/user/'){
      this.router.navigate(['/user/home'])
    }
  }
  
}
