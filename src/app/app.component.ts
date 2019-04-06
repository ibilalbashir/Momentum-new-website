import { StartupDialogComponent } from './startup-dialog/startup-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Momentum Tech Conference ';
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {

    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StartupDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
