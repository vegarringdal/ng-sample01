import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  public config = {
    startYear: 2020,
    monthColumns: 2,
    monthRows: 2,
    monthStart: 0,
    weekStartsOn: 1,
    dayHeaders: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthHeaders: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    rowHeight: 20,
    monthWidth: 220,
    monthMargin: 10,
    hideDimmedDates: false,
    isoWeek: true,
    showWeek: true,
  };

  constructor() {}

  ngOnInit(): void {}

  addCol() {
    this.config.monthColumns = this.config.monthColumns + 1;
    this.config = JSON.parse(JSON.stringify(this.config));
  }

  removeCol() {
    this.config.monthColumns = this.config.monthColumns - 1;
    this.config = JSON.parse(JSON.stringify(this.config));
  }
}
