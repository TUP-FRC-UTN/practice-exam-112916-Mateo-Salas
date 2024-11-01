import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/products';

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  constructor() { }
}
