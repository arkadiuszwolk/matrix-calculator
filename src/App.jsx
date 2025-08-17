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
import { ShowMatrix } from "./components/ui/show-matrix";
import { OperationButton } from "./components/ui/operation-button";
import { GithubLogo } from "./components/github-logo";
import { HistoryItem } from "./components/history-item";
import { TwoMatrixHistoryItem } from "./components/two-matrix-history-item";
import { calculateTheSum } from "./lib/calculateTheSum";

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
  const [history, setHistory] = useState([]);

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
      <div className="mb-10 flex w-full items-center justify-between px-4 py-2">
        <div className="w-64">
          <h1 className="font-bold">MATRIX Calculator</h1>
        </div>
        <SlidingTabs
          tabs={["Kalkulator", "Teoria", "Przewodnik użytkowania"]}
          activeTabIndex={activeTabIndex}
          onChange={(index) => setActiveTabIndex(index)}
        />
        <div className="flex w-64 justify-end">
          <GithubLogo size="2.5rem" />
        </div>
      </div>
      <div className="flex items-start justify-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex h-72 w-128 flex-col items-center gap-4">
            <span className="font-medium">Macierz A</span>
            <Matrix matrix={matrix1} onBlur={changeMatrix1Cell} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center">
              <span className="w-32">Liczba wierszy</span>
              <Stepper
                onMinus={() => setMatrix1(deleteRow(matrix1))}
                onPlus={() => setMatrix1(addRow(matrix1))}
                isMinusDisabled={matrix1.length === 1}
                isPlusDisabled={matrix1.length === 5}
              >
                {matrix1.length}
              </Stepper>
            </div>
            <div className="flex items-center">
              <span className="w-32">Liczba kolumn</span>
              <Stepper
                onMinus={() => setMatrix1(deleteColumn(matrix1))}
                onPlus={() => setMatrix1(addColumn(matrix1))}
                isMinusDisabled={matrix1[0].length === 1}
                isPlusDisabled={matrix1[0].length === 5}
              >
                {matrix1[0].length}
              </Stepper>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            const temporaryMatrix = matrix1;
            setMatrix1(matrix2);
            setMatrix2(temporaryMatrix);
          }}
          className="mt-24 h-12 w-12 cursor-pointer rounded-2xl border border-neutral-200 bg-neutral-100"
        >
          =
        </button>

        <div className="flex flex-col gap-2">
          <div className="flex h-72 w-128 flex-col items-center gap-4">
            <span className="font-medium">Macierz B</span>
            <Matrix matrix={matrix2} onBlur={changeMatrix2Cell} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center">
              <span className="w-32">Liczba wierszy</span>
              <Stepper
                onMinus={() => setMatrix2(deleteRow(matrix2))}
                onPlus={() => setMatrix2(addRow(matrix2))}
                isMinusDisabled={matrix2.length === 1}
                isPlusDisabled={matrix2.length === 5}
              >
                {matrix2.length}
              </Stepper>
            </div>
            <div className="flex items-center">
              <span className="w-32">Liczba kolumn</span>
              <Stepper
                onMinus={() => setMatrix2(deleteColumn(matrix2))}
                onPlus={() => setMatrix2(addColumn(matrix2))}
                isMinusDisabled={matrix2[0].length === 1}
                isPlusDisabled={matrix2[0].length === 5}
              >
                {matrix2[0].length}
              </Stepper>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 bg-neutral-800 text-white">
        <div className="flex items-start justify-center gap-16 p-12">
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <OperationButton>det ( A )</OperationButton>
            <OperationButton>rank ( A )</OperationButton>
            <OperationButton>
              A <sup>-1</sup>
            </OperationButton>
            <OperationButton>
              A <sup>T</sup>
            </OperationButton>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <OperationButton
              onClick={() => {
                const newData = {
                  id: 1,
                  operation: "Suma macierzy",
                  date: "17-08-2025 18:24",
                  element1: "A",
                  element2: "B",
                  symbol: "+",
                  matrix1: matrix1,
                  matrix2: matrix2,
                  resultingMatrix: calculateTheSum(matrix1, matrix2),
                };
                setHistory([newData, ...history]);
              }}
            >
              A + B
            </OperationButton>
            <OperationButton>A ○ B</OperationButton>
            <OperationButton>A - B</OperationButton>
            <OperationButton>A * B</OperationButton>
            <OperationButton>B - A</OperationButton>
            <OperationButton>B * A</OperationButton>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <OperationButton>det ( B )</OperationButton>
            <OperationButton>rank ( B )</OperationButton>
            <OperationButton>
              B <sup>-1</sup>
            </OperationButton>
            <OperationButton>
              B <sup>T</sup>
            </OperationButton>
          </div>
        </div>
        {history.map((data, index) => (
          <TwoMatrixHistoryItem
            key={data.id}
            data={data}
            bg={index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800"}
          />
        ))}
        {/* 
        <HistoryItem bg="bg-neutral-900" />
        <HistoryItem bg="bg-neutral-800" />
        <HistoryItem bg="bg-neutral-900" />
        <HistoryItem bg="bg-neutral-800" /> */}
      </div>
    </>
  );
}

export default App;
