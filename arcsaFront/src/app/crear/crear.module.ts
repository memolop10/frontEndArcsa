import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearRoutingModule } from './crear-routing.module';
import { CrearComponentComponent } from './crear-component/crear-component.component';

@NgModule({
  declarations: [CrearComponentComponent],
  imports: [
    CommonModule,
    CrearRoutingModule
  ]
})
export class CrearModule { }
