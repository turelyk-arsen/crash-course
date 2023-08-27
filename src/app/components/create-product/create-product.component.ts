import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {

  constructor (private productService: ProductsService, 
    private modalService: ModalService) {

  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
    console.log(this.form.value);
    this.productService.create({
      title: this.form.value.title as string,
      price: 13,
      description: "lorem",
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 40,
        count: 1
      }
    }).subscribe(()=> {
      this.modalService.close()
    })
  }
}
