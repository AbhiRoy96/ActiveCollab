import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectSettComponent } from './update-project-sett.component';

describe('UpdateProjectSettComponent', () => {
  let component: UpdateProjectSettComponent;
  let fixture: ComponentFixture<UpdateProjectSettComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProjectSettComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjectSettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
