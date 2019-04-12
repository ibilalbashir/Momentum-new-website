import { HackathonFormComponent } from './../hackathon-form/hackathon-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-hackathon-container',
  templateUrl: './hackathon-container.component.html',
  styleUrls: ['./hackathon-container.component.scss']
})
export class HackathonContainerComponent implements OnInit {

  obj = [
    {
      image: '../../../assets/partners/Eocean-revised-logo.png',
      name: 'EOcean',

    }, {
      image: '../../../assets/partners/Bookme_Logo.png',
      name: 'bookme'
    }, {
      image: '../../../assets/partners/covalen.png',
      name: 'covalent'
    }, {
      image: '../../../assets/partners/Alfalah-logo.png',
      name: 'alfalah'
    }, {
      image: 'https://www.avanzasolutions.com/wp-content/uploads/2018/09/header-logo.png',
      name: 'avanza payment solutions'
    }
  ]

  constructor(public dialog: MatDialog) {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(HackathonFormComponent, {
      width: '1000px',
      height: '750px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit() {
  }



}
