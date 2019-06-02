import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponentComponent } from './editar-component/editar-component.component';

@NgModule({
  declarations: [EditarComponentComponent],
  imports: [
    CommonModule,
    EditarRoutingModule
  ]
})
export class EditarModule { }
