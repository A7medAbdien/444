import { Component, OnInit } from '@angular/core';
import { CashierService } from 'src/app/services/cashier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public cashier: CashierService) { }

  ngOnInit() {
  }

}
