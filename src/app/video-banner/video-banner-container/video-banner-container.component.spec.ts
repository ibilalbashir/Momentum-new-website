import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBannerContainerComponent } from './video-banner-container.component';

describe('VideoBannerContainerComponent', () => {
  let component: VideoBannerContainerComponent;
  let fixture: ComponentFixture<VideoBannerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBannerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBannerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
