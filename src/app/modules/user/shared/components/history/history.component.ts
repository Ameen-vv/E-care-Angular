import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  history = [
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
   { _id: 1, doctorId: { fullName: 'Dr. John Doe' }, date: '2023-08-09', slot: '10:00 AM', createdAt: '2023-08-01', status: 'visited' },
  ];
}
