export function ShowMatrix({ matrix }) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const cells = [];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      cells.push({ i, j, value: matrix[i][j] });
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
        {cells.map((cell, index) => {
          return (
            <div
              key={`${cell.i}-${cell.j}`}
              className="flex h-8 w-12 cursor-default items-center justify-center text-xs hover:bg-neutral-700"
            >
              {cell.value}
            </div>
          );
        })}
      </div>
      <div className="z-10 ml-[-0.5rem] w-2 border-t border-r border-b" />
    </div>
  );
}
