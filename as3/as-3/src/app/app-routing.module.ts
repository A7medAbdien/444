import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-member',
    loadChildren: () => import('./add-member/add-member.module').then( m => m.AddMemberPageModule)
  },
  {
    path: 'add-workshop',
    loadChildren: () => import('./add-workshop/add-workshop.module').then( m => m.AddWorkshopPageModule)
  },
  {
    path: 'show-member',
    loadChildren: () => import('./show-member/show-member.module').then( m => m.ShowMemberPageModule)
  },
  {
    path: 'show-workshop',
    loadChildren: () => import('./show-workshop/show-workshop.module').then( m => m.ShowWorkshopPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
