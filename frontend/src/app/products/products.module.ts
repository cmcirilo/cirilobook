import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductComponent } from './product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ListProductsComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
