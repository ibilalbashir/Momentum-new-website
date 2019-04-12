import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {
  isCollapsed = true;
  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() { }
  showSpinner() {
    console.log('show spinner')
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000)
    this.router.navigate(['/buy-ticket']);
  }
  homeRoute() {
    console.log('show spinner')
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000)
    this.router.navigate(['/']);
  }
}
