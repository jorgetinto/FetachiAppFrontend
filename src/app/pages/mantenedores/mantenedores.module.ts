import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenedoresRoutingModule } from './mantenedores-routing.module';
import { EscuelaComponent } from './escuela/escuela.component';
import { ExamenComponent } from './examen/examen.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    EscuelaComponent,
    ExamenComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    MantenedoresRoutingModule
  ]
})
export class MantenedoresModule { }
