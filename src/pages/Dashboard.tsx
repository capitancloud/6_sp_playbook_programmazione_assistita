import { modules } from "@/data/modules";
import { promptEngineeringModules } from "@/data/prompt-engineering-modules";
import { ModuleCard } from "@/components/ModuleCard";
import { PromptModuleCard } from "@/components/PromptModuleCard";
import { BookOpen, Zap, Target, Wand2 } from "lucide-react";

const Dashboard = () => {
  const totalMethodSteps = modules.reduce((acc, m) => acc + m.estimatedSteps, 0);
  const totalPromptSteps = promptEngineeringModules.reduce((acc, m) => acc + m.estimatedSteps, 0);
  const totalSteps = totalMethodSteps + totalPromptSteps;
  const totalModules = modules.length + promptEngineeringModules.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative py-16 px-8 border-b border-border overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-glow opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-primary animate-fade-in">
              🇮🇹 Prima Piattaforma in Italia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-in">
            Programmazione Assistita
            <span className="text-gradient block">dall'AI</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-primary mb-6 animate-fade-in uppercase tracking-wide" style={{ animationDelay: "50ms" }}>
            🚀 La piattaforma pratica per diventare un super programmatore!
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <strong className="text-foreground">75 tecniche operative pronte all'uso.</strong> Niente teoria astratta: 
            solo prompt reali, strutture collaudate e metodi che funzionano davvero.
          </p>
          
          <p className="text-base text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
            Il primo playbook interattivo italiano per chi vuole programmare con l'AI 
            in modo <span className="text-primary font-semibold">professionale</span>, 
            <span className="text-primary font-semibold"> efficace</span> e 
            <span className="text-primary font-semibold"> senza perdere tempo</span>.
            Copia, adatta, usa. Subito.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Target className="w-4 h-4 text-foreground" />
              </div>
              <div>
                <span className="font-semibold text-foreground">{totalModules}</span>
                <span className="text-muted-foreground ml-1">moduli</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Zap className="w-4 h-4 text-foreground" />
              </div>
              <div>
                <span className="font-semibold text-foreground">{totalSteps}</span>
                <span className="text-muted-foreground ml-1">step totali</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modules Grid */}
      <section className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            I 10 Moduli
          </h2>
          <p className="text-sm text-muted-foreground">
            Esplora ogni modulo in modo indipendente. Non è richiesto un percorso lineare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </section>

      {/* Prompt Engineering Section */}
      <section className="p-8 border-t border-border">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Tecniche di Prompt Engineering
            </h2>
          </div>
          <p className="text-sm text-muted-foreground ml-13">
            Tecniche avanzate per comunicare efficacemente con l'AI durante lo sviluppo software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promptEngineeringModules.map((module, index) => (
            <PromptModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </section>

      {/* Footer hint */}
      <footer className="p-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          Seleziona un modulo per iniziare. I contenuti dettagliati verranno aggiunti progressivamente.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
