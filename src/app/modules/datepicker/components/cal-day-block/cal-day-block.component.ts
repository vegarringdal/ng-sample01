import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../CalConfig';

@Component({
  selector: 'cal-day-block',
  templateUrl: './cal-day-block.component.html',
  styleUrls: ['./cal-day-block.component.scss']
})
export class CalDayBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
