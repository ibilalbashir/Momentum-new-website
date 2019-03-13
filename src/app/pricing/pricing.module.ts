import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingContainerComponent } from './pricing-container/pricing-container.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';

@NgModule({
  imports: [
    CommonModule,
    PricingRoutingModule
  ],
  declarations: [PricingContainerComponent, PricingTableComponent]
})
export class PricingModule { }
