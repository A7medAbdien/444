import { Injectable } from '@angular/core';
import { Cart, CartItems, Product } from 'src/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CashierService {


  public products: Product[] = [
    { id: "123", name: "prod1", quantity: 55, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, description: "hi" },
    { id: "456", name: "prod2", quantity: 30, skut: 10, supId: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, description: "hi" },
    { id: "789", name: "prod3", quantity: 45, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, description: "hi" }
  ];

  public cartItem: CartItems = {}
  public cart: Cart = { id: "My-cart", total: 0 } as Cart;

  constructor() { }

  addToCart(id: any) {
    if (this.cartItem[id] > 0) {
      this.cartItem[id]++;
    } else
      this.cartItem[id] = 1;
    console.log(this.cartItem)
  }

  removeToCart(id: any) {
    if (this.cartItem[id] > 1) {
      this.cartItem[id]--;
    } else
      delete this.cartItem[id]
    console.log(this.cartItem)
  }

  getCartLength() {
    return Object.keys(this.cartItem).length
  }

  calcCartTotal() {
    this.cart.total = 0
    for (const prod in this.cartItem) {
      if (Object.prototype.hasOwnProperty.call(this.cartItem, prod)) {
        const quantity = this.cartItem[prod];
        const price = this.getProduct(prod)?.price
        this.cart.total += quantity * price!
      }
    }
    return this.cart.total
  }

  getProduct(id: string) {
    for (const i of this.products) {
      if (i.id == id)
        return i;
    }
    return null;
  }

  isFiltered: boolean = false;
  filteredList: Product[] = [] as Product[];
  filterList(event: any) {
    if (event.target.value.length > 0) {
      var filteredlist = this.products.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.filteredList = filteredlist;
      // console.log(filteredlist)
      this.isFiltered = true;
    } else {
      this.isFiltered = false;
    }
  }

}
