import { Component, OnInit } from '@angular/core';
import { CalConfig } from 'src/app/modules/datepicker/utils/CalConfig';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  public config: CalConfig = {
    year: 2022,
    monthColumns: 3,
    monthRows: 3,
    month: 0,
    weekStartsOnSunday: false,
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
    rowHeight: 40,
    monthWidth: 220,
    monthMargin: 25,
    hideDimmedDates: false,
    isoWeek: true,
    showWeek: true,
  };

  constructor() {}

  ngOnInit(): void {}

  addCol() {
    if (this.config.monthColumns >= 0) {
      this.config.monthColumns++;
    }
    this.updateConfig();
  }

  setColumn(type: any, event: any) {
    switch (type) {
      case 'monthColumns':
        this.config.monthColumns = event.target.valueAsNumber;
        break;
      case 'monthRows':
        this.config.monthRows = event.target.valueAsNumber;
        break;
      case 'monthWidth':
        this.config.monthWidth = event.target.valueAsNumber;
        break;
      case 'monthMargin':
        this.config.monthMargin = event.target.valueAsNumber;
        break;
      case 'rowHeight':
        this.config.rowHeight = event.target.valueAsNumber;
        break;
      case 'weekStartsOnSunday':
        this.config.weekStartsOnSunday = event.target.checked;
        break;
      case 'month':
        this.config.month = event.target.valueAsNumber;
        break;
      case 'year':
        this.config.year = event.target.valueAsNumber;
        break;
    }

    this.updateConfig();
  }

  private updateConfig() {
    this.config = JSON.parse(JSON.stringify(this.config));
  }
}
