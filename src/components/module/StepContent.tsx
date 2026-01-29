import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Step } from "@/data/module-content/mentalita";
import { CodeBlock } from "./CodeBlock";
import { RuleCard } from "./RuleCard";
import { ComparisonBlock } from "./ComparisonBlock";
import { ChecklistCard } from "./ChecklistCard";
import { KeyPointsCard } from "./KeyPointsCard";

interface StepContentProps {
  step: Step;
  moduleId: number;
  isLast: boolean;
}

export const StepContent = ({ step, moduleId, isLast }: StepContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: step.id * 0.03 }}
      className="relative"
    >
      {/* Step card */}
      <div
        className={cn(
          "relative rounded-2xl border-2 transition-all duration-500 overflow-hidden",
          isExpanded
            ? "border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl shadow-primary/10"
            : "border-border/50 bg-card/80 hover:border-primary/30 hover:bg-card"
        )}
      >
        {/* Glow effect when expanded */}
        {isExpanded && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-1/2 h-1/2 opacity-30"
              style={{
                background: `radial-gradient(ellipse at top right, hsl(var(--module-${moduleId}) / 0.4), transparent 70%)`,
              }}
            />
          </div>
        )}

        {/* Header - always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left p-6 flex items-start gap-5 relative z-10"
        >
          {/* Step number with gradient */}
          <div className="relative">
            <div
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0",
                "font-bold text-lg transition-all duration-500 relative overflow-hidden",
                isExpanded ? "scale-110" : "scale-100"
              )}
              style={{
                background: isExpanded
                  ? `linear-gradient(135deg, hsl(var(--module-${moduleId})), hsl(var(--module-${moduleId}) / 0.7))`
                  : `hsl(var(--muted))`,
                color: isExpanded ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
              }}
            >
              {/* Shine effect */}
              {isExpanded && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              )}
              <span className="relative z-10">{String(step.id).padStart(2, "0")}</span>
            </div>
            
            {/* Connecting dot */}
            {!isLast && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-border to-transparent" />
            )}
          </div>

          {/* Title and subtitle */}
          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-center gap-2 mb-1">
              {isExpanded && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Sparkles className="w-3 h-3 text-primary" />
                </motion.div>
              )}
              <h3
                className={cn(
                  "font-bold text-xl leading-tight transition-colors duration-300",
                  isExpanded ? "text-foreground" : "text-foreground/80"
                )}
              >
                {step.title}
              </h3>
            </div>
            <p
              className={cn(
                "text-sm transition-colors",
                isExpanded ? "text-primary/80" : "text-muted-foreground"
              )}
            >
              {step.subtitle}
            </p>
          </div>

          {/* Expand indicator */}
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
              isExpanded
                ? "bg-primary text-primary-foreground rotate-180"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            )}
          >
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-8 space-y-8">
                {/* Elegant divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <Zap className="w-4 h-4 text-primary" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Description with highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Implementation steps - redesigned */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 p-6 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Implementazione
                      </span>
                      <h4 className="text-sm font-bold text-foreground">
                        Come farlo davvero
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {step.implementation.map((impl, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold transition-transform group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, hsl(var(--module-${moduleId}) / 0.2), hsl(var(--module-${moduleId}) / 0.1))`,
                            color: `hsl(var(--module-${moduleId}))`,
                          }}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm text-foreground/90 leading-relaxed">
                            {impl}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Example */}
                {step.example && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {step.example.type === "code" && (
                      <CodeBlock
                        code={step.example.content.code}
                        language={step.example.content.language}
                        filename={step.example.content.filename}
                        moduleId={moduleId}
                      />
                    )}

                    {step.example.type === "comparison" && (
                      <ComparisonBlock
                        left={step.example.content.left}
                        right={step.example.content.right}
                      />
                    )}

                    {step.example.type === "checklist" && (
                      <ChecklistCard
                        title={step.example.content.title}
                        question={step.example.content.question}
                        items={step.example.content.items}
                        warning={step.example.content.warning}
                        moduleId={moduleId}
                      />
                    )}
                  </motion.div>
                )}

                {/* Rule */}
                <RuleCard
                  text={step.rule.text}
                  warning={step.rule.warning}
                  moduleId={moduleId}
                />

                {/* Key points */}
                <KeyPointsCard points={step.keyPoints} moduleId={moduleId} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
