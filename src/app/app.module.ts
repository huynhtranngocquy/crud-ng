import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component'
const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product-detail/:name', component: ProductDetailComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'product' }, // router ngầm định: khi user k redirect tới đường dẫn chi tiết
  { path: '**', component: NotFoundComponent }, // đường dẫn sai or không có
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    AdminComponent,
    NotFoundComponent,
    LoginComponent,
    ProductAddComponent,
    CategoryAddComponent,
    CategoryComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutes, // nên đặt admin routes lên trước để trách sung đột khi khai báo routes kiểu này
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
