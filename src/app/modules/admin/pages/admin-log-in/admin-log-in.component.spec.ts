import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogInComponent } from './admin-log-in.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AdminLogInComponent', () => {
  let component: AdminLogInComponent;
  let fixture: ComponentFixture<AdminLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLogInComponent],
      imports:[SharedModule]
    });
    fixture = TestBed.createComponent(AdminLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
