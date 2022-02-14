import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../CalConfig';

@Component({
  selector: 'cal-viewer',
  templateUrl: './cal-viewer.component.html',
  styleUrls: ['./cal-viewer.component.scss'],
})
export class CalViewerComponent implements OnInit {
  @Input() config!: CalConfig;
  months!: number[];

  ngOnInit(): void {

    this.months = Array.from(Array(this.config.monthColumns + this.config.monthRows)).map((_,i) => i+1);
  }

  ngOnChanges(){

    this.months = Array.from(Array(this.config.monthColumns + this.config.monthRows)).map((_,i) => i+1);
  }
}
