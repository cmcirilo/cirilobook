import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../product';

@Component({
  selector: 'app-grid-photo-products',
  templateUrl: './grid-photo-products.component.html',
  styleUrls: ['./grid-photo-products.component.css'],
})
export class GridPhotoProductsComponent implements OnInit {
  @Input() products!: Products;

  constructor() {}

  ngOnInit(): void {}
}
