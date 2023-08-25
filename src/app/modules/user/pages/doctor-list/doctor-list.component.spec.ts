import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListComponent } from './doctor-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

describe('DoctorListComponent', () => {
  let component: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorListComponent,SearchBarComponent],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule]
    });
    fixture = TestBed.createComponent(DoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
