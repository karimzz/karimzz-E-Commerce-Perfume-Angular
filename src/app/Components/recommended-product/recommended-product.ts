import { Component, input, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Product } from '../../Core/models/Product.model';

@Component({
  selector: 'app-recommended-product',
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './recommended-product.html',
  styleUrl: './recommended-product.scss',
})
export class RecommendedProduct {

  // productList = signal<Product[]>([]);

  productList = input<Product[]>([]);

  products : Product[]  = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bvlgari Extreme',
      description: 'Product Description',
      image: './images/recommeded-product/p1.png',
      price: 65,
      madeBy : "Ahmed",
      category: 'Accessories',
      brand :"Luminizing Clay",
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Jo Malone Vetiver & Go...',
      description: 'Product Description',
      image: './images/recommeded-product/p2.png',
      price: 65,
      madeBy : "Ahmed",
      category: 'Accessories',
      brand :"Luminizing Clay",
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Armaf Passionby Armafh',
      description: 'Product Description',
      image: './images/recommeded-product/p3.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      brand :"Luminizing Clay",
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Jo Malone Vetiver & Go...',
      description: 'Product Description',
      image: './images/recommeded-product/p4.png',
      price: 65,
      madeBy : "Ipsa",
      category: 'Accessories',
      quantity: 24,
      brand :"Luminizing Clay",
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: './images/recommeded-product/p1.png',
      price: 65,
      madeBy : "Ahmed",
      category: 'Accessories',
      brand :"Luminizing Clay",
      quantity: 24,
      
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    
  ];

  sectionName = input('Recommended for you');

  responsiveOptions: any[] | undefined;

  ngOnInit() {
   
    // this.productList.set(this.products);


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 
  }
}
