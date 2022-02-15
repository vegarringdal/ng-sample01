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
    monthColumns: 1,
    monthRows: 2,
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
    if (this.config.monthColumns >= 0) {
      this.config.monthColumns++;
    }
    this.updateConfig();
  }

  removeCol() {
    if (this.config.monthColumns > 0) {
      this.config.monthColumns--;
    }
    this.updateConfig();
  }

  addRow() {
    if (this.config.monthRows >= 0) {
      this.config.monthRows++;
    }
    this.updateConfig();
  }

  removeRow() {
    if (this.config.monthRows > 0) {
      this.config.monthRows--;
    }
    this.updateConfig();
  }

  private updateConfig() {
    this.config = JSON.parse(JSON.stringify(this.config));
  }
}
