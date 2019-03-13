import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackathonContainerComponent } from './hackathon-container/hackathon-container.component';

const routes: Routes = [
  {
    path: '',
    component: HackathonContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackathonRoutingModule {}
