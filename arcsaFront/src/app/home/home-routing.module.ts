import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  loadChildren:'./editar/editar.module#ListaModule'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
