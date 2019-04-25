import { CompanyServices } from './../../../Shared/services/company.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  current;
  obj = {};
  comapanyServices;
  constructor(private route: ActivatedRoute,
    private router: Router, private companyServices: CompanyServices) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.current = res.id;
      console.log("router link is", this.current);
      this.companyServices.getCompanyById(this.current).subscribe(response => {

        this.obj = response;
        console.log("current startup is", this.obj);
        this.companyServices.getCompanyServices(this.current).subscribe(resp => {
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
