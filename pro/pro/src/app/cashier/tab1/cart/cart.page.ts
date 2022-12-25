import { CashierService } from 'src/app/services/cashier.service';
import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartIds
  constructor(public cashier: CashierService) { }

  ngOnInit() {
    this.cartIds = Object.keys(this.cashier.cartItems)
  }
  deleteCart() {
    // console.log(this.cartIds)
    // console.log(this.cashier.cartItems)
    this.cashier.deleteCart();
    this.cartIds = [];
    // console.log(this.cartIds)
  }
  pay() {
    this.cartIds = [];
  }
}
