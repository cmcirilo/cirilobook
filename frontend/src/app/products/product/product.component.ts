import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private urlOrigin = '';

  @Input() description = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOrigin = url;
    } else {
      this.urlOrigin = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOrigin;
  }

  constructor() {}

  ngOnInit(): void {}
}
