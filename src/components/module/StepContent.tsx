import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Zap } from "lucide-react";
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
      transition={{ duration: 0.4, delay: step.id * 0.05 }}
      className={cn(
        "relative",
        !isLast && "pb-8"
      )}
    >
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent" />
      )}

      {/* Step card */}
      <div className={cn(
        "relative rounded-xl border transition-all duration-300",
        isExpanded 
          ? "border-primary/40 bg-card shadow-lg shadow-primary/5" 
          : "border-border bg-card/50 hover:bg-card hover:border-border"
      )}>
        {/* Header - always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left p-5 flex items-start gap-4"
        >
          {/* Step number */}
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
              "font-bold text-sm transition-all duration-300",
              isExpanded 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            )}
          >
            {step.id}
          </div>

          {/* Title and subtitle */}
          <div className="flex-1 min-w-0 pt-1">
            <h3 className={cn(
              "font-semibold text-lg leading-tight mb-1 transition-colors",
              isExpanded ? "text-foreground" : "text-foreground/80"
            )}>
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {step.subtitle}
            </p>
          </div>

          {/* Expand indicator */}
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
            isExpanded ? "bg-primary/10 rotate-0" : "bg-muted/50"
          )}>
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-primary" />
            ) : (
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-6 space-y-6">
                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {step.description}
                </motion.p>

                {/* Implementation steps */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      Come implementarlo davvero
                    </span>
                  </div>

                  <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                    {step.implementation.map((impl, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                          style={{
                            backgroundColor: `hsl(var(--module-${moduleId}) / 0.15)`,
                            color: `hsl(var(--module-${moduleId}))`
                          }}
                        >
                          {i + 1}
                        </div>
                        <p className="text-sm text-foreground/80">{impl}</p>
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
