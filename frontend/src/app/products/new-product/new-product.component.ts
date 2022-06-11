import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  formProduct!: FormGroup;
  file!: File;
  preview!: string;
  percentageCompleted = 0;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = this.formProduct.get('allowComments')?.value ?? false;
    const description = this.formProduct.get('description')?.value ?? '';

    this.productsService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['products'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentageCompleted = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  saveFile(fileInput: any) {
    const [file] = fileInput?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
