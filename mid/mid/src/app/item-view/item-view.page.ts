import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.page.html',
  styleUrls: ['./item-view.page.scss'],
})
export class ItemViewPage implements OnInit {

  list: any;
  constructor(dataSer: DataService) {
    this.list = dataSer.List;
  }

  ngOnInit() {
  }

}
