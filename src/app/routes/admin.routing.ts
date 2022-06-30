import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "../components/admin/admin.component";
import { CategoryAddComponent } from "../components/category-add/category-add.component";
import { CategoryEditComponent } from "../components/category-edit/category-edit.component";
import { CategoryComponent } from "../components/category/category.component";
import { Auth } from "./auth";

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [Auth] },
    { path: 'category', component: CategoryComponent },
    { path: 'category-add', component: CategoryAddComponent },
    { path: 'category-edit/:id', component: CategoryEditComponent },
]

export const AdminRoutes = RouterModule.forChild(routes)