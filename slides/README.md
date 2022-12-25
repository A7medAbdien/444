# All

ch 4

1. Navigation 👍
2. Interface 👍
3. ModalPage 👍
4. Service 👍
5. Fruits 👍
6. HTTP/cordova, can not get http to work 👎
7. Modal-ex, 'ionic-angular' no longer supported 👎
8. ToDo, 👍, the same as fruits but added modal
9. Filter, http not working so i used dataService
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
        <ion-item *ngFor="let x of List" routerLink="/detail/{{x}}" routerDirection="backward">
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
    // import xxx.modal
    import { LoginPageModule } from './login/login.module';

    @NgModule({
    declarations: [AppComponent],
    // added xxxPageModule, not xxxPage
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

# Fruits EX (Service-S, Alert-A, Navigation-N, Modal-M)

$Brief:$
* show Array of items (Fruits), 
* button to pop up add item page, on success will show an alert 
* click on any item will take you to its detail page
* delete item via sliding button

---

1. **.service**, shared/all functions and attributes (S)
2. **app-routing**, add `:index` to detail (N)
3. **app.module**, add xxxPageModule to imports (M)
4. **home**, apply `presentModal()` (M) and `routerLink="/detail/{{i}}"` (N)
5. **detail**, apply activateRoute (N)
6. **login**, after adding item shows an alert with an input (A)

---

1. **.service**
    ```js
    export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
    };


    @Injectable({
    providedIn: 'root'
    })

    export class DataListService {
        public newitem: Item;

        public List: Item[] = [{
            id: 1,
            name: 'Apple',
            description: "Fruits",
            price: 1.5,
            photo: 'Apple.jpg'
        },
        {
            id: 2,
            name: 'Banana',
            description: "Vegetables",
            price: 2.0,
            photo: 'banana.jpg'
        }];

        public itemsCount: number = this.List.length;

        constructor(public AlertCtrl: AlertController, public modalCtrl: ModalController) { }

        Add(item) {
            this.List.push(item);
        }

        // ? means it can be null
        Remove(item, i?) {
            if (!i)
            i = this.List.indexOf(item);
            this.List.splice(i, 1);
            this.showAlert('Delete', 'Item Deleted Succesfully');
        }

        async showAlert(title, msg) {
            let alert = await this.AlertCtrl.create({
            header: title,
            message: msg + "</br> confirm by typing ur name",
            inputs: [{ name: 'name' }],
            buttons: [{
                text: 'Confirm', handler: (data) => {
                if (data.name != '') {
                    console.log(data.name);
                }
                }
            }]
            });
            alert.present();
        }

        async presentModal(page) {
            const modal = await this.modalCtrl.create({
            component: page,
            componentProps: {
                'itemsCount': this.itemsCount
            },
            backdropDismiss: false
            });
            return await modal.present();
        }

        dismiss() {
            this.modalCtrl.dismiss({
            'dismissed': true
            });
        }
    }
    ```

2. **app-routing**
    ```js
    {
        // just added :index
        path: 'detail/:index',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
    },
    ```

3. **app-module**
    ```js
    // added xxxPageModule, not xxxPage
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LoginPageModule],
    ```

4. **home**
    <table>
    <tr>
    <td>
    
    ```html
        
    <ion-header>
        <ion-toolbar>

        <ion-title> List </ion-title>
        <ion-buttons slot="secondary">

            <ion-button (click)="presentModal()">
            <ion-icon name="add-circle"></ion-icon>
            </ion-button>

        </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-list>
        <ion-item-sliding *ngFor="let item of datalist.List; let i=index">

        <ion-item (click)="openTab(i,item)" routerLink="/detail/{{i}}">

            <ion-avatar side=" start">
            <!-- <img src=" /assets/{{item.photo}}"> -->
            </ion-avatar>

            <ion-label slot="secondary"> {{item.id}}</ion-label>
            <ion-label slot="end">{{item.name}}</ion-label>
        </ion-item>

        <ion-item-options side="end">
            <ion-button color="danger" slot="secondary" fill="outline" (click)="Delete(i,item)">
            Delete
            </ion-button>
        </ion-item-options>

        </ion-item-sliding>
    </ion-list>

    ```
    
    </td>
    <td>
    
    ```js
    constructor(public datalist: DataListService, public navCtrl: NavController, public modalCtrl: ModalController) { }

    openTab(i, item) {
        this.navCtrl.navigateForward('/detail/' + i);
    }

    Delete(i, item) {
        this.datalist.Remove(item, i);
    }

    presentModal() {
        this.datalist.presentModal(LoginPage);
    }
    ```
    
    </td>
    </tr>
    </table>

5. **detail**
    <table>
    <tr>
    <td>
    
    ```html
    <ion-card class="welcome-card">
        <!-- <img src=" /assets/images/{{datalist.newitem.photo}}" alt="" /> -->
        <ion-card-header>
        <ion-card-subtitle>Item No. {{datalist.newitem.id}} </ion-card-subtitle>
        <ion-card-title> {{datalist.newitem.name}} </ion-card-title>
        </ion-card-header>

        <ion-card-content>
        <p>{{datalist.newitem.description}}</p>

        <ion-grid>

            <ion-row>
            <ion-col size="9">
                <ion-badge>{{datalist.newitem.price}}</ion-badge>
            </ion-col>

            <ion-col size="3">
                <ion-button color="danger" slot="secondary" fill="outline" (click)="delete()">
                Delete
                </ion-button>
            </ion-col>
            </ion-row>
        </ion-grid>
        </ion-card-content>

    </ion-card>
    <ion-button expand="block" fill="clear" routerLink="/home">close</ion-button>
    ```
    
    </td>
    <td>
    
    ```js
    public index;
    constructor(private activatedRoute: ActivatedRoute, public datalist: DataListService) { }

    ngOnInit() {
        this.index = this.activatedRoute.snapshot.paramMap.get('index');
        this.datalist.newitem = this.datalist.List[this.index];
    }

    delete() {
        this.datalist.Remove(this.index);
    }
    ```
    </td>
    </tr>
    </table>
6. **login**
    <table>
    <tr>
    <td>
    
    ```html
    <ion-item>
    <ion-label>Item id: </ion-label>
    <ion-input [(ngModel)]="newitem.id"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Item name: </ion-label>
        <ion-input [(ngModel)]="newitem.name"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Item description: </ion-label>
        <ion-input [(ngModel)]="newitem.description"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label>Item photo: </ion-label>
        <ion-input [(ngModel)]="newitem.photo"></ion-input>
    </ion-item>
    <ion-button expand='block' fill='clear' (click)="Add()" [disabled]="!newitem.id">
        Add New Item
    </ion-button>
    <ion-button expand="block" (click)="dismiss()">Dismiss</ion-button>
    ```
    
    </td>
    <td>
    
    
    ```js
    @Input() itemsCount;
    public index;
    public newitem: Item;
    constructor(public datalist: DataListService, navParams: NavParams, public modalCtrl: ModalController) {
        this.newitem = {} as Item;
    }

    Add() {
        this.datalist.Add(this.newitem);
        this.datalist.showAlert("Add New Item", "Added Successfully");
    }

    dismiss() {
        this.datalist.dismiss();
    }
    ```
    </td>
    </tr>
    </table>

---

# Filter - on input

1. **.html**, pass `$event` to get the length of the target on `(input)` listener
2. **.ts**, use `.filter((x)=>{})` and `isFiltered`

**in .html:**
```html
<ion-input type="text" placeholder="Search Students..." (input)="filterList($event)">
</ion-input>

<ion-list *ngIf="!isfiltered">
<ion-item *ngFor="let x of List">
    <ion-label>{{x.name}}</ion-label>
    <p class="item-description">{{x.description}}</p>
</ion-item>
</ion-list>

<ion-list *ngIf="isfiltered">
<ion-item *ngFor="let y of filteredList">
    <ion-label>{{y.name}}</ion-label>
    <p class="item-description">{{y.description}}</p>
</ion-item>
</ion-list>
```

**in .js:**
```js
List = [{
    name: "Ali",
    description: "First Year student"
    },
    {
    name: "Jasim",
    description: "Second Year student on proabbtion"
    }, {
    name: "Maryam",
    description: "Thidrd Year student"
    }
];
filterList(event) {
    if (event.target.value.length > 0) {

        var filteredlist = this.List.filter((row) => {
        if (row.name.indexOf(event.target.value) != -1) {
            return true;
        } else {
            return false;
        }
        });

        this.filteredList = filteredlist;
        this.isfiltered = true;

    } else {
        this.isfiltered = false;
    }
}
```

# CheckList - Ex

1. set interfaces, in interface folder
2. set functions, in .service
   1. crete
   2. remove
   3. rename/reset
   4. get by id
   5. generate slug/ random name
   6. save/load

# some functions
1. crete
    ```js
    createChecklist(data): void {
        this.checklists.push({
        id: this.generateSlug(data.name),
        title: data.name,
        items: []
        });
        console.log(this.checklists);
        this.save();
    }
    ```
2. remove
    ```js
    removeChecklist(checklist): void {
        let index = this.checklists.indexOf(checklist);
        if (index > -1) {
        this.checklists.splice(index, 1); this.save();
        }
    }
    ```
3. rename/reset
    ```js
    renameChecklist(checklist, data): void {
        let index = this.checklists.indexOf(checklist);
        if (index > -1) {
        this.checklists[index].title = data.name; this.save();
        }
    }
    ```
4. get by id
    ```js
    getChecklist(id): Checklist {
        return this.checklists.find(checklist => checklist.id === id);
    }
    ```
5. generate slug/ random name
    ```js
    generateSlug(title): string {
        // NOTE: This is a simplistic slug generator and will not handle things like special characters.
        let slug = title.toLowerCase().replace(/\s+/g, '-');

        // Check if the slug already exists
        let exists = this.checklists.filter(
        (checklist) => {
            return checklist.id.substring(0, slug.length) === slug;
        });

        // If the title is already being	used, add a number to make the	slug unique
        if (exists.length > 0) { slug = slug + exists.length.toString(); }
        return slug;
    }
    ```
6. open alert to add/rename
    ```js
    async openCreateItem(checklistId, newItem) {
        let alert = await this.alertCtrl.create({
        header: 'Create Item',
        inputs: [{ name: 'name', placeholder: 'Item Name', value: newItem }],
        buttons: [{
            text: 'OK',
            handler: data => {
            this.addItem(checklistId, data);
            }
        },
        {
            text: 'Cancel',
            handler: data => { }
        }]
        });
        alert.present();
    }
    ```


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