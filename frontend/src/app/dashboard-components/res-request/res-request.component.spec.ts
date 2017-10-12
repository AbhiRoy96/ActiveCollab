import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResRequestComponent } from './res-request.component';

describe('ResRequestComponent', () => {
  let component: ResRequestComponent;
  let fixture: ComponentFixture<ResRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
