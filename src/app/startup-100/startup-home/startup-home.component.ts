import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup-home',
  templateUrl: './startup-home.component.html',
  styleUrls: ['./startup-home.component.scss']
})
export class StartupHomeComponent implements OnInit {
  data = [
    {
      image: '../../../assets/momentum-images/2.png',
      heading: 'Showcasing at Momentum 2019',
      description:
        'Inducted startups get a booth to showcase their awesome product on the Momentum 2019 exhibition floor.'
    },
    {
      image: '../../../assets/momentum-images/3.png',
      heading: 'Real Investment Opportunities',
      description:
        'With the highest concentration of investors and industry professionals on any exhibition floor in Pakistan, your next product demo may get you funded!'
    },
    {
      image: '../../../assets/momentum-images/4.png',
      heading: 'Network with the Ecosystem',
      description:
        'With technical, economical and operational decision makers from across the industry attending the conference, never has a meaningful introduction been this easy. Smaller satellite events throughout the year provide more exclusive opportunities to engage and connect.'
    },
    {
      image: '../../../assets/momentum-images/5.png',
      heading: 'Make New Tech Savvy Customers',
      description:
        'The attendees at Momentum 2019 aren’t only tech savvy but they’re early adopters also. A day on the exhibition floor could land you with thousands of new leads or one big corporate contract!'
    },
    {
      image: '../../../assets/momentum-images/6.png',
      heading: 'Connect with the Right Mentors',
      description:
        'Success is directly proportional to experience and our Mentors not only have the fortitude to lead great companies, they have a passion to give back through first-hand mentoring experiences that last beyond the conference.        '
    },
    {
      image: '../../../assets/momentum-images/7.png',
      heading: 'Karachi Sightseeing Tour',
      description:
        'Events happening on the sidelines of the conference provides access to all guests and dignitaries in a relaxed social environment while all are entertained to a cultural and historical tour of our home city of Karachi!'
    }]
  constructor() { }

  ngOnInit() {
  }

}
