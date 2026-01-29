import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { PromptModule } from "@/data/prompt-engineering-modules";
import { cn } from "@/lib/utils";

interface PromptModuleCardProps {
  module: PromptModule;
  index: number;
}

export const PromptModuleCard = ({ module, index }: PromptModuleCardProps) => {
  const Icon = module.icon;
  
  return (
    <Link
      to={`/prompt/${module.slug}`}
      className={cn(
        "group relative flex flex-col p-6 rounded-xl border border-border",
        "bg-card hover:bg-accent/5 transition-all duration-300",
        "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Module number */}
      <span className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/20 font-mono">
        P{module.id}
      </span>
      
      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        "bg-accent/10 border border-accent/20 transition-colors duration-300",
        "group-hover:bg-accent/20"
      )}>
        <Icon className="w-6 h-6 text-accent" />
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
            <span className="text-xs text-accent">
              {module.estimatedSteps} step
            </span>
          )}
        </div>
        
        <ArrowRight className={cn(
          "w-4 h-4 text-muted-foreground transition-all duration-300",
          "group-hover:text-accent group-hover:translate-x-1"
        )} />
      </div>
      
      {/* Left accent bar */}
      <div className={cn(
        "absolute left-0 top-6 bottom-6 w-1 rounded-full",
        "bg-accent/50 group-hover:bg-accent transition-colors"
      )} />
    </Link>
  );
};
