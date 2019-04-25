import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupListingRoutingModule } from './startup-listing-routing.module';
import { StartupContainerComponent } from './startup-container/startup-container.component';
import { MatCardModule } from '@angular/material/card';
import { StartupDetailsComponent } from './startup-details/startup-details.component';
@NgModule({
  imports: [
    CommonModule,
    StartupListingRoutingModule,
    MatCardModule
  ],
  declarations: [StartupContainerComponent, StartupDetailsComponent]
})
export class StartupListingModule { }
