import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListProductsResolver } from './list-products/list-products.resolver';
import { NewProductComponent } from './new-product/new-product.component';

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
  {
    path: 'new',
    component: NewProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
