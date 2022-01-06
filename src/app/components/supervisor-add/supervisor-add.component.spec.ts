import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorAddComponent } from './supervisor-add.component';

describe('SupervisorAddComponent', () => {
  let component: SupervisorAddComponent;
  let fixture: ComponentFixture<SupervisorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
