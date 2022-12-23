import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
export class HomePage {

  username = '';
  password = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    const authObserver = afAuth.authState.subscribe(
      user => {
        if (user) {
          alert("User signed in");
          // this.router.navigate(['/members']);
          authObserver.unsubscribe();
        } else {
          alert("User signed out");
          this.router.navigate(['/home']);
          authObserver.unsubscribe();
        }
      });
  }

  loginUser(newEmail: string, newPassword: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword
      (newEmail, newPassword);
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.signOut();
  }

  signupUser(newEmail: string, newPassword: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword
      (newEmail, newPassword);
  }

}
