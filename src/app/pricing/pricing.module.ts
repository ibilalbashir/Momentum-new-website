import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingContainerComponent } from './pricing-container/pricing-container.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BuyNowDialogComponent } from './buy-now-dialog/buy-now-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    PricingRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [PricingContainerComponent, PricingTableComponent, BuyNowDialogComponent],
  entryComponents: [
    BuyNowDialogComponent
  ]
})
export class PricingModule { }
