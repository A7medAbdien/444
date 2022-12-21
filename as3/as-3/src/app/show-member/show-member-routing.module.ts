import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMemberPage } from './show-member.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMemberPageRoutingModule { }
