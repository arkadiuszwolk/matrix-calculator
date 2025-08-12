import { Cell } from "./cell";

export function Matrix({ matrix }) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const matrixValues = [];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      matrixValues.push(matrix[i][j]);
    }
  }

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
        {matrixValues.map((value, index) => (
          <Cell key={index} active={false} value={value} />
        ))}
      </div>
      <div className="z-10 ml-[-0.5rem] w-2 border-t border-r border-b" />
    </div>
  );
}
