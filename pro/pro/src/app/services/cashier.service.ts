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
};

@Injectable({
  providedIn: 'root'
})
export class CashierService {
  public products: Product[] = [
    { id: "123", name: "prod1", quantity: 55, skut: 5, sup: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12 },
    { id: "456", name: "prod2", quantity: 30, skut: 10, sup: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11 },
    { id: "789", name: "prod3", quantity: 45, skut: 5, sup: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15 }
  ];
  constructor() { }
}
