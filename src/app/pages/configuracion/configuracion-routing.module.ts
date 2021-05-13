import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ChangePassComponent } from './change-pass/change-pass.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'change-pass', component: ChangePassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
