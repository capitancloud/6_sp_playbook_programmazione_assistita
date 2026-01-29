import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Layers } from "lucide-react";
import { Module } from "@/data/modules";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ModuleHeaderProps {
  module: Module;
}

export const ModuleHeader = ({ module }: ModuleHeaderProps) => {
  const Icon = module.icon;

  return (
    <header
      className={cn(
        "relative py-12 px-8 border-b border-border",
        "bg-gradient-to-br from-card via-card to-muted/20",
        `module-${module.id}`
      )}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at top left, hsl(var(--module-${module.id}) / 0.3), transparent 60%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Back link */}
        <Link
          to="/"
          className={cn(
            "inline-flex items-center gap-2 text-sm text-muted-foreground",
            "hover:text-foreground transition-colors mb-6"
          )}
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla Dashboard
        </Link>

        {/* Module info */}
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div
            className={cn(
              "w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0",
              "module-bg module-border border shadow-lg"
            )}
            style={{
              boxShadow: `0 8px 32px hsl(var(--module-${module.id}) / 0.2)`,
            }}
          >
            <Icon
              className="w-8 h-8"
              style={{ color: `hsl(var(--module-${module.id}))` }}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono text-muted-foreground">
                Modulo {String(module.id).padStart(2, "0")}
              </span>
              <Badge variant="secondary" className="text-xs">
                {module.status === "coming-soon" ? "In preparazione" : module.status}
              </Badge>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {module.title}
            </h1>

            <p className="text-muted-foreground max-w-2xl">
              {module.description}
            </p>

            {/* Meta info */}
            <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{module.estimatedSteps} step</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>~15 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
