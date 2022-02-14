import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../CalConfig';

@Component({
  selector: 'cal-month-block',
  templateUrl: './cal-month-block.component.html',
  styleUrls: ['./cal-month-block.component.scss'],
})
export class CalMonthBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  @Input() month!: number;

  constructor() {}

  ngOnInit(): void {
    console.log(this.month);
  }
}
