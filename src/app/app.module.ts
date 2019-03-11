import { FooterModule } from "./footer/footer.module";
import { SpeakersModule } from "./speakers/speakers.module";
import { MomentumServicesModule } from "./momentum-services/momentum-services.module";

import { HeaderModule } from "./header/header.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VideoBannerModule } from "./video-banner/video-banner.module";
import { MomentumPartnersModule } from "./momentum-partners/momentum-partners.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    VideoBannerModule,
    MomentumServicesModule,
    MomentumPartnersModule,
    SpeakersModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
