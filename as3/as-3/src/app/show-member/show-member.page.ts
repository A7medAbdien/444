import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-show-member',
  templateUrl: './show-member.page.html',
  styleUrls: ['./show-member.page.scss'],
})
export class ShowMemberPage implements OnInit {
  memberIndex;
  constructor(public d: DataListService, public ActRoute: ActivatedRoute) { }

  addWithAlert() {
    this.d.addWithAlert();
  }
  ngOnInit() {
    this.memberIndex = this.ActRoute.snapshot.paramMap.get('memberIndex');
    this.d.shown_student = this.d.list[this.memberIndex];
    // console.log(this.memberIndex);
    // console.log(this.d.shown_student);
  }


}
