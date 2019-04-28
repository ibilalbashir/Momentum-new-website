import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyContainerComponent } from './company-container/company-container.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatCardModule
  ],
  declarations: [CompanyContainerComponent, CompanyDetailsComponent]
})
export class CompanyModule { }
