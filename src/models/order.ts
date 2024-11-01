export interface Orders {
    id:           string;
    customerName: string;
    email:        string;
    products:     ProductOrder[];
    total:        number;
    orderCode:    string;
    timestamp:    Date;
}

export interface ProductOrder {
    productId: string;
    quantity:  number;
    stock:     number;
    price:     number;
}
