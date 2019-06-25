
import { Momentum17ContainerComponent } from './momentum17-container/momentum17-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Momentum17RoutingModule } from './momentum17-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  imports: [
    CommonModule,
    Momentum17RoutingModule,

    NgxGalleryModule
  ],
  declarations: [Momentum17ContainerComponent]
})
export class Momentum17Module { }
