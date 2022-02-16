import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalConfig } from '../../utils/CalConfig';
import {
  dateClickedEvent,
  DateClickedService,
} from '../../utils/DateClickService';
import { getMonthArray } from '../../utils/getMonthArray';

@Component({
  selector: 'cal-viewer',
  templateUrl: './cal-viewer.component.html',
  styleUrls: ['./cal-viewer.component.scss'],
})
export class CalViewerComponent implements OnInit {
  @Input() config!: CalConfig;
  months!: number[][];
  selectedDates: Map<number, string> = new Map();
  lastSelected!: Date;

  constructor(private dateClickedService: DateClickedService) {
    dateClickedService.dateClicked.subscribe((event: dateClickedEvent) => {
      const date = new Date(event.date);
      switch (true) {
        case event.ctrlKey:
          if (this.selectedDates.has(event.date.getTime())) {
            this.selectedDates.delete(event.date.getTime());
          } else {
            this.selectedDates.set(event.date.getTime(), 'gray');
          }

          break;
        case event.shiftKey:
          if (!this.lastSelected) {
            this.selectedDates.set(event.date.getTime(), 'gray');
          } else {
            if (this.lastSelected < event.date) {
              while (this.lastSelected < date) {
                date.setDate(date.getDate() - 1);
                this.selectedDates.set(date.getTime(), 'gray');
              }
            } else {
              while (this.lastSelected > date) {
                date.setDate(date.getDate() + 1);
                this.selectedDates.set(date.getTime(), 'gray');
              }
            }
          }

          break;
        default:
          this.selectedDates.clear();
          this.selectedDates.set(event.date.getTime(), 'gray');
      }
      this.lastSelected = event.date;
      this.selectedDates = new Map(this.selectedDates.entries());
    });
  }

  ngOnInit(): void {
    this.months = getMonthArray(
      this.config.monthRows,
      this.config.monthColumns,
      this.config.month
    );
  }

  ngOnChanges() {
    this.months = getMonthArray(
      this.config.monthRows,
      this.config.monthColumns,
      this.config.month
    );
  }
}
