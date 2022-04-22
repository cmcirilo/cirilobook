import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { ProductsService } from '../products.service';
import { UserService } from './../../authentication/user/user.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products!: Products;

  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      const userName = user.name ?? '';
      this.productsService.userList(userName).subscribe((products) => {
        this.products = products;
      });
    });
  }
}
