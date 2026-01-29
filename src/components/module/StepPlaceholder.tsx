import { cn } from "@/lib/utils";
import { Circle, Lock } from "lucide-react";

interface StepPlaceholderProps {
  stepNumber: number;
  totalSteps: number;
  moduleId: number;
}

export const StepPlaceholder = ({ stepNumber, totalSteps, moduleId }: StepPlaceholderProps) => {
  return (
    <div
      className={cn(
        "group relative flex items-start gap-4 p-4 rounded-lg",
        "border border-border bg-card/50 hover:bg-card transition-colors",
        "opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${stepNumber * 100}ms` }}
    >
      {/* Step indicator line */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            "border-2 border-dashed border-muted-foreground/30",
            "group-hover:border-primary/50 transition-colors"
          )}
        >
          <span className="text-xs font-mono text-muted-foreground">
            {stepNumber}
          </span>
        </div>
        {stepNumber < totalSteps && (
          <div className="w-px h-8 bg-border mt-2" />
        )}
      </div>

      {/* Content placeholder */}
      <div className="flex-1 pt-1">
        <div className="flex items-center gap-2 mb-2">
          <Lock className="w-3.5 h-3.5 text-muted-foreground/50" />
          <h4 className="text-sm font-medium text-muted-foreground">
            Step {stepNumber} - Contenuto in arrivo
          </h4>
        </div>
        
        {/* Placeholder bars */}
        <div className="space-y-2">
          <div className="h-3 bg-muted/50 rounded w-3/4" />
          <div className="h-3 bg-muted/30 rounded w-1/2" />
        </div>
      </div>

      {/* Decorative circle */}
      <Circle className="w-4 h-4 text-muted-foreground/20 absolute right-4 top-4" />
    </div>
  );
};
