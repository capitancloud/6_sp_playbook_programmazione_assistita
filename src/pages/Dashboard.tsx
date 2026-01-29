import { modules } from "@/data/modules";
import { promptEngineeringModules } from "@/data/prompt-engineering-modules";
import { ModuleCard } from "@/components/ModuleCard";
import { PromptModuleCard } from "@/components/PromptModuleCard";
import { BookOpen, Zap, Target, Wand2, Sparkles, Rocket } from "lucide-react";

const Dashboard = () => {
  const totalMethodSteps = modules.reduce((acc, m) => acc + m.estimatedSteps, 0);
  const totalPromptSteps = promptEngineeringModules.reduce((acc, m) => acc + m.estimatedSteps, 0);
  const totalSteps = totalMethodSteps + totalPromptSteps;
  const totalModules = modules.length + promptEngineeringModules.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative py-20 px-8 border-b border-border overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-glow opacity-40" />
        
        {/* Animated particles/grid */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary"
                />
              </pattern>
              <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-40 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm animate-fade-in">
            <span className="text-lg">🇮🇹</span>
            <span className="text-sm font-semibold text-primary tracking-wide">
              Prima Piattaforma in Italia
            </span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 animate-fade-in leading-tight">
            Programmazione Assistita
            <span className="text-gradient block">dall'AI</span>
          </h1>

          {/* Hero CTA line with special styling */}
          <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl" />
              <p className="relative flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider">
                <Rocket className="w-8 h-8 text-primary animate-bounce" />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  La piattaforma pratica per diventare un super programmatore!
                </span>
              </p>
            </div>
          </div>

          {/* Feature highlight box */}
          <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                Cosa trovi
              </span>
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <strong className="text-primary text-2xl">{totalSteps}</strong> tecniche operative pronte all'uso. 
              <span className="text-muted-foreground"> Niente teoria astratta: solo prompt reali, strutture collaudate e metodi che funzionano davvero.</span>
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "200ms" }}>
            Il primo playbook interattivo italiano per chi vuole programmare con l'AI 
            in modo <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold">professionale</span>, 
            <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold mx-1">efficace</span> e 
            <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold">senza perdere tempo</span>.
            <br /><strong className="text-foreground">Copia, adatta, usa. Subito.</strong>
          </p>

          {/* Stats cards */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "250ms" }}>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105 cursor-default">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">{totalModules}</span>
                <span className="text-sm text-muted-foreground ml-2">moduli</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105 cursor-default">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">{totalSteps}</span>
                <span className="text-sm text-muted-foreground ml-2">tecniche</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:scale-105 cursor-default">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">100%</span>
                <span className="text-sm text-muted-foreground ml-2">copiabili</span>
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
