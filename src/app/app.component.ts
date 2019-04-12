import { StartupDialogComponent } from './startup-dialog/startup-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel } from "@angular/router";
import { Router } from "@angular/router";
import { RouteConfigLoadEnd } from "@angular/router";
import { RouteConfigLoadStart } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Momentum Tech Conference ';
  public isShowingRouteLoadIndicator: boolean;
  constructor(public dialog: MatDialog, private router: Router, private spinner: NgxSpinnerService) {
    this.isShowingRouteLoadIndicator = false;

    // As the router loads modules asynchronously (via loadChildren), we're going to
    // keep track of how many asynchronous requests are currently active. If there is
    // at least one pending load request, we'll show the indicator.
    var asyncLoadCount = 0;

    // The Router emits special events for "loadChildren" configuration loading. We
    // just need to listen for the Start and End events in order to determine if we
    // have any pending configuration requests.
    router.events.subscribe(
      (event: RouterEvent): void => {

        if (event instanceof RouteConfigLoadStart) {

          asyncLoadCount++;

        } else if (event instanceof RouteConfigLoadEnd) {

          asyncLoadCount--;

        }

        // If there is at least one pending asynchronous config load request,
        // then let's show the loading indicator.
        // --
        // CAUTION: I'm using CSS to include a small delay such that this loading
        // indicator won't be seen by people with sufficiently fast connections.
        this.isShowingRouteLoadIndicator = !!asyncLoadCount;

      }
    );
    this.router.events.subscribe(event => {
      if (
        event instanceof NavigationStart ||
        event instanceof RouteConfigLoadStart
      ) {
        // if (event['url'] === '/') {
        //   this.displayOverlay = false;
        // } else {
        //   this.displayOverlay = true;
        // }

      } else if (event instanceof NavigationEnd) {

        if (environment.production) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      } else if (event instanceof NavigationCancel) {

        // setTimeout(() => {

        // }, 2000);
      }
    });
  }

  showSpinner() {
    console.log('show spinner')
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000)

  }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)

      this.showSpinner();
    });

    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StartupDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



}
