```html
      <ion-label>Awesome {{b}}</ion-label>
      <!-- <ion-input type="date" placeholder="Awesome Input"></ion-input> -->
    </ion-item>
  </ion-list>
  <ion-datetime-button datetime="datetime"></ion-datetime-button>

  <ion-modal [keepContentsMounted]="true">
    <ng-template>
      <ion-datetime (click)="onClick()" [(ngModel)]="b" id="datetime"></ion-datetime>
    </ng-template>
  </ion-modal>

```

```typescript
  id;
  p;
  b;
  d: Date = new Date();
  constructor(public ActRoute: ActivatedRoute, public cashier: CashierService) { }

  ngOnInit() {
    this.id = this.ActRoute.snapshot.paramMap.get('id');
    this.getProduct(this.id)
  }

  getProduct(id) {
    this.p = this.cashier.getProduct(id);
  }

  onClick() {
    console.log(this.b)
    this.d = new Date(this.b);
    console.log(this.d.getDay())
    console.log(this.d.getMinutes())
  }
```