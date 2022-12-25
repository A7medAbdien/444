import { CashierService } from 'src/app/services/cashier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id;
<<<<<<< HEAD
  p;
=======
  myProduct;
>>>>>>> 64c0bfc633403f758f6f40c9bbd66af9de09fda6
  constructor(public ActRoute: ActivatedRoute, public cashier: CashierService) { }

  ngOnInit() {
    this.id = this.ActRoute.snapshot.paramMap.get('id');
<<<<<<< HEAD
    this.getProduct(this.id)
=======
  }

  getProduct(id) {
    this.myProduct = this.cashier.getProduct(id);
>>>>>>> 64c0bfc633403f758f6f40c9bbd66af9de09fda6
  }

  getProduct(id) {
    this.p = this.cashier.getProduct(id);
  }


}
