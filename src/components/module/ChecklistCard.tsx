import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, AlertCircle, HelpCircle } from "lucide-react";
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
  moduleId = 1 
}: ChecklistCardProps) => {
  const [items, setItems] = useState(initialItems);

  const toggleItem = (index: number) => {
    setItems(prev => prev.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    ));
  };

  const checkedCount = items.filter(i => i.checked).length;
  const progress = (checkedCount / items.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "rounded-xl border overflow-hidden",
        warning ? "border-amber-500/30 bg-amber-500/5" : "border-border bg-card"
      )}
    >
      {/* Header */}
      <div className={cn(
        "px-5 py-4 border-b",
        warning ? "border-amber-500/20 bg-amber-500/10" : "border-border bg-muted/30"
      )}>
        {question && (
          <div className="flex items-start gap-3 mb-2">
            <HelpCircle className={cn(
              "w-5 h-5 mt-0.5",
              warning ? "text-amber-500" : "text-primary"
            )} />
            <p className="text-sm font-medium text-foreground">{question}</p>
          </div>
        )}
        {title && (
          <div className="flex items-center justify-between">
            <h4 className={cn(
              "text-sm font-semibold",
              warning ? "text-amber-400" : "text-foreground"
            )}>
              {title}
            </h4>
            <span className="text-xs text-muted-foreground">
              {checkedCount}/{items.length}
            </span>
          </div>
        )}

        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={cn(
              "h-full rounded-full",
              warning 
                ? "bg-gradient-to-r from-amber-500 to-amber-400" 
                : "bg-gradient-to-r from-primary to-accent"
            )}
          />
        </div>
      </div>

      {/* Items */}
      <div className="p-3 space-y-1">
        {items.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => toggleItem(index)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
              "hover:bg-muted/50 text-left group",
              item.checked && "bg-muted/30"
            )}
          >
            <div className="flex-shrink-0">
              {warning && !item.checked ? (
                <AlertCircle className="w-5 h-5 text-amber-500/60 group-hover:text-amber-500" />
              ) : item.checked ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground/40 group-hover:text-muted-foreground" />
              )}
            </div>
            <span className={cn(
              "text-sm transition-colors",
              item.checked 
                ? "text-muted-foreground line-through" 
                : "text-foreground"
            )}>
              {item.text}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
