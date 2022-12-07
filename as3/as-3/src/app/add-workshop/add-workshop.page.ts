import { Workshop } from './../data-list.service';
import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-add-workshop',
  templateUrl: './add-workshop.page.html',
  styleUrls: ['./add-workshop.page.scss'],
})
export class AddWorkshopPage implements OnInit {

  constructor(public d: DataListService) { }

  ngOnInit() {
  }

  addWithAlert() {
    console.log(this.d.current_workshop)
    this.d.addWorkshopWithAlert()
  }
}
