import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ChangePassComponent } from './change-pass/change-pass.component';


@NgModule({
  declarations: [
    PerfilComponent,
    ChangePassComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule { }
