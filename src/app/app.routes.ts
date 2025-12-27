import { Routes } from '@angular/router';
import { Contato } from './pages/contato/contato';
import { ProdutoDestaque } from './pages/produto-destaque/produto-destaque';
import { Instagram } from './pages/instagram/instagram';
import { Conta } from './pages/conta/conta';
import { Admin } from './pages/admin/admin';
import { AdminRoupas } from './pages/admin-roupas/admin-roupas';
import { AdminContato } from './pages/admin-contato/admin-contato';
import { AdminConta } from './pages/admin-conta/admin-conta';
import { Carrinho } from './pages/carrinho/carrinho';
import { Sobre } from './pages/sobre/sobre';


export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },


  {
    path: 'produtos',
    loadComponent: () => import('./componentes/roupas-componente/roupas-componente')
      .then(m => m.RoupasComponente)
  },
  {
    path: 'contato', component: Contato
  },
  {
    path: 'produto-destaque',component: ProdutoDestaque
  },
  {
    path: 'instagram', component: Instagram
  },
  {
    path:'conta', component: Conta
  },
  {
    path: 'admin', component: Admin
  },
  {
    path:'admin-roupas', component: AdminRoupas
  },
  {
    path: 'admin-contato', component: AdminContato
  },
  {
    path: 'admin-conta', component: AdminConta
  },
  {
    path: 'carrinho', component: Carrinho
  },
  {
    path: 'sobre', component: Sobre
  }

];
