import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { ExaminarRoutingModule } from './examinar/examinar-routing.module';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    },
    {
        path: 'configuracion',
        component: PagesComponent,
        loadChildren: () => import('./configuracion/configuracion-routing.module').then(m => m.ConfiguracionRoutingModule)
    },
    {
        path: 'mantenedores',
        component: PagesComponent,
        loadChildren: () => import('./mantenedores/mantenedores-routing.module').then(m => m.MantenedoresRoutingModule)
    },
    {
        path: 'examinar',
        component: PagesComponent,
        loadChildren: () => import('./examinar/examinar-routing.module').then(m => m.ExaminarRoutingModule)
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


