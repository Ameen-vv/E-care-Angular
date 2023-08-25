import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepSectionHomeComponent } from './dep-section-home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

describe('DepSectionHomeComponent', () => {
  let component: DepSectionHomeComponent;
  let fixture: ComponentFixture<DepSectionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepSectionHomeComponent,LoaderComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(DepSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
