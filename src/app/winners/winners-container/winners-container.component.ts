import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners-container',
  templateUrl: './winners-container.component.html',
  styleUrls: ['./winners-container.component.scss']
})
export class WinnersContainerComponent implements OnInit {


  obj;

  constructor() { }

  ngOnInit() {
    this.obj = [
      {
        "name": "EyeAutomate",
        "description": "Nearly 1/50 people are paralyzed globally who are not able to move their arms and legs. They spent their whole life in dependency until death. To reduce this dependency level from the life of such person we have developed three solutions according to his/her nature of disability consisting on wheelchair driven by a joystick, smartphone and user's eye gaze interaction. Now a person can drive his wheelchair with a smartphone and his/her eye gaze depending on his/her disability.",
        "teamMembers": [],
        "image": "http://13.233.9.45:3000/api/Attachments/momentum-attachments/download/b28a0317-c3f7-4eba-aafb-6ce20f926be4.jpeg",
        "isActive": true,
        "email": "shahzad.eyeautomate@gmail.com",
        "phone": "+923218883719",
        "address": "21-Km Main Multan Road, Manga Mandi, Lahore",
        "cityId": "5cb5b8ea5247e9413bfa64fe",
        "socialLinks": [
          {
            "key": "Facebook",
            "link": null
          },
          {
            "key": "Twitter",
            "link": null
          },
          {
            "key": "Linkedin",
            "link": null
          },
          {
            "key": "Website",
            "link": null
          }
        ],
        "category": [
          "5cb838655247e9413bfa6528"
        ],
        "isVerified": false,
        "created": "2019-05-06T19:58:33.037Z",
        "id": "5cd091e9e00fec6f27f19f81",
        "momentumUserId": "5caddb083bac891a53e119d1",
        "startup100": true
      },
      {
        "name": "Islam360",
        "description": "Now you can search Anything from Holy QURAN and all Ahadees books on your Mobile Phone.",
        "teamMembers": [],
        "image": "http://13.233.9.45:3000/api/Attachments/momentum-attachments/download/c166814e-d2dc-447a-b759-3fc970f55874.png",
        "isActive": true,
        "email": "zahidchihpa@hotmail.com",
        "phone": "03003012285",
        "address": "  ",
        "cityId": "5cb5b8ea5247e9413bfa6510",
        "socialLinks": [
          {
            "key": "Facebook",
            "link": ""
          },
          {
            "key": "Twitter",
            "link": ""
          },
          {
            "key": "Linkedin",
            "link": ""
          },
          {
            "key": "Website",
            "link": ""
          }
        ],
        "category": [
          "5cb1a3f1fdea081deaca24c5"
        ],
        "isVerified": false,
        "created": "2019-05-09T10:04:09.312Z",
        "id": "5cd3fb1966d6e7752a22cfe6",
        "momentumUserId": "5caddb083bac891a53e119d1",
        "startup100": true
      },
      {
        "name": "GoGhoom",
        "description": "\"GoGhoom is a travel consolidation and distribution platform. GoGhoom has developed a centralized repository of Travel products i.e. Hotels, Accommodation, Transport & Experiences in around 172+ destinations in Pakistan which we distribute via B2C (GoGhoom), B2B (GoTravel) and B2B2C (Telcos, Affiliates, Re-sellers) Channels.  GoGhoom is already Pakistan's Largest hotel consolidator and rapidly rolling out its distribution technology (Akin to a mini GDS) to multiple channels\"",
        "teamMembers": [],
        "image": "http://13.233.9.45:3000/api/Attachments/momentum-attachments/download/0cc72b35-6751-4be8-8974-b42a8be2807f.jpeg",
        "isActive": true,
        "email": "travel@goghoom.com",
        "phone": "923111333046",
        "address": "45 XX - Main Khayaban E Iqbal - DHA Phase III - Lahore",
        "cityId": "5cb5b8ea5247e9413bfa64fe",
        "socialLinks": [
          {
            "key": "Facebook",
            "link": null
          },
          {
            "key": "Twitter",
            "link": null
          },
          {
            "key": "Linkedin",
            "link": null
          },
          {
            "key": "Website",
            "link": null
          }
        ],
        "category": [
          "5cb837fc1aef634147a81494"
        ],
        "isVerified": false,
        "created": "2019-05-06T20:01:26.687Z",
        "id": "5cd0929666d6e7752a22cfdc",
        "momentumUserId": "5caddb083bac891a53e119d1",
        "startup100": true
      },
      {
        "name": "EDVON Robotics",
        "description": "EDVON Robotics manufactures low cost STEM Kits, Robotic Kits, STEAM Kits and DIY Robotic Kits according to the need and age group of the school and university students. EDVON Robotics designs customize STEM Robotic Course for schools and universities to integrate STEM based robotics education. We have also developed a programming software based on Scratch that a 3rd grad student can easily use to code their games and program their own robots.  We are doing it because we know, to go ahead in the 21st century, children not only need to be able to use technology but to develop it. STEM robotic kit is exciting for the younger pupils. It encourages them to acquire imperative skills that will help them during their school years and beyond (engineering design process, logical thinking, scientific approach, critical thinking, problem solving skills, persistence, creativity, and team spirit). We are building a nation of skilled work force for 21st century through EDVON Robotics.",
        "teamMembers": [],
        "image": "http://13.233.9.45:3000/api/Attachments/momentum-attachments/download/219b850f-4781-4749-b2bf-7f989b455590.png",
        "isActive": true,
        "email": "nabeel9172@gmail.com",
        "phone": "03032748467",
        "address": "Suite # 113, Technology Park, ICCBS, Karachi University",
        "cityId": "5cb5b8ea5247e9413bfa6510",
        "socialLinks": [
          {
            "key": "Facebook",
            "link": ""
          },
          {
            "key": "Twitter",
            "link": ""
          },
          {
            "key": "Linkedin",
            "link": ""
          },
          {
            "key": "Website",
            "link": ""
          }
        ],
        "category": [
          "5cb1a3f1fdea081deaca24c5"
        ],
        "isVerified": false,
        "created": "2019-05-06T19:05:22.801Z",
        "id": "5cd0857266d6e7752a22cfd8",
        "momentumUserId": "5caddb083bac891a53e119d1",
        "startup100": true
      }
    ]
  }

}
