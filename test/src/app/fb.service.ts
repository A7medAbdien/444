import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface User {
  name: string,
  shift: boolean[],
  quantity: number,
  status: string,
  approved: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FBService {




  userStatus: string;
  verifyClicked: boolean = false;
  verify(isInvalid) {
    this.verifyClicked = true
    if (isInvalid) {
      this.userStatus = 'Error';
    } else {
      this.userStatus = 'Pending';
    }
  }
  shifts = [
    { t: "Morning Shift", v: false },
    { t: "Afternoon Shift", v: false },
    { t: "Night Shift", v: false }]
  // shiftValue = [false, false, false]
  // shiftValue(){}


  qty = 0
  addQty() { this.qty++ }
  removeQty() { if (this.qty > 0) this.qty-- }

  isApproved = false

  submit() {

  }
  submitAny() { }
}
