import { FypPitchingContainerComponent } from './fyp-pitching-container/fyp-pitching-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FypPitchingContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FypPitchingRoutingModule {}
