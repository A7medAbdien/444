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
          { title: 'Cashier', url: '/cashier-tabs', icon: 'wallet' },
          { title: 'Manage Shifts', url: '/trade-requests', icon: 'calendar' },
          { title: 'Report', url: '/report', icon: 'bar-chart' },
          { title: 'Suppliers', url: '/slist', icon: 'cube' },
          { title: 'Employee', url: '/elist', icon: 'briefcase' },
          { title: 'Orders', url: '/orders-tabs', icon: 'rocket' },
          { title: 'Accounts', url: '/account', icon: 'person' },
        ];
        break;
      case "emp":
        this.appPages = [
          { title: 'Cashier', url: '/folder/Inbox', icon: 'wallet' },
          { title: 'Manage Shifts', url: '/trade-requests', icon: 'calendar' },
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
