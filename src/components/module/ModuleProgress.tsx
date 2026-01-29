import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModuleProgressProps {
  totalSteps: number;
  completedSteps: number;
  moduleId: number;
}

export const ModuleProgress = ({ totalSteps, completedSteps, moduleId }: ModuleProgressProps) => {
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
      {/* Progress circle */}
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-muted"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke={`hsl(var(--module-${moduleId}))`}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              strokeDasharray: "176",
              strokeDashoffset: "0",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">
            {completedSteps}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">
          Progresso del modulo
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {completedSteps} di {totalSteps} step completati
        </p>

        {/* Step indicators */}
        <div className="flex gap-1 mt-3">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "h-1.5 flex-1 rounded-full",
                i < completedSteps ? `bg-module-${moduleId}` : "bg-muted"
              )}
              style={{
                backgroundColor: i < completedSteps ? `hsl(var(--module-${moduleId}))` : undefined
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
