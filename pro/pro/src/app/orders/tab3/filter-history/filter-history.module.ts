import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterHistoryPageRoutingModule } from './filter-history-routing.module';

import { FilterHistoryPage } from './filter-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterHistoryPageRoutingModule
  ],
  declarations: [FilterHistoryPage]
})
export class FilterHistoryPageModule {}
