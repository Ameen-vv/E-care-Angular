import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTableComponent } from './department-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';

describe('DepartmentTableComponent', () => {
  let component: DepartmentTableComponent;
  let fixture: ComponentFixture<DepartmentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentTableComponent,DataTableComponent],
      imports:[SharedModule]
    });
    fixture = TestBed.createComponent(DepartmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
