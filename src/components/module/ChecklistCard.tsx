import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, AlertCircle, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";

interface ChecklistItem {
  text: string;
  checked?: boolean;
}

interface ChecklistCardProps {
  title?: string;
  question?: string;
  items: ChecklistItem[];
  warning?: boolean;
  moduleId?: number;
}

export const ChecklistCard = ({
  title,
  question,
  items: initialItems,
  warning = false,
  moduleId = 1,
}: ChecklistCardProps) => {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (index: number) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = items.filter((i) => i.checked).length;
  const progress = (checkedCount / items.length) * 100;
  const isComplete = checkedCount === items.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "rounded-2xl border-2 overflow-hidden transition-all duration-500",
        warning
          ? "border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent"
          : isComplete
          ? "border-green-500/30 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent"
          : "border-border/50 bg-gradient-to-br from-card to-muted/20"
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "px-6 py-4 border-b transition-colors",
          warning
            ? "border-amber-500/20 bg-amber-500/10"
            : isComplete
            ? "border-green-500/20 bg-green-500/10"
            : "border-border/30 bg-muted/20"
        )}
      >
        {question && (
          <div className="flex items-start gap-3 mb-3">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                warning ? "bg-amber-500/20" : "bg-primary/20"
              )}
            >
              <HelpCircle
                className={cn("w-5 h-5", warning ? "text-amber-400" : "text-primary")}
              />
            </div>
            <p className="text-sm font-semibold text-foreground pt-1">{question}</p>
          </div>
        )}
        
        {title && (
          <div className="flex items-center justify-between">
            <h4
              className={cn(
                "text-sm font-bold flex items-center gap-2",
                warning ? "text-amber-300" : isComplete ? "text-green-300" : "text-foreground"
              )}
            >
              {isComplete && <Sparkles className="w-4 h-4" />}
              {title}
            </h4>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full",
                  isComplete ? "bg-green-500/20 text-green-400" : "bg-muted text-muted-foreground"
                )}
              >
                {checkedCount}/{items.length}
              </span>
            </div>
          </div>
        )}

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "h-full rounded-full transition-colors",
              warning
                ? "bg-gradient-to-r from-amber-500 to-amber-400"
                : isComplete
                ? "bg-gradient-to-r from-green-500 to-green-400"
                : "bg-gradient-to-r from-primary to-accent"
            )}
          />
        </div>
      </div>

      {/* Items */}
      <div className="p-4 space-y-2">
        {items.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => toggleItem(index)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left group",
              item.checked
                ? "bg-green-500/10 border border-green-500/20"
                : "bg-muted/20 border border-transparent hover:bg-muted/40 hover:border-border/50"
            )}
          >
            <div className="flex-shrink-0 transition-transform group-hover:scale-110">
              {warning && !item.checked ? (
                <AlertCircle className="w-6 h-6 text-amber-500/60 group-hover:text-amber-400" />
              ) : item.checked ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </motion.div>
              ) : (
                <Circle className="w-6 h-6 text-muted-foreground/40 group-hover:text-muted-foreground" />
              )}
            </div>
            <span
              className={cn(
                "text-sm font-medium transition-all",
                item.checked ? "text-green-200 line-through opacity-70" : "text-foreground"
              )}
            >
              {item.text}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
