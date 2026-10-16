import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: `./carousel.html`,
})
export class CarouselComponent {
  items = ["./images/banner.png","./images/banner2.jpg","./images/banner1.jpg","./images/banner3.jpg"];
}