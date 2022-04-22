import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { NewUser } from './new-user';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpClient: HttpClient) {}

  create(newUser: NewUser): Observable<NewUser> {
    return this.httpClient.post<NewUser>(`${API}/user/signup`, newUser);
  }

  verifyExistingUser(userName: string) {
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
