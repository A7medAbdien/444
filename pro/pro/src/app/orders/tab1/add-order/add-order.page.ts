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
  addEmp: FormGroup
  constructor(public d: DataService, public ActRoute: ActivatedRoute, public fb: FormBuilder) {
    this.addEmp = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(2), Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+")])],
      pass: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      sup: ['', Validators.compose([Validators.required])],
      img: [''],
    });
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
