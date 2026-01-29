export interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  implementation: string[];
  example?: {
    type: "code" | "comparison" | "checklist";
    content: any;
  };
  rule: {
    text: string;
    warning?: boolean;
  };
  keyPoints: string[];
}

export const mentalitaSteps: Step[] = [
  {
    id: 1,
    title: "Entrare in modalità intenzionale",
    subtitle: "Prima ancora di aprire l'editor",
    description: "Prima ancora di aprire VS Code, IntelliJ o qualunque editor, definisci chiaramente cosa vuoi ottenere.",
    implementation: [
      "Apri un file temporaneo (SESSION.md, notes.txt, un commento in cima al file)",
      "Scrivi una sola frase, secca, che descrive l'obiettivo"
    ],
    example: {
      type: "code",
      content: {
        language: "markdown",
        filename: "SESSION.md",
        code: "In questa sessione userò l'AI per aiutarmi a costruire una funzione di validazione input per X."
      }
    },
    rule: {
      text: "Se non riesci a scriverla in una riga, non sei pronto a chiedere nulla all'AI.",
      warning: true
    },
    keyPoints: [
      "Impedisce di usare l'AI \"a caso\"",
      "Ti obbliga a decidere chi guida",
      "Quando stai per divagare, rileggi quella riga"
    ]
  },
  {
    id: 2,
    title: "Separare creatività e improvvisazione",
    subtitle: "Non incollare mai subito",
    description: "Quando l'AI ti propone una soluzione, non incollarla subito. Fermati e pensa.",
    implementation: [
      "Non incollare la soluzione subito",
      "Fermati 30–60 secondi",
      "Scrivi a mano almeno un'alternativa possibile"
    ],
    example: {
      type: "comparison",
      content: {
        left: {
          label: "Soluzione AI",
          text: "Validazione tramite regex"
        },
        right: {
          label: "Alternativa annotata",
          text: "Parsing step-by-step + controlli espliciti"
        }
      }
    },
    rule: {
      text: "Se non riesci a pensare a un'alternativa, significa che stai già seguendo l'AI alla cieca.",
      warning: true
    },
    keyPoints: [
      "Non serve che l'alternativa sia migliore",
      "Il cervello resta attivo",
      "Non deleghi il pensiero architetturale"
    ]
  },
  {
    id: 3,
    title: "Definire l'obiettivo prima di iniziare",
    subtitle: "Frasi verificabili, non intenti vaghi",
    description: "Scrivi l'obiettivo come frase verificabile, non come intento vago.",
    implementation: [
      "Formula l'obiettivo in modo che sia testabile",
      "Verifica: riesci a dire 'funziona / non funziona' guardando il risultato?",
      "Se no, l'obiettivo è sbagliato"
    ],
    example: {
      type: "comparison",
      content: {
        left: {
          label: "❌ Sbagliato",
          items: ["gestire meglio gli errori", "rendere il codice più robusto"]
        },
        right: {
          label: "✓ Corretto",
          items: ["Quando passo un input non valido, la funzione ritorna errore X senza crash"]
        }
      }
    },
    rule: {
      text: "Questa frase diventa il tuo oracolo di verità durante tutta la sessione."
    },
    keyPoints: [
      "L'obiettivo deve essere verificabile",
      "Test mentale: funziona / non funziona?",
      "Diventa il tuo punto di riferimento"
    ]
  },
  {
    id: 4,
    title: "Accettare il codice imperfetto come bozza",
    subtitle: "Ogni output AI è una BOZZA",
    description: "Ogni primo output dell'AI va etichettato mentalmente come BOZZA. Ancora meglio: commentalo davvero nel codice.",
    implementation: [
      "Etichetta mentalmente ogni output come BOZZA",
      "Commentalo nel codice per renderlo esplicito",
      "Abbassa la soglia emotiva per il refactoring"
    ],
    example: {
      type: "code",
      content: {
        language: "python",
        filename: "validation.py",
        code: "# BOZZA: prima versione generata con AI\ndef validate_input(data):\n    # TODO: rivedere logica\n    pass"
      }
    },
    rule: {
      text: "Se inizi a \"proteggere\" il codice perché \"ormai funziona\", sei già fuori strada.",
      warning: true
    },
    keyPoints: [
      "Abbassa la soglia emotiva",
      "Smetti di difendere codice mediocre",
      "Rende naturale il refactor"
    ]
  },
  {
    id: 5,
    title: "Tenere sotto controllo l'ego tecnico",
    subtitle: "Saprei spiegarlo senza guardare l'AI?",
    description: "Per ogni blocco di codice AI, fatti questa domanda a voce: Saprei spiegarlo a qualcuno senza guardare l'AI?",
    implementation: [
      "Riscrivi una riga con parole tue",
      "Rinomina variabili finché il flusso è chiaro",
      "Chiedi all'AI spiegazioni prima di tenere il codice"
    ],
    example: {
      type: "checklist",
      content: {
        question: "Saprei spiegarlo a qualcuno senza guardare l'AI?",
        items: [
          { text: "Capisco ogni riga del codice", checked: false },
          { text: "Posso spiegare la logica a parole", checked: false },
          { text: "So perché è stata fatta questa scelta", checked: false }
        ]
      }
    },
    rule: {
      text: "Codice non spiegabile = codice non accettabile.",
      warning: true
    },
    keyPoints: [
      "Se la risposta è no, non è tuo codice",
      "Anche se l'hai incollato tu",
      "Chiedi spiegazioni prima di accettare"
    ]
  },
  {
    id: 6,
    title: "Lavorare per cicli brevi e verificabili",
    subtitle: "Micro-cicli, quasi banali",
    description: "Definisci cicli minuscoli, quasi banali. Ogni ciclo deve avere un output osservabile e poter fallire chiaramente.",
    implementation: [
      "Definisci cicli piccoli e verificabili",
      "Ogni ciclo ha un output osservabile",
      "Se un ciclo richiede più richieste complesse, è troppo grande"
    ],
    example: {
      type: "checklist",
      content: {
        title: "Esempio di cicli",
        items: [
          { text: "Ciclo 1: la funzione riceve input e non crasha", checked: true },
          { text: "Ciclo 2: gestisce input valido", checked: false },
          { text: "Ciclo 3: gestisce input invalido", checked: false }
        ]
      }
    },
    rule: {
      text: "Se un ciclo richiede più di una richiesta complessa all'AI, è troppo grande."
    },
    keyPoints: [
      "Cicli minuscoli, quasi banali",
      "Output osservabile",
      "Fallimento chiaro e identificabile"
    ]
  },
  {
    id: 7,
    title: "Riconoscere il momento giusto per fermarsi",
    subtitle: "Regola meccanica, non emotiva",
    description: "Regola meccanica: fai una richiesta, poi un chiarimento. Se la terza sarebbe solo riformulazione, fermati.",
    implementation: [
      "Prima richiesta all'AI",
      "Seconda richiesta di chiarimento",
      "Se la terza è solo riformulazione → STOP"
    ],
    example: {
      type: "checklist",
      content: {
        title: "Segnali di STOP",
        items: [
          { text: "Risposte sempre più verbose", checked: false },
          { text: "Piccoli miglioramenti marginali", checked: false },
          { text: "Stai \"spremendo\" l'AI", checked: false }
        ],
        warning: true
      }
    },
    rule: {
      text: "Fermarsi è parte del lavoro, non una sconfitta."
    },
    keyPoints: [
      "Salva quello che hai",
      "Chiudi e riprendi più tardi",
      "Fermarsi è parte del processo"
    ]
  },
  {
    id: 8,
    title: "Distinguere produttività da confusione",
    subtitle: "Obbligo di sintesi",
    description: "Prendi il codice e prova a scrivere tre frasi massimo: cosa fa, quando lo fa, cosa succede se qualcosa va storto.",
    implementation: [
      "Scrivi cosa fa il codice",
      "Scrivi quando lo fa",
      "Scrivi cosa succede se qualcosa va storto"
    ],
    example: {
      type: "checklist",
      content: {
        title: "Test di sintesi (max 3 frasi)",
        items: [
          { text: "Cosa fa?", checked: false },
          { text: "Quando lo fa?", checked: false },
          { text: "Cosa succede se qualcosa va storto?", checked: false }
        ]
      }
    },
    rule: {
      text: "Se non ci riesci, non è produttività: è accumulo di complessità.",
      warning: true
    },
    keyPoints: [
      "Smaschera il falso senso di velocità",
      "Tre frasi massimo",
      "Se non riesci, fermati e semplifica"
    ]
  },
  {
    id: 9,
    title: "Fidarsi del processo, non del risultato immediato",
    subtitle: "Anche se funziona, pianifica il prossimo step",
    description: "Anche se il codice funziona, scrivi comunque l'iterazione successiva prevista.",
    implementation: [
      "Anche se funziona, identifica cosa migliorare",
      "Scrivi: 'Iterazione successiva prevista: migliorare X'",
      "Può essere: leggibilità, gestione errori, test, sicurezza"
    ],
    example: {
      type: "code",
      content: {
        language: "markdown",
        filename: "TODO.md",
        code: "Iterazione successiva prevista: migliorare gestione errori edge case"
      }
    },
    rule: {
      text: "Questo trasforma il codice in processo evolutivo, non in prodotto finito."
    },
    keyPoints: [
      "Evita l'effetto 'finito troppo presto'",
      "Mantieni il controllo",
      "Codice come processo evolutivo"
    ]
  },
  {
    id: 10,
    title: "Chiudere ogni sessione in modo consapevole",
    subtitle: "Una sola etichetta: valido, da migliorare, da scartare",
    description: "A fine sessione, scegli una sola etichetta e scrivila davvero, non solo mentalmente.",
    implementation: [
      "Scegli UNA etichetta: valido / da migliorare / da scartare",
      "Scrivila nel codice o nelle note",
      "Aggiungi il motivo in breve"
    ],
    example: {
      type: "code",
      content: {
        language: "markdown",
        filename: "SESSION.md",
        code: "Stato sessione: da migliorare\nMotivo: mancano test su edge case"
      }
    },
    rule: {
      text: "Chiude il loop cognitivo e impedisce il 'ci torno poi' indefinito."
    },
    keyPoints: [
      "Chiude il loop cognitivo",
      "Impedisce procrastinazione indefinita",
      "Rende il lavoro tracciabile"
    ]
  }
];
