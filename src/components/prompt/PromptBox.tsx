import { Copy, Check, Terminal } from "lucide-react";
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
        <div className="absolute -top-3 left-4 z-10 px-3 py-1 bg-accent rounded-full shadow-lg shadow-accent/20">
          <span className="text-xs font-semibold text-accent-foreground">{label}</span>
        </div>
      )}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl",
          "bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]",
          "border-2 border-accent/40 hover:border-accent/70",
          "transition-all duration-300",
          "hover:shadow-xl hover:shadow-accent/20",
          "hover:-translate-y-0.5"
        )}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-accent/20 bg-accent/5">
          <div className="flex items-center gap-3">
            {/* Terminal dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="h-4 w-px bg-accent/30" />
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                prompt.txt
              </span>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium",
              "transition-all duration-300",
              copied
                ? "bg-green-500/20 text-green-400 scale-105"
                : "bg-accent/10 text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105"
            )}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copia</span>
              </>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Line numbers gutter */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-accent/5 border-r border-accent/10 flex flex-col pt-6">
            {text.split('\n').map((_, i) => (
              <span key={i} className="text-xs text-muted-foreground/50 font-mono text-right pr-3 leading-relaxed">
                {i + 1}
              </span>
            ))}
          </div>
          
          {/* Code content */}
          <div className="pl-10">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
              {text.split('\n').map((line, i) => (
                <div key={i} className="text-foreground hover:bg-accent/5 -mx-2 px-2 rounded transition-colors">
                  {line || ' '}
                </div>
              ))}
            </pre>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
      </div>
    </div>
  );
};
