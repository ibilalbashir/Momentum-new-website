import { FooterModule } from './footer/footer.module';
import { SpeakersModule } from './speakers/speakers.module';
import { MomentumServicesModule } from './momentum-services/momentum-services.module';

import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoBannerModule } from './video-banner/video-banner.module';
import { MomentumPartnersModule } from './momentum-partners/momentum-partners.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { StartupDialogComponent } from './startup-dialog/startup-dialog.component';

@NgModule({
  declarations: [AppComponent, StartupDialogComponent],
  imports: [BrowserModule, HeaderModule, FooterModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    StartupDialogComponent
  ]
})
export class AppModule { }
