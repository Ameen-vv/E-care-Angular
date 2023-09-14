import { Component, OnInit,OnDestroy } from '@angular/core';
import { DoctorModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit,OnDestroy {
  doctors: DoctorModel[] = [];
  loader: boolean = false;
  getDocSub!: Subscription;
  paramsSub!:Subscription;
  depId: string = '';

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.paramsSub =  route.queryParams.subscribe((param) => {
      param['depId'] && (this.depId = param['depId']);
    });
  }

  ngOnInit(): void {
    this.getDoctors('');
  }

  ngOnDestroy(): void {
      this.getDocSub.unsubscribe();
      this.paramsSub.unsubscribe();
  }

  getDoctors(searchText: string) {
    this.loader = true;
    this.getDocSub = this.userService
      .getDoctors(this.depId, searchText)
      .subscribe((response) => {
        this.doctors = response.data;
        this.loader = false;
      },()=>this.loader = false);
  }

  onSearch(text: string) {
   this.getDoctors(text);
  }
}
