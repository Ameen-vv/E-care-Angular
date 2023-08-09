import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent {
  doctor!: DoctorModel;

  constructor(
    private route: ActivatedRoute,
    private toast: HotToastService
  ) {
    this.route.paramMap.subscribe((params) => {
      const state = history.state;
      if (state) {
        this.doctor = state;
      } else {
        this.toast.error('something wrong');
        history.back;
      }
    });
  }
}
