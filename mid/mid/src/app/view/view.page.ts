import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  ngOnInit(): void {
  }

  constructor(public AlertCtrl: AlertController, public formBuilder: FormBuilder, dataSer: DataService) {
    this.productForm = formBuilder.group({
      productId: [''],
      productName: [''],
      productScore: [''],
      productIcon: [''],
    });
    this.list = dataSer.List;
  }


  // ------------------------- attributes -------------------------
  productForm: FormGroup;
  list;

  // ------------------------- Methods -------------------------
  insertItem(data: any): void {
    this.list.push({
      id: data.productId,
      name: data.productName,
      score: data.productScore,
      icon: data.productIcon,
    });
    console.log(this.list);
  }
  async onSubmit() {
    let alert = await this.AlertCtrl.create({
      header: "Insertion Alert",
      message: "Sure you want to insert this Item",
      buttons: ['Ok']
    });
    alert.present();
  }
}
