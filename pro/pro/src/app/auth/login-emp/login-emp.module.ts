import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmpPageRoutingModule } from './login-emp-routing.module';

import { LoginEmpPage } from './login-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmpPageRoutingModule
  ],
  declarations: [LoginEmpPage]
})
export class LoginEmpPageModule {}
