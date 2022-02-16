import { Component, Input, OnInit } from '@angular/core';
import { CalConfig } from '../../utils/CalConfig';

@Component({
  selector: 'cal-header-block',
  templateUrl: './cal-header-block.component.html',
  styleUrls: ['./cal-header-block.component.scss'],
})
export class CalHeaderBlockComponent implements OnInit {
  @Input() config!: CalConfig;
  @Input() name!: string;
  currentStyles: Record<string, string> = {};
  constructor() {}

  ngOnInit(): void {
    this.updateStyles();
  }

  ngOnChanges() {
    this.updateStyles();
  }

  updateStyles() {
    this.currentStyles = {
      height: this.config.cellHeight + 'px',
      width: this.config.cellWidth + 'px',
      display: 'flex',
      'align-items': 'center'
    };
  }
}
