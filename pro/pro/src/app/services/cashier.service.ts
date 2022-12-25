import { Order } from './../../interfaces';
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
  public orders: Order[] = [
    {
      oId: "111",
      id: "123", name: "prod1", quantity: 50, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, description: "hi",
      orderedDate: new Date("2022-04-21"),
      expectedDate: new Date("2022-04-21"),
      receivedDate: new Date("2022-04-21"),
      cartoons: 5,
      orderedBy: "emp1",

    },
    {
      oId: "121",
      id: "456", name: "prod2", quantity: 30, skut: 10, supId: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, description: "hi",
      orderedDate: new Date("2022-04-26"),
      expectedDate: new Date("2022-04-26"),
      receivedDate: new Date("2022-04-26"),
      cartoons: 5,
      orderedBy: "emp1",
    },
    {
      oId: "131",
      id: "789", name: "prod3", quantity: 45, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, description: "hi",
      orderedDate: new Date("2022-04-25"),
      expectedDate: new Date("2022-04-26"),
      receivedDate: new Date("2022-04-28"),
      cartoons: 5,
      orderedBy: "emp1",
    }
  ];



  public cartItems: CartItems = {}
  public cart: Cart = { id: "My-cart" } as Cart;

  constructor() { }

  addToCart(id: any) {
    if (this.cartItems[id] > 0) {
      this.cartItems[id]++;
    } else
      this.cartItems[id] = 1;
    console.log(this.cartItems)
  }

  removeToCart(id: any) {
    if (this.cartItems[id] > 1) {
      this.cartItems[id]--;
    } else
      delete this.cartItems[id]
    console.log(this.cartItems)
  }

  getCartLength() {
    return Object.keys(this.cartItems).length
  }

  calcCartTotal() {
    this.cart.total = 0
    for (const prod in this.cartItems) {
      if (Object.prototype.hasOwnProperty.call(this.cartItems, prod)) {
        const quantity = this.cartItems[prod];
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

  // ------------------------------------------------------------

  hvOrders: boolean = false;
  orderList: Order[] = [] as Order[];
  getOrders(id) {
    var filteredlist = this.orders.filter((row) => {
      if (row.id!.indexOf(id) != -1) {
        return true;
      } else {
        return false;
      }
    });
    this.orderList = filteredlist;
    // console.log(filteredlist)
    (filteredlist.length > 0) ? this.hvOrders = true : this.hvOrders = false;
  }
  // ------------------------------------------------------------
  deleteCart() {
    // console.log(this.cartItems)
    this.cartItems = {} as CartItems;
  }

  moveToPay() {
    this.cart.cartItems = this.cartItems;
    this.cart.total = this.calcCartTotal();
    this.cartItems = {} as CartItems;
  }
}
