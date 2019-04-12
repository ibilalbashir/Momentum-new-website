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
  },
  {
    path: 'hackathon',
    loadChildren: './hackathon/hackathon.module#HackathonModule'
  },
  {
    path: 'main-conference',
    loadChildren:
      './main-conference/main-conference.module#MainConferenceModule'
  },
  {
    path: 'fyp-pitching',
    loadChildren: './fyp-pitching/fyp-pitching.module#FypPitchingModule'
  },
  {
    path: 'conference-details',
    loadChildren:
      './conference-detail/conference-detail.module#ConferenceDetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
