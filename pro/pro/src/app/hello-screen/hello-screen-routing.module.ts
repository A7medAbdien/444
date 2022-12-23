import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloScreenPage } from './hello-screen.page';

const routes: Routes = [
  {
    path: '',
    component: HelloScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloScreenPageRoutingModule {}
