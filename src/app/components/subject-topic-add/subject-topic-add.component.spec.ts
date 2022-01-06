import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTopicAddComponent } from './subject-topic-add.component';

describe('SubjectTopicAddComponent', () => {
  let component: SubjectTopicAddComponent;
  let fixture: ComponentFixture<SubjectTopicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTopicAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTopicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
