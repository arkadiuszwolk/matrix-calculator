import { useState } from "react";
import { Cell } from "./cell";

export function Matrix({ matrix, onBlur }) {
  const [activeCellCoordinates, setActiveCellCoordinates] = useState(null);

  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const cells = [];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      cells.push({ i, j, value: matrix[i][j] });
    }
  }

  const handleBlur = (i, j, newValue) => {
    onBlur(i, j, newValue);
    setActiveCellCoordinates(null);
  };

  const handleEnter = () => {
    if (activeCellCoordinates) {
      const { i, j } = activeCellCoordinates;
      if (j < colCount - 1) {
        setActiveCellCoordinates({ i: i, j: j + 1 });
      } else {
        if (i < rowCount - 1) {
          setActiveCellCoordinates({ i: i + 1, j: 0 });
        } else {
          setActiveCellCoordinates({ i: 0, j: 0 });
        }
      }
    }
  };

  return (
    <div className="flex">
      <div className="z-10 mr-[-0.5rem] w-2 border-t border-b border-l" />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
          gridTemplateRows: `repeat(${rowCount}, 1fr)`,
        }}
      >
        {cells.map((cell) => {
          let active = false;
          if (activeCellCoordinates) {
            if (
              activeCellCoordinates.i === cell.i &&
              activeCellCoordinates.j === cell.j
            ) {
              active = true;
            }
          }

          active;
          return (
            <Cell
              key={`${cell.i}-${cell.j}`}
              coordinates={{ i: cell.i, j: cell.j }}
              active={active}
              value={cell.value}
              onBlur={handleBlur}
              onEnter={handleEnter}
              setActiveCellCoordinates={(coordinates) =>
                setActiveCellCoordinates(coordinates)
              }
            />
          );
        })}
      </div>
      <div className="z-10 ml-[-0.5rem] w-2 border-t border-r border-b" />
    </div>
  );
}
