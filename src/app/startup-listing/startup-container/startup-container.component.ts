import { StartupServices } from './../../../Shared/services/startups.services';
import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/Shared/services/tag.services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-startup-container',
  templateUrl: './startup-container.component.html',
  styleUrls: ['./startup-container.component.scss']
})
export class StartupContainerComponent implements OnInit {
  tags$: Observable<any[]>;

  featuredObj$: Observable<any[]>;
  nonFeatured$: Observable<any[]>;
  filteredStartups$: Observable<any[]>;
  filterCtrl: FormControl = new FormControl('All Startups');
  constructor(
    private startupServices: StartupServices,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.filterCtrl.valueChanges.subscribe(v => {
      if (v === 'All Startups') {
        return (this.filteredStartups$ = this.nonFeatured$);
      }
      this.filteredStartups$ = this.nonFeatured$.pipe(
        map(x => x.filter(c => c['category'][0] === v))
      );
    });
    this.tags$ = this.tagService.getAll();
    this.nonFeatured$ = this.startupServices
      .getAllStartups()
      .pipe(
        filter(x => x['isFeatured'] !== 'true' || x['isFeatured'] !== 'True')
      );
    this.filteredStartups$ = this.nonFeatured$;
    this.featuredObj$ = this.startupServices.getfeaturedStartups();
    // this.nonFeatured$.subscribe(x => console.log(x));
    // this.startupServices.getAllStartups().subscribe(
    //   res => {
    //     this.obj = res;

    //     this.obj.forEach(element => {
    //       if (element.isFeatured !== 'true' || element.isFeatured !== 'True') {
    //         this.nonFeatured.push(element);
    //       }
    //     });

    //     console.log('non featured are', this.nonFeatured);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );

    // this.startupServices.getfeaturedStartups().subscribe(
    //   res => {
    //     this.featuredObj = res;
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
}
