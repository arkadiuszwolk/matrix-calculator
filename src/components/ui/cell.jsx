import { useEffect, useRef, useState } from "react";

export function Cell({
  coordinates,
  active,
  value = 0,
  onBlur,
  onEnter,
  setActiveCellCoordinates,
}) {
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.select();
    }
  }, [active]);

  const handleClick = () => {
    setActiveCellCoordinates({ i: coordinates.i, j: coordinates.j });
  };

  const handleBlur = () => {
    onBlur(coordinates.i, coordinates.j, currentValue);
  };

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBlur();
      onEnter();
    }
  };

  const inactiveCell = (
    <input
      type="button"
      value={value}
      onClick={handleClick}
      className="flex h-12 w-16 items-center justify-center hover:cursor-pointer hover:bg-neutral-50"
    />
  );

  const activeCell = (
    <input
      ref={inputRef}
      type="number"
      value={currentValue}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="h-12 w-16 border border-dashed border-neutral-300 text-center outline-none"
    />
  );

  return active ? activeCell : inactiveCell;
}
