import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersContainerComponent } from './partners-container.component';

describe('PartnersContainerComponent', () => {
  let component: PartnersContainerComponent;
  let fixture: ComponentFixture<PartnersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
