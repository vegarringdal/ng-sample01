import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalTitleComponent } from './components/cal-title/cal-title.component';
import { CalHeaderBlockComponent } from './components/cal-header-block/cal-header-block.component';
import { CalWeekBlockComponent } from './components/cal-week-block/cal-week-block.component';
import { CalViewerComponent } from './components/cal-viewer/cal-viewer.component';
import { CalMonthBlockComponent } from './components/cal-month-block/cal-month-block.component';

@NgModule({
  declarations: [
    CalTitleComponent,
    CalHeaderBlockComponent,
    CalWeekBlockComponent,
    CalViewerComponent,
    CalMonthBlockComponent,
  ],
  imports: [CommonModule],
  exports: [CalViewerComponent],
})
export class DatepickerModule {}
