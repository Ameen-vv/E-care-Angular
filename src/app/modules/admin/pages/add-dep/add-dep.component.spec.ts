import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepComponent } from './add-dep.component';

describe('AddDepComponent', () => {
  let component: AddDepComponent;
  let fixture: ComponentFixture<AddDepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDepComponent]
    });
    fixture = TestBed.createComponent(AddDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
