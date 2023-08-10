import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavList } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() navList!:NavList[];
  @Input() userLogged!:boolean;
  @Output() logInButton : EventEmitter<void> = new EventEmitter();
  @Output() registerButton : EventEmitter<void> = new EventEmitter();
  @Output() navigateProfile : EventEmitter<void> = new EventEmitter();
  sideBar:boolean = false;


  setSideBar():void{ 
    this.sideBar = !this.sideBar;
  };

  clickLogIn():void{
    this.logInButton.emit();
  };

  clickRegister():void{
    this.logInButton.emit();
  }

  goToProfile():void{
    this.navigateProfile.emit();
  }


}
