import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-show-workshop',
  templateUrl: './show-workshop.page.html',
  styleUrls: ['./show-workshop.page.scss'],
})
export class ShowWorkshopPage implements OnInit {

  constructor(public d: DataListService, public ActRoute: ActivatedRoute) { }

  workshopIndex;
  ngOnInit() {
    this.workshopIndex = this.ActRoute.snapshot.paramMap.get('workshopIndex');
    this.d.shown_workshop = this.d.workshops[this.workshopIndex];
  }

  addWithAlert() { }
}
