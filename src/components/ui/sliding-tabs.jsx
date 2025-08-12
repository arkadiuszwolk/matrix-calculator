import { useEffect, useRef, useState } from "react";

export function SlidingTabs({ tabs, activeTabIndex, onChange }) {
  const [width, setWidth] = useState("0px");
  const [left, setLeft] = useState("0px");
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeTab = tabRefs.current[activeTabIndex];
    if (activeTab) {
      setWidth(`${activeTab.offsetWidth}px`);
      setLeft(`${activeTab.offsetLeft}px`);
    }
  }, [activeTabIndex]);

  const setRef = (index) => (tab) => {
    tabRefs.current[index] = tab;
  };

  return (
    <div className="relative flex rounded-full border-4 border-neutral-100 bg-neutral-100 text-sm">
      <div
        className="absolute z-10 h-full w-10 rounded-full bg-white transition-all duration-500"
        style={{ width, left }}
      />
      {tabs.map((tab, index) => (
        <button
          key={index}
          ref={setRef(index)}
          onClick={() => onChange(index)}
          className="z-20 px-4 py-2 hover:cursor-pointer"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
