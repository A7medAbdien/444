import { Emp, Order, Product, Shift, ShiftRequest, User, } from './../../interfaces';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';

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
      id: "456", name: "prod2", quantity: 10, skut: 10, supId: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, description: "hi"
    },
    {
      who: "000",
      id: "789", name: "prod3", quantity: 4, skut: 5, supId: "sup2", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, description: "hi"
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
      id: "000", type: "owner", name: "owner", pass: "pass", email: "owner@gmail.com", phone: 120, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      who: "000",
      id: "sup1", type: "sup", name: "supp", pass: "pass", email: "sup1@gmail.com", phone: 121, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      who: "000",
      id: "sup2", type: "sup", name: "supo", pass: "pass", email: "sup1@gmail.com", phone: 121, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      who: "000",
      id: "123", type: "emp", name: "emp1", pass: "pass", email: "emp1@gmail.com", phone: 123, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      who: "000",
      id: "456", type: "emp", name: "emp2", pass: "pass", email: "emp2@gmail.com", phone: 1253, image: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
  ];
  public emp: Emp[] = [
    {
      who: "000",
      id: "123", type: "emp", name: "emp1", pass: "pass", email: "emp1@gmail.com", phone: 123, image: "https://ionicframework.com/docs/img/demos/avatar.svg",
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
      id: "456", type: "emp", name: "emp2", pass: "pass", email: "emp2@gmail.com", phone: 1253, image: "https://ionicframework.com/docs/img/demos/avatar.svg",
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

  me
  today: Date = new Date();
  constructor(public toastCtrl: ToastController, public navCtrl: NavController) {
    // this.me = this.emp[1]
    this.me = this.users[0];
  }


  onlyOwner(): void {
    if (this.me.type != "owner") {
      this.navCtrl.navigateRoot('/');
    }
  }
  isOwner(): boolean {
    return this.me.type == "owner";
  }
  signOut(id) {
    console.log("sign out")
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
  getEmpByShift(id: string) {
    for (const i of this.emp) {
      for (const j of this.shifts) {
        if (j.id == id)
          return i;
      }
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
  addProductFull(i: Product) {
    i.who = this.me.id;
    this.products.push(i);
    this.presentToastS("Product Added Successfully")
  }
  addProduct(val) {
    // console.log(val);
    var prod: Product = {} as Product;
    prod.name = val.name
    prod.quantity = val.qty
    prod.skut = val.skut
    prod.supId = val.sup
    prod.ipc = val.ipc
    prod.image = val.img
    prod.price = val.price
    prod.description = val.description
    this.addProductFull(prod);
  }
  addOrder(i: Order) {
    i.who = this.me.id;
    this.orders.push(i);
    this.presentToastS("Order Added Successfully");
  }
  addUser(i: User) {
    i.who = this.me.id;
    this.users.push(i);
    this.presentToastS("User Added Successfully");
  }
  addSup(val) {
    var s: User = {} as User;
    s.type = "sup"
    s.name = val.name
    s.email = val.email
    s.pass = val.pass
    s.phone = val.phone;
    (val.img == "") ? s.image = "https://ionicframework.com/docs/img/demos/avatar.svg" : s.image = val.img
    // console.log(s);
    this.addUser(s);
  }
  addEmpFull(i: Emp) {
    i.who = this.me.id;
    this.emp.push(i);
    this.presentToastS("Emp Added Successfully");
  }
  addEmp(val) {
    var s: User = {} as User;
    s.type = "emp"
    s.name = val.name
    s.email = val.email
    s.pass = val.pass
    s.phone = val.phone;
    (val.img == "") ? s.image = "https://ionicframework.com/docs/img/demos/avatar.svg" : s.image = val.img
    // console.log(s);
    this.addUser(s);
    var e: Emp = s as Emp;
    this.addEmpFull(e);
  }
  addShiftFull(i: Shift) {
    i.who = this.me.id;
    this.shifts.push(i);
    this.presentToastS("Shift Added Successfully");
  }
  addShift(startTime, endTime, empId) {
    var s: Shift = {} as Shift;
    s.who = this.me.id;
    s.day = new Date(startTime);
    s.startTime = new Date(startTime);
    s.endTime = new Date(endTime);
    s.empId = empId;
    this.shifts.push(s);
    this.presentToastS("Shift Added Successfully");
  }
  addShiftReqFull(i: ShiftRequest) {
    i.who = this.me.id;
    this.shiftRequests.push(i);
    this.presentToastS("Request Added Successfully");
  }
  addShiftReq(myShiftId: string, otherShiftId: string) {
    var sr: ShiftRequest = {} as ShiftRequest;
    sr.who = this.me.id;
    sr.isApproved = false;
    sr.myShiftId = myShiftId;
    sr.otherShiftId = otherShiftId;
    if (this.getEmpByShift(otherShiftId) != null) {
      this.getEmpByShift(otherShiftId)?.shiftsRequests.push(sr);
      this.shiftRequests.push(sr);
      this.presentToastS("Request Added Successfully");
    } else this.presentToastF("Employee Not Found");
  }

  // remove by Id
  removeProduct(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == id) delete this.products[i];
    }
    this.presentToastS("Product Removed Successfully");
  }
  removeOrder(id: string) {
    for (let i = 0; i < this.orders.length; i++) {
      const element = this.orders[i];
      if (element.id == id) delete this.orders[i];
    }
    this.presentToastS("Order Removed Successfully");
  }
  removeUser(id: string) {
    var element
    for (let i = 0; i < this.users.length; i++) {
      element = this.users[i];
      if (element?.id == id) delete this.users[i];
    }
    this.presentToastS(`${element.name} Removed Successfully`);
    console.log(this.users);
    console.log(this.emp);
  }
  removeEmp(id: string) {
    for (let i = 0; i < this.emp.length; i++) {
      const element = this.emp[i];
      if (element.id == id) delete this.emp[i];
    }
    console.log(this.emp)
    // this.presentToastS("Emp Removed Successfully");
  }
  removeShift(id: string) {
    for (let i = 0; i < this.shifts.length; i++) {
      const element = this.shifts[i];
      if (element.id == id) delete this.shifts[i];
    }
    this.presentToastS("Shift Removed Successfully");
  }
  removeShiftReq(id: string) {
    for (let i = 0; i < this.shiftRequests.length; i++) {
      const element = this.shiftRequests[i];
      if (element.id == id) delete this.shiftRequests[i];
    }
    this.presentToastS("Shift Request Removed Successfully");
  }

  // present toast
  async presentToastS(massage: string) {
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
  }

  async presentToastF(massage: string) {
    const toast = await this.toastCtrl.create({
      message: massage,
      duration: 2000,
      color: 'danger',
      position: 'top',
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });
  }

  // Search
  // ----------------- Products
  isSearchedProducts: boolean = false;
  searchedProducts: Product[] = [] as Product[];
  searchProducts(event, base) {
    console.log(base)
    if (event.target.value.length > 0) {
      switch (base) {
        case "p":
          this.searchProductsBN(event);
          break;
        case "s":
          this.searchProductsBS(event);
          break;
        default:
          this.searchProductsBN(event);
          break;
      }
    } else {
      this.isSearchedProducts = false;
    }
  }
  searchProductsBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.products.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedProducts = filteredList;
      // console.log(filteredList)
      this.isSearchedProducts = true;
    } else {
      this.isSearchedProducts = false;
    }
  }

  searchProductsBS(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.products.filter((row) => {
        var sup = this.getUser(row.supId)
        if (sup?.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedProducts = filteredList;
      // console.log(filteredList)
      this.isSearchedProducts = true;
    } else {
      this.isSearchedProducts = false;
    }
  }
  // ----------------------- Suppliers
  isSearchedSup: boolean = false;
  searchedSup: User[] = [] as User[];
  searchSupBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.sups().filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedSup = filteredList;
      // console.log(filteredList)
      this.isSearchedSup = true;
    } else {
      this.isSearchedSup = false;
    }
  }


  isSearchedEmp: boolean = false;
  searchedEmp: Emp[] = [] as Emp[];
  searchEmpBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.emp.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedEmp = filteredList;
      // console.log(filteredList)
      this.isSearchedEmp = true;
    } else {
      this.isSearchedEmp = false;
    }
  }

  isSearchedOrders: boolean = false;
  searchedOrders: Order[] = [] as Order[];
  searchOrdersBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.orders.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedOrders = filteredList;
      // console.log(filteredList)
      this.isSearchedOrders = true;
    } else {
      this.isSearchedOrders = false;
    }
  }


  isHiProducts: boolean = false;
  hiProducts: Product[] = [] as Product[];
  hiProductsBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.products.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.hiProducts = filteredList;
      // console.log(filteredList)
      this.isHiProducts = true;
    } else {
      this.isSearchedProducts = false;
    }
  }
  checkHi(id) {
    for (const i of this.hiProducts) {
      if (i.id == id)
        return true;
    }
    return false;
  }

  // sup filter
  sups() {
    return this.users.filter((row) => {
      return (row.type == "sup") ? true : false;
    });
  }
  getEmps() {
    return this.users.filter((row) => {
      return (row.type == "emp") ? true : false;
    });
  }
  getSupProducts(supId) {
    return this.products.filter((row) => {
      return (row.supId == supId) ? true : false;
    });
  }
  getEmpShifts(empId) {
    return this.shifts.filter((row) => {
      return (row.empId == empId) ? true : false;
    });
  }

  //check if all Positive
  allP(e) {
    // console.log(this.isAllP);
    return (e.target.value < 1) ? false : true;
  }
}
