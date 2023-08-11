import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppointmentModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {
  @Input() appointments!:AppointmentModel[];
  @Output() onCancel = new EventEmitter<string>();

  onClick(id:string):void{
    this.onCancel.emit(id);
  }
}
