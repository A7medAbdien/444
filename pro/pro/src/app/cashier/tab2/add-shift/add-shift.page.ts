import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.page.html',
  styleUrls: ['./add-shift.page.scss'],
})
export class AddShiftPage implements OnInit {

  constructor(public d: DataService) { }

  ngOnInit() {
    this.d.onlyOwner();
  }

}
