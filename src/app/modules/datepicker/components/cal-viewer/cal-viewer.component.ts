import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../../utils/CalConfig';
import { getMonthArray } from '../../utils/getMonthArray';

@Component({
  selector: 'cal-viewer',
  templateUrl: './cal-viewer.component.html',
  styleUrls: ['./cal-viewer.component.scss'],
})
export class CalViewerComponent implements OnInit {
  @Input() config!: CalConfig;
  months!: number[][];

  ngOnInit(): void {
    this.months = getMonthArray(
      this.config.monthRows,
      this.config.monthColumns
    );
  }

  ngOnChanges() {
    this.months = getMonthArray(
      this.config.monthRows,
      this.config.monthColumns
    );
  }
}
