import { PartnersServices } from './../../../Shared/services/partners.services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss']
})
export class PartnerCardComponent implements OnInit {

  @Input() partnerId;

  obj = {};
  constructor(private partnerService: PartnersServices) { }

  ngOnInit() {
    console.log('partner id in card is ', this.partnerId);
    this.partnerService.getPartnerById(this.partnerId).subscribe(res => {
      this.obj = res;
      console.log('partner in workshop is', res)
    }, errr => {
      console.log(errr)
    })
  }

}
