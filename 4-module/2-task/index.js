/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i]
    row.cells[i].style.backgroundColor = 'red'
  }
}

  let rowsLength = table.rows.length;
  let rows = table.rows;

  for (let i = 0; i < rowsLength; i++) {
    let row = rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }

