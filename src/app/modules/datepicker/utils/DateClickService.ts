import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type dateClickedEvent = {
  date: Date;
  shiftKey: boolean;
  ctrlKey: boolean;
};

/**
 * helper for getting selected date
 */
@Injectable({
  providedIn: 'root',
})
export class DateClickedService {
  dateClicked: Subject<dateClickedEvent> = new Subject<dateClickedEvent>();
}
