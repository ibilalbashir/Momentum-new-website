import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBannerContainerComponent } from './video-banner-container/video-banner-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoBannerContainerComponent],
  exports: [VideoBannerContainerComponent]
})
export class VideoBannerModule {}
