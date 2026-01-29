import { cn } from "@/lib/utils";
import { GitBranch, Workflow } from "lucide-react";

interface DiagramPlaceholderProps {
  type: "flow" | "decision" | "cycle" | "process";
  moduleId: number;
}

const typeConfig = {
  flow: {
    icon: Workflow,
    label: "Diagramma di Flusso",
    description: "Visualizzazione del processo step-by-step",
  },
  decision: {
    icon: GitBranch,
    label: "Albero Decisionale",
    description: "Schema delle scelte e conseguenze",
  },
  cycle: {
    icon: Workflow,
    label: "Ciclo Iterativo",
    description: "Processo ciclico e feedback loop",
  },
  process: {
    icon: Workflow,
    label: "Mappa del Processo",
    description: "Overview completa del workflow",
  },
};

export const DiagramPlaceholder = ({ type, moduleId }: DiagramPlaceholderProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative p-8 rounded-xl border-2 border-dashed border-border",
        "bg-card/30 flex flex-col items-center justify-center",
        "min-h-[200px] group hover:border-primary/30 transition-colors"
      )}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${moduleId}-${type}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-muted-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${moduleId}-${type})`} />
        </svg>
      </div>

      {/* Content */}
      <div
        className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
          "bg-muted/50 border border-border",
          "group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors"
        )}
      >
        <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <h4 className="text-sm font-medium text-muted-foreground mb-1">
        {config.label}
      </h4>
      <p className="text-xs text-muted-foreground/60 text-center max-w-[200px]">
        {config.description}
      </p>

      {/* Badge */}
      <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground">
        In arrivo
      </div>
    </div>
  );
};
