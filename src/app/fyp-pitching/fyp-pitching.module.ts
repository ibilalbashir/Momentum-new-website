import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FypPitchingRoutingModule } from './fyp-pitching-routing.module';
import { FypPitchingContainerComponent } from './fyp-pitching-container/fyp-pitching-container.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, FypPitchingRoutingModule, MatCardModule],
  declarations: [FypPitchingContainerComponent]
})
export class FypPitchingModule {}
