function addRow(matrix) {
  const rowLength = matrix[0].length;
  const newRow = new Array(rowLength).fill(0);
  return [...matrix, newRow];
}

function deleteRow(matrix) {
  return matrix.slice(0, -1);
}

function addColumn(matrix) {
  return matrix.map((row) => [...row, 0]);
}

function deleteColumn(matrix) {
  return matrix.map((row) => row.slice(0, -1));
}

export { addRow, deleteRow, addColumn, deleteColumn };
