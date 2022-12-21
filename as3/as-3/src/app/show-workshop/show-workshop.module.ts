import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowWorkshopPageRoutingModule } from './show-workshop-routing.module';

import { ShowWorkshopPage } from './show-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowWorkshopPageRoutingModule
  ],
  declarations: [ShowWorkshopPage]
})
export class ShowWorkshopPageModule {}
