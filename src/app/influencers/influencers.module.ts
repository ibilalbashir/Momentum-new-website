import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencersRoutingModule } from './influencers-routing.module';
import { InfluencersContainerComponent } from './influencers-container/influencers-container.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    InfluencersRoutingModule,
    MatCardModule
  ],
  declarations: [InfluencersContainerComponent]
})
export class InfluencersModule { }
