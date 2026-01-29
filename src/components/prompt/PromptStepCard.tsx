import { motion } from "framer-motion";
import { PromptStep } from "@/data/prompt-content/fondamenta";
import { PromptBox } from "./PromptBox";
import { cn } from "@/lib/utils";

interface PromptStepCardProps {
  step: PromptStep;
  index: number;
}

export const PromptStepCard = ({ step, index }: PromptStepCardProps) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-gradient-to-br from-card via-card to-accent/5",
          "border border-border hover:border-accent/30",
          "transition-all duration-300",
          "p-6 md:p-8"
        )}
      >
        {/* Step number badge */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="text-lg font-bold text-accent font-mono">
              {step.number}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pr-14">
          <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 space-y-4">
          {step.description.split('\n\n').map((paragraph, i) => {
            // Check if paragraph starts with **Title:**
            const match = paragraph.match(/^\*\*([^*]+):\*\*\s*(.*)/s);
            if (match) {
              return (
                <div key={i} className="space-y-1">
                  <h4 className="text-sm font-semibold text-accent">{match[1]}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {match[2]}
                  </p>
                </div>
              );
            }
            return (
              <p key={i} className="text-muted-foreground leading-relaxed text-sm">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Prompt boxes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              {step.prompts.length > 1 ? "Prompt di esempio" : "Prompt di esempio"}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent" />
          </div>
          
          {step.prompts.map((prompt, i) => (
            <PromptBox key={i} text={prompt.text} label={prompt.label} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
