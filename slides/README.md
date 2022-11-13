
---
---

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

1. in **app-routing** 

## Gesture
---
---

# Tabs

## Add tabs to an existing app

1. create pages
2. in **app-routing** only the tablinks
3. in **tablinks-routing** add pages as a children to tablinks
4. in **tablinks.page** add i-tabs

---

###

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

### getSelectedTab($event)

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

### card
### 

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