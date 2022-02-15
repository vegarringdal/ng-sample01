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
  
  constructor() {}

  ngOnInit(): void {
    this.dayNumber = getDayNumberAsDoubleString(this.firstDate, this.day).day;
  }

  ngOnChanges() {
    this.dayNumber = getDayNumberAsDoubleString(this.firstDate, this.day).day;
  }
}
