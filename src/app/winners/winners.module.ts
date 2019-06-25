import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnersRoutingModule } from './winners-routing.module';
import { WinnersContainerComponent } from './winners-container/winners-container.component';

@NgModule({
  imports: [
    CommonModule,
    WinnersRoutingModule
  ],
  declarations: [WinnersContainerComponent],
  exports: [WinnersContainerComponent]
})
export class WinnersModule { }
