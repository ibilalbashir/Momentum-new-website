import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorsRoutingModule } from './investors-routing.module';
import { InvestorsContainerComponent } from './investors-container/investors-container.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    InvestorsRoutingModule,
    MatCardModule

  ],
  declarations: [InvestorsContainerComponent]
})
export class InvestorsModule { }
