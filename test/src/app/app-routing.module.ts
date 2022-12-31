import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cashier-links',
    loadChildren: () => import('./cashier/cashier-links/cashier-links.module').then(m => m.CashierLinksPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cashier-links',
    pathMatch: 'full'
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then(m => m.MembersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
