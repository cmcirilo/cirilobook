import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';

@Injectable({
    providedIn: 'root',
})
export class NewUserService {
    constructor(private httpClient: HttpClient) {}

    create(newUser: NewUser): Observable<NewUser> {
        return this.httpClient.post<NewUser>(
            'http://localhost:3000/user/signup',
            newUser,
        );
    }
}
