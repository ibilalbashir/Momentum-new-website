import { PartnersServices } from './../../../Shared/services/partners.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-container',
  templateUrl: './partners-container.component.html',
  styleUrls: ['./partners-container.component.css']
})
export class PartnersContainerComponent implements OnInit {

  // obj = [{
  //   image: '../../../assets/partners/googleLogo..png',
  //   name: 'Google',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }, {
  //   image: '../../../assets/partners/facebookLogo.png',
  //   name: 'Facebook',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/awsLogo.png',
  //   name: 'AWS',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },

  // {
  //   image: '../../../assets/partners/microsoftLogo.png',
  //   name: 'Microsoft',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/IBM-Logo.png',
  //   name: 'IBM',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/logo_blue.png',
  //   name: 'GoLootlo',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/HashooGroup.png',
  //   name: 'Hashoo Group',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }
  //   , {
  //   image: '../../../assets/partners/Alfalah-logo.png',
  //   name: 'Bank Alfalah',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/hbl-logo.png',
  //   name: 'HBL',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/JSBANK.png',
  //   name: 'JS Bank',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }, {
  //   image: '../../../assets/partners/usaid-logo-1024x844.jpg',
  //   name: 'USAID',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }, {

  //   image: '../../../assets/partners/abacusLogo.png',
  //   name: 'Abacus',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // },
  // {
  //   image: '../../../assets/partners/covalen.png',
  //   name: 'Covalent',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }
  //   ,
  // {
  //   image: '../../../assets/partners/Careem.png',
  //   name: 'Careem',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }
  //   ,
  // {
  //   image: '../../../assets/partners/Eocean-revised-logo.png',
  //   name: 'EOcean',
  //   description:
  //     'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
  //   tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
  // }



  // ];

  pObj;
  finalObj = [];
  constructor(private partnerService: PartnersServices) { }

  ngOnInit() {
    this.partnerService.getPartners().subscribe(res => {
      this.pObj = res;
      console.log('partners are', res)
      this.pObj.forEach(element => {
        if (element.showOnFront === true) {
          this.finalObj.push(element)
        }
      });
      console.log('partners final obj', this.finalObj)
    }, err => {
      console.log(err)
    })
    //console.log('partners Array', this.obj)
  }

}
