import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTimingsComponent } from './doctor-timings.component';
import { FormsModule } from '@angular/forms';

describe('DoctorTimingsComponent', () => {
  let component: DoctorTimingsComponent;
  let fixture: ComponentFixture<DoctorTimingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorTimingsComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(DoctorTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
