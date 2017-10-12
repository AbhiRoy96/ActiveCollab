import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompletionComponent } from './project-completion.component';

describe('ProjectCompletionComponent', () => {
  let component: ProjectCompletionComponent;
  let fixture: ComponentFixture<ProjectCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
