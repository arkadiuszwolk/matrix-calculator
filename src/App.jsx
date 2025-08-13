import { useState } from "react";
import "./App.css";
import { SlidingTabs } from "./components/ui/sliding-tabs";
import { Matrix } from "./components/ui/matrix";
import { Stepper } from "./components/ui/stepper";
import {
  addColumn,
  addRow,
  deleteColumn,
  deleteRow,
} from "./lib/changeMatrixSize";

function App() {
  const [matrix1, setMatrix1] = useState([
    [2, 3, 1],
    [0, 18, 7],
    [4, 5, 52],
  ]);
  const [matrix2, setMatrix2] = useState([
    [0, -5, 30],
    [6, 0, -7],
  ]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  function changeMatrix1Cell(i, j, newValue) {
    const newMatrix1 = [...matrix1];
    newMatrix1[i][j] = Number(newValue);
    setMatrix1(newMatrix1);
  }

  function changeMatrix2Cell(i, j, newValue) {
    const newMatrix2 = [...matrix2];
    newMatrix2[i][j] = Number(newValue);
    setMatrix2(newMatrix2);
  }

  return (
    <>
      <div className="mb-10 flex w-full justify-center py-2">
        <SlidingTabs
          tabs={["Arytmetyka", "Transformacje", "Operacje elementarne"]}
          activeTabIndex={activeTabIndex}
          onChange={(index) => setActiveTabIndex(index)}
        />
      </div>
      <div className="flex items-start justify-center gap-80">
        <div className="flex flex-col gap-2">
          <div className="flex h-64 flex-col items-center gap-4">
            <span>Macierz A</span>
            <Matrix matrix={matrix1} onBlur={changeMatrix1Cell} />
          </div>
          <Stepper
            onMinus={() => setMatrix1(deleteRow(matrix1))}
            onPlus={() => setMatrix1(addRow(matrix1))}
          >
            {matrix1.length}
          </Stepper>
          <Stepper
            onMinus={() => setMatrix1(deleteColumn(matrix1))}
            onPlus={() => setMatrix1(addColumn(matrix1))}
          >
            {matrix1[0].length}
          </Stepper>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex h-64 flex-col items-center gap-4">
            <span>Macierz B</span>
            <Matrix matrix={matrix2} onBlur={changeMatrix2Cell} />
          </div>
          <Stepper
            onMinus={() => setMatrix2(deleteRow(matrix2))}
            onPlus={() => setMatrix2(addRow(matrix2))}
          >
            {matrix2.length}
          </Stepper>
          <Stepper
            onMinus={() => setMatrix2(deleteColumn(matrix2))}
            onPlus={() => setMatrix2(addColumn(matrix2))}
          >
            {matrix2[0].length}
          </Stepper>
        </div>
      </div>
    </>
  );
}

export default App;
