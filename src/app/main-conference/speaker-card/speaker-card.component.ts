import { Component, OnInit, Input } from '@angular/core';
import { SpeakerServices } from 'src/Shared/services/speaker.services';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {
  obj = {};
  @Input() id;
  @Input() type;
  constructor(private speakerService: SpeakerServices) { }

  ngOnInit() {

    this.speakerService.getSpeakerById(this.id).subscribe(res => {
      this.obj = res;

    }, err => {
      console.log(err)
    })
  }

}
