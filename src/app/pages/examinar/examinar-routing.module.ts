import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminarComponent } from './examinar.component';

const routes: Routes = [
  { path: '', component: ExaminarComponent, data: { titulo: 'Examinar' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminarRoutingModule { }
