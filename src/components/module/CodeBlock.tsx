import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileCode, Copy, Check, Terminal } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  moduleId?: number;
}

export const CodeBlock = ({ code, language = "text", filename, moduleId = 1 }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden border-2 border-border/50 bg-[hsl(220,25%,6%)] shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border/30 bg-gradient-to-r from-muted/20 to-transparent">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          
          {filename && (
            <div className="flex items-center gap-2 ml-3 pl-3 border-l border-border/30">
              <FileCode className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground">{filename}</span>
            </div>
          )}
        </div>
        
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
            copied 
              ? "bg-green-500/20 text-green-400" 
              : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          )}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copiato!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copia
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative p-5 overflow-x-auto">
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, hsl(var(--module-${moduleId}) / 0.3), transparent 50%)`
          }}
        />

        {/* Line numbers + code */}
        <div className="relative z-10 flex">
          {/* Line numbers */}
          <div className="pr-4 border-r border-border/20 mr-4 select-none">
            {code.split('\n').map((_, i) => (
              <div key={i} className="text-xs font-mono text-muted-foreground/40 leading-6">
                {i + 1}
              </div>
            ))}
          </div>
          
          {/* Code */}
          <pre className="flex-1">
            <code className="text-sm font-mono text-cyan-100 leading-6 whitespace-pre-wrap">
              {code}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};
