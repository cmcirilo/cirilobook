import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from './../authentication/token/token.service';
import { Product, Products } from './product';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  userList(userName: string): Observable<Products> {
    return this.httpClient.get<Products>(`${API}/${userName}/photos`);
  }

  get(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${API}/photos/${id}`);
  }

  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.httpClient
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }
}
