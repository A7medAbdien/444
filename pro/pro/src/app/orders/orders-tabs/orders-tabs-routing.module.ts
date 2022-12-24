import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersTabsPage } from './orders-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersTabsPage,
    children: [{
      path: 'list',
      loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
    },
    {
      path: 'favorites',
      loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesPageModule)
    },
    {
      path: 'history',
      loadChildren: () => import('../history/history.module').then(m => m.HistoryPageModule)
    },
    {
      path: '',
      redirectTo: '/orders-tabs/list',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: '/orders-tabs/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersTabsPageRoutingModule { }
