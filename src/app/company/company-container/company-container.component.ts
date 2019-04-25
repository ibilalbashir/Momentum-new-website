import { CompanyServices } from './../../../Shared/services/company.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-container',
  templateUrl: './company-container.component.html',
  styleUrls: ['./company-container.component.scss']
})
export class CompanyContainerComponent implements OnInit {

  obj: any = [];
  constructor(private companyServices: CompanyServices) { }

  ngOnInit() {

    this.companyServices.getAllCompanies().subscribe(res => {
      this.obj = res;
      console.log('companies are', res)
    }, err => {
      console.log(err)
    })
  }
}
