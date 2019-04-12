
import { BuyNowDialogComponent } from './../buy-now-dialog/buy-now-dialog.component';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {
  @Input() name;
  @Input() price;
  @Input() features;
  @Input() btn;
  @Input() url;

  constructor(public dialog: MatDialog) { }

  openDialog(url): void {
    if (url === 'applynow') {
      const dialogRef = this.dialog.open(BuyNowDialogComponent, {

        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    } else {
      console.log(url)
      window.open(url, "_blank");
    }


  }

  ngOnInit() { }
}
