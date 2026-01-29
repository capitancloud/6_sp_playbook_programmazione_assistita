import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";

interface ComparisonBlockProps {
  left: {
    label: string;
    text?: string;
    items?: string[];
  };
  right: {
    label: string;
    text?: string;
    items?: string[];
  };
  showArrow?: boolean;
}

export const ComparisonBlock = ({ left, right, showArrow = true }: ComparisonBlockProps) => {
  const isLeftNegative = left.label.includes("❌") || left.label.toLowerCase().includes("sbagliato");
  const isRightPositive = right.label.includes("✓") || right.label.toLowerCase().includes("corretto");

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left (often wrong/before) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "relative p-6 rounded-2xl border-2 overflow-hidden",
            isLeftNegative
              ? "border-red-500/30 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent"
              : "border-border bg-card"
          )}
        >
          {/* Icon badge */}
          <div className="flex items-center gap-3 mb-4">
            {isLeftNegative && (
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
            )}
            <span
              className={cn(
                "text-sm font-bold",
                isLeftNegative ? "text-red-400" : "text-muted-foreground"
              )}
            >
              {left.label}
            </span>
          </div>

          {left.text && (
            <p className="text-sm text-red-200/80 font-mono bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">
              {left.text}
            </p>
          )}

          {left.items && (
            <ul className="space-y-3">
              {left.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-red-200/70 font-mono bg-red-500/10 px-3 py-2 rounded-lg flex-1 border border-red-500/10">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Strikethrough decoration */}
          {isLeftNegative && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <X className="w-32 h-32 text-red-500" />
            </div>
          )}
        </motion.div>

        {/* Arrow connector */}
        {showArrow && (
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </motion.div>
          </div>
        )}

        {/* Right (often correct/after) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "relative p-6 rounded-2xl border-2 overflow-hidden",
            isRightPositive
              ? "border-green-500/30 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent"
              : "border-border bg-card"
          )}
        >
          {/* Icon badge */}
          <div className="flex items-center gap-3 mb-4">
            {isRightPositive && (
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400" />
              </div>
            )}
            <span
              className={cn(
                "text-sm font-bold",
                isRightPositive ? "text-green-400" : "text-muted-foreground"
              )}
            >
              {right.label}
            </span>
          </div>

          {right.text && (
            <p className="text-sm text-green-100 font-mono bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/20">
              {right.text}
            </p>
          )}

          {right.items && (
            <ul className="space-y-3">
              {right.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-sm text-green-100 font-mono bg-green-500/10 px-3 py-2 rounded-lg flex-1 border border-green-500/20">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Sparkle decoration */}
          {isRightPositive && (
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-green-500/30" />
          )}
        </motion.div>
      </div>
    </div>
  );
};
