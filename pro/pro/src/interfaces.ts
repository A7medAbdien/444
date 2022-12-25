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

export interface Order extends Product {
  id?: string;
  who: string;
  orderedDate: Date;
  expectedDate: Date;
  receivedDate: Date;
  cartoons: number;
  orderedBy: string;
}

export interface User {
  id?: string;
  who: string;
  type: string;
  name: string;
  email: string;
  phone: number;
  image: string;
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
