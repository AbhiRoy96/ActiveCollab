import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTielineComponent } from './view-tieline.component';

describe('ViewTielineComponent', () => {
  let component: ViewTielineComponent;
  let fixture: ComponentFixture<ViewTielineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTielineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTielineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
