import { useState } from "react";
import { calculateTheDifference } from "../../lib/calculateTheDifference";
import { calculateTheHadamardProduct } from "../../lib/calculateTheHadamardProduct";
import { calculateTheProduct } from "../../lib/calculateTheProduct";
import { calculateTheSum } from "../../lib/calculateTheSum";
import { OperationButton } from "../ui/operation-button";
import { SlidingTabs } from "../ui/sliding-tabs";

export function OperationsSection({ matrix1, matrix2, history, setHistory }) {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  let transform;
  if (activeTabIndex === 0) {
    transform = `translateX(-100vw)`;
  } else if (activeTabIndex === 1) {
    transform = `translateX(0)`;
  } else {
    transform = `translateX(100vw)`;
  }
  return (
    <div className="mt-24 flex w-full flex-col items-center gap-4 overflow-hidden bg-neutral-800 py-6">
      <div className="lg:hidden">
        <SlidingTabs
          tabs={["Tylko A", "A i B", "Tylko B"]}
          activeTabIndex={activeTabIndex}
          onChange={(index) => setActiveTabIndex(index)}
        />
      </div>
      <div
        className="flex min-h-36 items-start justify-center overflow-hidden text-white transition-all duration-600 lg:translate-x-0 lg:gap-4"
        style={{ transform }}
      >
        <div className="flex w-screen justify-center lg:w-auto">
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
        </div>
        <div className="flex w-screen justify-center lg:w-auto">
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
                console.log(history);
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
            <OperationButton
              onClick={() => {
                const newData = {
                  id: 1,
                  operation: "Iloczyn",
                  date: "17-08-2025 18:24",
                  element1: "A",
                  element2: "B",
                  symbol: "○",
                  matrix1: matrix1,
                  matrix2: matrix2,
                  resultingMatrix: calculateTheProduct(matrix1, matrix2),
                };
                setHistory([newData, ...history]);
              }}
            >
              A * B
            </OperationButton>
            <OperationButton>B - A</OperationButton>
            <OperationButton>B * A</OperationButton>
          </div>
        </div>
        <div className="flex w-screen justify-center lg:w-auto">
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
      </div>
    </div>
  );
}
