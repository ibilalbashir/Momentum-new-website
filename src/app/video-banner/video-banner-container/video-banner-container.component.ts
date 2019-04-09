import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import reframe from 'reframe.js';

@Component({
  selector: 'app-video-banner-container',
  templateUrl: './video-banner-container.component.html',
  styleUrls: ['./video-banner-container.component.css']
})
export class VideoBannerContainerComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  URL = 'https://www.youtube.com/embed/rFDxtcfDOHo';
  // constructor(private _sanitizer: DomSanitizer) {

  // }
  constructor() {

  }
  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {

    this.init();
    this.video = 'rFDxtcfDOHo' //video id
    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.reframed = false;
      this.player = new window['YT'].Player('player', {
        videoId: this.video,


        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            if (!this.reframed) {
              this.reframed = true;
              reframe(e.target.a);
            }
          }
        }
      });
    };

  }
  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };
  // bypass(url) {
  //   return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  // }
  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };


}
