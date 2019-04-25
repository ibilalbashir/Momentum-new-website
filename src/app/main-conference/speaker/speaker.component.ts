import { SpeakerServices } from './../../../Shared/services/speaker.services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input() participants;

  obj = {};

  constructor() { }

  ngOnInit() {

  }

}
