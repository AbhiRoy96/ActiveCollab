import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHamburgerComponent } from './user-hamburger.component';

describe('UserHamburgerComponent', () => {
  let component: UserHamburgerComponent;
  let fixture: ComponentFixture<UserHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
