import { DataListService, Workshop } from './../data-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public d: DataListService) { }
  showAlert(workshop) { this.d.showWorkshopAlert(workshop) }
  DeleteWorkshop(workshop) { }
}
