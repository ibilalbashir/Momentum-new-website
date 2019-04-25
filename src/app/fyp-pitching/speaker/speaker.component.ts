import { SpeakerServices } from './../../../Shared/services/speaker.services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input() speakerId;
  obj = {};


  constructor(private speakerService: SpeakerServices) { }

  ngOnInit() {
    this.speakerService.getSpeakerById(this.speakerId).subscribe(res => {
      this.obj = res;
      console.log('speakers res is ', res)

    }, err => {
      console.log(err)
    })
  }

}
