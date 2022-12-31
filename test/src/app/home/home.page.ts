import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GestureController, ToastController } from '@ionic/angular';

export interface Idea {
  id?: string,
  name: string,
  notes: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('rectangle') rect: ElementRef;
  public type;
  public currentX;
  ngAfterViewInit(): void {
    this.updateGestures();
  }

  updateGestures() {
    const drag = this.gestureCtrl.create({
      el: this.rect.nativeElement,
      threshold: 1,
      gestureName: 'drag',
      onMove: ev => {
        this.type = ev.type;
        this.currentX = ev.currentX;
        if (ev.currentX > 200) this.presentToast()
        console.log(this.currentX);
        console.log(this.type);
      }
    });
    drag.enable();
  }

  constructor(private gestureCtrl: GestureController, public toastCtrl: ToastController) { }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color: 'primary',
      position: 'top',
      buttons: [{
        text: 'wow', handler: () => {
          toast.dismiss();
        }
      }]
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });

  }

}
