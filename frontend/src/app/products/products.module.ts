import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../components/card/card.module';
import { GridPhotoProductsComponent } from './grid-photo-products/grid-photo-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductComponent,
    GridPhotoProductsComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, CardModule],
})
export class ProductsModule {}
