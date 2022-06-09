import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<Comments>;

  constructor() {}

  ngOnInit(): void {}
}
