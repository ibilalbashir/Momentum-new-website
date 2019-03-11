import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [HeaderContainerComponent],
  exports: [HeaderContainerComponent]
})
export class HeaderModule {}
