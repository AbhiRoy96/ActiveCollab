import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBugTickitComponent } from './view-bug-tickit.component';

describe('ViewBugTickitComponent', () => {
  let component: ViewBugTickitComponent;
  let fixture: ComponentFixture<ViewBugTickitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBugTickitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBugTickitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
