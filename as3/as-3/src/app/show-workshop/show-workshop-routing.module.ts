import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowWorkshopPage } from './show-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: ShowWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowWorkshopPageRoutingModule {}
