import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../components/card/card.module';
import { MessageModule } from './../components/message/message.module';
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
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    MessageModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
