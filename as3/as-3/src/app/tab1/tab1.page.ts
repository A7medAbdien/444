import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { DataListService } from '../data-list.service';
import { DataListService, Student } from './../data-list.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public alertCtrl: AlertController, public d: DataListService) { }

  ngOnInit() { }

  // ------------------------------- Attributes ---------------------------

  filteredList: Student[] = [];
  // filteredList = [];
  selectedType;

  // -------------------------------- Methods -----------------------------

  // Delete a member
  DeleteMember(member: Student) {
    var i = this.d.list.indexOf(member);
    var j = this.filteredList.indexOf(member);

    if (i > -1) this.d.list.splice(i, 1);
    if (j > -1) this.filteredList.splice(i, 1);
  }

  // Filter
  filterList(type) {
    this.filteredList = this.d.list.filter((x) => {
      if (type == "all")
        return true;
      return (x.membership_type == type)
    })
  }

  // Show Alert
  showAlert(member) {
    this.d.showAlert(member);
  }

}
