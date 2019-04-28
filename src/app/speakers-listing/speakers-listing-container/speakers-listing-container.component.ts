import { Component, OnInit } from '@angular/core';
import { SpeakerServices } from 'src/Shared/services/speaker.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-speakers-listing-container',
  templateUrl: './speakers-listing-container.component.html',
  styleUrls: ['./speakers-listing-container.component.scss']
})
export class SpeakersListingContainerComponent implements OnInit {

  $speakers: Observable<object>;
  speakersObj;
  tempObj: any = [];
  constructor(private services: SpeakerServices) { }

  ngOnInit() {
    this.$speakers = this.services.getSpeakers();
    this.$speakers.subscribe(res => {
      this.tempObj = res;
      console.log('temp obj is', this.tempObj)
    }, err => {
      console.log(err)
    })
  }


}
