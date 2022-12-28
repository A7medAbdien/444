import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  id
  o
  cartIds
  constructor(public d: DataService, public ActRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.ActRoute.snapshot.paramMap.get('id');
    this.o = this.d.getOrder(this.id)
    this.cartIds = Object.keys(this.o.cart)
  }

}
