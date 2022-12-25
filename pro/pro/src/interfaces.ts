export interface Product {
  id?: string;
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
  cartItems: CartItems,
  total: number;
  paymentDate: Date;
}

export interface CartItems { [key: string]: number };

export interface Order extends Product {
  oId?: string;
  orderedDate: Date;
  expectedDate: Date;
  receivedDate: Date;
  cartoons: number;
  orderedBy: string;
}

export interface User {
  id?: string;
  type: string;
  name: string;
  email: string;
  phone: number;
  image: string;
}

export interface emp extends User {
  shifts: Shift[],
  shiftsRequests: ShiftRequest[]
}

export interface Shift {
  id?: string;
  empId: string;
  day: Date;
  startTime: Date;
  endTime: Date;
}

export interface ShiftRequest {
  id?: string;
  senderEmail: string;
  receiverEmail: string;
  shiftId: string;
  isApproved: boolean;
}
