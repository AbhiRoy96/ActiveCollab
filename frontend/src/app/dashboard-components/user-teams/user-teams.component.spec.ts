import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTeamsComponent } from './user-teams.component';

describe('UserTeamsComponent', () => {
  let component: UserTeamsComponent;
  let fixture: ComponentFixture<UserTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
