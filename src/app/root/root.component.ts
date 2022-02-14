import { Component, OnInit } from '@angular/core';
import { getTheme, toggleTheme } from 'src/utils/theme';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * tell us if we are usign dark mode.
   */
  get themeIcon() {
    return getTheme() === 'dark' ? '🌞' : '🌙';
  }

  /**
   * toggle theme
   */
  themeToggleBtn() {
    toggleTheme();
  }
}
