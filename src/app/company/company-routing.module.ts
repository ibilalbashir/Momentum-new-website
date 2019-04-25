import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyContainerComponent } from './company-container/company-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CompanyContainerComponent },
  { path: ':id', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
