import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalMonthBlockComponent } from './cal-month-block.component';

describe('CalMonthBlockComponent', () => {
  let component: CalMonthBlockComponent;
  let fixture: ComponentFixture<CalMonthBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalMonthBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalMonthBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
