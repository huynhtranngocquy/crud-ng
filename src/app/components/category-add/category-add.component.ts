import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  url = 'http://localhost:3000/categories';

  category: Category

  constructor(private httpClient: HttpClient, private categoryService: CategoryService) {
    this.category = new Category();
  }

  ngOnInit(): void {
  }
  
  save() {
    this.categoryService.save(this.category).subscribe(data => {
      console.log(data);
    })
  }

}
