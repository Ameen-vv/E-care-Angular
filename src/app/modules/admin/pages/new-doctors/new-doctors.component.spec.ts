import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoctorsComponent } from './new-doctors.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewDoctorsComponent', () => {
  let component: NewDoctorsComponent;
  let fixture: ComponentFixture<NewDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDoctorsComponent,DataTableComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(NewDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
