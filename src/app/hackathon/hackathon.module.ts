import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonRoutingModule } from './hackathon-routing.module';
import { HackathonContainerComponent } from './hackathon-container/hackathon-container.component';
import { MatCardModule } from '@angular/material/card';
import { HackathonFormComponent } from './hackathon-form/hackathon-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    HackathonRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [HackathonContainerComponent, HackathonFormComponent],
  entryComponents: [HackathonFormComponent]
})
export class HackathonModule { }
