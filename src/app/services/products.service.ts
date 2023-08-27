import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {delay, Observable } from 'rxjs'
import { IProduct } from '../models/product'
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {
    }

    products: IProduct[] = []

    getAll():Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams().append('limit', 10)
        }).pipe(
            delay(1000),
            tap(products => this.products = products))
    }

    create(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
        .pipe(
            tap(prod => this.products.push(prod))
        )
    }
}