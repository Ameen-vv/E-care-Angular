import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Subscription } from 'rxjs';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnDestroy {
  doctor!: DoctorModel;
  paramsSub:Subscription;

  constructor(
    private route: ActivatedRoute,
    private toast: HotToastService,
    private router: Router
  ) {

  this.paramsSub = this.route.paramMap.subscribe((params) => {
      const state = history.state;
      if (state) {
        this.doctor = state;
      } else {
        this.toast.error('something wrong');
        history.back;
      }
    });
  }

  ngOnDestroy(): void {
      this.paramsSub.unsubscribe();
  }

  goToBooking(){
    this.router.navigate(['/user/book'],{state:this.doctor});
  }
}
