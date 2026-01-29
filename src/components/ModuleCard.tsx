import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { Module } from "@/data/modules";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  const Icon = module.icon;
  const moduleClass = `module-${module.id}`;
  
  return (
    <Link
      to={`/modulo/${module.slug}`}
      className={cn(
        "group relative flex flex-col p-6 rounded-xl border border-border",
        "bg-card hover:bg-secondary/50 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-glow",
        "opacity-0 animate-fade-in-up",
        moduleClass
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Module number */}
      <span className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/20 font-mono">
        {String(module.id).padStart(2, "0")}
      </span>
      
      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        "module-bg module-border border transition-colors duration-300",
        "group-hover:module-glow"
      )}>
        <Icon className="w-6 h-6 module-text" />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2 pr-8 leading-tight">
        {module.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {module.description}
      </p>
      
      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {module.status === "coming-soon" ? (
            <>
              <Lock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {module.estimatedSteps} step previsti
              </span>
            </>
          ) : (
            <span className="text-xs text-primary">
              {module.estimatedSteps} step
            </span>
          )}
        </div>
        
        <ArrowRight className={cn(
          "w-4 h-4 text-muted-foreground transition-all duration-300",
          "group-hover:text-primary group-hover:translate-x-1"
        )} />
      </div>
      
      {/* Left accent bar */}
      <div className={cn(
        "absolute left-0 top-6 bottom-6 w-1 rounded-full",
        "module-bg opacity-50 group-hover:opacity-100 transition-opacity"
      )} 
      style={{ backgroundColor: `hsl(var(--module-${module.id}))` }}
      />
    </Link>
  );
};
