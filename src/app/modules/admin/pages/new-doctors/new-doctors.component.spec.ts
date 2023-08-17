import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoctorsComponent } from './new-doctors.component';

describe('NewDoctorsComponent', () => {
  let component: NewDoctorsComponent;
  let fixture: ComponentFixture<NewDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDoctorsComponent]
    });
    fixture = TestBed.createComponent(NewDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
