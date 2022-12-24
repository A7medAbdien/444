import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierLinksPageRoutingModule } from './cashier-links-routing.module';

import { CashierLinksPage } from './cashier-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierLinksPageRoutingModule
  ],
  declarations: [CashierLinksPage]
})
export class CashierLinksPageModule {}
