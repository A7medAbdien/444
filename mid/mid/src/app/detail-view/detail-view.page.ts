import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {


  public RateArray = [
    { value: 1, fill: "outline" },
    { value: 2, fill: "outline" },
    { value: 3, fill: "outline" },
    { value: 4, fill: "outline" }
  ];

  list;
  constructor(dataSer: DataService) {
    this.list = dataSer.List;
  }

  ngOnInit() {
  }

  setRating(val: number) {
    for (var i = 0; i < this.RateArray.length; i++) {
      if (i < val) {
        this.RateArray[i].fill = "solid";
      }
      else {
        this.RateArray[i].fill = "outline";
      }
    } // end for 
  }

}//


