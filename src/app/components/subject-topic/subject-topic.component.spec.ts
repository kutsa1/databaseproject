import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTopicComponent } from './subject-topic.component';

describe('SubjectTopicComponent', () => {
  let component: SubjectTopicComponent;
  let fixture: ComponentFixture<SubjectTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
