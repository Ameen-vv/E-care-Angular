import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAuthFormComponent } from './doctor-auth-form.component';

describe('DoctorAuthFormComponent', () => {
  let component: DoctorAuthFormComponent;
  let fixture: ComponentFixture<DoctorAuthFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorAuthFormComponent]
    });
    fixture = TestBed.createComponent(DoctorAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
