import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'hello-screen',
    loadChildren: () => import('./hello-screen/hello-screen.module').then( m => m.HelloScreenPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login-main',
    loadChildren: () => import('./login-main/login-main.module').then( m => m.LoginMainPageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./login-owner/login-owner.module').then( m => m.LoginOwnerPageModule)
  },
  {
    path: 'login-emp',
    loadChildren: () => import('./login-emp/login-emp.module').then( m => m.LoginEmpPageModule)
  },
  {
    path: 'login-sup',
    loadChildren: () => import('./login-sup/login-sup.module').then( m => m.LoginSupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
