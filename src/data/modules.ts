import { 
  Brain, 
  Settings, 
  FileText, 
  CheckSquare, 
  Code, 
  AlertTriangle, 
  TestTube, 
  Shield, 
  Archive, 
  TrendingUp,
  LucideIcon
} from "lucide-react";

export interface Module {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  status: "coming-soon" | "in-progress" | "complete";
  estimatedSteps: number;
}

export const modules: Module[] = [
  {
    id: 1,
    slug: "mentalita",
    title: "Mentalità della Programmazione Assistita dall'AI",
    shortTitle: "Mentalità",
    description: "Approccio mentale e filosofia operativa per lavorare efficacemente con l'AI.",
    icon: Brain,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 2,
    slug: "ambiente",
    title: "Preparazione dell'Ambiente",
    shortTitle: "Ambiente",
    description: "Setup tecnico e organizzazione dello spazio di lavoro ottimale.",
    icon: Settings,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 3,
    slug: "chiarezza",
    title: "Chiarezza Prima del Codice",
    shortTitle: "Chiarezza",
    description: "Definizione degli obiettivi e pianificazione prima di scrivere codice.",
    icon: FileText,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 4,
    slug: "best-practice",
    title: "Best Practice Operative",
    shortTitle: "Best Practice",
    description: "Pratiche consolidate per massimizzare l'efficacia del lavoro con AI.",
    icon: CheckSquare,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 5,
    slug: "flow-controllato",
    title: "Scrittura del Codice in Flow Controllato",
    shortTitle: "Flow Controllato",
    description: "Tecniche per mantenere controllo e qualità durante lo sviluppo.",
    icon: Code,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 6,
    slug: "errori",
    title: "Errori Comuni e Prevenzione",
    shortTitle: "Errori",
    description: "Identificazione e prevenzione degli errori più frequenti.",
    icon: AlertTriangle,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 7,
    slug: "test",
    title: "Test e Reality Check",
    shortTitle: "Test",
    description: "Verifica e validazione del codice prodotto con l'AI.",
    icon: TestTube,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 8,
    slug: "sicurezza",
    title: "Sicurezza",
    shortTitle: "Sicurezza",
    description: "Pratiche di sicurezza specifiche per lo sviluppo AI-assistito.",
    icon: Shield,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 9,
    slug: "consolidamento",
    title: "Consolidamento Post-Sessione",
    shortTitle: "Consolidamento",
    description: "Organizzazione e documentazione dopo le sessioni di lavoro.",
    icon: Archive,
    status: "coming-soon",
    estimatedSteps: 10,
  },
  {
    id: 10,
    slug: "evoluzione",
    title: "Evoluzione del Metodo",
    shortTitle: "Evoluzione",
    description: "Miglioramento continuo e adattamento del proprio metodo.",
    icon: TrendingUp,
    status: "coming-soon",
    estimatedSteps: 10,
  },
];

export const getModuleBySlug = (slug: string): Module | undefined => {
  return modules.find((m) => m.slug === slug);
};

export const getModuleById = (id: number): Module | undefined => {
  return modules.find((m) => m.id === id);
};
