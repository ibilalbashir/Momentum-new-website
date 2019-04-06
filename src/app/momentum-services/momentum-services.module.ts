import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesContainerComponent } from './services-container/services-container.component';

import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatCardModule, NgbModule],
  declarations: [ServicesContainerComponent],
  exports: [ServicesContainerComponent]
})
export class MomentumServicesModule { }
