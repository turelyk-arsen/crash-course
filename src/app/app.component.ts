import { Component, OnInit } from '@angular/core';
// import { products as data } from './data/products';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'Angular crash course';
  // products: IProduct[] = data;
  products: IProduct[] = []
  loading  = false
  
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
    // throw new Error('Method not implemented.');
  }


}
