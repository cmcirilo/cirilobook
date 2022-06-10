import { TestBed } from '@angular/core/testing';

import { ListProductsResolver } from './list-products.resolver';

describe('ListProductsResolver', () => {
  let resolver: ListProductsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListProductsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
