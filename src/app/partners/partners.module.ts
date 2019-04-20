import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnerContainerComponent } from './partner-container/partner-container.component';
import { PartnerListComponent } from './partner-container/partner-list/partner-list.component';
import { PartnerPopupComponent } from './partner-container/partner-popup/partner-popup.component';
import { MatDialogModule, MatCardModule } from '@angular/material';
@NgModule({
  imports: [CommonModule, PartnersRoutingModule, MatDialogModule,
    MatCardModule],
  declarations: [
    PartnerContainerComponent,
    PartnerListComponent,
    PartnerPopupComponent
  ],
  entryComponents: [PartnerPopupComponent]
})
export class PartnersModule { }
