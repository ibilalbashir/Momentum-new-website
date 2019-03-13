import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {
  @Input() name;
  @Input() price;
  @Input() features;

  constructor() {}

  ngOnInit() {}
}
