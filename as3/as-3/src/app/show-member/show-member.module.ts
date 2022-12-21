import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMemberPageRoutingModule } from './show-member-routing.module';

import { ShowMemberPage } from './show-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMemberPageRoutingModule
  ],
  declarations: [ShowMemberPage]
})
export class ShowMemberPageModule {}
