import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fakeAsync,flush } from '@angular/core/testing';
import { DepartmentPageComponent } from './department-page.component';
import { UserService } from '../../core/services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { mockDepartments } from 'src/app/testing/mockDatas/mockDatas';
import { DepartmentCardComponent } from '../../shared/components/department-card/department-card.component';

describe('DepartmentPageComponent', () => {
  let component: DepartmentPageComponent;
  let fixture: ComponentFixture<DepartmentPageComponent>;
  let userService:jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService',['getAllDepartments'])
    TestBed.configureTestingModule({
      declarations: [DepartmentPageComponent,SearchBarComponent,LoaderComponent,DepartmentCardComponent],
      imports:[HttpClientTestingModule,FormsModule],
      providers:[{provide:UserService,useValue:userServiceSpy}] 
     
    });
    fixture = TestBed.createComponent(DepartmentPageComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get department data on loading',fakeAsync(()=>{
    userService.getAllDepartments.and.returnValue(of({data:mockDepartments,count:mockDepartments.length}))
    component.getDeps('');
    flush()
    fixture.detectChanges()
    expect(component.departments.length).toBeGreaterThan(0);
  }))
});
