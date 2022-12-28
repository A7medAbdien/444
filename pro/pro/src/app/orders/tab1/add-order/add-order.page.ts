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

  o
  cartIds
  constructor(public d: DataService, public ActRoute: ActivatedRoute, public fb: FormBuilder) {

  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  phoneCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} number remaining`;
  }

  addEmpVal(val) {
    this.d.addEmp(val);
  }

  ngOnInit() {
    this.o = this.d.getOrder("156")
    this.cartIds = Object.keys(this.o.cartItems)
  }
}
