import { Component,Input } from '@angular/core';
import { AppointmentModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
 @Input() history!:AppointmentModel[];
}
