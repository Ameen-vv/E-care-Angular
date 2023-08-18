import { Component,Output,Input,EventEmitter } from '@angular/core';
import { AppointmentModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  @Output() visited = new EventEmitter();
  @Output() unVisited = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() appointments!: AppointmentModel[];

  

  appointmentVisited(appointmentId: string): void {
    this.visited.emit(appointmentId);
  }

  appointmentUnVisited(appointmentId: string): void {
    this.unVisited.emit(appointmentId);
  }

  appointmentCancel(appointmentId: string): void {
    this.cancel.emit(appointmentId);
  }
}
