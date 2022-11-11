import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { DataListService } from '../data-list.service'; 
import { DataListService } from './../data-list.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  filteredList = [];
  selectedType;

  constructor(public alertCtrl: AlertController, public d: DataListService) {
    this.filteredList = [];
    this.selectedType;

  }

  ngOnInit() {
  }

  // -------------------------------- Methods -----------------------------


  // Delete a member
  DeleteItem(item) {
    var i = this.d.list.indexOf(item);
    if (i > -1) {
      this.d.list.splice(i, 1);
    }
  }

  // Filter
  filterList(type) {
    this.filteredList = this.d.list.filter((x) => {
      if (type == "all")
        return true;
      return (x.membership_type == type)
    })
  }



}
