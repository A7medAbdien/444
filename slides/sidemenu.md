#  outline

1. Side Menu
2. Toast


# side menu

1. app.component.ts: hv where to go
2. app.component.html: hv design of sideMenu
3. add this to any page u wanna add it to the side menu
    ```html
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>    
        </ion-buttons>
        <ion-title>
          Home
        </ion-title>
      </ion-toolbar>
    </ion-header>
    ```

# Toast

## ts
```typescript
  constructor(public toastCtrl: ToastController) { }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color: 'primary',
      position: 'top',
      buttons: [{
        text: 'wow', handler: () => {
          toast.dismiss();
        }
      }]
    });

    toast.present();
    toast.onDidDismiss().then((resp) => {
      console.log('Dismissed toast');
    });

  }
```

## html
```html
  <ion-button (click)="presentToast()">Toast</ion-button>
```