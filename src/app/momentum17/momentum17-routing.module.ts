import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Momentum17ContainerComponent } from './momentum17-container/momentum17-container.component';

const routes: Routes = [
  {
    path: '', component: Momentum17ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Momentum17RoutingModule { }
