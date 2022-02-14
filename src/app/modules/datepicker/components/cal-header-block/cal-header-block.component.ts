import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../CalConfig';

@Component({
  selector: 'cal-header-block',
  templateUrl: './cal-header-block.component.html',
  styleUrls: ['./cal-header-block.component.scss']
})
export class CalHeaderBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
