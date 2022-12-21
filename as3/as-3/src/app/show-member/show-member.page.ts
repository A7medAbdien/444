import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-show-member',
  templateUrl: './show-member.page.html',
  styleUrls: ['./show-member.page.scss'],
})
export class ShowMemberPage implements OnInit {

  constructor(public d: DataListService) { }

  addWithAlert() {
    this.d.addWithAlert();
  }
  ngOnInit() {
  }


}
