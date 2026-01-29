import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";

interface RuleCardProps {
  text: string;
  warning?: boolean;
  moduleId?: number;
}

export const RuleCard = ({ text, warning = false, moduleId = 1 }: RuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={cn(
        "relative p-5 rounded-xl border-2",
        warning 
          ? "border-amber-500/40 bg-amber-500/5" 
          : "border-primary/30 bg-primary/5"
      )}
    >
      {/* Icon */}
      <div className={cn(
        "absolute -top-3 left-4 px-2 py-1 rounded-full flex items-center gap-1.5",
        warning ? "bg-amber-500/20" : "bg-primary/20"
      )}>
        {warning ? (
          <AlertTriangle className="w-4 h-4 text-amber-500" />
        ) : (
          <Sparkles className="w-4 h-4 text-primary" />
        )}
        <span className={cn(
          "text-xs font-semibold uppercase tracking-wider",
          warning ? "text-amber-500" : "text-primary"
        )}>
          Regola pratica
        </span>
      </div>

      {/* Text */}
      <p className={cn(
        "text-base font-medium mt-2",
        warning ? "text-amber-200" : "text-foreground"
      )}>
        {text}
      </p>

      {/* Decorative gradient */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
        style={{
          background: warning 
            ? `radial-gradient(circle at bottom right, hsl(45, 90%, 50%), transparent 70%)`
            : `radial-gradient(circle at bottom right, hsl(var(--module-${moduleId})), transparent 70%)`
        }}
      />
    </motion.div>
  );
};
