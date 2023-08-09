import { Component } from '@angular/core';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent {
    doctors:DoctorModel[]=[];
    loader:boolean = false;

    onSearch(text:string){
      console.log(text)
    }
}
