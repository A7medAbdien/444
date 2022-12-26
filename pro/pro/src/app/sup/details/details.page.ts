import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id
  sup;
  constructor(public ActRoute: ActivatedRoute, public d: DataService) { }

  ngOnInit() {
    this.id = this.ActRoute.snapshot.paramMap.get('id');
    this.getSup(this.id)
  }

  getSup(id) {
    this.sup = this.d.getUser(id)
  }
}
