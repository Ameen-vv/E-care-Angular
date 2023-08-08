import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavList } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  navList:NavList[] = [
    {
      name:"Home",
      path:"/user"
    },
    {
      name:"Departments",
      path:'#'
    },
    {
      name:"Doctors",
      path:"#"
    },
    {
      name:"About Us",
      path:"#"
    }
  ]
  constructor(private router : Router){
    router.navigate(['/user/home'])
  }
  
}
