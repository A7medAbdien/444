import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWorkshopPage } from './add-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWorkshopPageRoutingModule {}
