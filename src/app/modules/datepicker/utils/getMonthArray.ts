/**
 * return month array
 * rows of columns
 * with 3,3 you get
 * [
 *  [M , M , M]
 *  [M , M , M]
 *  [M , M , M]
 * ]
 * @param rows default 1
 * @param cols default 1
 */
export function getMonthArray(rows = 1, cols = 0, startMonth= 0) {
  let i = startMonth;
  let rowArr = [];
  for (let row = 0; row < rows; row++) {
    const colArr = [];
    for (let col = 0; col < cols; col++) {
      colArr.push(i++);
    }
    rowArr.push(colArr);
  }
  return rowArr;
}
