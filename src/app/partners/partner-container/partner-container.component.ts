import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-container',
  templateUrl: './partner-container.component.html',
  styleUrls: ['./partner-container.component.scss']
})
export class PartnerContainerComponent implements OnInit {
  partnersArr = [
    {
      category: 'Partners',
      partners: [
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/awsLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/dotLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/facebookLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        }
      ]
    },
    {
      category: 'Hackathon',
      partners: [
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        }
      ]
    },
    {
      category: 'Experiences',
      partners: [
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        },
        {
          image: '../../../assets/abacusLogo.png',
          name: 'Happa Studios',
          description:
            'Do you have an idea that can impact? Have a product that could disrupt an industry? Your startup could be the next big thing at Momentum 2019. Registration is open, apply now!',
          tags: ['Social Media', 'Web Design', 'Development', 'Travelling']
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
