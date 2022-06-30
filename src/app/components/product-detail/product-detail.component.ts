import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product

  constructor(private route: ActivatedRoute) {
    this.product = new Product('')
    // cho phép nhận giá trị được truyền qua tham số của route
    if (route.snapshot.params['name']) {
      this.product.productName = route.snapshot.params['name']
    }
  }

  ngOnInit(): void {
  }

  changeDetail(form: NgForm) {
    this.product.productName = form.value.productName;
  }

}
