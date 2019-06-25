import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.scss']
})
export class SliderContainerComponent implements OnInit {
  imageUrlArray = [
    '../../../assets/slider/1.JPG',
    '../../../assets/slider/2.JPG',
    '../../../assets/slider/3.JPG',
    '../../../assets/slider/4.JPG',
    '../../../assets/slider/5.JPG'
  ]

  constructor() { }

  ngOnInit() {
  }

}
