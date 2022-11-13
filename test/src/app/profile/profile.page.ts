import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    user;

    constructor(public navCtrl: NavController,
        user: UserService) {
        console.log(user.name);
        this.user = user;
    }
    ngOnInit() {
    }

    public data: any = { myToggle: true };
    isClicked(myToggle) {
    }

    goToPage2() {
    }


}
