import { StartupDetailsComponent } from './startup-details/startup-details.component';
import { StartupContainerComponent } from './startup-container/startup-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartupContainerComponent },
  { path: ':id', component: StartupDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupListingRoutingModule { }
