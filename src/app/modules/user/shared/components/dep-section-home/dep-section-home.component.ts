import { Component } from '@angular/core';

interface Department {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-dep-section-home',
  templateUrl: './dep-section-home.component.html',
  styleUrls: ['./dep-section-home.component.scss']
})
export class DepSectionHomeComponent {
  loading = false;
  selectedDepartment: Department | undefined;
  departments: Department[] = [];


  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.departments = [
        {
          _id: '1',
          name: 'Department 1',
          imageUrl: 'image-url-1',
          description: 'Description for Department 1'
        },
        {
          _id: '2',
          name: 'Department 2',
          imageUrl: 'image-url-2',
          description: 'Description for Department 2'
        },
        // ... Add more dummy data entries here
      ];
      this.selectedDepartment = this.departments[0];
      this.loading = false;
    }, 1000); // Simulated delay
  }

  handleDepartmentClick(department: Department): void {
    this.selectedDepartment = department;
  }

  

}
