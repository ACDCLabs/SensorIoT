import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberHistoryComponent } from './chamber-history.component';

describe('HistoryComponentComponent', () => {
  let component: ChamberHistoryComponent;
  let fixture: ComponentFixture<ChamberHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamberHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
