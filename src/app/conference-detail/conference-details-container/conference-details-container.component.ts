import { ConferenceServices } from './../../../Shared/services/conference.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conference-details-container',
  templateUrl: './conference-details-container.component.html',
  styleUrls: ['./conference-details-container.component.scss']
})
export class ConferenceDetailsContainerComponent implements OnInit {
  id;
  obj = {};
  images = [
    {
      url: '../../../assets/slider/1.JPG'

    },
    {
      url: '../../../assets/slider/2.JPG'
    }, {

      url: '../../../assets/slider/3.JPG'
    }, {
      url:
        '../../../assets/slider/4.JPG'
    }
  ]
  constructor(private conferenceService: ConferenceServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('query paramter', this.id)

      this.conferenceService.getConferenceById(this.id).subscribe(res => {
        console.log('confrenece res detils', res)
        this.obj = res;
      }, er => {
        console.log(er)
      })
    });

  }
}
