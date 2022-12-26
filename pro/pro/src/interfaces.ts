export interface Product {
  id?: string;
  who: string;
  name: string;
  quantity: number;
  skut: number; // Stock Keeping Unit Threshold
  supId: string;
  ipc: number; // Item Per Cartoon
  image: string;
  price: number;
  description: string;
};

export interface Cart {
  id?: string;
  who: string;
  cartItems: CartItems,
  total: number;
  paymentDate: Date;
  remaining: number;
}

export interface CartItems { [key: string]: number };

export interface OrderCart {
  id?: string;
  who: string;
  sup: string;
  cartItems: CartItems,
  total: number;
  orderedDate: Date;
  expectedDate: Date;
  receivedDate: Date;
}

export interface Order extends Product {
  id?: string;
  who: string;
  orderedDate: Date;
  expectedDate: Date;
  receivedDate: Date;
  cartoons: number;
}

export interface User {
  id?: string;
  who: string;
  type: string;
  name: string;
  email: string;
  phone: number;
  image: string;
  pass: string;
}

export interface Emp extends User {
  shifts: Shift[],
  shiftsRequests: ShiftRequest[]
}

export interface Shift {
  id?: string;
  who: string;
  empId: string;
  day: Date;
  startTime: Date;
  endTime: Date;
}

export interface ShiftRequest {
  id?: string;
  who: string;
  myShiftId: string;
  otherShiftId: string;
  isApproved: boolean;
}

// export interface fullShReq {
//   otherEmp: string,
//   otherShiftDay: Date,
//   otherShiftST: Date,
//   otherShiftET: Date,
//   myShiftDay: Date,
//   myShiftST: Date,
//   myShiftET: Date,
// }
