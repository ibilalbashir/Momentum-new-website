import { ConferenceServices } from './../../../Shared/services/conference.services';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

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
  date1ToShow;
  date2ToShow;
  newObj = [];
  index1 = [];
  index2 = [];
  fields;
  fields2;

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





      console.log('date 1', this.date1);
      console.log('dat2 ', this.date2);
      console.log('index1', this.index1);
      console.log('index2', this.index2);
      const newdate1 = this.date1.replace(new RegExp("/", "g"), '-')
      console.log('new date', newdate1);

      try {
        this.fields = newdate1.split('-');
      } catch (error) {
        console.log(error);
      }
      try {
        this.fields2 = this.date2.split('/');
      } catch (error) {
        console.log(error);
      }


      const d2 = this.fields2[2] + '-' + this.fields2[1] + '-' + this.fields2[0];
      const d1 = this.fields[2] + '-' + this.fields[1] + '-' + this.fields[0];
      console.log('d1', d1)
      console.log('d2', d2)

      // console.log(moment(newdate1).format("MMM"))
      console.log(moment(new Date(d1)).format('MMMM Do YYYY'));
      this.date1ToShow = moment(new Date(d1)).format('MMMM Do ');
      console.log('date 1 to show', this.date1ToShow)
      this.date2ToShow = moment(new Date(d2)).format('MMMM Do ');
      console.log(this.date2ToShow)

      //



    }, err => {
      console.log(err)
    })


  }

}
