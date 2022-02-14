export type CalConfig = {
  /**
   * number of columns
   */
  monthColumns: number;
  /**
   * number of rows
   */
  monthRows: number;
  /**
   * month to start on 0-11
   */
  monthStart: number;
  /**
   * first day of week 0-7
   * defaults sunday/day 7
   */
  weekStartsOn: number;
  /**
   * Header for days
   * Defaults:
   * 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'
   */
  dayHeaders: string[];
  /**
   * header for month
   * Defaults:
   * 'January','February','March','April','May','June','July','August','September','October','November','December'
   */
  monthHeaders: string[];
  /**
   * height of row
   */
  rowHeight: number;
  /**
   * width of month
   */
  monthWidth: number;
  /**
   * margin between months
   */
  monthMargin: number;
  /**
   * hide dimmed Dates
   */
  hideDimmedDates: boolean;
  /**
   * isoweek
   */
  isoWeek: boolean;
  /**
   * showWeek
   */
  showWeek: boolean;
};
