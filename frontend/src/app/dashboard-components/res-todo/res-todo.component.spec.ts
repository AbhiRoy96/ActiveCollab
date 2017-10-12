import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResTodoComponent } from './res-todo.component';

describe('ResTodoComponent', () => {
  let component: ResTodoComponent;
  let fixture: ComponentFixture<ResTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
