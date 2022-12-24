import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userType = 'emp'; // TODO get the user type
  public appPages;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    switch (this.userType) {
      case "owner":
        this.appPages = [
          { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
          { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
          { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
          { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
          { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
          { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        break;
      case "emp":
        this.appPages = [
          { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
          { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
          { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
          { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
        ];
        break;
      case "emp":
        this.appPages = [
          { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
        ];
        break;
      default:
        break;
    }
  }
}
