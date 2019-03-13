import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonRoutingModule } from './hackathon-routing.module';
import { HackathonContainerComponent } from './hackathon-container/hackathon-container.component';

@NgModule({
  imports: [
    CommonModule,
    HackathonRoutingModule
  ],
  declarations: [HackathonContainerComponent]
})
export class HackathonModule { }
