import { StartupServices } from './../../../Shared/services/startups.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup-container',
  templateUrl: './startup-container.component.html',
  styleUrls: ['./startup-container.component.scss']
})
export class StartupContainerComponent implements OnInit {
  obj: any = [];
  featuredObj: any = [];
  nonFeatured: any = [];
  constructor(private startupServices: StartupServices) { }

  ngOnInit() {

    this.startupServices.getAllStartups().subscribe(res => {
      this.obj = res;

      this.obj.forEach(element => {
        if (element.isFeatured !== "true" || element.isFeatured !== "True") {
          this.nonFeatured.push(element)
        }
      });

      console.log('non featured are', this.nonFeatured);

    }, err => {
      console.log(err)
    })

    this.startupServices.getfeaturedStartups().subscribe(res => {
      this.featuredObj = res;
      console.log(res)
    }, err => {
      console.log(err)
    })


  }

}
