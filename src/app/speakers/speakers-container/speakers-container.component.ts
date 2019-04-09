import { Observable } from 'rxjs';
import { SpeakerServices } from './../../../Shared/services/speaker.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers-container',
  templateUrl: './speakers-container.component.html',
  styleUrls: ['./speakers-container.component.css']
})
export class SpeakersContainerComponent implements OnInit {

  $speakers: Observable<object>;
  speakersObj;

  constructor(private services: SpeakerServices) { }

  ngOnInit() {
    this.$speakers = this.services.getSpeakers();
    this.$speakers.subscribe(res => {
      this.speakersObj = res;
      console.log('res is ', this.speakersObj)
    }, err => {
      console.log(err)
    })
  }

}
