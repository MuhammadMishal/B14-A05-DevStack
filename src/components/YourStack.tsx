import type { Technology } from "../types/technology";
import StackItem from "./StackItem";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (technology: Technology) => void;
  onClear: () => void;
}

export default function YourStack({
  selectedTechnologies,
  onRemove,
  onClear,
}: YourStackProps) {
  const count = selectedTechnologies.length;

  return (
    <aside
      className="card sticky top-6 rounded-2xl border border-slate-200 bg-white shadow-[0_4px_18px_rgba(30,41,59,0.05)]"
      aria-live="polite"
    >
      <div className="card-body  p-5">
        <h3 className="text-base font-bold">Your Stack</h3>
        <p className="-mt-1 text-xs text-slate-400">
          {count === 0
            ? "No technologies selected yet."
            : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
        </p>

        {count === 0 ? (
          <div className="mt-3 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 text-xs text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <div className="mt-3 max-h-[420px] space-y-2 overflow-y-auto">
            {selectedTechnologies.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}

        {count > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="btn btn-sm mt-auto min-h-9 w-full border-red-300 bg-white text-red-500 shadow-none hover:border-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        )}
      </div>
    </aside>
  );
}
