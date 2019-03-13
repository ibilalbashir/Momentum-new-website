import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-container',
  templateUrl: './pricing-container.component.html',
  styleUrls: ['./pricing-container.component.scss']
})
export class PricingContainerComponent implements OnInit {
  pricing = [
    {
      name: 'Regular Pass',
      price: '25,000',
      features: ['Access', 'No Access', 'Premium', 'Stuff', 'Momentum', 'Swag']
    },
    {
      name: 'All Access Pass',
      price: '30,000',
      features: [
        'Access',
        'No Access',
        'Premium',
        'Stuff',
        'Momentum',
        'Swag',
        'Yeah',
        'Speakers',
        'Conferences'
      ]
    },
    {
      name: 'Premium Access Pass',
      price: '30,000',
      features: [
        'Access',
        'No Access',
        'Premium',
        'Stuff',
        'Momentum',
        'Swag',
        'Ohh',
        'Yeah',
        'Speakers',
        'Conferences',
        'Roti',
        'BBQ',
        'Salads'
      ]
    }
  ];
  constructor() {}

  ngOnInit() {
    const len = this.pricing[this.pricing.length - 1].features.length;
    for (let index = 0; index < this.pricing.length - 1; index++) {
      const element = this.pricing[index];
      const diff = len - element.features.length;
      for (let _index = 0; _index < diff; _index++) {
        element.features.push('---');
      }
    }
  }
}
