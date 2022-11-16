import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  ngOnInit(): void {
  }
  private _storage: Storage | null = null;

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  constructor(public AlertCtrl: AlertController, public formBuilder: FormBuilder, dataSer: DataService, private storage: Storage) {
    this.init();
    this.productForm = formBuilder.group({
      productId: [''],
      productName: [''],
      productScore: [''],
      productIcon: [''],
    });
    this.list = dataSer.List;

    this.storage.get("list")
      .then((res) => {
        console.log(res);
        this.list = JSON.parse(res);
      })
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

  save() {
    this.storage.set("List", JSON.stringify(this.list))
  }
}
