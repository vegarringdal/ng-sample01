/**
 *
 * @param month
 * @param year
 * @param startOnSunday
 * @returns
 */
export function getDayBlocks(
  month: number,
  year: number,
  startOnSunday: boolean
) {
  // get first day of month
  const firstDateOfMonth = new Date(`${month + 1}/1/${year}`);
  let firstDayOfWeek = firstDateOfMonth.getDay();

  // adjust days for sunday
  if (!startOnSunday) {
    if (firstDayOfWeek === 0) {
      firstDayOfWeek = firstDayOfWeek + 7;
    } else {
      firstDayOfWeek = firstDayOfWeek - 1;
    }
  } else {
    firstDayOfWeek = firstDayOfWeek;
  }

  let rows = 6;
  let cols = 7;
  let i = -firstDayOfWeek;
  let rowArr = [];
  for (let row = 0; row < rows; row++) {
    const colArr = [];
    for (let col = 0; col < cols; col++) {
      colArr.push(i++);
    }
    rowArr.push(colArr);
  }

  return { firstDate: firstDateOfMonth, dayOffset: rowArr };
}


