import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
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

  public users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, public AlertCtrl: AlertController) {
    this.userCollection = this.afs.collection<User>('finalExam');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    console.log(this.users)
  }

  addUser(user: User): Promise<DocumentReference> {
    return this.userCollection.add(user);
  }

  name
  userStatus: string;
  verifyClicked: boolean = false;
  isValidName
  verify(isInvalid) {
    this.verifyClicked = true
    if (isInvalid) {
      this.userStatus = 'Error';
    } else {
      this.userStatus = 'Pending';
      this.isValidName = true
    }
  }
  shifts = [
    { t: "Morning Shift", v: false },
    { t: "Afternoon Shift", v: false },
    { t: "Night Shift", v: false }]
  // shiftValue = [false, false, false]
  // shiftValue(){}
  getShiftValue() {
    var shiftValue = []
    for (const i of this.shifts) {
      shiftValue.push(i.v)
    }
    return shiftValue;
  }


  qty = 0
  addQty() { this.qty++ }
  removeQty() { if (this.qty > 0) this.qty-- }

  isApproved = false

  submit() {
    var user: User = {
      name: this.name,
      shift: this.getShiftValue(),
      quantity: this.qty,
      status: this.userStatus,
      approved: this.isApproved
    }
    if (this.isValidName) {
      this.addUser(user)
      this.showAlert("Successful", "Good job")
    } else {
      console.log(user)
      this.showAlert("Error", "Try Again")
    }
  }
  submitAny() {
    var user: User = {
      name: this.name,
      shift: this.getShiftValue(),
      quantity: this.qty,
      status: this.userStatus,
      approved: this.isApproved
    }
    console.log(user)
    this.addUser(user)
  }

  async showAlert(title, msg) {
    let alert = await this.AlertCtrl.create({
      header: title,
      message: msg,
    });
    alert.present();
  }

  reset() {
    this.name = ''
  }




  getUsers(): Observable<User[]> {
    return this.users;
  }
  // getUser(id: string): Observable<User> {
  //   return this.userCollection.doc<User>(id).valueChanges().pipe(
  //     map(user => {
  //       user.id = id;
  //       return user
  //     })
  //   );
  // }
  // updateUser(user: User): Promise<void> {
  //   return this.userCollection.doc(user.id).update({ name: user.name, notes: user.notes });
  // }

  deleteUser(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }

  user;
  Insert() {
    this.userCollection.add(this.user).then((res) => {
      alert('Inserted successfully');
    });
  }

















}
