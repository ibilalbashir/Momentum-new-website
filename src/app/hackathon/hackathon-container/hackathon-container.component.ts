import { HackathonFormComponent } from './../hackathon-form/hackathon-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment'
@Component({
  selector: 'app-hackathon-container',
  templateUrl: './hackathon-container.component.html',
  styleUrls: ['./hackathon-container.component.scss']
})
export class HackathonContainerComponent implements OnInit {
  countDown = 0;
  sec;
  min;
  hr;
  day;
  duration: any = 0;

  obj = [
    {
      image: '../../../assets/partners/Eocean-revised-logo.png',
      name: 'EOcean',

    }, {
      image: '../../../assets/partners/Bookme_Logo.png',
      name: 'bookme'
    }, {
      image: '../../../assets/covalent.png',
      name: 'covalent'
    }, {
      image: '../../../assets/partners/Alfalah-logo.png',
      name: 'alfalah'
    }, {
      image: '../../../assets/avanza.png',
      name: 'Avanza Premier Payment Systems'
    },
    {
      image: '../../../assets/rapid.png',
      name: 'RapidCompute'
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
    const startDate = new Date();
    const endDate = new Date(2019, 3, 23);

    const start = startDate.getTime();
    const endd = endDate.getTime();

    const difff = endd - start;


    const interval = 1000;


    const end = moment(endDate).endOf('day');
    console.log('end date', end)
    // setInterval(function () {
    //   const timeLeft = moment.duration(end.diff(moment()));

    //   console.log(moment("20111031", "YYYYMMDD").fromNow())

    // }, 1000);

  }



}
