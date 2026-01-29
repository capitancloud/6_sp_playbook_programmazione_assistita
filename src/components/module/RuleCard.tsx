import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertTriangle, Sparkles, Quote } from "lucide-react";

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
        "relative p-6 rounded-2xl overflow-hidden",
        warning
          ? "bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-500/30"
          : "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30"
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rule-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rule-pattern)" />
        </svg>
      </div>

      {/* Quote icon */}
      <Quote
        className={cn(
          "absolute top-4 right-4 w-12 h-12 opacity-10",
          warning ? "text-amber-500" : "text-primary"
        )}
      />

      {/* Badge */}
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4",
          warning ? "bg-amber-500/20" : "bg-primary/20"
        )}
      >
        {warning ? (
          <AlertTriangle className="w-4 h-4 text-amber-400" />
        ) : (
          <Sparkles className="w-4 h-4 text-primary" />
        )}
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider",
            warning ? "text-amber-400" : "text-primary"
          )}
        >
          Regola pratica
        </span>
      </div>

      {/* Text */}
      <p
        className={cn(
          "text-lg font-semibold leading-relaxed relative z-10",
          warning ? "text-amber-100" : "text-foreground"
        )}
      >
        "{text}"
      </p>

      {/* Decorative gradient */}
      <div
        className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none"
        style={{
          background: warning
            ? `radial-gradient(circle at bottom right, hsl(45, 90%, 50%), transparent 70%)`
            : `radial-gradient(circle at bottom right, hsl(var(--module-${moduleId})), transparent 70%)`,
        }}
      />
    </motion.div>
  );
};
