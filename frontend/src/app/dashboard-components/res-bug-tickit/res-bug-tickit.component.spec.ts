import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResBugTickitComponent } from './res-bug-tickit.component';

describe('ResBugTickitComponent', () => {
  let component: ResBugTickitComponent;
  let fixture: ComponentFixture<ResBugTickitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResBugTickitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResBugTickitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
