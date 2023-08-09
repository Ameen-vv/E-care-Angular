import { Component, OnInit } from '@angular/core';
import { DepModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss'],
})
export class DepartmentPageComponent implements OnInit {
  departments!: DepModel[];
  searchText: string = '';
  loader: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getDeps(this.searchText);
  }

  getDeps(text: string) {
    this.loader = true;
    this.userService.getAllDepartments(text).subscribe(
      (response) => {
        this.departments = response.data;
        this.loader = false;
      },
      () => {
        this.loader = false;
      }
    );
  }

  onSearch(searchText: string): void {}
}
