import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: [HeaderContainerComponent],
  exports: [HeaderContainerComponent]
})
export class HeaderModule {}
