import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../../utils/CalConfig';
import { getDayNumberAsDoubleString } from '../../utils/getDayNumberAsDoubleString';

@Component({
  selector: 'cal-week-block',
  templateUrl: './cal-week-block.component.html',
  styleUrls: ['./cal-week-block.component.scss'],
})
export class CalWeekBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  @Input() day!: number;
  @Input() firstDate!: Date;
  dayNumber!: string;
  currentStyles: Record<string, string> = {};
  isSameMonth: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.dayNumber = getDayNumberAsDoubleString(this.firstDate, this.day).day;
    this.isSameMonth = getDayNumberAsDoubleString(this.firstDate, this.day).isSameMonth;
    this.updateStyles();
  }

  ngOnChanges() {
    this.dayNumber = getDayNumberAsDoubleString(this.firstDate, this.day).day;
    this.isSameMonth = getDayNumberAsDoubleString(this.firstDate, this.day).isSameMonth;
    this.updateStyles();
  }

  updateStyles() {
    this.currentStyles = {
      height: this.config.cellHeight + 'px',
      width: this.config.cellWidth + 'px',
      display: 'flex',
      'align-items': 'center',
      
      opacity: this.isSameMonth ? '1': '0.1'
    };
  }
}
