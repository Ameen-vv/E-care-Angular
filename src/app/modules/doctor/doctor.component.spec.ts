import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorModule } from './doctor.module';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [DoctorComponent,NavbarComponent,DoctorProfileComponent],
      imports:[DoctorModule,SharedModule]      
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
