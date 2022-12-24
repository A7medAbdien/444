import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSupPageRoutingModule } from './login-sup-routing.module';

import { LoginSupPage } from './login-sup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSupPageRoutingModule
  ],
  declarations: [LoginSupPage]
})
export class LoginSupPageModule {}
