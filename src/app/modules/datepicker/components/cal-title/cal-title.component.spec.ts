import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalTitleComponent } from './cal-title.component';

describe('CalTitleComponent', () => {
  let component: CalTitleComponent;
  let fixture: ComponentFixture<CalTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
