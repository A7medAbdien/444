import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.page.html',
  styleUrls: ['./add-shift.page.scss'],
})
export class AddShiftPage implements OnInit {
  empId
  startTime
  endTime

  constructor(public d: DataService) {
  }

  ngOnInit() {
    this.d.onlyOwner();
  }

  addShift() {
    console.log(this.d.shifts)
    this.d.addShift(this.startTime, this.endTime, this.empId);
    console.log(this.d.shifts)
  }
}
