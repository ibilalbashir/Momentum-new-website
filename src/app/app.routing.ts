import { PrivacyComponent } from './privacy/privacy.component';
import { UrlNotFoundComponent } from './url-not-found/url-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'buy-ticket',
    loadChildren: './pricing/pricing.module#PricingModule'
  },
  {
    path: 'speakers',
    loadChildren: './profile/profile.module#ProfileModule'
  }, {
    path: 'partners',
    loadChildren: './partners/partners.module#PartnersModule'
  },

  {
    path: 'hackathon',
    loadChildren: './hackathon/hackathon.module#HackathonModule'
  },
  {
    path: 'main-conference',
    loadChildren:
      './main-conference/main-conference.module#MainConferenceModule'
  }, {
    path: 'startups',
    loadChildren: './startup-listing/startup-listing.module#StartupListingModule'
  },
  {
    path: 'workshops',
    loadChildren: './fyp-pitching/fyp-pitching.module#FypPitchingModule'
  },
  {
    path: 'conference-details',
    loadChildren:
      './conference-detail/conference-detail.module#ConferenceDetailModule'
  },
  {
    path: 'startup100', loadChildren: './startup-100/startup-100.module#Startup100Module'
  }, {
    path: 'companies', loadChildren: './company/company.module#CompanyModule'
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'logistics', loadChildren: './offers/offers.module#OffersModule'
  },
  { path: '**', component: UrlNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
