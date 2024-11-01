import { Routes } from '@angular/router';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';

export const routes: Routes = [{
    path: 'orders', component: ListOrdersComponent
},
{
    path:'create-order', component: CreateOrderComponent
},
{
    path:'', component:ListOrdersComponent
}];
