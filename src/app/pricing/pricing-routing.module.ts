import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingContainerComponent } from './pricing-container/pricing-container.component';

const routes: Routes = [
  {
    path: '',
    component: PricingContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule {}
