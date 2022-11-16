# [Storage](https://github.com/ionic-team/ionic-storage)

## template

in **CLI**

`npm install @ionic/storage-angular`

in **app-module**

```js
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    IonicStorageModule.forRoot()
  ]
})
export class AppModule { }
```

in **.ts**

```typescript
// ------------- fixed
private _storage: Storage | null = null;

constructor(private storage: Storage) {
this.init();
}

async init() {
// If using, define drivers here: await this.storage.defineDriver(/*...*/);
const storage = await this.storage.create();
this._storage = storage;
}

// ------------- changeable

List = ["Ali"]; Name = "";
Save() {
this.List.push(this.Name);
this.storage.set("list", JSON.stringify(this.List))
    .then((res) => {
    alert("Saved Successfully: " + res);
    this.Name = "";
    })
}

Get() {
this.storage.get("list")
    .then((res) => {
    console.log(res);
    this.List = JSON.parse(res);
    })
}
```

in **.html**
```html
<ion-item>
<ion-label>Name: </ion-label>
<ion-input [(ngModel)]="Name"></ion-input>
</ion-item>

<ion-button expand="full" (click)="Save()">Save</ion-button>
<ion-button expand="full" (click)="Get()"> Get </ion-button>
<ion-button expand="full" (click)="Clear()"> Clear </ion-button>

<ion-list>
<ion-item *ngFor="let x of List">{{x}}</ion-item>
</ion-list>
```

## ranges and color

**.html**

```html
  <ion-item>
    <ion-label>Select Your Favourite Color</ion-label>
    <ion-select [(ngModel)]="color" (ionChange)="setColor()">
      <ion-select-option value="danger">Red</ion-select-option>
      <ion-select-option value="primary">Blue</ion-select-option>
      <ion-select-option value="secondary">Green</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    Your Favorite Color is {{color}}
    <br>
  </ion-item>
  <ion-item color="{{color}}">
    <ion-label> My List: </ion-label>
    <ion-label> {{showHideText}} Range </ion-label>
    <ion-checkbox color="{{color}}" [(ngModel)]="showHide" (ionChange)="show()"></ion-checkbox>
  </ion-item>

  <ion-item *ngFor="let item of List">
    <ion-label>{{item.name}}</ion-label>
    <ion-range *ngIf="showHide" min="0" max="100" color="{{color}}" [(ngModel)]="item.value">
      <ion-label slot="start">0</ion-label>
      <ion-label slot="end">100</ion-label>
    </ion-range>

  </ion-item>

  <br><br>
  <ion-button expand="block" fill="clear" color="{{color}}" (click)="save()">
    Save
  </ion-button>

```

**.ts**

```typescript
 private _storage: Storage | null = null;


  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // ------------------------ constructor ------------------------
  constructor(public storage: Storage) {
    this.init();
    this.storage.get('color').then(data => {
      if (data != null)
        this.color = data;
    });
    this.storage.get('List').then(data => {
      if (data != null)
        this.List = data;
    });
  }

  // ------------------------- attributes -------------------------
  public color = "danger";
  public List = [
    { name: "Item1", value: 0 },
    { name: "Item2", value: 30 },
    { name: "Item3", value: 80 }
  ];
  public showHide = true;
  public showHideText = "show";

  // ------------------------- Methods -------------------------
  setColor() {
    this.storage.set('color', this.color)
      .catch((err) => {
        alert("Error in retrieving color");
      });
  }
  save() {
    this.storage.set('List', this.List).then((response) => {
      alert("Data Saved");
    });
  }
  show() {
    if (!this.showHide)
      this.showHideText = "show";
    else
      this.showHideText = "Hide";
  }
```

## Users

in **.module.ts**

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//...
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
    // ...
  ]})
```

in **.html**

```html
  <form [formGroup]="LoginForm" (ngSubmit)="Login(LoginForm.value)">

    <ion-item>
      <ion-label floating>Username</ion-label>
      <ion-input type="text" formControlName="username"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label floating>Password</ion-label>
      <ion-input type="password" formControlName="password"></ion-input>
    </ion-item>
    <ion-button type="submit"> Login </ion-button>
    <ion-button type="submit" (click)="AddUser(LoginForm.value)">
      Add User
    </ion-button>
  </form>

  <h2 *ngIf="Users?.length > 0 ">Current Users: </h2>

  <ion-card *ngFor="let user of Users">
    <ion-card-content style="background-color: rgb(159, 203, 245)">
      <ion-card-title>
        User : {{user.username}}
      </ion-card-title>
      <p> The password is {{user.password}} </p>
      <ion-button color="danger" (click)="RemoveUser(user.username)">
        Delete
      </ion-button>
    </ion-card-content>
  </ion-card>
```

**.js**

```javascript
  private _storage: Storage | null = null;


  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // ------------------------ constructor ------------------------
  constructor(private storage: Storage, public formBuilder: FormBuilder) {
    this.init();
    this.LoginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required,
      Validators.pattern('[a-zA-Z0-9]*'),
      Validators.minLength(2), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.storage.get('Users').then(result => {
      this.Users = result;
    });
  }


  // ------------------------- attributes -------------------------
  LoginForm: FormGroup;
  Users = [];


  // ------------------------- Methods -------------------------
  Login(val) {
    if (this.LoginForm.valid)
      alert('Login Successful ' + val.username);
  }

  AddUser(val) {
    if (this.LoginForm.valid) {
      this.storage.get('Users').then(result => {
        if (result) {
          result.push({ username: val.username, password: val.password });
          this.storage.set('Users', result);
          this.Users = result;
        } else {
          this.storage.set('Users', [{ username: val.username, password: val.password }]);
          this.Users = [{ username: val.username, password: val.password }];
        }
      });
      alert('User Added');
    }
  }

  RemoveUser(username) {
    this.storage.get('Users').then(result => {
      var i = result.indexOf(username);
      result.splice(i, 1);
      this.storage.set('Users', result).then(() => {
        this.Users = result;
      });
    });
  }

```
