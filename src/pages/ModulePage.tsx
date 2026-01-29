import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getModuleBySlug } from "@/data/modules";
import { mentalitaSteps } from "@/data/module-content/mentalita";
import { ModuleHeader } from "@/components/module/ModuleHeader";
import { StepContent } from "@/components/module/StepContent";
import { ModuleProgress } from "@/components/module/ModuleProgress";
import { FlowDiagram } from "@/components/module/FlowDiagram";
import { DiagramPlaceholder } from "@/components/module/DiagramPlaceholder";
import { AnimationPlaceholder } from "@/components/module/AnimationPlaceholder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, GitBranch, Play, Lightbulb, BookOpen } from "lucide-react";

// Flow diagram data for module 1
const intentionalModeFlow = {
  title: "Flusso: Entrare in Modalità Intenzionale",
  nodes: [
    { id: "1", type: "start" as const, text: "Inizio sessione" },
    { id: "2", type: "action" as const, text: "Apri SESSION.md" },
    { id: "3", type: "action" as const, text: "Scrivi obiettivo in UNA frase" },
    { id: "4", type: "decision" as const, text: "Riesci a scriverla?" },
    { id: "5", type: "end" as const, text: "Inizia a lavorare" },
  ]
};

const cycleFlow = {
  title: "Flusso: Ciclo di Lavoro Controllato",
  nodes: [
    { id: "1", type: "start" as const, text: "Nuova richiesta AI" },
    { id: "2", type: "action" as const, text: "Ricevi risposta" },
    { id: "3", type: "action" as const, text: "Pausa 30-60 sec" },
    { id: "4", type: "action" as const, text: "Annota alternativa" },
    { id: "5", type: "decision" as const, text: "Capisco tutto?" },
    { id: "6", type: "end" as const, text: "Integra nel codice" },
  ]
};

const sessionCloseFlow = {
  title: "Flusso: Chiusura Sessione",
  nodes: [
    { id: "1", type: "start" as const, text: "Fine lavoro" },
    { id: "2", type: "action" as const, text: "Rivedi codice prodotto" },
    { id: "3", type: "decision" as const, text: "Sai spiegare tutto?" },
    { id: "4", type: "action" as const, text: "Scegli etichetta" },
    { id: "5", type: "end" as const, text: "Documenta e salva" },
  ]
};

const ModulePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const module = slug ? getModuleBySlug(slug) : undefined;

  if (!module) {
    return <Navigate to="/" replace />;
  }

  // Check if this module has content
  const hasContent = slug === "mentalita";
  const steps = hasContent ? mentalitaSteps : null;

  return (
    <div className="min-h-screen pb-12">
      <ModuleHeader module={module} />

      {/* Content area */}
      <div className="p-6 md:p-8">
        {hasContent ? (
          <div className="max-w-4xl">
            <Tabs defaultValue="steps">
              <TabsList className="mb-8 bg-muted/50 p-1">
                <TabsTrigger value="steps" className="gap-2 data-[state=active]:bg-background">
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Contenuto</span>
                </TabsTrigger>
                <TabsTrigger value="diagrams" className="gap-2 data-[state=active]:bg-background">
                  <GitBranch className="w-4 h-4" />
                  <span className="hidden sm:inline">Diagrammi</span>
                </TabsTrigger>
                <TabsTrigger value="quick" className="gap-2 data-[state=active]:bg-background">
                  <Lightbulb className="w-4 h-4" />
                  <span className="hidden sm:inline">Quick Reference</span>
                </TabsTrigger>
              </TabsList>

              {/* Steps Tab */}
              <TabsContent value="steps" className="space-y-6">
                {/* Progress widget */}
                <ModuleProgress
                  totalSteps={steps?.length || 0}
                  completedSteps={0}
                  moduleId={module.id}
                />

                {/* Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Implementazione pratica
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Questo modulo contiene 10 principi operativi per sviluppare la mentalità corretta 
                    quando lavori con l'AI. Ogni step include istruzioni pratiche, esempi concreti 
                    e regole da applicare subito.
                  </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-4">
                  {steps?.map((step, index) => (
                    <StepContent
                      key={step.id}
                      step={step}
                      moduleId={module.id}
                      isLast={index === steps.length - 1}
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Diagrams Tab */}
              <TabsContent value="diagrams" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Diagrammi Interattivi
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Visualizzazioni dei processi chiave del modulo.
                  </p>
                </motion.div>

                <div className="grid gap-6">
                  <FlowDiagram
                    title={intentionalModeFlow.title}
                    nodes={intentionalModeFlow.nodes}
                    moduleId={module.id}
                  />

                  <FlowDiagram
                    title={cycleFlow.title}
                    nodes={cycleFlow.nodes}
                    moduleId={module.id}
                  />

                  <FlowDiagram
                    title={sessionCloseFlow.title}
                    nodes={sessionCloseFlow.nodes}
                    moduleId={module.id}
                  />
                </div>
              </TabsContent>

              {/* Quick Reference Tab */}
              <TabsContent value="quick" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Quick Reference
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Le regole essenziali da tenere sempre a portata di mano.
                  </p>
                </motion.div>

                {/* Quick reference cards */}
                <div className="grid gap-4">
                  {steps?.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
                        style={{
                          backgroundColor: `hsl(var(--module-${module.id}) / 0.15)`,
                          color: `hsl(var(--module-${module.id}))`
                        }}
                      >
                        {step.id}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {step.rule.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          // Placeholder content for other modules
          <div className="max-w-4xl">
            <Tabs defaultValue="steps">
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
              </TabsList>

              <TabsContent value="steps" className="space-y-2">
                <div className="mb-6 p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-amber-200 text-sm">
                    I contenuti di questo modulo sono in preparazione. 
                    Torna presto per trovare step dettagliati, esempi e diagrammi interattivi.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="diagrams" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DiagramPlaceholder type="flow" moduleId={module.id} />
                  <DiagramPlaceholder type="decision" moduleId={module.id} />
                </div>
              </TabsContent>

              <TabsContent value="animations" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimationPlaceholder title="Concetto principale" moduleId={module.id} />
                  <AnimationPlaceholder title="Esempio pratico" moduleId={module.id} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
