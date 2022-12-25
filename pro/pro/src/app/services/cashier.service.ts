import { Emp, Order, Shift, ShiftRequest, User } from './../../interfaces';
import { Injectable } from '@angular/core';
import { Cart, CartItems, Product } from 'src/interfaces';
import { ToastController } from '@ionic/angular';


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
  public users: User[] = [
    { id: "000", type: "owner", name: "owner", email: "owner@gmail.com", phone: 120, image: "https://ionicframework.com/docs/img/demos/avatar.svg" },
    { id: "123", type: "emp", name: "emp1", email: "emp1@gmail.com", phone: 123, image: "https://ionicframework.com/docs/img/demos/avatar.svg" },
    { id: "456", type: "emp", name: "emp2", email: "emp2@gmail.com", phone: 1253, image: "https://ionicframework.com/docs/img/demos/avatar.svg" },
  ];
  public emp: Emp[] = [
    {
      id: "123", type: "emp", name: "emp1", email: "emp1@gmail.com", phone: 123, image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      shifts: [
        { id: "321", empId: "123", day: new Date("2022-04-28"), startTime: new Date("2022-04-28"), endTime: new Date("2022-04-28") },
        { id: "654", empId: "123", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01") },],
      shiftsRequests: []
    },
    {
      id: "456", type: "emp", name: "emp2", email: "emp2@gmail.com", phone: 1253, image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      shifts: [
        { id: "664", empId: "456", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01") }],
      shiftsRequests: [{ id: "555", senderEmail: "emp2@gmail.com", receiverEmail: "emp1@gmail.com", shiftId: "654", isApproved: false }]
    }
  ];
  public shifts: Shift[] = [
    { id: "321", empId: "123", day: new Date("2022-04-28"), startTime: new Date("2022-04-28"), endTime: new Date("2022-04-28") },
    { id: "654", empId: "123", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01") },
    { id: "664", empId: "456", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01") },
  ]
  public shiftRequests: ShiftRequest[] = [
    { id: "555", senderEmail: "emp2@gmail.com", receiverEmail: "emp1@gmail.com", shiftId: "654", isApproved: false }
  ]


  public cartItems: CartItems = {}
  public cart: Cart = { id: "My-cart" } as Cart;
  public currUser: User;
  constructor(public toastCtrl: ToastController) {
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
