import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-requests',
  templateUrl: './trade-requests.page.html',
  styleUrls: ['./trade-requests.page.scss'],
})
export class TradeRequestsPage implements OnInit {
  today: Date
  constructor(public d: DataService) {
    this.today = new Date();
    // this.myShReq = this.d.getMyShiftRequestFull();
  }

  myShReq
  ngOnInit() {
    this.myShReq = this.d.getMyShiftRequestFull();
  }
  onTrad(mS, oS, SRid) {
    this.d.trade(mS, oS, SRid)
    this.myShReq = this.d.getMyShiftRequestFull();
  }

}
