import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHeaderBlockComponent } from './cal-header-block.component';

describe('CalHeaderBlockComponent', () => {
  let component: CalHeaderBlockComponent;
  let fixture: ComponentFixture<CalHeaderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalHeaderBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalHeaderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
