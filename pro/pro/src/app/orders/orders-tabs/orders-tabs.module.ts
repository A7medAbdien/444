import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersTabsPageRoutingModule } from './orders-tabs-routing.module';

import { OrdersTabsPage } from './orders-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersTabsPageRoutingModule
  ],
  declarations: [OrdersTabsPage]
})
export class OrdersTabsPageModule {}
