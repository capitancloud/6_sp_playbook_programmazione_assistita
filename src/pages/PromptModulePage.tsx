import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getPromptModuleBySlug } from "@/data/prompt-engineering-modules";
import { fondamentaSteps } from "@/data/prompt-content/fondamenta";
import { generazioneCodiceSteps } from "@/data/prompt-content/generazione-codice";
import { debuggingSteps } from "@/data/prompt-content/debugging";
import { refactoringSteps } from "@/data/prompt-content/refactoring";
import { comprensioneCodiceSteps } from "@/data/prompt-content/comprensione-codice";
import { PromptStepCard } from "@/components/prompt/PromptStepCard";
import { BookOpen, Wand2, Target, Zap } from "lucide-react";
const PromptModulePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const module = slug ? getPromptModuleBySlug(slug) : undefined;

  if (!module) {
    return <Navigate to="/" replace />;
  }

  const Icon = module.icon;

  // Get steps for this module
  const getStepsForModule = (moduleSlug: string) => {
    switch (moduleSlug) {
      case "fondamenta":
        return fondamentaSteps;
      case "generazione-codice":
        return generazioneCodiceSteps;
      case "debugging":
        return debuggingSteps;
      case "refactoring":
        return refactoringSteps;
      case "comprensione-codice":
        return comprensioneCodiceSteps;
      default:
        return null;
    }
  };

  const steps = slug ? getStepsForModule(slug) : null;
  const hasContent = steps !== null;

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="relative py-12 px-8 border-b border-border overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="prompt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-accent"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#prompt-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Wand2 className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Prompt Engineering</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Modulo P{module.id}</span>
          </div>

          {/* Title section */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {module.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                {module.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content area */}
      <div className="p-6 md:p-8">
        {hasContent && steps ? (
          <div className="max-w-4xl mx-auto">
            {/* Intro card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 border border-accent/20 mb-10"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {slug === "fondamenta" ? "Tecniche di Prompting" : 
                       slug === "generazione-codice" ? "Tecniche Avanzate" :
                       slug === "debugging" ? "Tecniche di Debug" :
                       slug === "refactoring" ? "Tecniche di Refactoring" :
                       "Tecniche di Comprensione"}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {steps.length} {slug === "fondamenta" ? "Tecniche Fondamentali" : 
                                       slug === "generazione-codice" ? "Tecniche di Generazione" :
                                       slug === "debugging" ? "Tecniche di Debugging" :
                                       slug === "refactoring" ? "Tecniche di Refactoring" :
                                       "Tecniche di Comprensione"}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {slug === "fondamenta" 
                    ? "Queste tecniche servono a evitare codice confuso, risposte vaghe e soluzioni inutilizzabili. Qui stai insegnando all'AI in che contesto tecnico esiste e come deve ragionare."
                    : slug === "generazione-codice"
                    ? "Qui non stai più solo \"chiedendo codice\". Qui dirigi attivamente come il codice deve nascere, passo dopo passo, come farebbe uno sviluppatore esperto."
                    : slug === "debugging"
                    ? "In questo livello l'AI non serve a \"scrivere codice\", ma a ragionare sul codice che esiste già. L'obiettivo è individuare errori, capirne le cause e correggerli senza distruggere tutto."
                    : slug === "refactoring"
                    ? "In questo livello l'obiettivo non è aggiungere funzionalità, ma migliorare ciò che già esiste: leggibilità, struttura, performance, scalabilità."
                    : "In questo livello l'AI non serve più a scrivere o correggere codice, ma a capire codice. È il livello chiave per studio, onboarding, code review e insegnamento."
                  }
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">{steps.length}</span>
                      <span className="text-sm text-muted-foreground ml-1">tecniche</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">~10</span>
                      <span className="text-sm text-muted-foreground ml-1">min lettura</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-foreground">Copiabili</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <PromptStepCard key={step.id} step={step} index={index} />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-accent/20 text-center"
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Tecniche pronte all'uso! 🚀
              </h4>
              <p className="text-sm text-muted-foreground">
                Copia i prompt e adattali al tuo contesto specifico.
              </p>
            </motion.div>
          </div>
        ) : (
          // Placeholder content for other modules
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-card to-accent/5 border border-accent/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Contenuti in preparazione
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I contenuti dettagliati di questo modulo sono in fase di sviluppo. 
                Torna presto per trovare tecniche pratiche di prompt engineering, 
                esempi e guide interattive.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptModulePage;
