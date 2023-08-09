import { Component, Input } from '@angular/core';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent {
    @Input() doctor!:DoctorModel;
}
