import { ConferenceServices } from './../../../Shared/services/conference.services';
import { Component, OnInit, ɵConsole } from '@angular/core';
import * as moment from 'moment';

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
  array = [];
  fields2;



  constructor(private conferenceServices: ConferenceServices) { }


  ngOnInit() {

    this.$allConfs = this.conferenceServices.getConferences();
    this.$allConfs.subscribe(res => {

      this.confsObj = res;
      console.log('orignal res ', res)
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

      console.log('index1 before sorting', this.index1);
      console.log('index2 before sorting', this.index2);

      for (let i = 0; i < this.index1.length; i++) {
        let currentDate = new Date();


        let temp = this.index1[i].from.split(":")
        let hrs = temp[0];
        let mins = temp[1];

        currentDate.setHours(hrs);
        currentDate.setMinutes(mins);
        this.index1[i].from = currentDate;





      }
      for (let i = 0; i < this.index1.length; i++) {
        let current = new Date();


        let t = this.index1[i].to.split(":")
        let h = t[0];
        let m = t[1];

        current.setHours(h);
        current.setMinutes(m);
        this.index1[i].to = current;
      }

      this.index1.sort((a, b) => a.from < b.from ? -1 : a.from > b.from ? 1 : 0);



      for (let i = 0; i < this.index2.length; i++) {
        let currentDate = new Date();


        let temp = this.index2[i].from.split(":")
        let hrs = temp[0];
        let mins = temp[1];

        currentDate.setHours(hrs);
        currentDate.setMinutes(mins);
        this.index2[i].from = currentDate;





      }
      for (let i = 0; i < this.index2.length; i++) {
        let current = new Date();


        let t = this.index2[i].to.split(":")
        let h = t[0];
        let m = t[1];

        current.setHours(h);
        current.setMinutes(m);
        this.index2[i].to = current;
      }

      this.index2.sort((a, b) => a.from < b.from ? -1 : a.from > b.from ? 1 : 0);



      console.log('sorted array', this.index2);





      try {
        this.fields = this.date1.split('/');
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



      this.date1ToShow = moment(new Date(d1)).format('MMMM Do ');

      this.date2ToShow = moment(new Date(d2)).format('MMMM Do ');

    }, err => {
      console.log(err)
    })


  }

}
