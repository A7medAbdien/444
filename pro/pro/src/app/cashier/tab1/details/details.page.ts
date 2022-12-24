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
  myProduct;
  constructor(public ActRoute: ActivatedRoute, public cashier: CashierService) { }

  ngOnInit() {
    this.id = this.ActRoute.snapshot.paramMap.get('id');
  }

  getProduct(id) {
    this.myProduct = this.cashier.getProduct(id);
  }

}
