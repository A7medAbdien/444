import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierTabsPage } from './cashier-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: CashierTabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: '',
        redirectTo: '/cashier-tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cashier-tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierTabsPageRoutingModule { }
