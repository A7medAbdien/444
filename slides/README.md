# All

ch 4

1. Navigation 👍
2. Interface 👍
3. ModalPage 👍
4. Service
5. Fruits
6. HTTP
7. Modal-ex
8. ToDo
9. Filter
10. CheckList

ch 6

1. LocalStorage-ex1
2. LocalStorage-ex2
3. LocalStorage-ex3
4. Users


# Navigation

- create pages by `ionic g pages xxx`
1. via HTML, routerLink
2. via Router injectable, ch4 slide 8
3. viva NavController

in **.html**

```html
<ion-list>
    <!-- no need to add pages/detail 
    - so wt we enter here is the path attribute of the Routes item -->
    <ion-button routerLink="/detail/Item1" routerDirection="back">
        Go To detail
    </ion-button>
    <ion-button (click)="viaNav()">
        Go To Login via NavController
    </ion-button>
    <ion-button (click)="viaRouter()">
        Go To Main via Router
    </ion-button>
</ion-list>
```

in **.ts**
```js
    constructor(public navCtrl: NavController, public router: Router) { }

    viaNav() {
        this.navCtrl.navigateRoot('/login')
    }

    viaRouter() {
        this.router.navigate(['/main'])
    }
```

## Navigation with parameters - details example

1. in **app-routing**, add the parameter (:id)
2. apply the routing
   1. routerLink
   2. NavController

---

### fab, 2
### ActivatedRoute, 5

1. in **app-routing**
    ```js
    {
        // just add /:id
        path: 'detail/:id',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
    },
    ```
2. in **page1.html** 
    ```html
    <ion-fab vertical="top" horizontal="end" slot="fixed">
        <!-- <ion-fab-button (tap)="AddItem()"> -->
        <ion-fab-button (click)="AddItem()">
            <ion-icon name="add"></ion-icon>
        </ion-fab-button>
    </ion-fab>

    <ion-item>
        <ion-label>Type:</ion-label>
        <ion-input type="text" [(ngModel)]="itemValue" placeholder="Add New Item here">
        </ion-input>
    </ion-item>

    <ion-list>
        <ion-list-header color="secondary">Available Items</ion-list-header>
        <ion-item *ngFor="let x of List" routerLink="/detail/{{x}}" routerDirection="forward">
            {{x}}
        </ion-item>
        <!-- using Nav -->
        <!-- <ion-item *ngFor="let x of List" (click)="Next(x)">
            {{x}}
        </ion-item> -->
    </ion-list>
    ```
3. in **page2.html**
    ```html
    <h2>You selected {{myId}}</h2>
    <ion-button expand="block" (click)="Back()">
        Back
    </ion-button>
    ```
4. in **page1.ts** 
    ```js
    public List = ["Item 1", "Item 2", "Item 3"];
    itemValue;

    constructor(public navCtrl: NavController, public router: Router) { }

    // Next(x) {
    //    this.navCtrl.navigateForward('detail/' + x);
    // }
    AddItem() {
        if (this.itemValue != null)
            this.List.push(this.itemValue);
        console.log(this.itemValue);
    }

    ```
5. in **page2.ts** 
    ```js
    export class DetailPage implements OnInit {
        myId;
        constructor(public navCtrl: NavController, public ActRoute: ActivatedRoute) { }
        ngOnInit() {
            this.myId = this.ActRoute.snapshot.paramMap.get('id');
        }

        Back() {
            // only if page1 is the root
            this.navCtrl.navigateRoot('/');
        }
    }
    ```

## Gesture, access DOM attributes

1. in **.html**, pass `$event`
    ```html
    <ion-card (click)="tapEvent($event)">
        <ion-item>
            Tapped: {{tap}} times
        </ion-item>
    </ion-card>
    ```

2. in **ts**, get access to the DOM object
    ```js
    tap = 0
    tapEvent(e) {
        this.tap++;
        e.target.color = "primary";
    }
    ```

# Modal Page - pass data to Modal page

1. **app.module**, add module of the LoginPageModule
2. **home.ts**, import the ModalController and add Modal creator method
3. **home.html**, presenting Modal page trigger
4. **login.ts**, import the ModalController (dismiss), NavParams (get passed data)
5. **login.html**, dismiss trigger

---

1. **app.module**
    ```js
    import { LoginPageModule } from './login/login.module';

    @NgModule({
    declarations: [AppComponent],
    // added LoginPageModule, not LoginPage
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LoginPageModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    })
    ```

2. **home.ts**
    ```js
    firstName;
    middleInitial;
    
    constructor(public modalCtrl: ModalController) { }
    
    async presentModal() {
        const modal = await this.modalCtrl.create({
        component: LoginPage,
        componentProps: {
            'firstName': this.firstName,
            'middleInitial': this.middleInitial
        },
        backdropDismiss: false
        });
        return await modal.present();
    }
    ```

3. **home.html**
    ```html
    <ion-item>
    <ion-label>Initial data</ion-label>
    </ion-item>
    <ion-item>
        <ion-label>First Name: </ion-label>
        <ion-input [(ngModel)]="firstName"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Middle: </ion-label>
        <ion-input [(ngModel)]="middleInitial"></ion-input>
    </ion-item>
    <ion-button (click)="presentModal()">Login Page</ion-button>
    ```

4. **login.ts**
    ```js
    export class LoginPage implements OnInit {

        ngOnInit() {
        }

        @Input() firstName: string;
        @Input() lastName: string;
        @Input() middleInitial: string;

        constructor(navParams: NavParams, public modalCtrl: ModalController) {
            // componentProps can also be accessed at construction time using NavParams
            console.log(navParams.get('firstName'));
        }

        dismiss() {
            this.modalCtrl.dismiss({
            'dismissed': true
            });
        }
    }
    ```

5. **login.html**
    ```html
    <ion-item>
        <ion-label>First Name:</ion-label>
        <ion-input [(ngModel)]="firstName"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Middle:</ion-label>
        <ion-input [(ngModel)]="middleInitial" [disabled]="!middleInitial"></ion-input>
    </ion-item>
    <ion-button expand="block" (click)="dismiss()">Dismiss</ion-button>
    ```

---
---

# Service

## interface

1. **CLI**, `ionic  g service  DataList`
2. **.service.ts**, add shred data
    ```js
    interface Student {
    name: string,
    course: string,
    description: string
    };

    @Injectable({
    providedIn: 'root'
    })

    export class DataListService {
    constructor() { }

    public List: Student[] = [
        { name: "Ali", course: "ITCS444", description: "Mobile Development Course " },
        { name: "Mohamed", course: "ITCS555", description: "Advanced Mobile Course " },
        { name: "Fatema", course: "ITCS333", description: "Operating System Course " },
        { name: "Jasim", course: "ITCS222", description: "Information Systems Course " }
    ];

    }
    ```
3. access shred data
   1. **.js**
        ```js
        constructor(public DataSrv: DataListService) { }
        public List = this.DataSrv.List;
        ```
   2. **.html**
        ```html
        <ion-item *ngFor="let x of DataSrv.List">
        {{x.name}}
        </ion-item>
        ```

# Fruits EX (Service, Alert, Navigation)

1. **.service**
2. **app-routing**

# Tabs

## Add tabs to an existing app

1. create pages
2. in **app-routing** only the tablinks
3. in **tablinks-routing** add pages as a children to tablinks
4. in **tablinks.page** add i-tabs

---

1. crete pages and one called tablinks
    * `ionic g page tablinks` 
2. in **app-routing** only the tablinks with `path: ''`
    ```js
    import { NgModule } from '@angular/core';
    import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

    const routes: Routes = [
        {
            path: '',
            loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule)
        },
    ];

    @NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
    ``` 

3. in **tablinks-routing** add them as a children to `component: TablinksPage`
    ```js
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { TablinksPage } from './tablinks.page';

    const routes: Routes = [
    {
        path: 'tablinks',
        component: TablinksPage,
        children: [
            {
                path: 'members',
                loadChildren: () => import('../members/members.module').then(m => m.MembersPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
            },
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
            },
            {
                path: '',
                redirectTo: '/tablinks/profile',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tablinks/profile',
        pathMatch: 'full'
    }
    ];

    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    })
    export class TablinksPageRoutingModule { }
    ```

4. add tabs in **tablinks.page.html**
    ```html
    <ion-tabs>

        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="profile">
                <ion-icon name="person-circle-outline"></ion-icon>
                <ion-label>Profile</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="members">
                <ion-icon name="easel-outline"></ion-icon>
                <ion-label>Dashboard</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="settings">
                <ion-icon name="settings-outline"></ion-icon>
                <ion-label>Settings</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="home">
                <ion-icon name="home-outline"></ion-icon>
                <ion-label>Home</ion-label>
            </ion-tab-button>
        </ion-tab-bar>

    </ion-tabs>
    ```

## getSelectedTab($event)

1. in **tablinks.html** 
    ```html 
    <ion-tabs (ionTabsDidChange)="getSelectedTab($event)"> 
    ```

2. in **tablinks.ts**
    ```ts
    selectedTab;
    getSelectedTab(e) {
        this.selectedTab = e.tab
        console.log(this.selectedTab);
    }
    ```

# Toggle

1. in **.ts**, boolean variable and its listener
2. in **.html**, toggle component, with (click) and [(ngModel)]
3. in **html**, two *ngIf 
---

### card, 2

1. **.ts**
    ```js
    public data: any = { myToggle: true };
    isClicked(myToggle) {
    }
    ```
2. **.html**
    ```html
        <ion-list>
        <ion-item>
            <ion-label>Vegetarian</ion-label>
            <!-- Toggle component -->
            <ion-toggle (click)="isClicked(data.myToggle)" [(ngModel)]="data.myToggle"></ion-toggle>
        </ion-item>

        <!--  Toggle True -->
        <ion-card *ngIf="data.myToggle">
            <ion-card-header>
                I only eat vegetarian foods
            </ion-card-header>
            <ion-list>
                <!-- <button ion-item> Mushroom </button> -->
                <ion-item><ion-label>Mushroom</ion-label></ion-item>
                <ion-item><ion-label>Spinach</ion-label></ion-item>
                <ion-item><ion-label>RedPeppers</ion-label></ion-item>
            </ion-list>
        </ion-card>

        <!--  Toggle False -->
        <ion-card *ngIf="!data.myToggle">
            <ion-card-header> I love meat </ion-card-header>
            <ion-list>
                <ion-item><ion-label>Beef</ion-label></ion-item>
                <ion-item><ion-label>Chicken</ion-label></ion-item>
                <ion-item><ion-label>Sausage</ion-label></ion-item>
            </ion-list>
        </ion-card>
    </ion-list>
    ```

# Shared Service

1. in **CLI** Create Service
2. in **service.ts** create shared variables, maybe sitters and getters
3. in **.html**, ngModel sets the value, {{}} gets the value

---



# Promises and Observable

1. local storage with capacitor
2. 