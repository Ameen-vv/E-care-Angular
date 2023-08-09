import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DepModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-department-card',
  templateUrl: './department-card.component.html',
  styleUrls: ['./department-card.component.scss']
})
export class DepartmentCardComponent {
  @Input() department !: DepModel  ;

  constructor(private router : Router){}

  getDr(id:string){
    this.router.navigate(['/user/doctors'],{queryParams:{depId:id}});
  }
}
