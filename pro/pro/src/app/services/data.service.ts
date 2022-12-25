import { Emp, Order, Product, Shift, ShiftRequest, User, } from './../../interfaces';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public products: Product[] = [
    {
      who: "000",
      id: "123", name: "prod1", quantity: 55, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, description: "hi"
    },
    {
      who: "000",
      id: "456", name: "prod2", quantity: 30, skut: 10, supId: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, description: "hi"
    },
    {
      who: "000",
      id: "789", name: "prod3", quantity: 45, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, description: "hi"
    }
  ];
  public orders: Order[] = [
    {
      id: "111",
      who: "000",
      name: "prod1", quantity: 50, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, description: "hi",
      orderedDate: new Date("2022-04-21"),
      expectedDate: new Date("2022-04-21"),
      receivedDate: new Date("2022-04-21"),
      cartoons: 5,
      orderedBy: "emp1",

    },
    {
      id: "121",
      who: "000",
      name: "prod2", quantity: 30, skut: 10, supId: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, description: "hi",
      orderedDate: new Date("2022-04-26"),
      expectedDate: new Date("2022-04-26"),
      receivedDate: new Date("2022-04-26"),
      cartoons: 5,
      orderedBy: "emp1",
    },
    {
      id: "131",
      who: "000",
      name: "prod3", quantity: 45, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, description: "hi",
      orderedDate: new Date("2022-04-25"),
      expectedDate: new Date("2022-04-26"),
      receivedDate: new Date("2022-04-28"),
      cartoons: 5,
      orderedBy: "emp1",
    }
  ];
  public users: User[] = [
    {
      who: "000",
      id: "000", type: "owner", name: "owner", email: "owner@gmail.com", phone: 120, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      who: "000",
      id: "123", type: "emp", name: "emp1", email: "emp1@gmail.com", phone: 123, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      who: "000",
      id: "456", type: "emp", name: "emp2", email: "emp2@gmail.com", phone: 1253, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
  ];
  public emp: Emp[] = [
    {
      who: "000",
      id: "123", type: "emp", name: "emp1", email: "emp1@gmail.com", phone: 123, image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      shifts: [
        {
          who: "000",
          id: "321", empId: "123", day: new Date("2022-04-28"), startTime: new Date("2022-04-28"), endTime: new Date("2022-04-28")
        },
        {
          who: "000",
          id: "654", empId: "123", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01")
        },],
      shiftsRequests: []
    },
    {
      who: "000",
      id: "456", type: "emp", name: "emp2", email: "emp2@gmail.com", phone: 1253, image: "https://ionicframework.com/docs/img/demos/avatar.svg",
      shifts: [
        {
          who: "000",
          id: "664", empId: "456", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01")
        }],
      shiftsRequests: [{
        who: "000",
        id: "555", myShiftId: "664", otherShiftId: "664", isApproved: false
      }]
    }
  ];
  public shifts: Shift[] = [
    {
      who: "000",
      id: "321", empId: "123", day: new Date("2022-04-28"), startTime: new Date("2022-04-28"), endTime: new Date("2022-04-28")
    },
    {
      who: "000",
      id: "654", empId: "123", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01")
    },
    {
      who: "000",
      id: "664", empId: "456", day: new Date("2022-05-01"), startTime: new Date("2022-05-01"), endTime: new Date("2022-05-01")
    },
  ]
  public shiftRequests: ShiftRequest[] = [
    {
      who: "000",
      id: "555", myShiftId: "664", otherShiftId: "664", isApproved: false
    }
  ]


  constructor() {

  }


  // get by Id
  getProduct(id: string) {
    for (const i of this.products) {
      if (i.id == id)
        return i;
    }
    return null;
  }
  getOrder(id: string) {
    for (const i of this.orders) {
      if (i.id == id)
        return i;
    }
    return null;
  }
  getUser(id: string) {
    for (const i of this.users) {
      if (i.id == id)
        return i;
    }
    return null;
  }
  getEmp(id: string) {
    for (const i of this.emp) {
      if (i.id == id)
        return i;
    }
    return null;
  }
  getShift(id: string) {
    for (const i of this.shifts) {
      if (i.id == id)
        return i;
    }
    return null;
  }
  getShiftReq(id: string) {
    for (const i of this.shiftRequests) {
      if (i.id == id)
        return i;
    }
    return null;
  }

  // add
  addProduct(i: Product, who: string) {
    i.who = who;
    this.products.push(i);
  }
  addOrder(i: Order, who: string) {
    i.who = who;
    this.orders.push(i);
  }
  addUser(i: User, who: string) {
    i.who = who;
    this.users.push(i);
  }
  addEmp(i: Emp, who: string) {
    i.who = who;
    this.emp.push(i);
  }
  addShift(i: Shift, who: string) {
    i.who = who;
    this.shifts.push(i);
  }
  addShiftReq(i: ShiftRequest, who: string) {
    i.who = who;
    this.shiftRequests.push(i);
  }

  // remove by Id
  removeProduct(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == id) delete this.products[i];
    }
  }
  removeOrder(id: string) {
    for (let i = 0; i < this.orders.length; i++) {
      const element = this.orders[i];
      if (element.id == id) delete this.orders[i];
    }
  }
  removeUser(id: string) {
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element.id == id) delete this.users[i];
    }
  }
  removeEmp(id: string) {
    for (let i = 0; i < this.emp.length; i++) {
      const element = this.emp[i];
      if (element.id == id) delete this.emp[i];
    }
  }
  removeShift(id: string) {
    for (let i = 0; i < this.shifts.length; i++) {
      const element = this.shifts[i];
      if (element.id == id) delete this.shifts[i];
    }
  }
  removeShiftReq(id: string) {
    for (let i = 0; i < this.shiftRequests.length; i++) {
      const element = this.shiftRequests[i];
      if (element.id == id) delete this.shiftRequests[i];
    }
  }
}
