import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: `./carousel.html`,
})
export class CarouselComponent {
  items = [1, 2, 3, 4, 5];
}