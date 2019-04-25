import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersContainerComponent } from './offers-container/offers-container.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule
  ],
  declarations: [OffersContainerComponent]
})
export class OffersModule { }
