import { ShowMatrix } from "./ui/show-matrix";

export function HistoryItem({ bg }) {
  return (
    <div className={`flex items-center gap-16 ${bg} px-24 py-4`}>
      <div>
        <h3 className="text-xl">Wyznacznik macierzy</h3>
        <p className="text-sm text-neutral-400">16-08-2025 13:28</p>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-4">
          <span>A</span>
          <span>=</span>
          <ShowMatrix
            matrix={[
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ]}
          />
        </div>
        <div className="flex items-center gap-4">
          <span>det ( A )</span>
          <span>=</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
