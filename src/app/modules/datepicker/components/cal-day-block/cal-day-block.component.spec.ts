import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDayBlockComponent } from './cal-day-block.component';

describe('CalDayBlockComponent', () => {
  let component: CalDayBlockComponent;
  let fixture: ComponentFixture<CalDayBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalDayBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDayBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
