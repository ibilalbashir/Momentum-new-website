import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSubscriptionRoutingModule } from './user-subscription-routing.module';
import { SubscriptionFormContainerComponent } from './subscription-form-container/subscription-form-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  imports: [
    CommonModule,
    UserSubscriptionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [SubscriptionFormContainerComponent, DialogBoxComponent],
  entryComponents: [DialogBoxComponent]
})
export class UserSubscriptionModule { }
