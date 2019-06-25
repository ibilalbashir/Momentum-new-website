import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-momentum17-container',
  templateUrl: './momentum17-container.component.html',
  styleUrls: ['./momentum17-container.component.scss']
})
export class Momentum17ContainerComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [

      {
        width: '70%',
        height: '500px',
        "thumbnailsColumns": 3,
        "thumbnailsRows": 2,
        "thumbnailsPercent": 40,
        "imagePercent": 60,
        "thumbnailMargin": 2,
        "thumbnailsMargin": 2
      },
      {
        "breakpoint": 500,
        "width": "300px",
        "height": "900px",
        "thumbnailsColumns": 3
      },
      {
        "breakpoint": 300,
        "width": "100%",
        "height": "600px",
        "thumbnailsColumns": 2
      }

    ];

    this.galleryImages = [
      {
        small: '../../../assets/m17/1.JPG',
        medium: '../../../assets/m17/1.JPG',
        big: '../../../assets/m17/1.JPG'
      },
      {
        small: '../../../assets/m17/2.JPG',
        medium: '../../../assets/m17/2.JPG',
        big: '../../../assets/m17/2.JPG'
      },
      {
        small: '../../../assets/m17/3.JPG',
        medium: '../../../assets/m17/3.JPG',
        big: '../../../assets/m17/3.JPG'
      },
      {
        small: '../../../assets/m17/4.JPG',
        medium: '../../../assets/m17/4.JPG',
        big: '../../../assets/m17/4.JPG'
      },
      {
        small: '../../../assets/m17/5.JPG',
        medium: '../../../assets/m17/5.JPG',
        big: '../../../assets/m17/5.JPG'
      },
      {
        small: '../../../assets/m17/6.JPG',
        medium: '../../../assets/m17/6.JPG',
        big: '../../../assets/m17/6.JPG'
      },
      {
        small: '../../../assets/m17/7.JPG',
        medium: '../../../assets/m17/7.JPG',
        big: '../../../assets/m17/7.JPG'
      },
      {
        small: '../../../assets/m17/8.JPG',
        medium: '../../../assets/m17/8.JPG',
        big: '../../../assets/m17/8.JPG'
      },
      {
        small: '../../../assets/m17/9.JPG',
        medium: '../../../assets/m17/9.JPG',
        big: '../../../assets/m17/9.JPG'
      },
      {
        small: '../../../assets/m17/10.JPG',
        medium: '../../../assets/m17/10.JPG',
        big: '../../../assets/m17/10.JPG'
      },

      {
        small: '../../../assets/m17/11.JPG',
        medium: '../../../assets/m17/11.JPG',
        big: '../../../assets/m17/11.JPG'
      }
    ];
  }

}
