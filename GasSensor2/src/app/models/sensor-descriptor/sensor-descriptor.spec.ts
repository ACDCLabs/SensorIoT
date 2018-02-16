import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDescriptor } from './sensor-descriptor';

describe('SensorDescriptorComponent', () => {
  let component: SensorDescriptor;
  let fixture: ComponentFixture<SensorDescriptor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorDescriptor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDescriptor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
