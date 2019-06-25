import { PartnersServices } from './../../../Shared/services/partners.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-container',
  templateUrl: './partner-container.component.html',
  styleUrls: ['./partner-container.component.scss']
})
export class PartnerContainerComponent implements OnInit {
  partnersArr: any = [];
  finalArray = [];
  constructor(private partnersSercie: PartnersServices) { }

  ngOnInit() {
    this.partnersSercie.getPartners().subscribe(res => {

      this.partnersArr = res;
      console.log('parners Array s', res);

      for (let i = 0; i < this.partnersArr.length; i++) {
        if (this.partnersArr[i].category !== 'Investor' && this.partnersArr[i].category !== 'Sponsor') {
          this.finalArray.push(this.partnersArr[i]);
        }
      }
      console.log('final Array', this.finalArray)
    }, err => {
      console.log(err)
    })
  }
}
