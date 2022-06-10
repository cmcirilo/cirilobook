import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListProductsResolver } from './list-products/list-products.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    resolve: {
      products: ListProductsResolver,
    },
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
