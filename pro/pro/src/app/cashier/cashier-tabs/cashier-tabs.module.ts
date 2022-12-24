import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierTabsPageRoutingModule } from './cashier-tabs-routing.module';

import { CashierTabsPage } from './cashier-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierTabsPageRoutingModule
  ],
  declarations: [CashierTabsPage]
})
export class CashierTabsPageModule {}
