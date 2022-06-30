import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  url = 'http://localhost:3000/categories';

  category!: Category

  id: string
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private categoryService: CategoryService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.categoryService.get(this.id).subscribe(data => {
      this.category = data as Category
    })
  }
  update() {
    this.categoryService.update(this.id, this.category).subscribe(data => {
      console.log(data);
    })
  }
}
