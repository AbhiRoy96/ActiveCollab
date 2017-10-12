import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBugTickitComponent } from './close-bug-tickit.component';

describe('CloseBugTickitComponent', () => {
  let component: CloseBugTickitComponent;
  let fixture: ComponentFixture<CloseBugTickitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseBugTickitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBugTickitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
