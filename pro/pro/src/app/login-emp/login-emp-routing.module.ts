import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEmpPage } from './login-emp.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEmpPageRoutingModule {}
