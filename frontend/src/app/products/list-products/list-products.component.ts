import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { Products } from '../product';
import { ProductsService } from '../products.service';
import { UserService } from './../../authentication/user/user.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products$!: Observable<Products>;

  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.productsService.userList(userName);
      })
    );
  }
}
