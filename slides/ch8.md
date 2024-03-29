# Ideas

1. CML
2. app.models.ts

## CML
`npm install firebase @angular/fire --save`

## app.models.ts
```typescript
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDEGcc9Td9SnVPV4eA9741wYPFstMmP1Qc",
  authDomain: "test-a4a87.firebaseapp.com",
  projectId: "test-a4a87",
  storageBucket: "test-a4a87.appspot.com",
  messagingSenderId: "571282620186",
  appId: "1:571282620186:web:0f40f3d70f36311d0836a3",
  measurementId: "G-JHLKEG5M6S"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),

    // initialize angularfire with credentials from the dashboard
    AngularFireModule.initializeApp(firebaseConfig),
    // Import the AngularFireDatabaseModule to use database
    AngularFirestoreModule]
    //...
    })
```

## home.ts
```typescript
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  public ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('ideas');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  }

  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
  }

  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }

  idea;
  Insert() {
    this.ideaCollection.add(this.idea).then((res) => {
      alert('Inserted successfully');
    });
  }
```

## home.html
```html
<ion-content [fullscreen]="true">
  <ion-item>
    <ion-label>Awesome Label</ion-label>
    <ion-input [(ngModel)]="idea.name"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Awesome Label</ion-label>
    <ion-input [(ngModel)]="idea.notes"></ion-input>
  </ion-item>

  <ion-button (click)="Insert()" expand="block" fill="clear" shape="round">
    Click me
  </ion-button>

  <ion-item *ngFor="let i of ideas | async">
    <ion-label>{{i.name}}</ion-label>
  </ion-item>
</ion-content>
```

# Auth

## login.ts
```typescript
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
```

## login.html
```html
  <ion-item>
    <ion-label floating>Username</ion-label>
    <ion-input type="text" [(ngModel)]="username"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label floating>Password</ion-label>
    <ion-input type="password" [(ngModel)]="password"></ion-input>
  </ion-item>

  <ion-button (click)="loginUser(username, password)">Login</ion-button>
  <ion-button (click)="logoutUser()">Logout</ion-button>
  <ion-button (click)="signupUser(username, password)">Signup</ion-button>
  <ion-button (click)="resetPassword(username)">Reset</ion-button>
```