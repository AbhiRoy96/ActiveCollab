import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponentComponent } from './error-component.component';

describe('ErrorComponentComponent', () => {
  let component: ErrorComponentComponent;
  let fixture: ComponentFixture<ErrorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
