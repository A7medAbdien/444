import { DataService } from 'src/app/services/data.service';
import { Shift } from './../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { CashierService } from 'src/app/services/cashier.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  shifts: Shift[]
  today: Date
  checkedDate
  isFiltered: Boolean
  filteredList: Shift[] = [] as Shift[]

  constructor(public d: DataService) {
    this.shifts = this.d.shifts;
    this.today = new Date();
    this.isFiltered = true;
    this.filterDate(this.today)
  }

  ngOnInit() {
  }

  filterDate(date) {
    this.isFiltered = true
    // console.log(date);
    let day = new Date(date);
    var filteredlist = this.shifts.filter((row) => {
      if (row.day.getDate() == day.getDate() && row.day.getMonth() == day.getMonth() && row.day.getFullYear() == day.getFullYear()) {
        return true;
      } else {
        return false;
      }
    });
    this.filteredList = filteredlist;
  }


  getEmp(id) {
    return this.d.getEmp(id)
  }

  stopFilter() {
    this.isFiltered = false;
  }

}
