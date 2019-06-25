import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgSliderRoutingModule } from './img-slider-routing.module';
import { SliderContainerComponent } from './slider-container/slider-container.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  imports: [
    CommonModule,
    ImgSliderRoutingModule,
    SlideshowModule
  ],
  declarations: [SliderContainerComponent],
  exports: [SliderContainerComponent]
})
export class ImgSliderModule { }
