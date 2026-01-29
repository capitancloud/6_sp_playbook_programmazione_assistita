import { 
  Settings, 
  UserCog, 
  GraduationCap, 
  Target, 
  Lock, 
  FileOutput, 
  Feather, 
  Minimize2, 
  Focus, 
  FileCode, 
  Ban,
  LucideIcon
} from "lucide-react";

export interface PromptStep {
  id: string;
  number: number;
  title: string;
  icon: LucideIcon;
  description: string;
  prompts: {
    text: string;
    label?: string;
  }[];
}

export const fondamentaSteps: PromptStep[] = [
  {
    id: "contesto-tecnico",
    number: 1,
    title: "Contesto tecnico esplicito (linguaggio, versione, ambiente)",
    icon: Settings,
    description: `L'AI non indovina il tuo stack. Se non specifichi linguaggio, versione ed ambiente, tenderà a usare soluzioni generiche o obsolete.

Questa tecnica serve a vincolare subito il contesto tecnico, come faresti con un collega.`,
    prompts: [
      {
        text: `Scrivi codice in Python 3.11, pensato per essere eseguito su Linux.

Il codice deve essere compatibile con ambienti virtualenv e non usare librerie esterne.`
      }
    ]
  },
  {
    id: "ruolo-tecnico",
    number: 2,
    title: "Assegnazione del ruolo tecnico all'AI",
    icon: UserCog,
    description: `Dire all'AI chi deve essere cambia drasticamente il tipo di risposta.

Un "programmatore senior" ragiona in modo diverso da un "tutor didattico".`,
    prompts: [
      {
        text: `Agisci come uno sviluppatore backend senior con esperienza in codice pulito e manutenibile.

Ragiona prima sulla struttura e poi scrivi il codice.`
      }
    ]
  },
  {
    id: "livello-utente",
    number: 3,
    title: "Dichiarazione del livello dell'utente",
    icon: GraduationCap,
    description: `Se non dichiari il tuo livello, l'AI oscilla tra spiegazioni banali e soluzioni troppo avanzate.

Questa tecnica serve a calibrare profondità e linguaggio.`,
    prompts: [
      {
        text: `Considera che sono un principiante: conosco le basi del linguaggio ma non pattern avanzati.

Evita soluzioni troppo complesse.`
      }
    ]
  },
  {
    id: "obiettivo-funzionale",
    number: 4,
    title: "Obiettivo funzionale chiaro (cosa deve fare il codice)",
    icon: Target,
    description: `L'AI lavora per obiettivi, non per intuizioni.

Qui devi essere estremamente concreto: cosa entra, cosa esce, cosa succede.`,
    prompts: [
      {
        text: `L'obiettivo del codice è:

dato un file di testo, contare quante volte appare ogni parola e stampare il risultato ordinato per frequenza.`
      }
    ]
  },
  {
    id: "vincoli-tecnici",
    number: 5,
    title: "Vincoli tecnici espliciti",
    icon: Lock,
    description: `I vincoli sono più importanti dell'obiettivo.

Senza vincoli, l'AI sceglie la strada più comoda, non quella giusta per il tuo contesto.`,
    prompts: [
      {
        text: `Vincoli:

- non usare librerie esterne
- evitare strutture dati complesse
- codice leggibile e facilmente modificabile`
      }
    ]
  },
  {
    id: "output-preciso",
    number: 6,
    title: "Richiesta di output preciso (solo codice, codice + spiegazione, diff)",
    icon: FileOutput,
    description: `Se non specifichi il formato dell'output, l'AI mescola spiegazioni, commenti e codice in modo caotico.

Questa tecnica serve a controllare il risultato finale.`,
    prompts: [
      {
        text: `Restituisci solo il codice finale, senza spiegazioni testuali.`,
        label: "Opzione 1"
      },
      {
        text: `Restituisci prima il codice e poi una breve spiegazione separata.`,
        label: "Opzione 2"
      }
    ]
  },
  {
    id: "semplicita-leggibilita",
    number: 7,
    title: "Prompt orientato alla semplicità e leggibilità",
    icon: Feather,
    description: `L'AI tende a "fare bella figura" con soluzioni complesse.

Qui stai dicendo esplicitamente: preferisco codice semplice a codice furbo.`,
    prompts: [
      {
        text: `Privilegia la semplicità e la leggibilità rispetto all'ottimizzazione.

Scrivi codice che potrei spiegare a un junior.`
      }
    ]
  },
  {
    id: "codice-minimale",
    number: 8,
    title: "Richiesta di codice minimale",
    icon: Minimize2,
    description: `Serve a evitare boilerplate inutile e overengineering.

Fondamentale quando stai studiando o prototipando.`,
    prompts: [
      {
        text: `Scrivi la soluzione più minimale possibile, evitando classi o astrazioni non necessarie.`
      }
    ]
  },
  {
    id: "un-problema-per-prompt",
    number: 9,
    title: "Un problema per prompt",
    icon: Focus,
    description: `Un errore classico è chiedere troppe cose insieme.

Questa tecnica forza l'AI a risolvere un solo problema alla volta, come nello sviluppo reale.`,
    prompts: [
      {
        text: `In questo prompt occupati solo della lettura del file.

Non implementare altre funzionalità.`
      }
    ]
  },
  {
    id: "pseudocodice-prima",
    number: 10,
    title: "Pseudocodice prima del codice",
    icon: FileCode,
    description: `Obbligare l'AI a scrivere pseudocodice riduce errori logici e migliora la struttura.

È una tecnica potentissima per codice corretto.`,
    prompts: [
      {
        text: `Prima scrivi lo pseudocodice ad alto livello.

Solo dopo converti lo pseudocodice in codice reale.`
      }
    ]
  },
  {
    id: "cosa-non-fare",
    number: 11,
    title: "Dichiarazione esplicita di cosa NON fare",
    icon: Ban,
    description: `Dire cosa evitare è spesso più efficace che dire cosa fare.

Questa tecnica previene deviazioni inutili.`,
    prompts: [
      {
        text: `Non usare programmazione orientata agli oggetti.

Non usare funzionalità avanzate del linguaggio.`
      }
    ]
  }
];
