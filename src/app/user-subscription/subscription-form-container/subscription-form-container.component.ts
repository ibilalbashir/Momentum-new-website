import { DialogBoxComponent } from './../dialog-box/dialog-box.component';
import { SubscriptionService } from '../../../Shared/services/subscription.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

declare var swal: any;

@Component({
  selector: 'app-subscription-form-container',
  templateUrl: './subscription-form-container.component.html',
  styleUrls: ['./subscription-form-container.component.scss']
})

export class SubscriptionFormContainerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  finalObj = {};
  constructor(private formBuilder: FormBuilder, private _subscriptionService: SubscriptionService, public dialog: MatDialog) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]

    });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log('clicked', this.registerForm.value);


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.finalObj = this.registerForm.value;

    this._subscriptionService.createSubscription(this.finalObj).subscribe(res => {
      console.log('subscription res', res);
      this.openDialog();

    }, err => {
      console.group(err);
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'

      })
    });




  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
