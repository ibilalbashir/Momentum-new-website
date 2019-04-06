import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-container',
  templateUrl: './pricing-container.component.html',
  styleUrls: ['./pricing-container.component.scss']
})
export class PricingContainerComponent implements OnInit {
  pricing = [
    {
      btn: 'Buy Now',
      name: 'Student Pass',
      price: '2,000',
      features: ['Access to Conference Area', 'Access to Exhibition Area', 'Access to Final Concert', 'Access to Career Expo', 'Exclusively for Students (Verification powered by Uninama)', '-']
    },
    {
      btn: 'Buy Now',
      name: 'Entrepreneur Pass',
      price: '5,000',
      features: [
        'Access to Conference Area',
        'Access to Exhibition Area',
        'Access to Final Concert',
        'Access to Career Expo',
        'Momentum Swag Bag',
        '-'
      ]
    },
    {
      btn: 'Buy Now',
      name: 'Corporate Pass',
      price: '12,000',
      features: [
        'Dedicated Seating at Conference Area',
        'Access to Exhibition Area',
        'VIP Enclosure at Final Concert',
        'Access to Career Expo',
        'Exclusive Momentum Swag ',
        'Exclusive Access to Lunch & Networking Area',
        '-'
      ]
    },
    {
      btn: 'Apply Now',
      name: 'Influencer Pass',
      price: '25,000',
      features: [
        'Dedicated Seating at Conference Area',
        'Access to Exhibition Area',
        'VIP Enclosure at Final Concert',
        'Access to Career Expo',
        'Exclusive Momentum Swag',
        'Exclusive Access to Lunch & Networking Area',
        'Invitation to Opening Night ',
        'Access to Speakers Lounge',
        'Access to Startup Trainings & Pitching @ NIC Karachi ',
        'Access to Partners & Sponsors Dinners ',
        'Your Profile displayed on Momentum’s website & App',
        'Subject to approval after interview'
      ]
    }
  ];
  constructor() { }

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
