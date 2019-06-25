import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxGalleryModule

  ],
  declarations: [GalleryContainerComponent]
})
export class GalleryModule { }
