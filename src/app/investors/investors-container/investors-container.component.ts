import { PartnersServices } from './../../../Shared/services/partners.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investors-container',
  templateUrl: './investors-container.component.html',
  styleUrls: ['./investors-container.component.scss']
})
export class InvestorsContainerComponent implements OnInit {
  partnersArr: any = [];
  constructor(private partnerService: PartnersServices) { }

  ngOnInit() {
    this.partnerService.getPartners().subscribe(res => {
      this.partnersArr = res;
      console.log('all partnera', res)
    }, err => {
      console.log(err)
    })
  }

}
