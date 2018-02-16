import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sensor } from './sensor';

describe('SensorComponent', () => {
  let component: Sensor;
  let fixture: ComponentFixture<Sensor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sensor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sensor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
