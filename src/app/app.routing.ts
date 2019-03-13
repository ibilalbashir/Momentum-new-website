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
    path: 'partners',
    loadChildren: './partners/partners.module#PartnersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
