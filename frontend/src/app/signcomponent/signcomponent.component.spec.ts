import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigncomponentComponent } from './signcomponent.component';

describe('SigncomponentComponent', () => {
  let component: SigncomponentComponent;
  let fixture: ComponentFixture<SigncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
