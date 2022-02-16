/**
 * gets day as double string, 01, 10 etc
 * @param firstDateOfMonth
 * @param adjustment
 * @returns
 */

export function getDayInfo(firstDateOfMonth: Date, adjustment: number) {
  const date = new Date(firstDateOfMonth);
  const adjustedDate = new Date(date.setDate(date.getDate() + adjustment));
  const isSameMonth = firstDateOfMonth.getMonth() === adjustedDate.getMonth();

  return {
    day: adjustedDate.getDate().toString(),
    isSameMonth,
    date: adjustedDate,
  };
}
