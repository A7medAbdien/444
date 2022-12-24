import { Injectable } from '@angular/core';

export interface Product {
  id?: string;
  name: string;
  quantity: number;
  // Stock Keeping Unit Threshold
  skut: number;
  // TODO: Supplier
  sup: string;
  // Item Per Cartoon
  ipc: number;
  image: string;
  price: number;
  desertion: string;
};

export interface CartItem {
  product: Product;
  quantity: number;
}
export interface Cart {
  id?: string;
  products: Product[];
  quantities: number[];
  total: number;
}

export interface cartItems { [key: string]: number };

@Injectable({
  providedIn: 'root'
})
export class CashierService {
  public products: Product[] = [
    { id: "123", name: "prod1", quantity: 55, skut: 5, sup: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, desertion: "hi" },
    { id: "456", name: "prod2", quantity: 30, skut: 10, sup: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, desertion: "hi" },
    { id: "789", name: "prod3", quantity: 45, skut: 5, sup: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, desertion: "hi" }
  ];
  public cart: Cart = {
    id: "123",
    products: [{ id: "123", name: "prod1", quantity: 55, skut: 5, sup: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, desertion: "hi" }],
    quantities: [5],
    total: 5 * 12
  }

  public cartItem: cartItems = {}

  addToCart(id: any) {
    if (this.cartItem[id] >= 1) {
      this.cartItem[id]++;
    } else
      this.cartItem[id] = 1;
    console.log(this.cartItem)
  }

  removeToCart(id: any) {
    if (this.cartItem[id] >= 1) {
      this.cartItem[id]--;
    } else
      delete this.cartItem[id]
    console.log(this.cartItem)
  }

  calcCartTotal(cart: Cart) {
    for (let i = 0; i < cart.products.length; i++) {
      const product = cart.products[i];
      const quantity = cart.quantities[i];
      cart.total += quantity * product.price;
    }
  }
  constructor() { }
}
