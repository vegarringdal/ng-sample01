import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../CalConfig';

@Component({
  selector: 'cal-title',
  templateUrl: './cal-title.component.html',
  styleUrls: ['./cal-title.component.scss']
})
export class CalTitleComponent implements OnInit {
  @Input() config!: CalConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
