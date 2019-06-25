import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionFormContainerComponent } from './subscription-form-container/subscription-form-container.component';

const routes: Routes = [
  {
    path: '', component: SubscriptionFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSubscriptionRoutingModule { }
