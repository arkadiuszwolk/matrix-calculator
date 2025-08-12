import { useState } from "react";
import "./App.css";
import { SlidingTabs } from "./components/ui/sliding-tabs";

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div className="flex w-full justify-center py-2">
        <SlidingTabs
          tabs={["Arytmetyka", "Transformacje", "Operacje elementarne"]}
          activeTabIndex={activeTabIndex}
          onChange={(index) => setActiveTabIndex(index)}
        />
      </div>
    </>
  );
}

export default App;
