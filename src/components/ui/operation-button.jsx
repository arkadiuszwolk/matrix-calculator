export function OperationButton({ children }) {
  return (
    <button className="w-42 rounded-full border border-dashed border-neutral-500 px-4 py-2 hover:cursor-pointer hover:bg-neutral-700">
      {children}
    </button>
  );
}
