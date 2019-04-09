import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainConferenceRoutingModule } from './main-conference-routing.module';
import { MainConferenceContainerComponent } from './main-conference-container/main-conference-container.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MainConferenceRoutingModule, MatTabsModule, MatCardModule],
  declarations: [MainConferenceContainerComponent]
})
export class MainConferenceModule { }
