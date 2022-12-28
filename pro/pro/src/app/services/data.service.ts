import { CartItems, Emp, Order, OrderCart, Product, Shift, ShiftRequest, User, } from './../../interfaces';
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
  public orders: OrderCart[] = [
    {
      who: "000", id: "156",
      cart: { "123": 5, "456": 5, "789": 10 },
      sup: "sup1",
      total: 100,
      orderedDate: new Date("2022-04-21"),
      expectedDate: new Date("2022-04-21"),
      // receivedDate: new Date("2022-04-21"),
    },
    {
      who: "123", id: "166",
      cart: { "456": 5, "789": 10 },
      sup: "sup2",
      total: 150,
      orderedDate: new Date("2022-04-21"),
      expectedDate: new Date("2022-04-21"),
      // receivedDate: new Date("2022-04-21"),
    }
  ]
  public fav: OrderCart[] = [
    {
      who: "123", id: "166",
      cart: { "456": 5, "789": 10 },
      sup: "sup2",
      total: 150,
      orderedDate: new Date("2022-04-21"),
      expectedDate: new Date("2022-04-21"),
      // receivedDate: new Date("2022-04-21"),
    }
  ];
  public ordered: Order[] = [
    {
      id: "111",
      who: "000",
      name: "prod1", quantity: 50, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 12, description: "hi",
      orderedDate: new Date("2022-04-21"),
      expectedDate: new Date("2022-04-21"),
      receivedDate: new Date("2022-04-21"),
      cartoons: 5,
    },
    {
      id: "121",
      who: "000",
      name: "prod2", quantity: 30, skut: 10, supId: "sup1", ipc: 10, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 11, description: "hi",
      orderedDate: new Date("2022-04-26"),
      expectedDate: new Date("2022-04-26"),
      receivedDate: new Date("2022-04-26"),
      cartoons: 5,
    },
    {
      id: "131",
      who: "000",
      name: "prod3", quantity: 45, skut: 5, supId: "sup1", ipc: 5, image: "https://ionicframework.com/docs/img/demos/thumbnail.svg", price: 15, description: "hi",
      orderedDate: new Date("2022-04-25"),
      expectedDate: new Date("2022-04-26"),
      receivedDate: new Date("2022-04-28"),
      cartoons: 5,
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
        who: "123",
        id: "555", myShiftId: "664", otherShiftId: "654", isApproved: false
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
      id: "654", empId: "123", day: new Date("2022-12-29"), startTime: new Date("2022-12-27"), endTime: new Date("2022-05-01")
    },
    {
      who: "000",
      id: "664", empId: "456", day: new Date("2022-12-27"), startTime: new Date("2022-12-27"), endTime: new Date("2022-05-01")
    },
  ]
  public shiftRequests: ShiftRequest[] = [
    {
      who: "456",// emp2, //emp1
      id: "555", myShiftId: "664", otherShiftId: "654", isApproved: false
    }
  ]

  me
  today: Date = new Date();
  constructor(public toastCtrl: ToastController, public navCtrl: NavController) {
    // this.me = this.users[0];
    // this.me = this.users[1];
    // this.me = this.users[4];
    this.me = this.users[3];
  }

  currOrderCart: CartItems = {};
  currOrderCartTotal: number = 0;


  onlyOwner(): void {
    if (this.me.type != "owner") {
      this.navCtrl.navigateRoot('/');
    }
  }
  isOwner(): boolean {
    return this.me.type == "owner";
  }
  isFav(orderId: string) {
    return this.getFav(orderId) != null
  }
  signOut(id) {
    console.log("sign out")
  }
  getFav(id) {
    for (const i of this.fav) {
      if (i.id == id)
        return i;
    }
    return null;
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

  // filter
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

  getMyShiftRequestFull() {
    return this.getMyShiftRequest().map(row => {
      var myShift = this.getShift(row.myShiftId);
      var otherShift = this.getShift(row.otherShiftId);
      return {
        id: row.id,
        otherEmp: this.getUser(row.who),
        otherShiftId: otherShift?.id,
        otherShiftDay: otherShift?.day,
        otherShiftST: otherShift?.startTime,
        otherShiftET: otherShift?.endTime,
        myShiftId: myShift?.id,
        myShiftDay: myShift?.day,
        myShiftST: myShift?.startTime,
        myShiftET: myShift?.endTime
      }
    });
  }
  getMyShiftRequest() {
    return this.shiftRequests.filter((row) => {
      // if older don't include
      if (this.getShift(row.otherShiftId)?.empId == this.me.id) {
        if (this.getShift(row.myShiftId)!.startTime.getTime() < this.today.getTime()) {
          return false;
        } else
          // if by me include
          return (row.who != this.me.id) ? true : false;
      }
      return false;
    });
  }
  getOrderCartLength(cartOrders) {
    return Object.keys(cartOrders).length
  }
  getProdNeedToOrder() {
    return this.products.filter(x => {
      return (x.quantity < x.skut) ? true : false;
    })
  }
  getProdNeedToOrderGS(s) {
    return this.getSupProducts(s).filter(x => {
      return (x.quantity <= x.skut) ? true : false;
    })
  }
  getCurrOrderCartLength() {
    return Object.keys(this.currOrderCart).length
  }


  setProduct(id, key, value) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        switch (key) {
          case "all":
            value = {} as Product
            this.products[i].who = this.me.id
            this.products[i].name = value.name
            this.products[i].price = value.price
            this.products[i].quantity = value.quantity
            this.products[i].skut = value.skut
            this.products[i].supId = value.supId
            this.products[i].ipc = value.ipc
            this.products[i].description = value.description
            this.products[i].image = value.image
            break;
          case "n"://1
            this.products[i].name = value
            break;
          case "q":
            this.products[i].quantity = value
            break;
          case "skut"://3
            this.products[i].skut = value
            break;
          case "sup":
            this.products[i].supId = value
            break;
          case "ipc"://5
            this.products[i].ipc = value
            break;
          case "img":
            this.products[i].image = value
            break;
          case "p"://7
            this.products[i].price = value
            break;
          case "d":
            this.products[i].description = value
            break;
          default:
            break;
        }
      } else console.log("product not found");
    }
  }
  setShiftEmp(id, val) {
    for (let i = 0; i < this.shifts.length; i++) {
      const s = this.shifts[i];
      if (s.id == id) {
        this.shifts[i].empId = val;
      }
    }
  }
  trade(mS, oS, SRid) {
    var m = this.getShift(mS);
    var o = this.getShift(oS);
    // console.log(m)
    // console.log(o)
    var temp = m?.empId
    this.setShiftEmp(m?.id, o?.empId)
    this.setShiftEmp(o?.id, temp)
    this.presentToastS("Shift Treaded Successfully")
    // console.log(m)
    // console.log(o)
    this.removeShiftReqSilent(SRid);
  }



  // add
  addToFav(i) {
    // i.who = this.me.id;
    (this.getOrder(i) != null) ? this.fav.push(this.getOrder(i)!) : console.log(i)
    console.log(this.fav)
    this.presentToastSB("Order Favored Successfully")
  }

  addToOrderCart(id: any, ipc) {
    if (this.currOrderCart[id] > 0) {
      this.currOrderCart[id] += ipc;
    } else
      this.currOrderCart[id] = ipc;
    // this.setProduct(id, "q", this.getProduct(id)?.quantity + ipc)
    // console.log(this.currOrderCart)
  }

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
  addOrder(i: OrderCart) {
    i.who = this.me.id;
    console.log(this.orders.length);
    this.orders.push(i);
    console.log(this.orders.length);
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
  reOrder(id) {
    var o = this.getFav(id)
    var speed = o!.expectedDate.getTime() - o!.orderedDate.getTime()
    o!.orderedDate = new Date();
    o!.expectedDate = new Date(o!.orderedDate.getTime() + speed);
    this.addOrder(o!);
  }
  // --------------------------------------------------------------  remove
  removeFromFav(id: string) {
    for (let i = 0; i < this.fav.length; i++) {
      const element = this.fav[i];
      if (element.id == id) this.fav.splice(i, 1);;
    }
    this.presentToastFB("Order Unfavored Successfully");
  }
  removeProduct(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == id) this.products.splice(i, 1);;
    }
    this.presentToastS("Product Removed Successfully");
  }
  removeOrder(id: string) {
    for (let i = 0; i < this.orders.length; i++) {
      const element = this.orders[i];
      if (element.id == id) this.orders.splice(i, 1);;
    }
    this.presentToastS("Order Removed Successfully");
  }
  removeUser(id: string) {
    var element
    for (let i = 0; i < this.users.length; i++) {
      element = this.users[i];
      if (element?.id == id) this.users.splice(i, 1);;
    }
    this.presentToastS(`${element.name} Removed Successfully`);
    console.log(this.users);
    console.log(this.emp);
  }
  removeEmp(id: string) {
    for (let i = 0; i < this.emp.length; i++) {
      const element = this.emp[i];
      if (element.id == id) this.emp.splice(i, 1);;
    }
    // this.presentToastS("Emp Removed Successfully");
  }
  removeShift(id: string) {
    for (let i = 0; i < this.shifts.length; i++) {
      const element = this.shifts[i];
      if (element.id == id) this.shifts.splice(i, 1);;
    }
    this.shiftRequests.forEach(s => {
      if (s.myShiftId == id) this.removeShiftReqSilent(s.myShiftId)
      if (s.otherShiftId == id) this.removeShiftReqSilent(s.otherShiftId)
    });
    this.presentToastS("Shift Removed Successfully");
  }
  removeShiftReq(id: string) {
    for (let i = 0; i < this.shiftRequests.length; i++) {
      const element = this.shiftRequests[i];
      if (element.id == id) this.shiftRequests.splice(i, 1);;
    }
    this.presentToastS("Shift Request Removed Successfully");
  }
  removeShiftReqSilent(id: string) {
    for (let i = 0; i < this.shiftRequests.length; i++) {
      const element = this.shiftRequests[i];
      if (element.id == id) this.shiftRequests.splice(i, 1);;
    }
    // this.presentToastS("Shift Request Removed Successfully");
  }
  // TODO: better way to remove
  removeFromOrderCart(id: any, ipc) {
    if (this.currOrderCart[id] > 1) {
      this.currOrderCart[id] -= ipc;
      // this.setProduct(id, "q", (this.getProduct(id)!.quantity - ipc));
    } else
      delete this.currOrderCart[id]
    // console.log(this.currOrderCart)
  }


  // present toast
  async presentToastS(massage: string) {
    const toast = await this.toastCtrl.create({
      message: massage,
      duration: 500,
      color: 'primary',
      position: 'top',
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });
  }
  async presentToastSB(massage: string) {
    const toast = await this.toastCtrl.create({
      message: massage,
      duration: 500,
      color: 'primary',
      position: 'bottom',
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });
  }

  async presentToastF(massage: string) {
    const toast = await this.toastCtrl.create({
      message: massage,
      duration: 500,
      color: 'danger',
      position: 'top',
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });
  }
  async presentToastFB(massage: string) {
    const toast = await this.toastCtrl.create({
      message: massage,
      duration: 500,
      color: 'danger',
      position: 'bottom',
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });
  }

  // Search
  // ----------------- Ordered
  isSearchedOrdered: boolean = false;
  searchedOrdered: Product[] = [] as Product[];
  searchOrdered(event, base) {
    console.log(base)
    if (event.target.value.length > 0) {
      switch (base) {
        case "p":
          this.searchOrderedBN(event);
          break;
        case "s":
          this.searchOrderedBS(event);
          break;
        default:
          this.searchOrderedBN(event);
          break;
      }
    } else {
      this.isSearchedOrdered = false;
    }
  }
  searchOrderedBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.ordered.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedOrdered = filteredList;
      // console.log(filteredList)
      this.isSearchedOrdered = true;
    } else {
      this.isSearchedOrdered = false;
    }
  }

  searchOrderedBS(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.ordered.filter((row) => {
        var sup = this.getUser(row.supId)
        if (sup?.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.searchedOrdered = filteredList;
      // console.log(filteredList)
      this.isSearchedOrdered = true;
    } else {
      this.isSearchedOrdered = false;
    }
  }
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
      var filteredList = this.ordered.filter((row) => {
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

  isHiOrdered: boolean = false;
  hiOrdered: Product[] = [] as Product[];
  hiOrderedBN(event: any) {
    if (event.target.value.length > 0) {
      var filteredList = this.ordered.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
          return true;
        } else {
          return false;
        }
      });
      this.hiOrdered = filteredList;
      // console.log(filteredList)
      this.isHiOrdered = true;
    } else {
      this.isSearchedOrdered = false;
    }
  }
  checkHiOrdered(id) {
    for (const i of this.hiOrdered) {
      if (i.id == id)
        return true;
    }
    return false;
  }

  calcOrderCartTotal(order: OrderCart): number {
    order.total = 0
    for (const prod in order.cart) {
      if (Object.prototype.hasOwnProperty.call(order.cart, prod)) {
        const quantity = order.cart[prod];
        const price = this.getProduct(prod)?.price
        order.total += quantity * price!
      }
    }
    return order.total
  }
  calcCurrOrderCartTotal(): number {
    var total = 0
    for (const prod in this.currOrderCart) {
      if (Object.prototype.hasOwnProperty.call(this.currOrderCart, prod)) {
        const quantity = this.currOrderCart[prod];
        const price = this.getProduct(prod)?.price
        total += quantity * price!
      }
    }
    this.currOrderCartTotal = total
    return total
  }




  onFav(orderCartId: string) {
    (this.isFav(orderCartId)) ? this.removeFromFav(orderCartId) : this.addToFav(orderCartId)
  }

  onDeliver(orderCartId) {
    var receivedDate = new Date();
    var orderCart = this.getOrder(orderCartId)
    this.removeOrder(orderCartId);
    var cart = orderCart!.cart
    var expectedDate = orderCart!.expectedDate
    var orderedDate = orderCart!.orderedDate
    for (const order in cart) {
      if (Object.prototype.hasOwnProperty.call(cart, order)) {
        const quantity = cart[order];
        const p = this.getProduct(order)!
        // 1. added to the product quantities
        this.setProduct(order, "q", p.quantity + quantity)
        // 2. add to ordered list
        console.log(this.ordered.length)
        this.ordered.push({
          id: p.id,
          who: this.me.id,
          orderedDate: orderedDate,
          expectedDate: expectedDate,
          receivedDate: receivedDate,
          cartoons: quantity / p.ipc,
          name: p.name,
          quantity: quantity,
          skut: p.skut,
          supId: orderCart!.sup,
          ipc: p.ipc,
          image: p.image,
          price: p.price,
          description: p.description
        })
      }
    }
    console.log(this.ordered.length)
    console.log(this.getProdNeedToOrder())
    this.presentToastS("Order Delivered Successfully");
  }


  //check if all Positive
  allP(e) {
    // console.log(this.isAllP);
    return (e.target.value < 1) ? false : true;
  }
}
