import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { VideoBannerModule } from '../video-banner/video-banner.module';
import { MomentumServicesModule } from '../momentum-services/momentum-services.module';
import { MomentumPartnersModule } from '../momentum-partners/momentum-partners.module';
import { SpeakersModule } from '../speakers/speakers.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    VideoBannerModule,
    MomentumServicesModule,
    MomentumPartnersModule,
    SpeakersModule
  ],
  declarations: [HomeContainerComponent]
})
export class HomeModule {}
