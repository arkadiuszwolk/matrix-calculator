export function calculateTheHadamardProduct(matrix1, matrix2) {
  const rowCount = matrix1.length;
  const colCount = matrix1[0].length;

  const newMatrix = [];
  for (let i = 0; i < rowCount; i++) {
    const row = [];
    for (let j = 0; j < colCount; j++) {
      row.push(matrix1[i][j] * matrix2[i][j]);
    }
    newMatrix.push(row);
  }

  return newMatrix;
}
