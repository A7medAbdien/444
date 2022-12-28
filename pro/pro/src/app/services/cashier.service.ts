import { Emp, Order, Shift, ShiftRequest, User } from './../../interfaces';
import { Injectable } from '@angular/core';
import { Cart, CartItems, Product } from 'src/interfaces';
import { ToastController } from '@ionic/angular';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class CashierService {


  public cartItems: CartItems = {}
  public cart: Cart = {
    who: "000",
    id: "My-cart"
  } as Cart;
  public currUser: User;


  products: Product[];
  users: User[];
  orders: Order[]
  shifts: Shift[];
  emp: Emp[];
  constructor(public data: DataService, public toastCtrl: ToastController) {
    this.products = this.data.products;
    this.users = this.data.users;
    this.orders = this.data.ordered;
    this.shifts = this.data.shifts;
    this.emp = this.data.emp;
    this.currUser = this.users[2];
  }


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

  async presentToast(massage: string) {
    const toast = await this.toastCtrl.create({
      message: massage,
      duration: 2000,
      color: 'primary',
      position: 'top',
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });
    // ------------------------------------------------------------ Schedule
  }
  getEmp(id) {
    for (const e of this.emp) {
      if (e.id == id)
        return e;
    }
    return null;
  }
}
