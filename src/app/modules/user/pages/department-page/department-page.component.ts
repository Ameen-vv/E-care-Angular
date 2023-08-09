import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss'],
})
export class DepartmentPageComponent implements OnInit,OnDestroy {
  departments!: DepModel[];
  searchText: string = '';
  loader: boolean = false;
  getDepartment!:Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getDeps(this.searchText);
  }

  ngOnDestroy(): void {
      this.getDepartment.unsubscribe();
  }

  getDeps(text: string) {
    this.loader = true;
    this.getDepartment = this.userService.getAllDepartments(text).subscribe(
      (response) => {
        this.departments = response.data;
        this.loader = false;
      },
      () => {
        this.loader = false;
      }
    );
  }

  onSearch(text: string): void {
    this.getDeps(text)
  }
}
