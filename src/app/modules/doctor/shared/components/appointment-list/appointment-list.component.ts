import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  date: string = '';
  appointments: any[] = [];  // Replace with your actual appointment data type

  setDate(newDate: string): void {
    this.date = newDate;
    // Implement your logic to filter appointments based on the selected date
  }

  clearDate(): void {
    this.date = '';
    // Implement your logic to clear the date filter
  }

  appointmentVisited(appointmentId: string): void {
    // Implement your logic for marking the appointment as visited
  }

  appointmentUnVisited(appointmentId: string): void {
    // Implement your logic for marking the appointment as unvisited
  }

  appointmentCancel(appointmentId: string): void {
    // Implement your logic for canceling the appointment
  }
}
