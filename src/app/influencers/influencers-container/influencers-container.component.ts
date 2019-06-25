import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/Shared/services/influencer.service';

@Component({
  selector: 'app-influencers-container',
  templateUrl: './influencers-container.component.html',
  styleUrls: ['./influencers-container.component.scss']
})
export class InfluencersContainerComponent implements OnInit {

  obj: any = [];
  arr;
  constructor(private _service: InfluencerService) { }

  ngOnInit() {

    this._service.getInfluencers().subscribe(res => {
      this.obj = res;
      console.log('influencers are', res)


    }, err => {
      console.log(err)
    })
  }
}
