import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileCode, Copy, Check } from "lucide-react";
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
      className={cn(
        "rounded-xl overflow-hidden border border-border",
        "bg-[hsl(220,20%,8%)]"
      )}
    >
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">{filename}</span>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-muted transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
            )}
          </button>
        </div>
      )}

      {/* Code content */}
      <div className="relative p-4 overflow-x-auto">
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at top left, hsl(var(--module-${moduleId}) / 0.3), transparent 60%)`
          }}
        />

        <pre className="relative z-10">
          <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre-wrap">
            {code}
          </code>
        </pre>
      </div>
    </motion.div>
  );
};
