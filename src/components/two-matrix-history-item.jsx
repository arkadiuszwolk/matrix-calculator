import { ShowMatrix } from "./ui/show-matrix";

export function TwoMatrixHistoryItem({ bg, data }) {
  return (
    <div className={`flex items-center gap-24 ${bg} px-24 py-4`}>
      <div>
        <h3 className="text-xl">{data.operation}</h3>
        <p className="text-sm text-neutral-400">{data.date}</p>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-4">
          <span>{data.element1}</span>
          <span>{data.symbol}</span>
          <span>{data.element2}</span>
          <span>=</span>
          <ShowMatrix matrix={data.matrix1} />
          <span>{data.symbol}</span>
          <ShowMatrix matrix={data.matrix2} />
          <span>=</span>
          <ShowMatrix matrix={data.resultingMatrix} />
        </div>
      </div>
    </div>
  );
}
