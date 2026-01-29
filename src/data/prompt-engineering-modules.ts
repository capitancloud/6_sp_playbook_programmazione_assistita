import { 
  MessageSquare, 
  Code2, 
  Bug, 
  Sparkles, 
  BookOpen, 
  Users,
  LucideIcon
} from "lucide-react";

export interface PromptModule {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  status: "coming-soon" | "in-progress" | "complete";
  estimatedSteps: number;
}

export const promptEngineeringModules: PromptModule[] = [
  {
    id: 1,
    slug: "fondamenta",
    title: "Fondamenta – Come parlare all'AI da programmatore",
    shortTitle: "Fondamenta",
    description: "Le basi essenziali per comunicare efficacemente con l'AI nel contesto dello sviluppo software.",
    icon: MessageSquare,
    status: "complete",
    estimatedSteps: 11,
  },
  {
    id: 2,
    slug: "generazione-codice",
    title: "Generazione di codice efficace",
    shortTitle: "Generazione Codice",
    description: "Tecniche per ottenere codice di qualità attraverso prompt mirati e strutturati.",
    icon: Code2,
    status: "complete",
    estimatedSteps: 13,
  },
  {
    id: 3,
    slug: "debugging",
    title: "Debugging e correzione",
    shortTitle: "Debugging",
    description: "Come utilizzare l'AI per identificare, analizzare e risolvere bug nel codice.",
    icon: Bug,
    status: "complete",
    estimatedSteps: 12,
  },
  {
    id: 4,
    slug: "refactoring",
    title: "Refactoring e qualità del codice",
    shortTitle: "Refactoring",
    description: "Strategie per migliorare la qualità del codice esistente con l'assistenza dell'AI.",
    icon: Sparkles,
    status: "complete",
    estimatedSteps: 14,
  },
  {
    id: 5,
    slug: "comprensione-codice",
    title: "Comprensione, spiegazione e lettura del codice",
    shortTitle: "Comprensione",
    description: "Usare l'AI per capire codice complesso, legacy o scritto da altri.",
    icon: BookOpen,
    status: "complete",
    estimatedSteps: 10,
  },
  {
    id: 6,
    slug: "pair-programming",
    title: "Programmare insieme all'AI",
    shortTitle: "Pair Programming",
    description: "Tecniche avanzate di collaborazione continua con l'AI durante lo sviluppo.",
    icon: Users,
    status: "complete",
    estimatedSteps: 15,
  },
];

export const getPromptModuleBySlug = (slug: string): PromptModule | undefined => {
  return promptEngineeringModules.find((m) => m.slug === slug);
};
