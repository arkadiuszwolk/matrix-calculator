export function calculateTheProduct(matrix1, matrix2) {
  const n = matrix1.length;
  const m = matrix1[0].length;

  const p = matrix2.length;
  const q = matrix2[0].length;

  if (m !== p) {
    return [
      [0, 0],
      [0, 0],
    ];
  }

  const newMatrix = Array.from({ length: n }, () => Array(q).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < q; j++) {
      for (let k = 0; k < m; k++) {
        newMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  console.log(newMatrix);

  return newMatrix;
}
