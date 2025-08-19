import { useState } from "react";
import "./App.css";
import { SlidingTabs } from "./components/ui/sliding-tabs";
import { OperationButton } from "./components/ui/operation-button";
import { GithubLogo } from "./components/github-logo";
import { TwoMatrixHistoryItem } from "./components/two-matrix-history-item";
import { calculateTheSum } from "./lib/calculateTheSum";
import { calculateTheHadamardProduct } from "./lib/calculateTheHadamardProduct";
import { calculateTheDifference } from "./lib/calculateTheDifference";
import { MatrixForm } from "./components/matrix-form";

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
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-col sm:items-center md:flex-row md:items-start md:gap-4 lg:gap-24">
        <MatrixForm
          matrixState={[matrix1, setMatrix1]}
          matrixName="Macierz A"
        />
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
        <MatrixForm
          matrixState={[matrix2, setMatrix2]}
          matrixName="Macierz B"
        />
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
            <OperationButton
              onClick={() => {
                const newData = {
                  id: 1,
                  operation: "Iloczyn Hadamarda",
                  date: "17-08-2025 18:24",
                  element1: "A",
                  element2: "B",
                  symbol: "○",
                  matrix1: matrix1,
                  matrix2: matrix2,
                  resultingMatrix: calculateTheHadamardProduct(
                    matrix1,
                    matrix2,
                  ),
                };
                setHistory([newData, ...history]);
              }}
            >
              A ○ B
            </OperationButton>
            <OperationButton
              onClick={() => {
                const newData = {
                  id: 1,
                  operation: "Różnica macierzy",
                  date: "17-08-2025 18:24",
                  element1: "A",
                  element2: "B",
                  symbol: "-",
                  matrix1: matrix1,
                  matrix2: matrix2,
                  resultingMatrix: calculateTheDifference(matrix1, matrix2),
                };
                setHistory([newData, ...history]);
              }}
            >
              A - B
            </OperationButton>
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
      </div>
    </>
  );
}

export default App;
