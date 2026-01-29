import { Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PromptBoxProps {
  text: string;
  label?: string;
}

export const PromptBox = ({ text, label }: PromptBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      {label && (
        <div className="absolute -top-3 left-4 px-2 py-0.5 bg-accent/20 rounded-full">
          <span className="text-xs font-medium text-accent">{label}</span>
        </div>
      )}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl",
          "bg-gradient-to-br from-accent/5 via-card to-primary/5",
          "border border-accent/30 hover:border-accent/50",
          "transition-all duration-300",
          "hover:shadow-lg hover:shadow-accent/10"
        )}
      >
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-accent/20 bg-accent/5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              Prompt
            </span>
          </div>
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 px-2 py-1 rounded-md text-xs",
              "transition-all duration-200",
              copied
                ? "bg-green-500/20 text-green-400"
                : "bg-accent/10 text-muted-foreground hover:bg-accent/20 hover:text-accent"
            )}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copia</span>
              </>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <pre className="whitespace-pre-wrap font-mono text-sm text-foreground leading-relaxed">
            {text}
          </pre>
        </div>

        {/* Bottom gradient line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>
    </div>
  );
};
