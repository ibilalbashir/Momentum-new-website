import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.scss']
})
export class GalleryContainerComponent implements OnInit {


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
        small: '../../../assets/gallery/1.JPG',
        medium: '../../../assets/gallery/1.JPG',
        big: '../../../assets/gallery/1.JPG'
      },
      {
        small: '../../../assets/gallery/2.JPG',
        medium: '../../../assets/gallery/2.JPG',
        big: '../../../assets/gallery/2.JPG'
      },
      {
        small: '../../../assets/gallery/3.JPG',
        medium: '../../../assets/gallery/3.JPG',
        big: '../../../assets/gallery/3.JPG'
      },
      {
        small: '../../../assets/gallery/4.JPG',
        medium: '../../../assets/gallery/4.JPG',
        big: '../../../assets/gallery/4.JPG'
      },
      {
        small: '../../../assets/gallery/5.JPG',
        medium: '../../../assets/gallery/5.JPG',
        big: '../../../assets/gallery/5.JPG'
      },
      {
        small: '../../../assets/gallery/6.JPG',
        medium: '../../../assets/gallery/6.JPG',
        big: '../../../assets/gallery/6.JPG'
      },
      {
        small: '../../../assets/gallery/7.JPG',
        medium: '../../../assets/gallery/7.JPG',
        big: '../../../assets/gallery/7.JPG'
      },
      {
        small: '../../../assets/gallery/8.JPG',
        medium: '../../../assets/gallery/8.JPG',
        big: '../../../assets/gallery/8.JPG'
      },
      {
        small: '../../../assets/gallery/9.JPG',
        medium: '../../../assets/gallery/9.JPG',
        big: '../../../assets/gallery/9.JPG'
      },
      {
        small: '../../../assets/gallery/10.JPG',
        medium: '../../../assets/gallery/10.JPG',
        big: '../../../assets/gallery/10.JPG'
      },

      {
        small: '../../../assets/gallery/11.JPG',
        medium: '../../../assets/gallery/11.JPG',
        big: '../../../assets/gallery/11.JPG'
      },
      {
        small: '../../../assets/gallery/12.JPG',
        medium: '../../../assets/gallery/12.JPG',
        big: '../../../assets/gallery/12.JPG'
      },
      {
        small: '../../../assets/gallery/13.JPG',
        medium: '../../../assets/gallery/13.JPG',
        big: '../../../assets/gallery/13.JPG'
      },
      {
        small: '../../../assets/gallery/14.JPG',
        medium: '../../../assets/gallery/14.JPG',
        big: '../../../assets/gallery/14.JPG'
      },
      {
        small: '../../../assets/gallery/15.JPG',
        medium: '../../../assets/gallery/15.JPG',
        big: '../../../assets/gallery/15.JPG'
      },
      {
        small: '../../../assets/gallery/16.JPG',
        medium: '../../../assets/gallery/16.JPG',
        big: '../../../assets/gallery/16.JPG'
      },
      {
        small: '../../../assets/gallery/17.JPG',
        medium: '../../../assets/gallery/17.JPG',
        big: '../../../assets/gallery/17.JPG'
      },
      {
        small: '../../../assets/gallery/18.JPG',
        medium: '../../../assets/gallery/18.JPG',
        big: '../../../assets/gallery/18.JPG'
      },
      {
        small: '../../../assets/gallery/19.JPG',
        medium: '../../../assets/gallery/19.JPG',
        big: '../../../assets/gallery/19JPG'
      },
      {
        small: '../../../assets/gallery/20.JPG',
        medium: '../../../assets/gallery/20.JPG',
        big: '../../../assets/gallery/20.JPG'
      }
    ];
  }

}
