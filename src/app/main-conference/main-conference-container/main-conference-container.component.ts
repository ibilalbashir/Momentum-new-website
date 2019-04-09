import { ConferenceServices } from './../../../Shared/services/conference.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-conference-container',
  templateUrl: './main-conference-container.component.html',
  styleUrls: ['./main-conference-container.component.scss']
})
export class MainConferenceContainerComponent implements OnInit {
  $allConfs;
  confsObj;
  date1;
  date2;
  newObj = [];
  index1 = [];
  index2 = [];

  constructor(private conferenceServices: ConferenceServices) { }

  ngOnInit() {
    this.$allConfs = this.conferenceServices.getConferences();
    this.$allConfs.subscribe(res => {
      this.confsObj = res;

      // this.confsObj.map(x => {
      //   var z = new Date(x.actualDate);
      //   x.actualDate = z.getFullYear() + '-' + (z.getMonth() + 1) + '-' + z.getDate();

      // })



      console.log('confs are ', res);
      console.log('after mapping', this.confsObj);
      this.date1 = this.confsObj[0].actualDate;


      for (var i = 0; i < this.confsObj.length; i++) {
        if (this.confsObj[i].actualDate !== this.date1) {
          this.date2 = this.confsObj[i].actualDate;
          break;
        }
      }
      for (var i = 0; i < this.confsObj.length; i++) {
        if (this.confsObj[i].actualDate === this.date1) {
          this.index1.push(this.confsObj[i])
        }
      }
      for (var i = 0; i < this.confsObj.length; i++) {
        if (this.confsObj[i].actualDate === this.date2) {
          this.index2.push(this.confsObj[i])
        }
      }

      // this.index1.map(x => {
      //   var z = new Date(x.from);
      //   x.from = z.getHours() + ':' + z.getMinutes();
      //   var y = new Date(x.to);
      //   x.to = y.getHours() + ':' + y.getMinutes();

      // })
      // this.index2.map(x => {
      //   var z = new Date(x.from);
      //   x.from = z.getHours() + ':' + z.getMinutes();
      //   var y = new Date(x.to);
      //   x.to = y.getHours() + ':' + y.getMinutes();

      // })

      console.log('date 1', this.date1);
      console.log('dat2 ', this.date2);
      console.log('index1', this.index1);
      console.log('index2', this.index2);




      //



    }, err => {
      console.log(err)
    })


  }

}
