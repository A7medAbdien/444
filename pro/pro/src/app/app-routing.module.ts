import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello-screen',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'hello-screen',
    loadChildren: () => import('./hello-screen/hello-screen.module').then(m => m.HelloScreenPageModule)
  },
  // ------------------------------------------------ authentication
  {
    path: 'sign-up',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'login-main',
    loadChildren: () => import('./auth/login-main/login-main.module').then(m => m.LoginMainPageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./auth/login-owner/login-owner.module').then(m => m.LoginOwnerPageModule)
  },
  {
    path: 'login-emp',
    loadChildren: () => import('./auth/login-emp/login-emp.module').then(m => m.LoginEmpPageModule)
  },
  {
    path: 'login-sup',
    loadChildren: () => import('./auth/login-sup/login-sup.module').then(m => m.LoginSupPageModule)
  },
  // ------------------------------------------------ cashier
  {
    path: 'cashier-tabs',
    loadChildren: () => import('./cashier/cashier-tabs/cashier-tabs.module').then(m => m.CashierTabsPageModule)
  },
  // ------------------------------------------------ suppliers
  {
    path: 'slist',
    loadChildren: () => import('./sup/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./sup/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./sup/add/add.module').then(m => m.AddPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./sup/add-product/add-product.module').then(m => m.AddProductPageModule)
  },
  // ------------------------------------------------ employees
  {
    path: 'elist',
    loadChildren: () => import('./emp/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./emp/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./emp/add/add.module').then(m => m.AddPageModule)
  },
  {
    path: 'add-shift',
    loadChildren: () => import('./emp/add-shift/add-shift.module').then(m => m.AddShiftPageModule)
  },
  // ------------------------------------------------ shifts
  {
    path: 'trade-requests',
    loadChildren: () => import('./shifts/trade-requests/trade-requests.module').then(m => m.TradeRequestsPageModule)
  },
  {
    path: 'trade',
    loadChildren: () => import('./shifts/trade/trade.module').then(m => m.TradePageModule)
  },
  // ------------------------------------------------ report
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then(m => m.ReportPageModule)
  },
  // ------------------------------------------------ orders
  {
    path: 'orders-tabs',
    loadChildren: () => import('./orders/orders-tabs/orders-tabs.module').then(m => m.OrdersTabsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./orders/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./orders/favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./orders/history/history.module').then( m => m.HistoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
