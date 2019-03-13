import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferenceDetailRoutingModule } from './conference-detail-routing.module';
import { ConferenceDetailsContainerComponent } from './conference-details-container/conference-details-container.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, ConferenceDetailRoutingModule, MatCardModule],
  declarations: [ConferenceDetailsContainerComponent]
})
export class ConferenceDetailModule {}
