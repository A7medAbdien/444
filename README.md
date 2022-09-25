# 444

[playlist](https://www.youtube.com/playlist?list=PLlyAM-8-I7S9iNcZRfP4SQJhm4Mw5q5ku)

## Insolation

1. `npm install -g @ionic/cli`

## Trying First app

1. `Set-ExecutionPolicy Unrestricted -Scope Process`, to allow run script on powershell
2. `ionic start myApp tabs`
3. `cd myApp`
4. `ionic serve`

## Splashscreen

### 1. create a page

`ionic generate page pages/loader`
`ionic generate page :place`

### 2. add a component

from [ionic webpage](https://ionicframework.com/docs/api) add it to myApp\src\app\pages\loader\loader.page.html

### 3. play with CSS

add it to myApp\src\app\pages\loader\loader.page.scss

### 4. route paths

in myApp\src\app\app-routing.module.ts

```js
// if route is empty render inbox
{path: '',redirectTo: 'folder/Inbox',pathMatch: 'full'},
// if route is folder/anything render anything's model
{path: 'folder/:id',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)}
```

explain :id

```js
// rather than
// if path item/1 show 1's model
{path: 'item/1',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)}
// if path item/2 show 2's model
{path: 'item/2',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)}
// if path item/3 show 3's model
{path: 'item/3',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)}

// just use
{path: 'item/:id',loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)}
```

### 5. Model file, HOW this all related

in src\app\pages\loader\loader.module.ts this file identify that our loader model needs those other model to work

./loader-routing.module: identify routing roads from loader, loader as a base

./loader.page: where the logic will of this page will be

**selector:**

selector: 'app-loader', is how you can use this page in HTML of other pages

1. use selector in HTML
2. declare the model of the selector in the deceleration

```js
@Component({
  selector: 'app-loader',
//shows where the HTML of the page
  templateUrl: './loader.page.html',
//shows where the CSS of the page
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor() { }
// runs when the page is loaded
  ngOnInit() {
    console.log('hello')
  }

}
```

in src\app\pages\loader\loader.page.html

```html
<ion-content>
  <div class="flex-center">

    <ion-spinner name="crescent" color="success"></ion-spinner>
  </div>
  <app-folder></app-folder>
</ion-content>
```

in src\app\pages\loader\loader.module.ts

```js
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageRoutingModule
  ],
  declarations: [LoaderPage, FolderPage]
})
```
