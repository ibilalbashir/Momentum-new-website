import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Startup100RoutingModule } from './startup-100-routing.module';
import { StartupHomeComponent } from './startup-home/startup-home.component';

@NgModule({
  imports: [
    CommonModule,
    Startup100RoutingModule
  ],
  declarations: [StartupHomeComponent]
})
export class Startup100Module { }
