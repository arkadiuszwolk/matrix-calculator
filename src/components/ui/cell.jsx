import { useEffect, useRef, useState } from "react";

export function Cell({ active, value = 0 }) {
  const [isActive, setIsActive] = useState(active);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  }, [isActive]);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const inactiveCell = (
    <input
      type="button"
      defaultValue={value}
      onClick={handleClick}
      className="flex h-12 w-16 items-center justify-center hover:cursor-pointer hover:bg-neutral-50"
    />
  );

  const activeCell = (
    <input
      ref={inputRef}
      type="number"
      defaultValue={value}
      onBlur={handleClick}
      className="h-12 w-16 border border-dashed border-neutral-300 text-center outline-none"
    />
  );

  return isActive ? activeCell : inactiveCell;
}
