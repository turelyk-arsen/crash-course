import { Component, OnInit } from '@angular/core';
// import { products as data } from './data/products';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import {Observable} from 'rxjs'
import { tap } from 'rxjs/operators';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'Angular crash course';
  // products: IProduct[] = data;
  // products: IProduct[] = []
  loading  = false
  term = ''
  // products$: Observable<IProduct[]>


  constructor(public productsService: ProductsService,
    public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(()=>this.loading = false))
    this.productsService.getAll().subscribe(() => {
      // this.products = products
      this.loading = false
    })
    // throw new Error('Method not implemented.');
  }


}
