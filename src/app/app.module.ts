import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/Nopagefound/Nopagefound.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ConfiguracionModule } from './pages/configuracion/configuracion.module';
import { MantenedoresModule } from './pages/mantenedores/mantenedores.module';
import { ExaminarModule } from './pages/examinar/examinar.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    ConfiguracionModule,
    MantenedoresModule,
    ExaminarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
