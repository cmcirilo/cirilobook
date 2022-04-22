import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPhotoProductsComponent } from './grid-photo-products.component';

describe('GridPhotoProductsComponent', () => {
  let component: GridPhotoProductsComponent;
  let fixture: ComponentFixture<GridPhotoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPhotoProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPhotoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
