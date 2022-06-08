import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  },
  {
    path: ':productId',
    component: DetailProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
