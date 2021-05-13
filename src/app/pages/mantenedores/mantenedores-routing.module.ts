import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscuelaComponent } from './escuela/escuela.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ExamenComponent } from './examen/examen.component';

const routes: Routes = [
  { path: 'escuela', component: EscuelaComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'examen', component: ExamenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenedoresRoutingModule { }
