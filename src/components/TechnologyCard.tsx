import { FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const Icon = technology.icon;

  return (
    <article
      className={`card rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 
  `}
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
          className={`btn btn-sm mt-1 min-h-10 w-full shadow-none disabled:cursor-not-allowed disabled:opacity-100 `}
        >
          Add to Stack
        </button>
      </div>
    </article>
  );
}
