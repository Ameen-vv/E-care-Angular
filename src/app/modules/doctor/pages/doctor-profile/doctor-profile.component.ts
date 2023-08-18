import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent {
  loader = false;
  page = 'appointments'; // or 'history'

  user = {
    fullName: 'John Doe',
    profilePic: 'https://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png',
    address: '123 Main St, City',
    email: 'john@example.com',
    phone: '123-456-7890'
  };

  history = [
    { id: 1, title: 'Appointment 1', date: '2023-08-18' },
    { id: 2, title: 'Appointment 2', date: '2023-08-19' }
  ];

  appointments = [
    { id: 1, title: 'Appointment 3', date: '2023-08-20' },
    { id: 2, title: 'Appointment 4', date: '2023-08-21' }
  ];

  logOut() {
    // Implement logout functionality
  }

  changePage(page: string) {
    this.page = page;
  }

  cancelAppointment(appointmentId: number) {
    // Implement cancel appointment functionality
  }
}
