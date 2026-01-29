import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Menu, Wand2 } from "lucide-react";
import { modules } from "@/data/modules";
import { promptEngineeringModules } from "@/data/prompt-engineering-modules";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export const AppSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border",
        "flex flex-col transition-all duration-300 z-50",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sidebar-foreground text-sm">
              AI Programming
            </span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="px-2 space-y-1">
          {/* Home link */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
              "text-sidebar-foreground hover:bg-sidebar-accent",
              location.pathname === "/" && "bg-sidebar-accent text-sidebar-primary"
            )}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            {!isCollapsed && <span className="text-sm">Dashboard</span>}
          </Link>

          {/* Divider */}
          <div className="my-4 border-t border-sidebar-border" />

          {/* Section: Metodo */}
          {!isCollapsed && (
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Metodo
            </div>
          )}

          {/* Modules */}
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = location.pathname === `/modulo/${module.slug}`;

            return (
              <Link
                key={module.id}
                to={`/modulo/${module.slug}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                  "text-sidebar-foreground hover:bg-sidebar-accent group",
                  isActive && "bg-sidebar-accent"
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded flex items-center justify-center flex-shrink-0",
                    "transition-colors duration-200",
                    isActive ? "bg-primary/20" : "bg-transparent group-hover:bg-sidebar-accent"
                  )}
                  style={{
                    color: isActive ? `hsl(var(--module-${module.id}))` : undefined,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">
                        {String(module.id).padStart(2, "0")}
                      </span>
                      <span className={cn(
                        "text-sm truncate",
                        isActive && "text-foreground font-medium"
                      )}>
                        {module.shortTitle}
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="my-4 border-t border-sidebar-border" />

          {/* Section: Prompt Engineering */}
          {!isCollapsed && (
            <div className="px-3 py-2 flex items-center gap-2">
              <Wand2 className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Prompt Engineering
              </span>
            </div>
          )}
          {isCollapsed && (
            <div className="px-3 py-2 flex justify-center">
              <Wand2 className="w-4 h-4 text-accent" />
            </div>
          )}

          {/* Prompt Engineering Modules */}
          {promptEngineeringModules.map((module) => {
            const Icon = module.icon;
            const isActive = location.pathname === `/prompt/${module.slug}`;

            return (
              <Link
                key={`prompt-${module.id}`}
                to={`/prompt/${module.slug}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                  "text-sidebar-foreground hover:bg-sidebar-accent group",
                  isActive && "bg-sidebar-accent"
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded flex items-center justify-center flex-shrink-0",
                    "transition-colors duration-200",
                    isActive ? "bg-accent/20 text-accent" : "bg-transparent group-hover:bg-sidebar-accent"
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">
                        P{module.id}
                      </span>
                      <span className={cn(
                        "text-sm truncate",
                        isActive && "text-foreground font-medium"
                      )}>
                        {module.shortTitle}
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground text-center">
            Playbook Interattivo v1.0
          </p>
        </div>
      )}
    </aside>
  );
};
