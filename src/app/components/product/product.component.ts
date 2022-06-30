import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    new Product('P01'),
    new Product('P02'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
