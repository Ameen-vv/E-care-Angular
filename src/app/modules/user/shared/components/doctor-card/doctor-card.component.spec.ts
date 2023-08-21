import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCardComponent } from './doctor-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorModel } from 'src/app/core/Models/CommonModels';

describe('DoctorCardComponent', () => {
  let component: DoctorCardComponent;
  let fixture: ComponentFixture<DoctorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorCardComponent],
      imports:[RouterTestingModule]
    });
    const mockDoctor: DoctorModel = {
      _id: 'mock-id',
      fullName: 'Mock Doctor',
      phone: '1234567890',
      email: 'mock@example.com',
      dateOfBirth: new Date('1990-01-01'),
      qualification: 'MBBS',
      address: '123 Mock Street',
      hospital: 'Mock Hospital',
      timings: [], // Replace with appropriate values
      verification: 'success',
      block: false,
      department: {
        _id: 'dept-id',
        name: 'Mock Department',
        commonDiseases: ['Mock Disease'],
        imageUrl: 'mock-dept-image.jpg',
        list: true,
        description: 'Description of Mock Department',
        doctors: [],
      },
      licenseUrl: 'mock-license-url',
      bio: 'I am a mock doctor.',
      experience: 5,
      priceOnline: 50,
      priceOffline: 100,
      profilePic: 'mock-profile-pic.jpg',
    };
    TestBed.overrideComponent(DoctorCardComponent,{
      set:{
        providers:[{provide:'doctor',useValue:mockDoctor}]
      }
    })
    
    fixture = TestBed.createComponent(DoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
