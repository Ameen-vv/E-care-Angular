import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileComponent } from './doctor-profile.component';
import { DoctorModel } from 'src/app/core/Models/CommonModels';
import { DoctorService } from '../../core/services/doctor.service';
import { of } from 'rxjs';
import { mockDoctor } from 'src/app/testing/mockDatas/mockDatas';


describe('DoctorProfileComponent', () => {
  let component: DoctorProfileComponent;
  let fixture: ComponentFixture<DoctorProfileComponent>;
  let docServiceStub:any;
  
  

  beforeEach(async() => {

    docServiceStub={
      getProfile:()=>(of({date:mockDoctor}))
    };
    await TestBed.configureTestingModule({
      declarations: [DoctorProfileComponent],
      providers:[{provide:DoctorService,useValue:docServiceStub}]

    }).compileComponents()
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(DoctorProfileComponent);
    component = fixture.componentInstance;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

});
