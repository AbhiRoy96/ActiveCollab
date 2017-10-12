import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResFeedsComponent } from './res-feeds.component';

describe('ResFeedsComponent', () => {
  let component: ResFeedsComponent;
  let fixture: ComponentFixture<ResFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
