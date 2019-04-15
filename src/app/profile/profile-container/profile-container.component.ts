import { SpeakerServices } from './../../../Shared/services/speaker.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {
  id;
  $obj: any = {};
  constructor(private route: ActivatedRoute, private speakerService: SpeakerServices) {
    this.route.url.subscribe(params => {
      this.id = params[0].path;
      console.log('url is ', params[0].path)
    });
  }

  ngOnInit() {
    this.speakerService.getSpeakerById(this.id).subscribe(res => {
      console.log(res);
      this.$obj = res;
    }, err => {
      console.log(err)
    })

  }

}
