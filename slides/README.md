# Tabs

## Add them to an existing app

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


# Promises and Observable

1. local storage with capacitor
2. 