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
  // ---------------------------- Tab 1
  {
    path: 'item-details',
    loadChildren: () => import('./cashier/tab1/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cashier/tab1/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./cashier/tab1/pay/pay.module').then(m => m.PayPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./cashier/tab1/success/success.module').then(m => m.SuccessPageModule)
  },
  // ---------------------------- Tab 2
  {
    path: 'trade',
    loadChildren: () => import('./cashier/tab2/trade/trade.module').then(m => m.TradePageModule)
  },
  {
    path: 'add-shift',
    loadChildren: () => import('./cashier/tab2/add-shift/add-shift.module').then(m => m.AddShiftPageModule)
  },
  // ---------------------------- Tab 3
  {
    path: 'product-details',
    loadChildren: () => import('./cashier/tab3/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./cashier/tab3/add-product/add-product.module').then(m => m.AddProductPageModule)
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
  // ------------------------------------------------ suppliers
  {
    path: 'slist',
    loadChildren: () => import('./sup/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'sdetails',
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
    path: 'edetails',
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
  // ------------------------------------------------ orders
  {
    path: 'orders-tabs',
    loadChildren: () => import('./orders/orders-tabs/orders-tabs.module').then(m => m.OrdersTabsPageModule)
  },
  // ------------------------------------------------ account
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
