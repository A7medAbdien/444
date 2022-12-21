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
  workshopIndex = -1;
  constructor(public d: DataListService, public ActRoute: ActivatedRoute) { }

  ngOnInit() {
    this.memberIndex = this.ActRoute.snapshot.paramMap.get('memberIndex');
    this.d.shown_student = this.d.list[this.memberIndex];
    // console.log(this.memberIndex);
    // console.log(this.d.shown_student);
  }

  addMemberToWorkshop() {
    this.d.addMemberToWorkshop(this.workshopIndex, this.d.shown_student);
    this.workshopIndex = -1;
  }

}
