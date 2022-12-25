
import { CashierService } from 'src/app/services/cashier.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  constructor(public cashier: CashierService, public formBuilder: FormBuilder) {
    this.PayForm = formBuilder.group({
      inputPrice: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+.[0-9]*')])]
    })
  }

  PayForm: FormGroup;
  c
  i: number = 0;
  remaining
  ngOnInit() {
    // console.log(this.cashier.cartItems);
    this.cashier.moveToPay();
    // console.log(this.cashier.cartItems);
    this.c = this.cashier.cart
  }

  getRemaining(event) {
    if (event.target.value.length > 0) {
      this.i = event.target.value
      this.remaining = event.target.value - this.c.total;
      if (this.remaining < 0) this.remaining *= -1
    }
  }
  pay() {
    this.c.paymentDate = new Date();
    this.c.remaining = this.remaining;
    this.cashier.cart = this.c
  }
  cancelPay() {
    this.c = {}
    this.remaining = 0
  }
}
