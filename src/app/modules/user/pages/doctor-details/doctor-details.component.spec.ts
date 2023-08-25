import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailsComponent } from './doctor-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoctorDetailsComponent', () => {
  let component: DoctorDetailsComponent;
  let fixture: ComponentFixture<DoctorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorDetailsComponent],
      imports:[RouterTestingModule]
    });
    fixture = TestBed.createComponent(DoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
