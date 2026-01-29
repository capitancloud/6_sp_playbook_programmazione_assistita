import { Step } from "./mentalita";
import { 
  MessageSquare, 
  Target, 
  FileInput, 
  FileOutput, 
  AlertTriangle, 
  Lock, 
  HelpCircle, 
  Ban, 
  Gauge, 
  StopCircle 
} from "lucide-react";

export const chiarezzaSteps: Step[] = [
  {
    id: 1,
    number: 1,
    icon: MessageSquare,
    title: "Problema espresso in una frase",
    subtitle: "Prima di qualsiasi prompt",
    description: `Prima di qualsiasi prompt o riga di codice, scrivi una frase che inizi con "Devo risolvere il problema di…". Questo semplice esercizio ti obbliga a nominare il problema, non la soluzione. Impedisce all'AI di guidare la direzione e se il problema cambia, te ne accorgi subito.`,
    why: "Ti obbliga a nominare il problema, non la soluzione. Impedisce all'AI di guidare la direzione. Se il problema cambia, te ne accorgi subito.",
    implementation: [
      "Apri un file di note o il tuo editor preferito",
      "Scrivi: 'Devo risolvere il problema di...'",
      "Completa la frase in modo semplice e diretto",
      "Se non riesci, fermati e rifletti sul problema"
    ],
    codeExample: {
      code: `// ❌ Approccio sbagliato - partire dalla soluzione
"Voglio usare regex per validare le email"

// ✅ Approccio corretto - partire dal problema
"Devo risolvere il problema di validare input utente 
evitando crash e comportamenti indefiniti."

// La differenza?
// - Il primo ti vincola a una soluzione specifica
// - Il secondo lascia spazio a soluzioni migliori`,
      language: "typescript",
      filename: "problem-first.md"
    },
    rule: {
      text: "Se non riesci a scrivere questa frase in modo semplice, non hai ancora capito il problema.",
      warning: true
    },
    keyPoints: [
      "Il problema viene prima della soluzione",
      "Una frase semplice rivela quanto hai capito",
      "L'AI non deve guidare la direzione"
    ]
  },
  {
    id: 2,
    number: 2,
    icon: Target,
    title: "Obiettivo tecnico esplicito",
    subtitle: "Definisci quando hai finito",
    description: `Subito dopo aver definito il problema, scrivi cosa significa "finito" in modo osservabile. Usa il formato: "È finito quando…". Questo diventa il tuo criterio di accettazione, il filtro contro lo scope creep e il metro di giudizio per le proposte dell'AI.`,
    why: "Senza un criterio chiaro di completamento, rischi di lavorare all'infinito o di accettare soluzioni incomplete.",
    implementation: [
      "Scrivi 'È finito quando...'",
      "Descrivi comportamenti osservabili, non sensazioni",
      "Assicurati che sia verificabile oggettivamente",
      "Usa questo come metro per ogni decisione"
    ],
    comparison: {
      wrong: [
        "\"Voglio che funzioni bene\"",
        "\"Deve essere robusto\"",
        "\"Tipo quello che fa la libreria X\"",
        "\"Quando mi sembra ok\""
      ],
      correct: [
        "\"È finito quando input validi passano\"",
        "\"È finito quando input invalidi generano errore gestito\"",
        "\"È finito quando i 5 test case passano\"",
        "\"È finito quando il tempo di risposta è < 100ms\""
      ]
    },
    rule: {
      text: "Se non puoi dire chiaramente quando fermarti, non ti fermerai.",
      warning: true
    },
    keyPoints: [
      "L'obiettivo deve essere misurabile",
      "Comportamenti osservabili, non vaghi",
      "Protegge dallo scope creep"
    ]
  },
  {
    id: 3,
    number: 3,
    icon: FileInput,
    title: "Input chiaramente definiti",
    subtitle: "Spiega come a un junior",
    description: `Prima del codice, elenca gli input come se dovessi spiegarli a un junior developer. Per ogni input specifica tipo, formato e limiti. L'AI tende a inventare assunzioni sugli input. Tu le rendi esplicite prima che succeda.`,
    why: "L'AI tende a inventare assunzioni sugli input. Tu le rendi esplicite prima che succeda.",
    implementation: [
      "Elenca ogni input della funzione/componente",
      "Specifica il tipo (stringa, numero, oggetto...)",
      "Definisci il formato (email, ISO date, JSON...)",
      "Indica i limiti (max length, range, nullable...)"
    ],
    codeExample: {
      code: `// Template per definire gli input
interface InputDefinition {
  name: string;
  type: string;
  format?: string;
  constraints: string[];
  nullable: boolean;
  example: any;
}

// Esempio pratico
const inputs: InputDefinition[] = [
  {
    name: "email",
    type: "string",
    format: "RFC 5322 email",
    constraints: ["max 255 caratteri", "lowercase"],
    nullable: false,
    example: "user@example.com"
  },
  {
    name: "age", 
    type: "integer",
    constraints: ["range 0-120", "no decimali"],
    nullable: true,
    example: 25
  }
];`,
      language: "typescript",
      filename: "input-definition.ts"
    },
    rule: {
      text: "Ogni input non definito è una fonte di bug futuri."
    },
    keyPoints: [
      "Tipo + formato + limiti per ogni input",
      "Previeni assunzioni implicite dell'AI",
      "Documenta casi limite già qui"
    ]
  },
  {
    id: 4,
    number: 4,
    icon: FileOutput,
    title: "Output atteso senza ambiguità",
    subtitle: "Comportamento, non solo tipo",
    description: `Descrivi l'output come comportamento, non come tipo. Non basta dire "ritorna un boolean". Specifica quando ritorna true vs false, se può lanciare eccezioni (e quali), eventuali side effect (logging, modifiche stato, notifiche) e la struttura esatta dei dati ritornati.`,
    why: "Se l'output non è chiaro, ogni soluzione dell'AI sarà 'quasi giusta' ma mai completamente corretta.",
    implementation: [
      "Descrivi il valore di ritorno con significato semantico",
      "Elenca tutti i possibili errori/eccezioni",
      "Documenta ogni side effect (log, DB, cache)",
      "Specifica il comportamento asincrono se presente"
    ],
    checklist: {
      title: "Checklist Output Completo",
      items: [
        "Valore di ritorno specificato (tipo + significato)",
        "Casi di errore e relative eccezioni definiti",
        "Side effect elencati (log, DB, cache, eventi)",
        "Modifiche di stato documentate",
        "Formato dati di risposta con esempio",
        "Comportamento asincrono chiarito (Promise, callback)"
      ]
    },
    rule: {
      text: "Se l'output non è chiaro, ogni soluzione dell'AI sarà 'quasi giusta'.",
      warning: true
    },
    keyPoints: [
      "Output = comportamento, non solo tipo",
      "Side effect sempre documentati",
      "Errori e eccezioni previsti"
    ]
  },
  {
    id: 5,
    number: 5,
    icon: AlertTriangle,
    title: "Casi limite individuati",
    subtitle: "I bug vivono ai margini",
    description: `Scrivi almeno tre casi problematici prima di iniziare a codificare. L'AI spesso ottimizza per il caso medio, ma i bug reali vivono ai margini. Pensa a valori null/undefined, stringhe vuote, valori al limite e formati validi ma semanticamente sbagliati.`,
    why: "L'AI spesso ottimizza per il caso medio, ma i bug reali vivono ai margini del dominio.",
    implementation: [
      "Elenca almeno 3 casi problematici",
      "Considera null, undefined, valori vuoti",
      "Pensa ai limiti (0, max, overflow)",
      "Includi formati validi ma semanticamente sbagliati"
    ],
    keyPoints: [
      "Input null, undefined, o mancante",
      "Stringa vuota vs stringa con solo spazi",
      "Array vuoto vs array con un elemento",
      "Numero zero vs numero negativo",
      "Data valida nel passato lontano (1900) o futuro (2100)",
      "Unicode, emoji, caratteri speciali negli input testuali",
      "Formato corretto ma valore impossibile (32 gennaio)"
    ],
    rule: {
      text: "Se non pensi ai casi limite prima, li scoprirai in produzione.",
      warning: true
    }
  },
  {
    id: 6,
    number: 6,
    icon: Lock,
    title: "Vincoli noti",
    subtitle: "Cosa non può cambiare",
    description: `Annota tutto ciò che non può essere cambiato nel tuo contesto. Questi vincoli guidano i prompt, evitano soluzioni inutilizzabili e riducono la frustrazione quando l'AI propone qualcosa di incompatibile con il tuo ambiente.`,
    why: "Un vincolo non dichiarato è un vincolo che verrà violato, con conseguente perdita di tempo.",
    implementation: [
      "Elenca linguaggi/framework obbligatori",
      "Specifica librerie vietate o preferite",
      "Indica requisiti di performance",
      "Documenta compatibilità legacy richiesta"
    ],
    comparison: {
      wrong: [
        "L'AI suggerisce Python ma devi usare Java",
        "Propone libreria X ma è vietata in azienda",
        "Soluzione richiede Node 20 ma sei su Node 16",
        "Performance 10x peggiore del requisito"
      ],
      correct: [
        "\"Linguaggio: TypeScript strict mode\"",
        "\"No dipendenze esterne, solo stdlib\"",
        "\"Deve girare su Node 16.x LTS\"",
        "\"Risposta < 50ms al 99° percentile\""
      ]
    },
    rule: {
      text: "Un vincolo non dichiarato è un vincolo violato."
    },
    keyPoints: [
      "Vincoli tecnici (linguaggio, versione, librerie)",
      "Vincoli di business (tempi, costi, compatibilità)",
      "Vincoli di performance (latenza, throughput)"
    ]
  },
  {
    id: 7,
    number: 7,
    icon: HelpCircle,
    title: "Assunzioni dichiarate",
    subtitle: "Cosa dai per scontato",
    description: `Scrivi esplicitamente cosa stai dando per scontato. Quando qualcosa non funziona, saprai dove guardare. Puoi anche chiedere all'AI di validare o sfidare le tue assunzioni.`,
    why: "Le assunzioni non dichiarate sono bug in attesa. Quando qualcosa fallisce, non saprai dove cercare.",
    implementation: [
      "Elenca cosa dai per scontato sugli input",
      "Documenta assunzioni sull'ambiente (DB, rete, auth)",
      "Specifica assunzioni sul contesto (single/multi thread)",
      "Chiedi all'AI di sfidare le tue assunzioni"
    ],
    codeExample: {
      code: `/* ASSUNZIONI PER QUESTA IMPLEMENTAZIONE
 * ========================================
 * 
 * 1. L'input arriva già sanitizzato dal middleware
 *    → Se falso: aggiungere validazione in entrata
 * 
 * 2. Il database è sempre disponibile
 *    → Se falso: implementare retry logic
 * 
 * 3. Il contesto è single-thread
 *    → Se falso: aggiungere locking
 * 
 * 4. La connessione di rete è stabile
 *    → Se falso: implementare timeout e fallback
 * 
 * 5. L'utente è già autenticato
 *    → Se falso: verificare token prima
 */

// Ogni assunzione errata = bug nascosto
// Dichiararle = poterle verificare`,
      language: "typescript",
      filename: "assumptions.ts"
    },
    rule: {
      text: "Le assunzioni non dichiarate sono bug in attesa."
    },
    keyPoints: [
      "Ogni assunzione può essere sbagliata",
      "Documentarle permette di verificarle",
      "L'AI può aiutarti a sfidarle"
    ]
  },
  {
    id: 8,
    number: 8,
    icon: Ban,
    title: "Cosa NON va fatto",
    subtitle: "Esclusioni esplicite",
    description: `Scrivi una mini-lista di esclusioni esplicite. Questo ti protegge dallo scope creep, ti permette di dire "no" anche all'AI quando propone feature extra, e mantiene la sessione focalizzata sull'obiettivo.`,
    why: "Decidere cosa NON fare è più importante che decidere cosa fare. Protegge il focus della sessione.",
    implementation: [
      "Elenca cosa NON farai in questa iterazione",
      "Includi ottimizzazioni premature da evitare",
      "Specifica feature extra da rimandare",
      "Usa questa lista per dire 'no' all'AI"
    ],
    checklist: {
      title: "Template Esclusioni",
      items: [
        "Niente UI in questa iterazione",
        "Niente ottimizzazioni performance premature",
        "Niente supporto a formati extra non richiesti",
        "Niente refactoring di codice esistente",
        "Niente gestione di casi che non sono nei requisiti",
        "Niente documentazione estesa (solo commenti essenziali)"
      ]
    },
    rule: {
      text: "Decidere cosa NON fare è più importante che decidere cosa fare.",
      warning: true
    },
    keyPoints: [
      "Protegge dallo scope creep",
      "Permette di dire 'no' all'AI",
      "Mantiene il focus sull'obiettivo"
    ]
  },
  {
    id: 9,
    number: 9,
    icon: Gauge,
    title: "Livello di qualità accettabile",
    subtitle: "Prototipo, produzione o esperimento?",
    description: `Scegli esplicitamente uno di questi livelli prima di iniziare: prototipo (funziona per la demo), produzione (test completi, documentato) o esperimento (esplorativo, può fallire). Ogni livello implica quantità di test, pulizia e rigidità delle regole diverse.`,
    why: "Trattare un prototipo come produzione causa overengineering. Trattare produzione come prototipo causa disastri.",
    implementation: [
      "Scegli: 🧪 Prototipo, 🚀 Produzione, o 🔬 Esperimento",
      "Adatta il livello di test al tipo scelto",
      "Adatta il livello di documentazione",
      "Comunica la scelta all'AI nel prompt"
    ],
    comparison: {
      wrong: [
        "Tratti un prototipo come produzione → overengineering",
        "Tratti produzione come prototipo → bug in prod",
        "Aggiungi test a un esperimento → perdi tempo",
        "Niente test in produzione → disastro annunciato"
      ],
      correct: [
        "\"Questo è un prototipo, no test, codice minimal\"",
        "\"Produzione: test unitari, error handling completo\"",
        "\"Esperimento: voglio capire se l'approccio funziona\"",
        "\"MVP: funzionalità base, refactor dopo validazione\""
      ]
    },
    rule: {
      text: "Se non scegli il livello, lo sceglierà l'ansia."
    },
    keyPoints: [
      "Prototipo ≠ produzione ≠ esperimento",
      "Ogni livello ha regole diverse",
      "Scegliere prima evita confusione"
    ]
  },
  {
    id: 10,
    number: 10,
    icon: StopCircle,
    title: "Punto di stop definito",
    subtitle: "Quando la sessione finisce",
    description: `Decidi prima di iniziare quando la sessione finisce e cosa deve essere vero per fermarti. Questo previene l'over-engineering, ti protegge dalla spirale di prompt infiniti e rende il lavoro sostenibile.`,
    why: "Una sessione senza punto di stop è una sessione che divora tempo. L'over-engineering nasce dal non saper fermarsi.",
    implementation: [
      "Definisci criteri di completamento oggettivi",
      "Imposta un limite di tempo o di iterazioni",
      "Scrivi cosa deve essere vero per fermarti",
      "Rispetta il punto di stop anche se 'potresti migliorare'"
    ],
    codeExample: {
      code: `// DEFINIZIONE PUNTO DI STOP
// ==========================

// ✅ Criteri di completamento:
const stopCriteria = {
  tests: [
    "Input valido → ritorna risultato corretto",
    "Input nullo → ritorna errore specifico", 
    "Input malformato → ritorna errore di validazione"
  ],
  
  maxIterations: 5, // prompt massimi per questa feature
  
  timeBox: "45 minuti", // tempo massimo sessione
  
  definition: \`
    Mi fermo quando:
    1. I 3 test manuali passano
    2. Il codice compila senza warning
    3. Ho committato con messaggio chiaro
  \`
};

// Se raggiungi uno di questi → FERMATI
// Anche se "potresti migliorare ancora un po'"`,
      language: "typescript",
      filename: "stop-criteria.ts"
    },
    rule: {
      text: "Una sessione senza punto di stop è una sessione che divora tempo.",
      warning: true
    },
    keyPoints: [
      "Criteri oggettivi, non sensazioni",
      "Tempo e iterazioni limitati",
      "Rispetta lo stop anche se vuoi continuare"
    ]
  }
];
