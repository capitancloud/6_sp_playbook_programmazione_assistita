import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getModuleBySlug } from "@/data/modules";
import { mentalitaSteps } from "@/data/module-content/mentalita";
import { ambienteSteps } from "@/data/module-content/ambiente";
import { chiarezzaSteps } from "@/data/module-content/chiarezza";
import { bestPracticeSteps } from "@/data/module-content/best-practice";
import { flowControllatoSteps } from "@/data/module-content/flow-controllato";
import { erroriSteps } from "@/data/module-content/errori";
import { ModuleHeader } from "@/components/module/ModuleHeader";
import { StepContent } from "@/components/module/StepContent";
import { BookOpen, Sparkles, Target, Zap } from "lucide-react";

const ModulePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const module = slug ? getModuleBySlug(slug) : undefined;

  if (!module) {
    return <Navigate to="/" replace />;
  }

  // Check if this module has content
  const getStepsForModule = (moduleSlug: string) => {
    switch (moduleSlug) {
      case "mentalita":
        return mentalitaSteps;
      case "ambiente":
        return ambienteSteps;
      case "chiarezza":
        return chiarezzaSteps;
      case "best-practice":
        return bestPracticeSteps;
      case "flow-controllato":
        return flowControllatoSteps;
      case "errori":
        return erroriSteps;
      default:
        return null;
    }
  };
  
  const steps = slug ? getStepsForModule(slug) : null;
  const hasContent = steps !== null;

  return (
    <div className="min-h-screen pb-12">
      <ModuleHeader module={module} />

      {/* Content area */}
      <div className="p-6 md:p-8">
        {hasContent && steps ? (
          <div className="max-w-4xl mx-auto">
            {/* Hero intro card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 mb-10"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Implementazione Pratica
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      10 Principi Operativi
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  Questo modulo contiene i principi fondamentali per sviluppare la mentalità corretta 
                  quando lavori con l'AI. Ogni step include istruzioni pratiche, esempi concreti 
                  e regole da applicare immediatamente.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">{steps.length}</span>
                      <span className="text-sm text-muted-foreground ml-1">step</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">~15</span>
                      <span className="text-sm text-muted-foreground ml-1">min lettura</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">Interattivo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="space-y-5">
              {steps.map((step, index) => (
                <StepContent
                  key={step.id}
                  step={step}
                  moduleId={module.id}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center"
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Hai completato il modulo! 🎉
              </h4>
              <p className="text-sm text-muted-foreground">
                Applica questi principi nella tua prossima sessione di lavoro con l'AI.
              </p>
            </motion.div>
          </div>
        ) : (
          // Placeholder content for other modules
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Contenuti in preparazione
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I contenuti dettagliati di questo modulo sono in fase di sviluppo. 
                Torna presto per trovare step pratici, esempi e guide interattive.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
