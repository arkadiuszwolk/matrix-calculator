import { useState } from "react";
import "./App.css";
import { SlidingTabs } from "./components/ui/sliding-tabs";
import { Matrix } from "./components/ui/matrix";

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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
        <Matrix
          matrix={[
            [2, 3, 1],
            [0, 18, 7],
            [4, 5, 52],
          ]}
        />
        <Matrix
          matrix={[
            [0, 8, 3],
            [91, 3, 0],
          ]}
        />
      </div>
    </>
  );
}

export default App;
