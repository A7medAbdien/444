import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterHistoryPage } from './filter-history.page';

const routes: Routes = [
  {
    path: '',
    component: FilterHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterHistoryPageRoutingModule {}
