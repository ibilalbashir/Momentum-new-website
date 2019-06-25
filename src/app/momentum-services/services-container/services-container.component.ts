import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() { }
  hackathonRoute() {

  }
  buyTicketRoute() {
    this.router.navigate(['/buy-ticket'])
  }

  loadStartup100() {
    this.router.navigate(['./startups'])
  }
  loadHackathon() {
    this.router.navigate(['./hackathon'])
  }
  loadMainConference() {
    this.router.navigate(['/main-conference'])
  }
}
