import { ComponentFixture, TestBed } from '@angular/core/testing';
import {tablerStethoscope,tablerActivityHeartbeat,tablerLogout,tablerPlus} from '@ng-icons/tabler-icons';

import { AdminNavComponent } from './admin-nav.component';
import { NgIconsModule } from '@ng-icons/core';

describe('AdminNavComponent', () => {
  let component: AdminNavComponent;
  let fixture: ComponentFixture<AdminNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavComponent],
      imports:[NgIconsModule.withIcons({tablerStethoscope,tablerActivityHeartbeat,tablerLogout,tablerPlus})]
    });
    
    fixture = TestBed.createComponent(AdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
