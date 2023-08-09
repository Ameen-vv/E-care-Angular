import { Component } from '@angular/core';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss']
})
export class DepartmentPageComponent {
  departments = [
    {
      _id: '1',
      name: 'Cardiology',
      imageUrl: 'https://example.com/cardiology.jpg',
      commonDiseases: ['Heart Disease', 'Arrhythmia', 'Hypertension'],
    },
    {
      _id: '2',
      name: 'Dermatology',
      imageUrl: 'https://example.com/dermatology.jpg',
      commonDiseases: ['Acne', 'Eczema', 'Psoriasis'],
    },
    {
      _id: '2',
      name: 'Dermatology',
      imageUrl: 'https://example.com/dermatology.jpg',
      commonDiseases: ['Acne', 'Eczema', 'Psoriasis'],
    },
    {
      _id: '2',
      name: 'Dermatology',
      imageUrl: 'https://example.com/dermatology.jpg',
      commonDiseases: ['Acne', 'Eczema', 'Psoriasis'],
    },
    {
      _id: '2',
      name: 'Dermatology',
      imageUrl: 'https://example.com/dermatology.jpg',
      commonDiseases: ['Acne', 'Eczema', 'Psoriasis'],
    },
  ]
  searchText:string = '';

  onSearch(searchText:string):void{
    console.log(searchText);
  }
  
}
