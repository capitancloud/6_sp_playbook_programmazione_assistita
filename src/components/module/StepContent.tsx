import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Zap, ArrowRight, HelpCircle, AlertOctagon } from "lucide-react";
import { useState } from "react";
import { Step } from "@/data/module-content/mentalita";
import { FileCode } from "lucide-react";
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
  
  // Get the step number (handle both formats)
  const stepNumber = step.number ?? (typeof step.id === 'number' ? step.id : 0);
  
  // Get the icon component or use a default
  const IconComponent = step.icon ?? FileCode;
  
  // Visual variety based on step number
  const stepVariant = stepNumber % 4; // 0, 1, 2, 3 for 4 different styles
  
  const getCardStyle = () => {
    if (!isExpanded) return "border-border/50 bg-card/80 hover:border-primary/30 hover:bg-card";
    
    switch (stepVariant) {
      case 0:
        return "border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl shadow-primary/10";
      case 1:
        return "border-accent/50 bg-gradient-to-bl from-card via-accent/5 to-card shadow-xl shadow-accent/10";
      case 2:
        return "border-primary/40 bg-gradient-to-tr from-primary/5 via-card to-card shadow-xl shadow-primary/5";
      case 3:
        return "border-accent/40 bg-gradient-to-tl from-card to-accent/5 shadow-xl shadow-accent/5";
      default:
        return "border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl shadow-primary/10";
    }
  };
  
  const getGlowPosition = () => {
    switch (stepVariant) {
      case 0: return "top-0 right-0";
      case 1: return "bottom-0 left-0";
      case 2: return "top-0 left-0";
      case 3: return "bottom-0 right-0";
      default: return "top-0 right-0";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: stepNumber * 0.03 }}
      className="relative"
    >
      {/* Step card */}
      <div
        className={cn(
          "relative rounded-2xl border-2 transition-all duration-500 overflow-hidden",
          getCardStyle()
        )}
      >
        {/* Glow effect when expanded - position varies by step */}
        {isExpanded && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={cn("absolute w-1/2 h-1/2 opacity-30", getGlowPosition())}
              style={{
                background: stepVariant % 2 === 0
                  ? `radial-gradient(ellipse, hsl(var(--module-${moduleId}) / 0.4), transparent 70%)`
                  : `radial-gradient(ellipse, hsl(var(--accent) / 0.3), transparent 70%)`,
              }}
            />
          </div>
        )}

        {/* Header - always visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left p-6 flex items-start gap-5 relative z-10"
        >
          {/* Step number and icon with gradient - varies by step */}
          <div className="relative">
            <div
              className={cn(
                "w-14 h-14 flex items-center justify-center flex-shrink-0",
                "transition-all duration-500 relative overflow-hidden",
                isExpanded ? "scale-110" : "scale-100",
                // Different shapes based on stepVariant
                stepVariant === 0 && "rounded-2xl",
                stepVariant === 1 && "rounded-full",
                stepVariant === 2 && "rounded-xl",
                stepVariant === 3 && "rounded-3xl"
              )}
              style={{
                background: isExpanded
                  ? stepVariant % 2 === 0
                    ? `linear-gradient(135deg, hsl(var(--module-${moduleId})), hsl(var(--module-${moduleId}) / 0.7))`
                    : `linear-gradient(225deg, hsl(var(--module-${moduleId}) / 0.8), hsl(var(--accent) / 0.6))`
                  : `hsl(var(--muted))`,
                color: isExpanded ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
              }}
            >
              {/* Shine effect - different directions */}
              {isExpanded && (
                <div 
                  className={cn(
                    "absolute inset-0 animate-[shimmer_2s_infinite]",
                    stepVariant % 2 === 0 
                      ? "bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      : "bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-y-full"
                  )} 
                />
              )}
              <IconComponent className="w-6 h-6 relative z-10" />
            </div>
            
            {/* Step number badge - different positions */}
            <div
              className={cn(
                "absolute w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-card",
                isExpanded
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted-foreground/20 text-muted-foreground",
                // Different positions
                stepVariant === 0 && "-top-1 -right-1",
                stepVariant === 1 && "-top-1 -left-1",
                stepVariant === 2 && "-bottom-1 -right-1",
                stepVariant === 3 && "-bottom-1 -left-1"
              )}
            >
              {stepNumber}
            </div>
            
            {/* Connecting line - different styles */}
            {!isLast && (
              <div 
                className={cn(
                  "absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-6",
                  stepVariant % 2 === 0 
                    ? "bg-gradient-to-b from-border to-transparent"
                    : "bg-gradient-to-b from-primary/20 to-transparent"
                )} 
              />
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
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                {/* Description with highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30">
                    <p className="text-base text-foreground/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* WHY section - NEW */}
                {step.why && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="relative p-6 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          Perché è importante
                        </span>
                        <h4 className="text-sm font-bold text-foreground">
                          La ragione dietro questo principio
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.why}
                    </p>
                  </motion.div>
                )}

                {/* Implementation steps - redesigned */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
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
                        transition={{ delay: 0.25 + i * 0.08 }}
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

                {/* Example - handles both old (example) and new (codeExample, comparison) formats */}
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

                {/* Code Example - new format */}
                {step.codeExample && !step.example && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <CodeBlock
                      code={step.codeExample.code}
                      language={step.codeExample.language}
                      filename={step.codeExample.filename}
                      moduleId={moduleId}
                    />
                  </motion.div>
                )}

                {/* Comparison - new format */}
                {step.comparison && !step.example && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 }}
                  >
                    <ComparisonBlock
                      left={{ label: "❌ Sbagliato", items: step.comparison.wrong }}
                      right={{ label: "✓ Corretto", items: step.comparison.correct }}
                    />
                  </motion.div>
                )}

                {/* Checklist - new format */}
                {step.checklist && !step.example && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.34 }}
                  >
                    <ChecklistCard
                      title={step.checklist.title}
                      items={step.checklist.items.map(text => ({ text, checked: false }))}
                      moduleId={moduleId}
                    />
                  </motion.div>
                )}

                {/* Common Mistakes - NEW */}
                {step.commonMistakes && step.commonMistakes.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="rounded-xl bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 border border-red-500/20 p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <AlertOctagon className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                          Attenzione
                        </span>
                        <h4 className="text-sm font-bold text-foreground">
                          Errori comuni da evitare
                        </h4>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {step.commonMistakes.map((mistake, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10"
                        >
                          <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-red-400">✕</span>
                          </div>
                          <p className="text-sm text-red-200/80 leading-relaxed">
                            {mistake}
                          </p>
                        </motion.div>
                      ))}
                    </div>
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
