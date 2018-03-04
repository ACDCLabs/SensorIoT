import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Run } from './run';

describe('SensorComponent', () => {
  let component: Run;
  let fixture: ComponentFixture<Run>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Run ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Run);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
