import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakersListingRoutingModule } from './speakers-listing-routing.module';
import { SpeakersListingContainerComponent } from './speakers-listing-container/speakers-listing-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SpeakersListingRoutingModule,
    NgbModule, RouterModule
  ],
  declarations: [SpeakersListingContainerComponent]
})
export class SpeakersListingModule { }
