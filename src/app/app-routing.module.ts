import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'listagem',
    loadChildren: './listagem/listagem.module'
  },
  {
    path: 'listagem',
    loadChildren: './listagem/listagem.module'
  },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'listagem', loadChildren: './listagem/listagem.module#ListagemPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'sobre-apink', loadChildren: './sobre-apink/sobre-apink.module#SobreApinkPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
