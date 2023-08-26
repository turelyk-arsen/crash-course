import { Component } from '@angular/core';
import { products as data } from './data/products';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular crash course';
  products: IProduct[] = data;
}
