import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userType = 'owner'; // TODO get the user type
  public appPages;
  constructor() {
    switch (this.userType) {
      case "owner":
        this.appPages = [
          { title: 'Cashier', url: '/folder/Inbox', icon: 'wallet' },
          { title: 'Manage Shifts', url: '/folder/Outbox', icon: 'calendar' },
          { title: 'Report', url: '/folder/Favorites', icon: 'bar-chart' },
          { title: 'Suppliers', url: '/folder/Archived', icon: 'cube' },
          { title: 'Employee', url: '/folder/Trash', icon: 'briefcase' },
          { title: 'Orders', url: '/folder/Spam', icon: 'rocket' },
          { title: 'Accounts', url: '/folder/Spam', icon: 'person' },
        ];
        break;
      case "emp":
        this.appPages = [
          { title: 'Cashier', url: '/folder/Inbox', icon: 'wallet' },
          { title: 'Manage Shifts', url: '/folder/Outbox', icon: 'calendar' },
          { title: 'Orders', url: '/folder/Spam', icon: 'rocket' },
          { title: 'Accounts', url: '/folder/Spam', icon: 'person' },
        ];
        break;
      case "sup":
        this.appPages = [
          { title: 'Orders', url: '/folder/Spam', icon: 'rocket' },
          { title: 'Accounts', url: '/folder/Spam', icon: 'person' },
        ];
        break;
      default:
        break;
    }
  }
}
