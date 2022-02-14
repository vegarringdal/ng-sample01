import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../CalConfig';

@Component({
  selector: 'cal-week-block',
  templateUrl: './cal-week-block.component.html',
  styleUrls: ['./cal-week-block.component.scss']
})
export class CalWeekBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
