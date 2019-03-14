import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PartnerPopupComponent } from '../partner-popup/partner-popup.component';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {
  @Input() categoryName;
  @Input() partnersArray;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}
  showPartner(obj) {
    this.dialog.open(PartnerPopupComponent, {
      width: '500px',
      data: obj
    });
  }
}
