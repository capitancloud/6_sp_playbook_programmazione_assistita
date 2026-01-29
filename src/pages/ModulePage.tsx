import { useParams, Navigate } from "react-router-dom";
import { getModuleBySlug } from "@/data/modules";
import { ModuleHeader } from "@/components/module/ModuleHeader";
import { StepPlaceholder } from "@/components/module/StepPlaceholder";
import { DiagramPlaceholder } from "@/components/module/DiagramPlaceholder";
import { AnimationPlaceholder } from "@/components/module/AnimationPlaceholder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, GitBranch, Play, Lightbulb } from "lucide-react";

const ModulePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const module = slug ? getModuleBySlug(slug) : undefined;

  if (!module) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <ModuleHeader module={module} />

      {/* Content area */}
      <div className="p-8">
        <Tabs defaultValue="steps" className="max-w-4xl">
          <TabsList className="mb-8 bg-muted/50">
            <TabsTrigger value="steps" className="gap-2">
              <FileText className="w-4 h-4" />
              Step
            </TabsTrigger>
            <TabsTrigger value="diagrams" className="gap-2">
              <GitBranch className="w-4 h-4" />
              Diagrammi
            </TabsTrigger>
            <TabsTrigger value="animations" className="gap-2">
              <Play className="w-4 h-4" />
              Animazioni
            </TabsTrigger>
            <TabsTrigger value="tips" className="gap-2">
              <Lightbulb className="w-4 h-4" />
              Tips
            </TabsTrigger>
          </TabsList>

          {/* Steps Tab */}
          <TabsContent value="steps" className="space-y-2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Percorso Guidato
              </h3>
              <p className="text-sm text-muted-foreground">
                {module.estimatedSteps} step per completare questo modulo.
              </p>
            </div>

            <div className="space-y-1">
              {[...Array(module.estimatedSteps)].map((_, i) => (
                <StepPlaceholder
                  key={i}
                  stepNumber={i + 1}
                  totalSteps={module.estimatedSteps}
                  moduleId={module.id}
                />
              ))}
            </div>
          </TabsContent>

          {/* Diagrams Tab */}
          <TabsContent value="diagrams" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Diagrammi Interattivi
              </h3>
              <p className="text-sm text-muted-foreground">
                Visualizzazioni del processo e schemi decisionali.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DiagramPlaceholder type="flow" moduleId={module.id} />
              <DiagramPlaceholder type="decision" moduleId={module.id} />
              <DiagramPlaceholder type="cycle" moduleId={module.id} />
              <DiagramPlaceholder type="process" moduleId={module.id} />
            </div>
          </TabsContent>

          {/* Animations Tab */}
          <TabsContent value="animations" className="space-y-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Animazioni Educative
              </h3>
              <p className="text-sm text-muted-foreground">
                Contenuti animati per comprendere i concetti chiave.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimationPlaceholder
                title="Concetto principale"
                moduleId={module.id}
              />
              <AnimationPlaceholder
                title="Esempio pratico"
                moduleId={module.id}
              />
              <AnimationPlaceholder
                title="Workflow visivo"
                moduleId={module.id}
              />
            </div>
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips" className="space-y-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Suggerimenti e Best Practice
              </h3>
              <p className="text-sm text-muted-foreground">
                Consigli rapidi da consultare durante il lavoro.
              </p>
            </div>

            {/* Tip cards placeholder */}
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border bg-card/50 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Tip #{i} - Contenuto in arrivo
                      </h4>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted/50 rounded w-full" />
                        <div className="h-3 bg-muted/30 rounded w-2/3" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ModulePage;
