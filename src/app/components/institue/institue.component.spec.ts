import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitueComponent } from './institue.component';

describe('InstitueComponent', () => {
  let component: InstitueComponent;
  let fixture: ComponentFixture<InstitueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
