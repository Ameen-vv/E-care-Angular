import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTableComponent } from './doctor-table.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DoctorTableComponent', () => {
  let component: DoctorTableComponent;
  let fixture: ComponentFixture<DoctorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorTableComponent,DataTableComponent],
      imports:[SharedModule]
    });
    fixture = TestBed.createComponent(DoctorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
