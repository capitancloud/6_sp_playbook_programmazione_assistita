import { cn } from "@/lib/utils";
import { Play, Sparkles } from "lucide-react";

interface AnimationPlaceholderProps {
  title: string;
  moduleId: number;
}

export const AnimationPlaceholder = ({ title, moduleId }: AnimationPlaceholderProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border",
        "bg-gradient-to-br from-card to-muted/20",
        "min-h-[160px] flex items-center justify-center",
        "group cursor-pointer hover:border-primary/30 transition-all duration-300"
      )}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating particles effect placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-2 h-2 rounded-full bg-primary/20",
              "animate-float"
            )}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center mb-3",
            "bg-muted/50 border border-border",
            "group-hover:bg-primary/10 group-hover:border-primary/30",
            "transition-all duration-300"
          )}
        >
          <Play className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors ml-0.5" />
        </div>

        <div className="flex items-center gap-1.5 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-primary/60" />
          <span className="text-xs text-primary/60 uppercase tracking-wider font-medium">
            Animazione
          </span>
        </div>

        <h4 className="text-sm font-medium text-foreground">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1">
          Contenuto interattivo in arrivo
        </p>
      </div>

      {/* Decorative corner */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
        style={{
          background: `radial-gradient(circle at bottom right, hsl(var(--module-${moduleId})), transparent 70%)`,
        }}
      />
    </div>
  );
};
