import { Component,Output,Input,EventEmitter } from '@angular/core';
import { AppointmentModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  @Output() onVisited = new EventEmitter();
  @Output() onUnVisited = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Input() appointments!: AppointmentModel[];

  

  appointmentVisited(appointmentId: string): void {
    this.onVisited.emit(appointmentId);
  }

  appointmentUnVisited(appointmentId: string): void {
    this.onUnVisited.emit(appointmentId);
  }

  appointmentCancel(appointmentId: string): void {
    this.onCancel.emit(appointmentId);
  }
}
