import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPageComponent } from './department-page.component';
import { UserService } from '../../core/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DepartmentPageComponent', () => {
  let component: DepartmentPageComponent;
  let fixture: ComponentFixture<DepartmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentPageComponent,SearchBarComponent,LoaderComponent,],
      imports:[HttpClientTestingModule,FormsModule]
     
    });
    fixture = TestBed.createComponent(DepartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
