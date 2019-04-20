import { PartnersServices } from './../../../Shared/services/partners.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-container',
  templateUrl: './partner-container.component.html',
  styleUrls: ['./partner-container.component.scss']
})
export class PartnerContainerComponent implements OnInit {
  partnersArr: any = [];
  // partnersArr = [ // {
  //   category: 'Partners',
  //   partners: [
  //     {
  //       image: '../../../assets/partners/googleLogo..png',
  //       name: 'Google',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/facebookLogo.png',
  //       name: 'Facebook',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/awsLogo.png',
  //       name: 'AWS',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/microsoftLogo.png',
  //       name: 'Microsoft',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/IBM-Logo.png',
  //       name: 'IBM',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     }
  //   ]
  // },

  // {
  //   category: 'Hackathon',
  //   partners: [
  //     {
  //       image: '../../../assets/partners/logo_blue.png',
  //       name: 'GoLootlo',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/Hashoo Group.png',
  //       name: 'Hashoo Group',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/Alfalah-logo.png',
  //       name: 'Bank Alfalah',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/hbl-logo.png',
  //       name: 'HBL',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/JS BANK.png',
  //       name: 'JS Bank',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     }
  //   ]
  // },
  // {
  //   category: 'Experiences',
  //   partners: [
  //     {
  //       image: '../../../assets/partners/usaid-logo-1024x844.jpg',
  //       name: 'USAID',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/abacusLogo.png',
  //       name: 'Abacus',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '',
  //       name: 'Covalent',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/Careem.png',
  //       name: 'Careem',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     },
  //     {
  //       image: '../../../assets/partners/Eocean-revised-logo.png',
  //       name: 'EOcean',
  //       description:
  //         'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //       tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  //     }
  //   ]
  // }
  //];
  constructor(private partnersSercie: PartnersServices) { }

  ngOnInit() {
    this.partnersSercie.getPartners().subscribe(res => {
      this.partnersArr = res;
      console.log('parners Array s', res);
    }, err => {
      console.log(err)
    })
  }
}
