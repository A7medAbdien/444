import { DataService } from 'src/app/services/data.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages;
  constructor(public d: DataService) {
    switch (d.me.type) {
      case "owner":
        this.appPages = [
          { title: 'Cashier', url: '/cashier-tabs', icon: 'wallet' },
          { title: 'Manage Shifts', url: '/trade-requests', icon: 'calendar' },
          { title: 'Report', url: '/report', icon: 'bar-chart' },
          { title: 'Suppliers', url: '/sup-list', icon: 'cube' },
          { title: 'Employee', url: '/emp-list', icon: 'briefcase' },
          { title: 'Orders', url: '/orders-tabs', icon: 'rocket' },
          { title: 'Accounts', url: '/account', icon: 'person' },
        ];
        break;
      case "emp":
        this.appPages = [
          { title: 'Cashier', url: '/cashier-tabs', icon: 'wallet' },
          { title: 'Manage Shifts', url: '/trade-requests', icon: 'calendar' },
          { title: 'Orders', url: '/orders-tabs', icon: 'rocket' },
          { title: 'Accounts', url: '/account', icon: 'person' },
        ];
        break;
      case "sup":
        this.appPages = [
          { title: 'Orders', url: '/orders-tabs', icon: 'rocket' },
          { title: 'Accounts', url: '/account', icon: 'person' },
        ];
        break;
      default:
        break;
    }
  }
}
