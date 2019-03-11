import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersContainerComponent } from './speakers-container/speakers-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [SpeakersContainerComponent],
  exports: [SpeakersContainerComponent]
})
export class SpeakersModule {}
