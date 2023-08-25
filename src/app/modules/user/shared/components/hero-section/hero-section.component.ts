import { Component } from '@angular/core';
import { HeroBanner } from '../../../core/models/userModels';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  slideIndex: number = 0;
  playing: boolean = true;

  slides:HeroBanner[] = [
    {
      title: 'Quality Healthcare for Everyone',
      subtitle: 'Experience Compassionate Care with Us',
      image: 'assets/images/Banner.jpg'
    },
    {
      title: 'Patient-Centered Care',
      subtitle: 'Put Your Health and Well-being First',
      image: 'assets/images/Banner2.jpg'
    },
    {
      title: 'Innovative Treatments',
      subtitle: 'Discover the Latest Advances in Medicine',
      image: 'assets/images/Banner3.jpg'
    }
  ];

  private interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.playing) {
        this.slideIndex =
          this.slideIndex === this.slides.length - 1 ? 0 : this.slideIndex + 1;
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  goToPrevSlide(): void {
    this.slideIndex =
      this.slideIndex === 0 ? this.slides.length - 1 : this.slideIndex - 1;
  }

  goToNextSlide(): void {
    this.slideIndex =
      this.slideIndex === this.slides.length - 1 ? 0 : this.slideIndex + 1;
  }
}
