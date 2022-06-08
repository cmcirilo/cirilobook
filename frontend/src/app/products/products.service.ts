import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './../authentication/token/token.service';
import { Product, Products } from './product';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  userList(userName: string): Observable<Products> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Products>(`${API}/${userName}/photos`, {
      headers,
    });
  }

  getById(id: number): Observable<Product> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Product>(`${API}/photos/${id}`, { headers });
  }
}
