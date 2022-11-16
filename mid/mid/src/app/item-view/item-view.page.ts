import { Component, OnInit } from '@angular/core';
import { DataService, Product } from '../data.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.page.html',
  styleUrls: ['./item-view.page.scss'],
})
export class ItemViewPage implements OnInit {

  list: Product[] = [];
  currentItem: any;
  constructor(dataSer: DataService) {
    this.list = dataSer.List;
  }

  onSelect(e: any) {
    console.log(e.target.value);
    let id: number = e.target.value;
    this.currentItem = this.list.find(product => product.id == id);
    console.log(this.currentItem);
  }
  ngOnInit() {
  }

}
