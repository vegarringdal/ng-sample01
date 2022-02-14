import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalWeekBlockComponent } from './cal-week-block.component';

describe('CalWeekBlockComponent', () => {
  let component: CalWeekBlockComponent;
  let fixture: ComponentFixture<CalWeekBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalWeekBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalWeekBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
