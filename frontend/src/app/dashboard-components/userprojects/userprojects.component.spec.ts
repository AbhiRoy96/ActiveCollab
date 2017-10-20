import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprojectsComponent } from './userprojects.component';

describe('UserprojectsComponent', () => {
  let component: UserprojectsComponent;
  let fixture: ComponentFixture<UserprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
