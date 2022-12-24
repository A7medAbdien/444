import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cashier-tabs',
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
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'login-main',
    loadChildren: () => import('./login-main/login-main.module').then(m => m.LoginMainPageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./login-owner/login-owner.module').then(m => m.LoginOwnerPageModule)
  },
  {
    path: 'login-emp',
    loadChildren: () => import('./login-emp/login-emp.module').then(m => m.LoginEmpPageModule)
  },
  {
    path: 'login-sup',
    loadChildren: () => import('./login-sup/login-sup.module').then(m => m.LoginSupPageModule)
  },
  {
    path: 'cashier-tabs',
    loadChildren: () => import('./cashier/cashier-tabs/cashier-tabs.module').then(m => m.CashierTabsPageModule)
  },
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
    path: 'add',
    loadChildren: () => import('./emp/add/add.module').then(m => m.AddPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./sup/add-product/add-product.module').then(m => m.AddProductPageModule)
  },
  {
    path: 'elist',
    loadChildren: () => import('./emp/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./emp/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'add-shift',
    loadChildren: () => import('./emp/add-shift/add-shift.module').then(m => m.AddShiftPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
