import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-partner-popup',
  templateUrl: './partner-popup.component.html',
  styleUrls: ['./partner-popup.component.scss']
})
export class PartnerPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data);
  }

  ngOnInit() {}
}
