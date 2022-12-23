#

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
