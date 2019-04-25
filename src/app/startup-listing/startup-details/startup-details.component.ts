import { StartupServices } from './../../../Shared/services/startups.services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startup-details',
  templateUrl: './startup-details.component.html',
  styleUrls: ['./startup-details.component.scss']
})
export class StartupDetailsComponent implements OnInit {

  current;
  obj = {};
  comapanyServices;
  constructor(private route: ActivatedRoute,
    private router: Router, private startupService: StartupServices) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.current = res.id;
      console.log("router link is", this.current);
      this.startupService.getStartupById(this.current).subscribe(response => {

        this.obj = response;
        console.log("current startup is", this.obj);
        this.startupService.getStartupServices(this.current).subscribe(resp => {
          this.comapanyServices = resp;
          console.log("comapany services are ", resp);
        }, eror => {
          console.log(eror)
        })
      }, error => {
        console.log(error)
      })



    }, err => {
      console.log(err)
    })
  }

}
