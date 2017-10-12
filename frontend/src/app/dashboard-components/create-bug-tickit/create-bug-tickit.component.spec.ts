import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBugTickitComponent } from './create-bug-tickit.component';

describe('CreateBugTickitComponent', () => {
  let component: CreateBugTickitComponent;
  let fixture: ComponentFixture<CreateBugTickitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBugTickitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBugTickitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
