import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CreateComponent } from './pages/product/create/create.component';
import { UpdateComponent } from './pages/product/update/update.component';
import { DeleteComponent } from './pages/product/delete/delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products/create',
    component: CreateComponent
  },
  {
    path: 'products/update/:id',
    component: UpdateComponent
  },
  {
    path: 'products/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
