import { Shift, ShiftRequest } from './../../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
})
export class TradePage implements OnInit {

  id
  myShiftId
  myShifts
  otherShift
  shiftReq: ShiftRequest = {} as ShiftRequest;

  constructor(public ActRoute: ActivatedRoute, public d: DataService) { }
  ngOnInit() {
    this.id = this.ActRoute.snapshot.paramMap.get('id');
    this.otherShift = this.d.getShift(this.id);
    this.myShifts = this.d.me.shifts;
  }

  addShiftReq() {
    this.d.addShiftReq(this.myShiftId, this.otherShift.id);
    console.log(this.d.shiftRequests)
    console.log(this.d.emp[0].shiftsRequests)
    console.log(this.myShiftId + this.otherShift)
  }
}
