import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../../core/services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

interface Department {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-dep-section-home',
  templateUrl: './dep-section-home.component.html',
  styleUrls: ['./dep-section-home.component.scss'],
})
export class DepSectionHomeComponent implements OnInit,OnDestroy {
  loading: boolean = false;
  departments!: DepModel[];
  selectedDep: number = 0;
  private userService = inject(UserService);
  private router = inject(Router);
  getTopDepSub!: Subscription;

  ngOnInit(): void {
    this.loading = true;
    this.getTopDepSub = this.userService.getTopDep().subscribe((response) => {
      this.departments = response.data.slice(0, 5);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
      this.getTopDepSub?.unsubscribe();
  }  

  depChange(index: number): void {
    this.selectedDep = index;
  }

  findDr(id:string):void{
    this.router.navigate(['/user/doctors'],{queryParams:{depId:id}});
  }
}
