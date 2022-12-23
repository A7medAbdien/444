import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelloScreenPageRoutingModule } from './hello-screen-routing.module';

import { HelloScreenPage } from './hello-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloScreenPageRoutingModule
  ],
  declarations: [HelloScreenPage]
})
export class HelloScreenPageModule {}
