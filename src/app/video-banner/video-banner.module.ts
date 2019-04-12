import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBannerContainerComponent } from './video-banner-container/video-banner-container.component';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, EmbedVideo,HttpClientModule],
  declarations: [VideoBannerContainerComponent ],
  exports: [VideoBannerContainerComponent]
})
export class VideoBannerModule { }
