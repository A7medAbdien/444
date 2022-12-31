import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Gesture, GestureController, IonItem, ToastController } from '@ionic/angular';

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
  // get ViewChildren
  @ViewChild('dropzoneA') dropA: ElementRef;
  @ViewChild('dropzoneB') dropB: ElementRef;
  @ViewChildren(IonItem, { read: ElementRef }) items: QueryList<ElementRef>;
  public myArray = [1, 2, 3, 4, 5, 6];
  public teamA = [];
  public teamB = [];
  contentScrollActive = true;
  gestureArray: Gesture[] = [];


  constructor(private gestureCtrl: GestureController, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.updateGestures();
  }

  updateGestures() {
    this.gestureArray.map(gesture => gesture.destroy());
    this.gestureArray = [];

    const arr = this.items.toArray();

    // ############################# Set gesture for each child
    for (let i = 0; i < arr.length; i++) {
      const oneItem = arr[i];
      const drag = this.gestureCtrl.create({
        el: oneItem.nativeElement,
        threshold: 1,
        gestureName: 'drag',
        onStart: ev => {
          oneItem.nativeElement.style.transition = '';
          oneItem.nativeElement.style.opacity = '0.8';
          oneItem.nativeElement.style.fontWeight = 'bold';
          this.changeDetectorRef.detectChanges();
        },
        onMove: ev => {
          oneItem.nativeElement.style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
          oneItem.nativeElement.style.zIndex = 11;
          this.checkDropZoneHover(ev.currentX, ev.currentY);
        },
        onEnd: ev => {
          this.handleDrop(oneItem, ev.currentX, ev.currentY, i);
        }
      }); // end of Gesture Configuration

      drag.enable();
      this.gestureArray.push(drag);
    } // end of loop

    this.items.changes.subscribe(res => {
      this.updateGestures();
    });
  }

  // Check if we are dragging above a zone
  checkDropZoneHover(x, y) {
    const dropA = this.dropA.nativeElement.getBoundingClientRect();
    const dropB = this.dropB.nativeElement.getBoundingClientRect();
    if (this.isInZone(x, y, dropA)) {
      this.dropA.nativeElement.style.backgroundColor = '#009fff';
    } else {
      this.dropA.nativeElement.style.backgroundColor = 'white';
    }
    if (this.isInZone(x, y, dropB)) {
      this.dropB.nativeElement.style.backgroundColor = 'red';
    } else {
      this.dropB.nativeElement.style.backgroundColor = 'white';
    }
  }


  // check if coordinates are within a dropzone rect
  isInZone(x, y, dropzone) {
    if (x < dropzone.left || x >= dropzone.right) {
      return false;
    }
    if (y < dropzone.top || y >= dropzone.bottom) {
      return false;
    }
    return true;
  }


  // Decide what to do with dropped item
  handleDrop(item, endX, endY, index) {
    const dropA = this.dropA.nativeElement.getBoundingClientRect();
    const dropB = this.dropB.nativeElement.getBoundingClientRect();
    // Dropped in Zone A
    if (this.isInZone(endX, endY, dropA)) {
      item.nativeElement.remove();
      const removeditem = this.myArray.splice(index, 1);
      this.teamA.push(removeditem[0]);
    } else if (this.isInZone(endX, endY, dropB)) {
      item.nativeElement.remove();
      const removeditem = this.myArray.splice(index, 1);
      this.teamB.push(removeditem[0]);
    }
    // don't drop it in a zone, bring it back to the initial position
    else {
      item.nativeElement.style.transition = '.2s ease-out';
      item.nativeElement.style.zIndex = 'inherit';
      item.nativeElement.style.transform = `translate(0,0)`;
      item.nativeElement.style.opacity = '1';
      item.nativeElement.style.fontWeight = 'normal';
    }
    this.dropA.nativeElement.style.backgroundColor = 'white';
    this.dropB.nativeElement.style.backgroundColor = 'white';
    this.updateGestures();
  }

}
