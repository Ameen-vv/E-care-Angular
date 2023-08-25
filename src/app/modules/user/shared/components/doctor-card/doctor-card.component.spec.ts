import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { DoctorCardComponent } from './doctor-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorModel } from 'src/app/core/Models/CommonModels';
import { mockDoctor } from 'src/app/testing/mockDatas/mockDatas';
import { By } from '@angular/platform-browser';

describe('DoctorCardComponent', () => {
  let component: DoctorCardComponent;
  let fixture: ComponentFixture<DoctorCardComponent>;
  let el:DebugElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [DoctorCardComponent],
      imports:[RouterTestingModule],
      
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(DoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy();
  });

  // it('should have correct elements',()=>{
  //   let tElements = el.queryAll(By.css('test'));

  // })

});
