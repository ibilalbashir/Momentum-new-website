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
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UrlNotFoundComponent } from './url-not-found/url-not-found.component';
import { IntercomModule } from 'ng-intercom';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [AppComponent, StartupDialogComponent, UrlNotFoundComponent, PrivacyComponent],
  imports: [NgxSpinnerModule, MatProgressSpinnerModule, MatProgressBarModule, BrowserModule, HeaderModule, FooterModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule, HttpClientModule,
    IntercomModule.forRoot({
      appId: 'l29aqh38',
      updateOnRouterChange: true
    })],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    StartupDialogComponent
  ]
})
export class AppModule { }
