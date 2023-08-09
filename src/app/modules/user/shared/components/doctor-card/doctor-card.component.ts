import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent {
    @Input() doctor!:DoctorModel;

    constructor(private router : Router){}

    getDrDetails(id:string):void{
        this.router.navigate(['/user/doctorDetails',id],{state:this.doctor});
    }
}
