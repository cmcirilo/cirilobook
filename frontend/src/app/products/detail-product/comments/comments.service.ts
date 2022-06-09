import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Comments } from './comment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(`${API}/photos/${id}/comments`);
  }

  add(id: number, commentText: string): Observable<Comment> {
    return this.httpClient.post<Comment>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
