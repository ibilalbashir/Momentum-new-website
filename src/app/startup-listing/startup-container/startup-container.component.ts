import { StartupServices } from './../../../Shared/services/startups.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup-container',
  templateUrl: './startup-container.component.html',
  styleUrls: ['./startup-container.component.scss']
})
export class StartupContainerComponent implements OnInit {
  obj: any = [];
  constructor(private startupServices: StartupServices) { }

  ngOnInit() {

    this.startupServices.getAllStartups().subscribe(res => {
      this.obj = res;
      console.log('startups are', res)
    }, err => {
      console.log(err)
    })
  }

}
