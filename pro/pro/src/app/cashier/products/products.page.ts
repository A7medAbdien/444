import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  searchBase: string = 'p'
  sh
  constructor(public d: DataService) { }

  ngOnInit() {
  }

}
