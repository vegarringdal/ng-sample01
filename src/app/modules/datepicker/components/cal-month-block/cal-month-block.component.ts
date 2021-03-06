import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalConfig } from '../../utils/CalConfig';
import { getDayBlocks } from '../../utils/getDayBlocks';

@Component({
  selector: 'cal-month-block',
  templateUrl: './cal-month-block.component.html',
  styleUrls: ['./cal-month-block.component.scss'],
})
export class CalMonthBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  @Input() month!: number;
  @Input() selectedDates!: Map<number, string>;
  firstDate!: Date;
  dayOffset!: number[][];
  monthTitle!: string;
  dayHeaders!: string[];
  currentStyles: Record<string, string> = {};
  

  constructor() {}

  ngOnInit(): void {
    this.getDayBlocks();
    this.setMonthTitle();
    this.setDayHeaders();
  }

  ngOnChanges() {
    this.getDayBlocks();
    this.setMonthTitle();
    this.setDayHeaders();
  }

  private getDayBlocks() {
    if (this.month > 11) {
      // larger then 11 = next year
      this.month = this.month - 12;
    }

    const dayBlocks = getDayBlocks(
      this.month,
      this.config.year,
      this.config.weekStartsOnSunday
    );
    this.firstDate = dayBlocks.firstDate;
    this.dayOffset = dayBlocks.dayOffset;
  }

  private setMonthTitle() {
    this.monthTitle = this.config.monthHeaders[this.month];
    this.updateStyles();
  }

  private setDayHeaders() {
    this.dayHeaders = this.config.dayHeaders.slice();
    if (!this.config.weekStartsOnSunday) {
      const sunday = this.dayHeaders.shift();
      this.dayHeaders.push(sunday as string);
    }
    this.updateStyles();
  }

  private updateStyles() {
    this.currentStyles = {
      margin: this.config.monthMargin + 'px',
    };
  }
}
