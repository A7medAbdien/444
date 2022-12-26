import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {


  name
  qty
  skut
  sup
  ipc
  img
  price
  description
  addProd: FormGroup
  constructor(public d: DataService, public fb: FormBuilder) {
    this.addProd = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(2), Validators.maxLength(30)])],
      qty: ['', Validators.compose([Validators.required])],
      skut: ['', Validators.compose([Validators.required])],
      sup: ['', Validators.compose([Validators.required])],
      ipc: ['', Validators.compose([Validators.required])],
      img: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      des: [''],
    });
  }
  isAllP = true;
  allP(e) {
    (e.target.value < 1) ? this.isAllP = false : this.isAllP = true;
    console.log(this.isAllP);
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  ngOnInit() {
  }

  check(val) {
    console.log(val);

  }

}
