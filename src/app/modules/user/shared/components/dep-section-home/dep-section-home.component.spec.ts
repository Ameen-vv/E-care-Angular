import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepSectionHomeComponent } from './dep-section-home.component';

describe('DepSectionHomeComponent', () => {
  let component: DepSectionHomeComponent;
  let fixture: ComponentFixture<DepSectionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepSectionHomeComponent]
    });
    fixture = TestBed.createComponent(DepSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
