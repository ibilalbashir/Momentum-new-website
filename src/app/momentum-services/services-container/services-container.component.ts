import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services-container',
  templateUrl: './services-container.component.html',
  styleUrls: ['./services-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesContainerComponent implements OnInit {
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );

  constructor() {}

  ngOnInit() {}
}
