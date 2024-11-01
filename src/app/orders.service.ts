import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly http = inject(HttpClient);

  private apiURL = 'http://localhost:3000/orders';

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiURL);
  }

  getOrdersByEmail(email: string): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiURL}?email=${email}`);
  }

  postNewOrder(order:Order) : Observable<Order>{
    return this.http.post<Order>(this.apiURL, order);
  }
  constructor() { }
}
