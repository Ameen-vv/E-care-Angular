import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { DepSectionHomeComponent } from '../../shared/components/dep-section-home/dep-section-home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent,HeroSectionComponent,DepSectionHomeComponent,LoaderComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
