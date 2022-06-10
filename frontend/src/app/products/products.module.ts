import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../components/card/card.module';
import { SharedModule } from './../shared/shared.module';
import { CommentsComponent } from './detail-product/comments/comments.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { GridPhotoProductsComponent } from './grid-photo-products/grid-photo-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductComponent,
    GridPhotoProductsComponent,
    DetailProductComponent,
    CommentsComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, CardModule, SharedModule],
})
export class ProductsModule {}
