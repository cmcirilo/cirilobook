import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  productId!: number;
  product$!: Observable<Product>;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.productId;
    this.product$ = this.productsService.get(this.productId);
  }

  like() {
    this.productsService.like(this.productId).subscribe((like) => {
      if (like) {
        this.product$ = this.productsService.get(this.productId);
      }
    });
  }

  delete() {
    this.productsService.delete(this.productId).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => console.log(error)
    );
  }
}
