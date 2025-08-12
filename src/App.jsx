import { useState } from "react";
import "./App.css";
import { SlidingTabs } from "./components/ui/sliding-tabs";
import { Matrix } from "./components/ui/matrix";

function App() {
  const [matrix1, setMatrix1] = useState([
    [2, 3, 1],
    [0, 18, 7],
    [4, 5, 52],
  ]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  console.log(matrix1);
  function changeMatrix1Cell(i, j, newValue) {
    const newMatrix1 = [...matrix1];
    newMatrix1[i][j] = Number(newValue);
    setMatrix1(newMatrix1);
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
      <div className="flex items-start justify-center gap-24">
        <Matrix matrix={matrix1} onBlur={changeMatrix1Cell} />
        {/* <Matrix matrix={matrix2} /> */}
      </div>
    </>
  );
}

export default App;
