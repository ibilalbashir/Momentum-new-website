import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerContainerComponent } from './partner-container/partner-container.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule {}
