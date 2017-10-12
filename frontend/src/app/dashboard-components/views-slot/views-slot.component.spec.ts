import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsSlotComponent } from './views-slot.component';

describe('ViewsSlotComponent', () => {
  let component: ViewsSlotComponent;
  let fixture: ComponentFixture<ViewsSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
