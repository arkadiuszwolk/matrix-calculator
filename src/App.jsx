import { useState } from "react";
import { SlidingTabs } from "./components/ui/sliding-tabs";
import { TwoMatrixHistoryItem } from "./components/two-matrix-history-item";
import { MatrixForm } from "./components/matrix-form";
import { OperationsSection } from "./components/layout/operations-section";

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
      <div className="mb-10 flex w-full items-center justify-center px-4 py-2">
        <SlidingTabs
          tabs={["Kalkulator", "Dostępne funkcje"]}
          activeTabIndex={activeTabIndex}
          onChange={(index) => setActiveTabIndex(index)}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 sm:flex-col sm:items-center md:flex-row md:items-start md:gap-4 lg:gap-24">
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
          className="h-12 w-12 cursor-pointer rounded-2xl border border-neutral-200 bg-neutral-100 md:mt-24"
        >
          =
        </button>
        <MatrixForm
          matrixState={[matrix2, setMatrix2]}
          matrixName="Macierz B"
        />
      </div>
      <OperationsSection
        matrix1={matrix1}
        matrix2={matrix2}
        history={history}
        setHistory={setHistory}
      />
      <div className="mt-24 w-full overflow-x-scroll bg-neutral-800 text-white">
        <div className="w-full overflow-x-scroll">
          {history.map((data, index) => (
            <TwoMatrixHistoryItem
              key={data.id}
              data={data}
              bg={index % 2 === 0 ? "bg-neutral-900" : "bg-neutral-800"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
