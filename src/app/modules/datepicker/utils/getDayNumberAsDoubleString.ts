/**
 * gets day as double string, 01, 10 etc
 * @param firstDateOfMonth
 * @param adjustment
 * @returns
 */

export function getDayNumberAsDoubleString(
  firstDateOfMonth: Date,
  adjustment: number
) {
  const date = new Date(firstDateOfMonth);
  const adjustedDate = new Date(date.setDate(date.getDate() + adjustment));
  const isSameMonth = firstDateOfMonth.getMonth() === adjustedDate.getMonth();

  function adjustDayString(date: Date) {
    if (date.getDate().toString().length === 1) {
      return `0${date.getDate()}`;
    } else {
      return `${date.getDate()}`;
    }
  }

  return { day: adjustDayString(adjustedDate), isSameMonth };
}
