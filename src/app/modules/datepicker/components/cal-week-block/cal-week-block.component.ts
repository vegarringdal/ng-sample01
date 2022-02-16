import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { getTheme } from 'src/utils/theme';
import { CalConfig } from '../../utils/CalConfig';
import { DateClickedService } from '../../utils/DateClickService';
import { getDayInfo } from '../../utils/getDayInfo';

@Component({
  selector: 'cal-week-block',
  templateUrl: './cal-week-block.component.html',
  styleUrls: ['./cal-week-block.component.scss'],
})
export class CalWeekBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  @Input() day!: number;
  @Input() firstDate!: Date;
  @Input() selectedDates!: Map<number, string>;
  dayNumber!: string;
  currentStyles: Record<string, string> = {};
  isSameMonth: boolean = true;
  date!: Date;

  constructor(private dateClickedService: DateClickedService) {}

  ngOnInit(): void {
    this.updateChanges();
  }

  ngOnChanges() {
    this.updateChanges();
  }

  getColorDay() {
    const time = this.date?.getTime();
    return this.selectedDates?.get(time) || '';
  }

  updateChanges() {
    const result = getDayInfo(this.firstDate, this.day);
    this.dayNumber = result.day;
    this.isSameMonth = result.isSameMonth;
    this.date = result.date;

    this.currentStyles = {
      height: this.config.cellHeight + 'px',
      width: this.config.cellWidth + 'px',
      display: 'flex',
      'align-items': 'center',
      'background-color': this.getColorDay(),
      opacity: this.isSameMonth ? '1' : '0.1',
    };
  }

  onClick(event: MouseEvent) {
    if (this.isSameMonth) {
      this.dateClickedService.dateClicked.next({
        date: this.date,
        shiftKey: event.shiftKey,
        ctrlKey: event.ctrlKey,
      });
    }
  }

  get isDarkMode() {
    return getTheme() === 'dark' ? true : false;
  }
}
