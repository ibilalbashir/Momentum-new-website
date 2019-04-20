import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersContainerComponent } from './partners-container/partners-container.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [CommonModule, MatCardModule, NgbModule, RouterModule],
  declarations: [PartnersContainerComponent],
  exports: [PartnersContainerComponent]
})
export class MomentumPartnersModule { }
