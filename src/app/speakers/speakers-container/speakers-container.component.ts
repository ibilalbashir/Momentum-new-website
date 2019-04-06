import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers-container',
  templateUrl: './speakers-container.component.html',
  styleUrls: ['./speakers-container.component.css']
})
export class SpeakersContainerComponent implements OnInit {

  speakersObj = [
    {
      name: 'Speaker Name',
      designation: 'designation',
      imageUrl: ''
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
