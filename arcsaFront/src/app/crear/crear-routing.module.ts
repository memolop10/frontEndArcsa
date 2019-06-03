import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponentComponent } from './crear-component/crear-component.component';

const routes: Routes = [
  {
    path:'',
    component:CrearComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearRoutingModule { }
