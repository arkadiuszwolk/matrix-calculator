import { Matrix } from "../components/ui/matrix";
import { Stepper } from "../components/ui/stepper";

import {
  addColumn,
  addRow,
  deleteColumn,
  deleteRow,
} from "../lib/changeMatrixSize";

export function MatrixForm({ matrixState, matrixName }) {
  const [matrix, setMatrix] = matrixState;

  function changeMatrixCell(i, j, newValue) {
    const newMatrix = [...matrix];
    newMatrix[i][j] = Number(newValue);
    setMatrix(newMatrix);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-72 w-86 flex-col items-center gap-4">
        <span className="font-medium">{matrixName}</span>
        <Matrix matrix={matrix} onBlur={changeMatrixCell} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center">
          <span className="w-32">Liczba wierszy</span>
          <Stepper
            onMinus={() => setMatrix(deleteRow(matrix))}
            onPlus={() => setMatrix(addRow(matrix))}
            isMinusDisabled={matrix.length === 1}
            isPlusDisabled={matrix.length === 5}
          >
            {matrix.length}
          </Stepper>
        </div>
        <div className="flex items-center">
          <span className="w-32">Liczba kolumn</span>
          <Stepper
            onMinus={() => setMatrix(deleteColumn(matrix))}
            onPlus={() => setMatrix(addColumn(matrix))}
            isMinusDisabled={matrix[0].length === 1}
            isPlusDisabled={matrix[0].length === 5}
          >
            {matrix[0].length}
          </Stepper>
        </div>
      </div>
    </div>
  );
}
