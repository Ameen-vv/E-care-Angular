import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { AdminNavComponent } from './shared/components/admin-nav/admin-nav.component';
import { AdminRoutingModule } from './admin-routing.module';
import { Router } from '@angular/router';

describe('AdminComponent', () => {
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent,AdminNavComponent],
      imports:[AdminRoutingModule],
      providers:[AdminComponent]
    });
    
  });

  it('should create', () => {
    const component:AdminComponent = TestBed.inject(AdminComponent); 
    expect(component).toBeTruthy();
  });
});
