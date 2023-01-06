import { Order, OrderCart } from './../../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})
export class AddOrderPage implements OnInit {

  o;
  oc: OrderCart = {} as OrderCart;
  cartIds
  isSupSelected = false
  constructor(public d: DataService, public ActRoute: ActivatedRoute, public fb: FormBuilder) {

  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  phoneCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} number remaining`;
  }

  addOrder() {
    this.oc.cart = this.d.currOrderCart
    this.d.addOrder(this.oc);
  }

  ngOnInit() {
    this.d.notSup()
    // this.o = this.d.getOrder("156")
    this.cartIds = Object.keys(this.oc.cart)
  }
}
