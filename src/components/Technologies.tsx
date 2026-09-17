import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (technology: Technology) => void;
  onClear: () => void;
}

export default function Technologies({
  technologies,
  selectedTechnologies,
  onAdd,
  onRemove,
  onClear,
}: TechnologiesProps) {
  return (
    <section id="technologies" className="scroll-mt-4 pb-28 pt-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="mt-2 text-slate-500">
          Pick the right tools to build your ideal development stack.
        </p>

        <div className="mt-10 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={selectedTechnologies.some(
                  (item) => item.id === technology.id,
                )}
                onAdd={onAdd}
              />
            ))}
          </div>
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={onRemove}
            onClear={onClear}
          />
        </div>
      </div>
    </section>
  );
}
