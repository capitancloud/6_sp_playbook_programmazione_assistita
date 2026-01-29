import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

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
            "p-5 rounded-xl border",
            isLeftNegative 
              ? "border-destructive/30 bg-destructive/5" 
              : "border-border bg-card"
          )}
        >
          <div className="flex items-center gap-2 mb-3">
            {isLeftNegative && (
              <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
            )}
            <span className={cn(
              "text-sm font-semibold",
              isLeftNegative ? "text-destructive" : "text-muted-foreground"
            )}>
              {left.label}
            </span>
          </div>

          {left.text && (
            <p className="text-sm text-muted-foreground font-mono bg-muted/30 px-3 py-2 rounded-lg">
              {left.text}
            </p>
          )}

          {left.items && (
            <ul className="space-y-2">
              {left.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive/60 mt-0.5">•</span>
                  <span className="font-mono bg-muted/30 px-2 py-1 rounded flex-1">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        {/* Arrow connector */}
        {showArrow && (
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </motion.div>
          </div>
        )}

        {/* Right (often correct/after) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "p-5 rounded-xl border",
            isRightPositive 
              ? "border-green-500/30 bg-green-500/5" 
              : "border-border bg-card"
          )}
        >
          <div className="flex items-center gap-2 mb-3">
            {isRightPositive && (
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500" />
              </div>
            )}
            <span className={cn(
              "text-sm font-semibold",
              isRightPositive ? "text-green-500" : "text-muted-foreground"
            )}>
              {right.label}
            </span>
          </div>

          {right.text && (
            <p className="text-sm text-foreground font-mono bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
              {right.text}
            </p>
          )}

          {right.items && (
            <ul className="space-y-2">
              {right.items.map((item, i) => (
                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="font-mono bg-green-500/10 px-2 py-1 rounded flex-1 border border-green-500/20">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
};
