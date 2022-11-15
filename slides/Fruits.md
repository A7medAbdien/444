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
6. **login**

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
