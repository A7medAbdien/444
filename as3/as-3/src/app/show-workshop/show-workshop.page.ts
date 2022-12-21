import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-show-workshop',
  templateUrl: './show-workshop.page.html',
  styleUrls: ['./show-workshop.page.scss'],
})
export class ShowWorkshopPage implements OnInit {

  constructor(public d: DataListService) { }

  ngOnInit() {
  }

  addWithAlert() { }
}
