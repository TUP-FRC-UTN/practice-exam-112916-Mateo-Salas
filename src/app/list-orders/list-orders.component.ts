import { Component, inject,OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Order } from '../../models/order';
import { OrdersService } from '../orders.service';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {

  products:Product[]=[];

  listOrders:Order[]=[];

  private readonly orderService = inject(OrdersService);
  private readonly productService = inject(ProductsService);
  private readonly router = inject(Router);

  ngOnInit(){
    this.getProducts();
    this.getOrders();
  }

  getProducts():void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  getOrders():void {
    this.orderService.getAllOrders().subscribe(orders => {
      this.listOrders = orders;
    });
  }


}
