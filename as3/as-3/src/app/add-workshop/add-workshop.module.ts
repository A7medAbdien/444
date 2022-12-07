import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWorkshopPageRoutingModule } from './add-workshop-routing.module';

import { AddWorkshopPage } from './add-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWorkshopPageRoutingModule
  ],
  declarations: [AddWorkshopPage]
})
export class AddWorkshopPageModule {}
