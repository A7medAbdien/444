import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages: { title: string; url: string; icon: string; }[];
  constructor() {
    this.appPages = [
      { title: 'Cashier', url: '/home', icon: 'wallet' },
    ];
  }
}
