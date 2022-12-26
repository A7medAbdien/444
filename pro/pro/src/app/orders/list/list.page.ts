import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  sh
  searchBase = "p"
  constructor(public d: DataService) { }

  toOrder
  ngOnInit() {
    this.toOrder = this.d.getProdNeedToOrder()
  }

}
