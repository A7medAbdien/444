import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierLinksPage } from './cashier-links.page';

const routes: Routes = [
  {
    path: '',
    component: CashierLinksPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/cashier-links/schedule',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cashier-links/schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierLinksPageRoutingModule { }
