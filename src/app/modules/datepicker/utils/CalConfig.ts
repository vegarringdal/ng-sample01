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
  month: number;
  /**
   * year, YYYY
   */
  year: number;
  /**
   * week start on monday be default
   */
  weekStartsOnSunday: boolean;
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
  cellHeight: number;
  /**
   * width of month
   */
   cellWidth: number;
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
