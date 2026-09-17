import { FaCheck, FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) {
  const Icon = technology.icon;

  return (
    <article
      className={`card rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 ${
        isSelected
          ? "border-pink-400 shadow-[0_8px_22px_rgba(236,72,153,0.14)]"
          : "border-slate-200/80 shadow-[0_4px_18px_rgba(30,41,59,0.04)] hover:shadow-[0_12px_30px_rgba(30,41,59,0.08)]"
      }`}
    >
      <div className="card-body min-h-[282px] p-5">
        <div className="flex min-h-8 items-start justify-between">
          <Icon
            className={`text-3xl ${technology.iconColor}`}
            aria-hidden="true"
          />
          {technology.badge && (
            <span
              className={`badge badge-sm h-6 rounded-full border px-3 text-[11px] ${technology.badgeStyle}`}
            >
              {technology.badge}
            </span>
          )}
        </div>
        <div className="mt-2 flex-1">
          <h3 className="text-lg font-bold tracking-tight">
            {technology.name}
          </h3>
          <p className="mt-2 text-[13px] leading-5 text-slate-500">
            {technology.description}
          </p>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
          <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
            {technology.category}
          </span>
          <span>{technology.level}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <FaStar className="text-amber-400" />
            {technology.rating}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isSelected}
          className={`btn btn-sm mt-1 min-h-10 w-full shadow-none disabled:cursor-not-allowed disabled:opacity-100 ${
            isSelected
              ? "border-slate-200 bg-slate-200 text-slate-500"
              : "border-[#0c1425] bg-[#0c1425] text-white hover:border-slate-800 hover:bg-slate-800"
          }`}
        >
          {isSelected ? (
            <>
              <FaCheck /> Added to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </article>
  );
}
