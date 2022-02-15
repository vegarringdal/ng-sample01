import { Component, Input, OnInit } from '@angular/core';
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
  firstDate!: Date;
  dayOffset!: number[][];
  monthTitle!: string;

  constructor() {}

  ngOnInit(): void {
    this.getDayBlocks();
    this.setMonthTitle();
  }

  ngOnChanges() {
    this.getDayBlocks();
    this.setMonthTitle();
  }

  private getDayBlocks() {
    const dayBlocks = getDayBlocks(
      this.month,
      this.config.year,
      this.config.weekStartsOnSunday
    );
    this.firstDate = dayBlocks.firstDate;
    this.dayOffset = dayBlocks.dayOffset;
  }

  private setMonthTitle(){
    this.monthTitle = this.config.monthHeaders[this.month];
  }
}
