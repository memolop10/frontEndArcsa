import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponentComponent } from './lista-component/lista-component.component';

@NgModule({
  declarations: [ListaComponentComponent],
  imports: [
    CommonModule,
    ListaRoutingModule
  ]
})
export class ListaModule { }
