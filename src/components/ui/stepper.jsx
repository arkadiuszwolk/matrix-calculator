export function Stepper({
  children,
  onMinus,
  onPlus,
  isMinusDisabled,
  isPlusDisabled,
}) {
  return (
    <div className="flex text-sm">
      <button
        onClick={onMinus}
        disabled={isMinusDisabled}
        className={`w-8 rounded-l-full border border-neutral-200 bg-neutral-50 ${isMinusDisabled ? "" : "hover:cursor-pointer hover:bg-neutral-100"}`}
      >
        -
      </button>
      <span className="border-y border-neutral-200 px-4 py-1">{children}</span>
      <button
        onClick={onPlus}
        disabled={isPlusDisabled}
        className={`w-8 rounded-r-full border border-neutral-200 bg-neutral-50 ${isPlusDisabled ? "" : "hover:cursor-pointer hover:bg-neutral-100"}`}
      >
        +
      </button>
    </div>
  );
}
