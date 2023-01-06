import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  email = '';
  password = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    const authObserver = afAuth.authState.subscribe(
      user => {
        if (user) {
          console.log("User signed in");
          // this.router.navigate(['/members']);
          authObserver.unsubscribe();
        } else {
          console.log("User signed out");
          // this.router.navigate(['/home']);
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
