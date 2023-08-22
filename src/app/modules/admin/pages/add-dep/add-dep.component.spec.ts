import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepComponent } from './add-dep.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AddDepComponent', () => {
  let component: AddDepComponent;
  let fixture: ComponentFixture<AddDepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDepComponent],
      imports:[SharedModule]
    });
    fixture = TestBed.createComponent(AddDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
