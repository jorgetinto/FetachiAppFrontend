import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './pages/Nopagefound/Nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { ConfiguracionRoutingModule } from './pages/configuracion/configuracion-routing.module';
import { MantenedoresRoutingModule } from './pages/mantenedores/mantenedores-routing.module';
import { ExaminarRoutingModule } from './pages/examinar/examinar-routing.module';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
    ConfiguracionRoutingModule,
    MantenedoresRoutingModule,
    ExaminarRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
