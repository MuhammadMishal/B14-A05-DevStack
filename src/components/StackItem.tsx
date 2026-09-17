import { MdClose } from "react-icons/md";
import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (technology: Technology) => void;
}

export default function StackItem({ technology, onRemove }: StackItemProps) {
  const Icon = technology.icon;
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5">
      <Icon className={`shrink-0 text-2xl ${technology.iconColor}`} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-bold">{technology.name}</p>
        <p className="text-[9px] text-slate-400">{technology.category}</p>
      </div>
      <button type="button" onClick={() => onRemove(technology)} className="btn btn-ghost btn-xs btn-square text-slate-400 hover:text-red-500" aria-label={`Remove ${technology.name}`}><MdClose className="text-xl" /></button>
    </div>
  );
}