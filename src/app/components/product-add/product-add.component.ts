import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup

  constructor() {
    this.productForm = new FormGroup({
      'productName': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  add() {
    if (this.productForm.invalid) {
      console.log(`invalid data`);
      return
    }
    console.log(this.productForm.value);
  }

  ngOnInit(): void {
  }
}
