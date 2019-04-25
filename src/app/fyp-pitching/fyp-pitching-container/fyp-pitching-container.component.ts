import { PartnersServices } from './../../../Shared/services/partners.services';
import { WorkshopsServices } from './../../../Shared/services/workshops.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fyp-pitching-container',
  templateUrl: './fyp-pitching-container.component.html',
  styleUrls: ['./fyp-pitching-container.component.scss']
})
export class FypPitchingContainerComponent implements OnInit {

  workshops;
  partner = {};

  constructor(private workshopService: WorkshopsServices, private partnerService: PartnersServices) { }

  ngOnInit() {
    this.workshopService.getWorkshops().subscribe(res => {
      this.workshops = res;
      console.log('workshops are', this.workshops)

      console.log('workshops are ', this.workshops[0]['organizedBy'])


    }, err => {
      console.log(err)
    })
    console.log(new Date());

  }


}
