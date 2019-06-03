import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { AdminComponentComponent } from './admin/admin-component/admin-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'admin',
    component: AdminComponentComponent
  },
  {
    path: 'crear',
    loadChildren:'./crear/crear.module#CrearModule'
},
  {
    path:'lista',
    loadChildren:'./lista/lista.module#ListaModule'
  },
  {
    path:'editar',
    loadChildren:'./editar/editar.module#EditarModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true,
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
