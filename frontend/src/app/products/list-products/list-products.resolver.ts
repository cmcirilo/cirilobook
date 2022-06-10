import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Products } from '../product';
import { UserService } from './../../authentication/user/user.service';
import { ProductsService } from './../products.service';

@Injectable({
  providedIn: 'root',
})
export class ListProductsResolver implements Resolve<Products> {
  constructor(
    private productsService: ProductsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Products> {
    return this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.productsService.userList(userName);
      }),
      take(1)
    );
  }
}
