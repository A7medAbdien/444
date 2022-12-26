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
    path: 'item-details/:id',
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
    path: 'trade/:id',
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
    path: 'sup-list',
    loadChildren: () => import('./sup/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'sup-details/:id',
    loadChildren: () => import('./sup/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'add-sup',
    loadChildren: () => import('./sup/add/add.module').then(m => m.AddPageModule)
  },
  // -------------------------------------------------------------------------------------------------------------- the same as the one in the cashier ?? may result an error
  {
    path: 'add-product',
    loadChildren: () => import('./sup/add-product/add-product.module').then(m => m.AddProductPageModule)
  },
  // ------------------------------------------------ employees
  {
    path: 'emp-list',
    loadChildren: () => import('./emp/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'emp-details',
    loadChildren: () => import('./emp/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'add-emp',
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
  // ---------------------------- Tab 1
  {
    path: 'add-order',
    loadChildren: () => import('./orders/tab1/add-order/add-order.module').then(m => m.AddOrderPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./orders/tab1/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },
  // ---------------------------- Tab 3
  {
    path: 'filter-history',
    loadChildren: () => import('./orders/tab3/filter-history/filter-history.module').then(m => m.FilterHistoryPageModule)
  },
  {
    path: 'history-details',
    loadChildren: () => import('./orders/tab3/history-details/history-details.module').then(m => m.HistoryDetailsPageModule)
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
