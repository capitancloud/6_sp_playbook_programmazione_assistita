import { 
  FolderOpen, 
  Keyboard, 
  Wrench, 
  BellOff, 
  Focus, 
  FolderTree, 
  GitBranch, 
  RotateCcw, 
  FileText, 
  Bomb
} from "lucide-react";
import { Step } from "./mentalita";

export const ambienteSteps: Step[] = [
  {
    id: "pulizia-editor",
    number: 1,
    title: "Pulizia dell'editor",
    subtitle: "Riduci il rumore visivo prima di iniziare",
    icon: FolderOpen,
    description: "L'editor è il tuo spazio di lavoro mentale. Ogni file aperto in più è un potenziale punto di distrazione e confusione. Prima di iniziare una sessione con l'AI, pulisci l'ambiente come puliresti una scrivania fisica prima di un lavoro importante.",
    why: "Il carico cognitivo è la risorsa più preziosa durante il coding assistito. Ogni tab aperta, ogni file visibile ma non rilevante, consuma una piccola parte della tua attenzione. Quando lavori con l'AI, hai bisogno di tutta la lucidità possibile per valutare criticamente le proposte. Un editor pulito significa una mente più libera di concentrarsi su ciò che conta: la qualità del codice che stai producendo insieme all'AI.",
    implementation: [
      "Prima di iniziare la sessione, chiudi TUTTI i file non direttamente collegati al task corrente",
      "Identifica i file essenziali: il file della funzione su cui lavori, eventuali test correlati, un file di appoggio per note",
      "Usa la funzione 'Close All' del tuo editor e riapri solo ciò che serve",
      "Considera di salvare una 'workspace configuration' specifica per sessioni AI-assisted",
      "Se usi split view, limita a massimo 2 pannelli: codice principale + test o note"
    ],
    codeExample: {
      language: "plaintext",
      filename: "workspace-setup.txt",
      code: `# File aperti per sessione AI-assisted
────────────────────────────────────

✓ APERTI (massimo 3-4):
  - src/validators/inputValidator.ts  ← file target
  - src/validators/inputValidator.test.ts  ← test correlati
  - SESSION.md  ← note sessione

✗ CHIUSI:
  - Tutti gli altri file del progetto
  - File di configurazione (a meno che non servano)
  - File "che potrebbero servire dopo"`
    },
    commonMistakes: [
      "Lasciare aperti file 'per riferimento' che poi non guardi mai durante la sessione",
      "Tenere aperte decine di tab 'perché potrebbero servire' creando un labirinto visivo",
      "Non chiudere file di sessioni precedenti, mescolando contesti diversi",
      "Aprire file durante la sessione 'al volo' senza chiudere quelli non più necessari"
    ],
    rule: {
      text: "Se un file non ti serve nei prossimi 20 minuti, va chiuso.",
      warning: false
    },
    keyPoints: [
      "L'editor pulito riduce il carico cognitivo e aumenta la concentrazione",
      "Mantieni aperti solo 3-4 file massimo: target, test, note",
      "L'AI lavora meglio quando anche tu hai un contesto mentale chiaro e definito",
      "Chiudi i file delle sessioni precedenti prima di iniziarne una nuova"
    ],
    checklist: {
      title: "Prima di iniziare, verifica:",
      items: [
        "Ho chiuso tutti i file non correlati al task",
        "Ho massimo 3-4 file aperti",
        "Il file principale è chiaramente identificabile",
        "Non ci sono residui di sessioni precedenti"
      ]
    }
  },
  {
    id: "shortcut-essenziali",
    number: 2,
    title: "Shortcut essenziali pronti",
    subtitle: "La velocità operativa non è un lusso",
    icon: Keyboard,
    description: "Le shortcut non sono comodità per power user. Sono strumenti di controllo. Ogni secondo perso a cercare un comando è un secondo in cui la tentazione di delegare all'AI cresce. La fluidità operativa ti mantiene al comando.",
    why: "Quando lavori con l'AI, la velocità con cui puoi verificare, navigare e modificare il codice determina chi guida la sessione. Se sei lento nelle operazioni base, l'AI prende il comando per inerzia: accetti le sue proposte perché verificarle richiederebbe troppo sforzo. Le shortcut non sono efficienza, sono potere decisionale.",
    implementation: [
      "Prima di scrivere una riga di codice, verifica di poter fare queste operazioni istantaneamente:",
      "Copia/incolla senza pensarci (Cmd/Ctrl + C/V)",
      "Ricerca globale nel progetto in meno di 1 secondo (Cmd/Ctrl + Shift + F)",
      "Split dell'editor per confrontare codice (Cmd/Ctrl + \\)",
      "Aprire/chiudere terminale integrato (Cmd/Ctrl + `)",
      "Andare alla definizione di una funzione (F12 o Cmd/Ctrl + Click)",
      "Se non conosci una shortcut essenziale, imparala PRIMA di iniziare la sessione"
    ],
    codeExample: {
      language: "plaintext",
      filename: "essential-shortcuts.md",
      code: `# Shortcut indispensabili per AI-assisted coding
──────────────────────────────────────────────

NAVIGAZIONE:
  Cmd/Ctrl + P         → Apri file rapidamente
  Cmd/Ctrl + Shift + F → Cerca nel progetto
  F12                  → Vai alla definizione
  Cmd/Ctrl + \\        → Split editor

EDITING:
  Cmd/Ctrl + D         → Seleziona occorrenza successiva
  Alt + ↑/↓            → Sposta riga su/giù
  Cmd/Ctrl + Shift + K → Elimina riga

TERMINALE:
  Cmd/Ctrl + \`        → Toggle terminale
  Cmd/Ctrl + Shift + \` → Nuovo terminale

⚠️ Se devi cercare "come si fa" durante la sessione,
   la preparazione è fallita.`
    },
    comparison: {
      wrong: [
        "Cercare nel menu come si fa lo split dell'editor",
        "Usare il mouse per copiare e incollare",
        "Aprire manualmente il terminale dalla barra dei menu",
        "Scrollare per trovare una funzione invece di usare 'Go to Definition'"
      ],
      correct: [
        "Cmd+\\ istantaneo per split view",
        "Cmd+C/V automatici, senza pensiero",
        "Cmd+` per terminale in mezzo secondo",
        "F12 per saltare alla definizione immediatamente"
      ]
    },
    commonMistakes: [
      "Pensare che le shortcut siano 'per dopo, quando avrò tempo'",
      "Usare il mouse per operazioni che hanno shortcut dedicate",
      "Non personalizzare shortcut che risultano scomode sulla propria tastiera",
      "Ignorare le shortcut specifiche dell'AI tool che stai usando"
    ],
    rule: {
      text: "Se durante la sessione perdi tempo a cercare 'come si fa', la preparazione è fallita.",
      warning: true
    },
    keyPoints: [
      "Ogni micro-frizione aumenta la tentazione di delegare troppo all'AI",
      "Più sei lento tu, più l'AI prende il comando della sessione",
      "Le shortcut non sono comfort, sono strumenti di controllo decisionale",
      "Impara le shortcut PRIMA della sessione, non durante"
    ]
  },
  {
    id: "tool-minimi",
    number: 3,
    title: "Tool minimi indispensabili",
    subtitle: "Meno strumenti, più focus",
    icon: Wrench,
    description: "Ogni applicazione aperta è una potenziale fonte di distrazione e context-switching. Prima di iniziare, definisci esplicitamente quali tool userai e chiudi tutto il resto. Non è minimalismo estetico, è igiene cognitiva.",
    why: "L'overload di strumenti genera confusione mentale. Quando hai troppe opzioni aperte, finisci per fare richieste all'AI che nascono dalla confusione, non dalla necessità. Un ambiente minimale ti costringe a pensare chiaramente a cosa ti serve davvero, e questo si riflette nella qualità delle tue interazioni con l'AI.",
    implementation: [
      "Decidi PRIMA della sessione quali tool userai, scrivendoli esplicitamente",
      "Tool tipici per una sessione: editor, terminale, browser (solo per documentazione)",
      "Chiudi o disattiva tutto il resto: client email, Slack, altre app",
      "Se un tool non ha uno scopo dichiarato per QUESTA sessione, non deve essere aperto",
      "Considera di usare una modalità focus del sistema operativo"
    ],
    codeExample: {
      language: "plaintext",
      filename: "SESSION.md",
      code: `# Tool attivi per questa sessione
─────────────────────────────────

APERTI (con scopo):
  ✓ VS Code      → editing codice
  ✓ Terminal     → run test, git
  ✓ Browser      → docs React Query

CHIUSI:
  ✗ Slack        → nessuno scopo
  ✗ Email        → nessuno scopo  
  ✗ Spotify      → distrazione
  ✗ Notion       → non serve ora

Se apro qualcos'altro → devo giustificarlo`
    },
    commonMistakes: [
      "Tenere Slack 'minimizzato ma attivo' pensando di non guardarlo",
      "Aprire il browser per documentazione e finire su social media",
      "Avere tool aperti 'nel caso servano' senza uno scopo specifico",
      "Non chiudere applicazioni che generano notifiche anche se silenziate"
    ],
    rule: {
      text: "Ogni tool aperto deve avere uno scopo dichiarato per questa sessione.",
      warning: false
    },
    keyPoints: [
      "Meno tool aperti = meno distrazioni e switching mentale",
      "L'overload di strumenti genera richieste confuse all'AI",
      "Dichiara esplicitamente lo scopo di ogni tool che tieni aperto",
      "Se non ha uno scopo per QUESTA sessione, chiudilo"
    ],
    checklist: {
      title: "Verifica tool attivi:",
      items: [
        "Ho solo editor, terminale e browser (docs) aperti",
        "Ogni tool ha uno scopo dichiarato",
        "App di comunicazione sono chiuse",
        "Nessuna app con notifiche attive"
      ]
    }
  },
  {
    id: "notifiche-disattivate",
    number: 4,
    title: "Notifiche disattivate",
    subtitle: "Il silenzio protegge la qualità decisionale",
    icon: BellOff,
    description: "Le notifiche non sono solo distrazioni: sono interruttori del pensiero critico. Quando stai valutando una proposta dell'AI e arriva una notifica, il rischio non è perdere tempo, è accettare codice mediocre senza averlo davvero valutato.",
    why: "Il momento più delicato del coding assistito è la valutazione delle proposte AI. Richiede concentrazione, analisi critica, confronto mentale con alternative. Una notifica in quel preciso momento interrompe questo processo, e quasi sempre il risultato è: 'ok, va bene, accetto'. Le notifiche non rubano tempo, rubano qualità decisionale.",
    implementation: [
      "Prima di iniziare, attiva la modalità 'Non disturbare' del sistema operativo",
      "Silenzia tutte le chat: Slack, Teams, WhatsApp, Telegram",
      "Disattiva notifiche email, anche quelle 'importanti'",
      "Silenzia le notifiche del browser",
      "Se possibile, metti il telefono in un'altra stanza o in modalità aereo",
      "Considera di usare app che bloccano le notifiche per periodi definiti"
    ],
    codeExample: {
      language: "plaintext",
      filename: "focus-checklist.md",
      code: `# Checklist modalità focus
─────────────────────────────

PRIMA DI INIZIARE:
  □ Attivare "Non disturbare" (sistema operativo)
  □ Chiudere Slack / Teams / WhatsApp
  □ Disattivare notifiche email
  □ Silenziare notifiche browser
  □ Telefono in altra stanza o aereo

DURANTE LA SESSIONE:
  ✗ Non controllare "velocemente" i messaggi
  ✗ Non lasciare badge visibili
  ✗ Non pensare "rispondo tra 5 minuti"

PERCHÉ È IMPORTANTE:
  Una notifica durante la valutazione del codice AI
  → quasi sempre porta ad accettarlo senza pensare`
    },
    comparison: {
      wrong: [
        "Tenere le notifiche 'silenziose ma visibili'",
        "Controllare 'velocemente' le notifiche tra una richiesta e l'altra",
        "Lasciare il telefono sulla scrivania 'tanto è in silenzioso'",
        "Pensare 'sono abbastanza disciplinato da ignorarle'"
      ],
      correct: [
        "Modalità 'Non disturbare' attiva a livello sistema",
        "App di comunicazione completamente chiuse",
        "Telefono in altra stanza o in modalità aereo",
        "Badge e notifiche visive disattivate"
      ]
    },
    commonMistakes: [
      "Sottovalutare l'impatto delle notifiche sul processo decisionale",
      "Pensare che 'basta non rispondere' sia sufficiente",
      "Lasciare attive le notifiche 'importanti' che poi ti distraggono comunque",
      "Non considerare le notifiche visive (badge) come fonte di distrazione"
    ],
    rule: {
      text: "Una sessione di AI-assisted coding senza silenzio è una sessione a rischio qualità.",
      warning: true
    },
    keyPoints: [
      "Le notifiche interrompono il pensiero critico nel momento peggiore",
      "Il rischio non è la distrazione, è la perdita di controllo decisionale",
      "Interrompere la valutazione di codice AI porta quasi sempre ad accettarlo acriticamente",
      "Il silenzio non è un lusso, è una precondizione per qualità"
    ]
  },
  {
    id: "contesto-isolato",
    number: 5,
    title: "Contesto di lavoro isolato",
    subtitle: "Una sessione = un solo task",
    icon: Focus,
    description: "La tentazione di 'sistemare al volo' qualcos'altro è il nemico numero uno della qualità. Quando lavori con l'AI, il contesto deve rimanere stretto e definito. Ogni deviazione dilata il contesto e l'AI perde allineamento.",
    why: "L'AI funziona meglio quando il contesto è chiaro e limitato. Ogni volta che 'già che ci sei' fai qualcos'altro, stai diluendo la qualità della conversazione con l'AI. Il contesto si allarga, le risposte diventano meno precise, e tu perdi il filo di cosa stavi realmente cercando di fare. L'isolamento del contesto non è rigidità, è protezione della qualità.",
    implementation: [
      "Definisci UN solo task per la sessione, e scrivilo esplicitamente",
      "Quando emerge altro lavoro da fare, annotalo in un file separato (TODO.md)",
      "Non cedere alla tentazione di 'sistemare velocemente' qualcos'altro",
      "Se ti accorgi che stai pensando a un altro problema, la sessione è finita",
      "Considera di usare un timer per mantenere il focus sul task corrente"
    ],
    codeExample: {
      language: "markdown",
      filename: "SESSION.md",
      code: `# Sessione: 2024-01-15 14:30

## Task UNICO di questa sessione:
Implementare validazione email nel form di registrazione

## Cose emerse DA NON FARE ORA:
- [ ] Refactor del componente Header (annotato, non ora)
- [ ] Bug nel logout (annotato, non ora)
- [ ] Migliorare i messaggi di errore (forse correlato, valutare)

## Regola:
Se sto pensando a qualcos'altro → sessione finita o pausa`
    },
    comparison: {
      wrong: [
        "\"Sistemo questa cosa al volo già che sono qui\"",
        "\"Cambio anche questo che è veloce\"",
        "\"Già che ci sono refactoro pure questo file\"",
        "\"Faccio un commit con tutte le modifiche insieme\""
      ],
      correct: [
        "\"Lo annoto in TODO.md e lo faccio in un'altra sessione\"",
        "\"Ora mi concentro solo sulla validazione email\"",
        "\"Questo è interessante ma non è il mio task\"",
        "\"Commit atomico solo per il task corrente\""
      ]
    },
    commonMistakes: [
      "Cedere alla tentazione del 'tanto ci metto un secondo'",
      "Non annotare le cose che emergono, perdendole",
      "Fare commit che mescolano task diversi",
      "Non riconoscere quando il contesto si sta dilatando"
    ],
    rule: {
      text: "Se stai pensando a un altro problema, la sessione è finita o va chiusa temporaneamente.",
      warning: false
    },
    keyPoints: [
      "L'AI rimane allineata solo se il contesto è stretto e chiaro",
      "Ogni 'già che ci sono' dilata il contesto e peggiora le risposte",
      "Annota ciò che emerge, ma non farlo durante questa sessione",
      "Un task per sessione = qualità. Più task = confusione"
    ]
  },
  {
    id: "repository-ordinato",
    number: 6,
    title: "Repository ordinato",
    subtitle: "L'AI amplifica il caos strutturale",
    icon: FolderTree,
    description: "Prima di aggiungere nuovo codice, sistema quello che c'è. Non serve perfezione, serve coerenza. L'AI non migliora una struttura caotica: la peggiora, perché genera codice che segue pattern inconsistenti.",
    why: "Quando chiedi all'AI di generare codice, lei prende ispirazione dal contesto esistente. Se la struttura del repository è caotica, con naming inconsistente e organizzazione confusa, l'AI produrrà codice che amplifica questo caos. Una struttura pulita prima della sessione significa codice generato più coerente e manutenibile.",
    implementation: [
      "Prima di scrivere codice nuovo, fai un check della struttura esistente",
      "Sistema i nomi di file e cartelle per renderli consistenti",
      "Chiarisci dove andrà il nuovo codice PRIMA di generarlo",
      "Rimuovi file obsoleti o duplicati che potrebbero confondere",
      "Assicurati che le convenzioni di naming siano rispettate"
    ],
    codeExample: {
      language: "plaintext",
      filename: "structure-check.md",
      code: `# Check struttura pre-sessione
────────────────────────────

✗ PRIMA (caotico):
  src/
    utils.js
    Utils.ts
    helpers/
      misc.js
      stuff.ts
    components/
      button.jsx
      Button.tsx
      btn.js

✓ DOPO (ordinato):
  src/
    utils/
      validation.ts
      formatting.ts
    components/
      Button/
        Button.tsx
        Button.test.tsx

Domanda chiave:
"Mi vergognerei a mostrare questo repo a qualcuno?"`
    },
    comparison: {
      wrong: [
        "File con naming misto (camelCase, snake_case, PascalCase)",
        "Cartelle 'utils' e 'helpers' con contenuto simile",
        "File obsoleti mai rimossi",
        "Struttura che 'si è evoluta' senza un piano"
      ],
      correct: [
        "Convenzione di naming consistente in tutto il progetto",
        "Ogni cartella ha uno scopo chiaro e definito",
        "Solo file attivamente usati nel repository",
        "Struttura che riflette l'architettura dell'applicazione"
      ]
    },
    commonMistakes: [
      "Pensare 'sistemo dopo, ora devo andare veloce'",
      "Aggiungere codice nuovo in una struttura già caotica",
      "Ignorare inconsistenze pensando che 'tanto funziona'",
      "Non definire dove andrà il nuovo codice prima di generarlo"
    ],
    rule: {
      text: "Se ti vergogneresti a mostrare il repo a qualcuno, non è pronto per l'AI.",
      warning: true
    },
    keyPoints: [
      "L'AI amplifica il caos strutturale, non lo risolve",
      "Una struttura pulita produce codice generato più coerente",
      "Non serve perfezione, serve coerenza nelle convenzioni",
      "Sistema PRIMA di generare, non dopo"
    ]
  },
  {
    id: "branch-sperimentazione",
    number: 7,
    title: "Branch dedicato alla sperimentazione",
    subtitle: "Libertà di sbagliare, libertà di buttare via",
    icon: GitBranch,
    description: "Crea sempre un branch esplicito per il lavoro con AI. Non per ordine, ma per libertà mentale. Sapere che puoi buttare via tutto senza conseguenze ti rende più critico e meno difensivo verso codice mediocre.",
    why: "Quando lavori sul branch principale, inconsciamente proteggi il codice che generi. 'Ormai l'ho scritto' diventa un motivo per tenerlo. Un branch sperimentale elimina questa pressione psicologica: puoi essere brutalmente critico, puoi buttare via tutto, puoi ricominciare. Questa libertà ti rende un revisore migliore del codice AI.",
    implementation: [
      "Prima di iniziare, crea un branch con nome esplicito",
      "Usa prefissi chiari: ai-experiment/, ai-prototype/, ai-validation/",
      "Non mergeare automaticamente: considera sempre se il codice merita di sopravvivere",
      "Se il branch diventa caotico, buttalo e ricomincia",
      "Fai commit frequenti per poter tornare a stati precedenti"
    ],
    codeExample: {
      language: "plaintext",
      filename: "branch-naming.md",
      code: `# Convenzioni branch sperimentali
──────────────────────────────────

PREFISSI CONSIGLIATI:
  ai-experiment/   → esperimenti con AI
  ai-prototype/    → prototipi rapidi
  ai-validation/   → validazione approcci

ESEMPI:
  ai-experiment/validazione-input
  ai-prototype/nuovo-layout-form
  ai-validation/refactor-auth

WORKFLOW:
  1. Crea branch → git checkout -b ai-experiment/nome
  2. Lavora liberamente
  3. Commit frequenti per checkpoint
  4. A fine sessione: valuta se merita merge
  5. Se no → git branch -D (senza rimorsi)

MENTALITÀ:
  Questo branch può essere buttato.
  Nessuna pressione a salvare codice mediocre.`
    },
    comparison: {
      wrong: [
        "Lavorare direttamente su main 'per fare prima'",
        "Creare branch generici tipo 'feature-1' o 'test'",
        "Mergeare automaticamente perché 'ormai l'ho fatto'",
        "Tenere codice mediocre perché 'non voglio perdere il lavoro'"
      ],
      correct: [
        "Branch con nome esplicito: ai-experiment/validazione-input",
        "Commit frequenti per checkpoint",
        "Valutazione critica prima di merge",
        "Buttare via senza rimorsi se non è buono"
      ]
    },
    commonMistakes: [
      "Affezionarsi al codice solo perché 'ci ho lavorato'",
      "Non buttare branch perché 'potrebbe servire'",
      "Fare un unico commit gigante a fine sessione",
      "Mergeare senza review critica"
    ],
    rule: {
      text: "Questo branch non deve sopravvivere per forza. La sua esistenza serve a darti libertà di giudizio.",
      warning: false
    },
    keyPoints: [
      "Il branch sperimentale abbassa la pressione psicologica",
      "Libertà di buttare via = libertà di essere critici",
      "Commit frequenti permettono di tornare a stati funzionanti",
      "Mai mergeare automaticamente: sempre review critica"
    ],
    checklist: {
      title: "Setup branch sperimentale:",
      items: [
        "Branch creato con nome esplicito",
        "Sono mentalmente pronto a buttarlo via",
        "Farò commit frequenti",
        "Valuterò criticamente prima di merge"
      ]
    }
  },
  {
    id: "setup-riproducibile",
    number: 8,
    title: "Setup rapido e riproducibile",
    subtitle: "Se non puoi ripartire velocemente, non sei pronto",
    icon: RotateCcw,
    description: "Prima di iniziare una sessione, fatti una domanda semplice: se cancellassi tutto, riuscirei a ripartire in pochi minuti? Se la risposta è no, l'ambiente non è pronto per il lavoro assistito dall'AI.",
    why: "Il lavoro con AI è sperimentale per natura. Potresti dover buttare via tutto e ricominciare. Se questa prospettiva ti spaventa perché 'ricostruire l'ambiente sarebbe un incubo', allora non sei libero di sperimentare davvero. Un setup riproducibile è prerequisito per la libertà di sbagliare.",
    implementation: [
      "Verifica che lo script di setup funzioni: npm install, pip install, etc.",
      "Documenta i comandi essenziali anche solo in note temporanee",
      "Assicurati che le variabili d'ambiente siano documentate",
      "Testa che l'applicazione parta da zero in meno di 5 minuti",
      "Mantieni un README aggiornato con i passi essenziali"
    ],
    codeExample: {
      language: "plaintext",
      filename: "setup-checklist.md",
      code: `# Setup riproducibile - Checklist
──────────────────────────────────

REQUISITI MINIMI:
  ✓ package.json con tutte le dipendenze
  ✓ .env.example con variabili documentate
  ✓ README con passi di setup

VERIFICA (deve funzionare in <5 min):
  1. git clone [repo]
  2. npm install (o equivalente)
  3. cp .env.example .env
  4. npm run dev
  → Applicazione funzionante

SEGNALI DI ALLARME:
  ✗ "Devi anche installare X manualmente"
  ✗ "La chiave API è sul mio computer"
  ✗ "Funziona solo se hai fatto Y prima"
  ✗ "Chiedi a Marco, lui sa come si fa"

DOMANDA CHIAVE:
  Se formatto il PC, riparto in 5 minuti?
  → Se NO, documenta quello che manca`
    },
    comparison: {
      wrong: [
        "Setup che richiede 'ricordarsi' passaggi non documentati",
        "Dipendenze installate manualmente senza package.json",
        "Variabili d'ambiente 'da qualche parte nel computer'",
        "\"Funziona solo sulla mia macchina\""
      ],
      correct: [
        "Un comando per installare tutto: npm install",
        ".env.example con tutte le variabili necessarie",
        "README con passi chiari e testati",
        "Script di setup che funziona da zero"
      ]
    },
    commonMistakes: [
      "Pensare 'tanto lo so io come funziona'",
      "Non testare mai il setup da zero",
      "Lasciare dipendenze o configurazioni implicite",
      "Non aggiornare la documentazione quando qualcosa cambia"
    ],
    rule: {
      text: "L'AI lavora bene solo su ambienti riproducibili. Se non puoi ripartire velocemente, non sei pronto.",
      warning: false
    },
    keyPoints: [
      "Riproducibilità = libertà di sperimentare senza paura",
      "Se ricostruire l'ambiente spaventa, non sei libero di sbagliare",
      "Testa il setup da zero periodicamente",
      "Documenta anche le 'ovvietà' che potresti dimenticare"
    ]
  },
  {
    id: "logging-visibile",
    number: 9,
    title: "Logging visibile e immediato",
    subtitle: "Se non vedi cosa succede, programmi alla cieca",
    icon: FileText,
    description: "Non aspettare il bug per aggiungere log. Inserisci logging subito, anche grezzo, anche temporaneo. Il logging ti permette di verificare cosa il codice FA realmente, non cosa l'AI DICE che fa.",
    why: "L'AI è molto brava a spiegare cosa il codice 'dovrebbe fare'. Ma la realtà è nei fatti, non nelle spiegazioni. Il logging è il tuo strumento per verificare la realtà. Senza log, stai accettando le affermazioni dell'AI sulla fiducia. Con log visibili, stai verificando empiricamente.",
    implementation: [
      "Aggiungi log all'inizio di ogni funzione significativa",
      "Logga gli input e gli output delle funzioni critiche",
      "Usa log strutturati: timestamp, contesto, valore",
      "Non aspettare il bug: logga preventivamente",
      "Tieni i log visibili in un terminale dedicato durante lo sviluppo"
    ],
    codeExample: {
      language: "typescript",
      filename: "validation.ts",
      code: `// Logging preventivo, non reattivo

function validateEmail(input: string): ValidationResult {
  console.log('[validateEmail] INPUT:', { input, timestamp: Date.now() });
  
  // Validazione
  const isValid = EMAIL_REGEX.test(input);
  const errors = isValid ? [] : ['Email non valida'];
  
  const result = { isValid, errors, originalInput: input };
  
  console.log('[validateEmail] OUTPUT:', result);
  // Ora VEDI cosa succede realmente, non cosa l'AI dice
  
  return result;
}

// Pattern: logga PRIMA di avere problemi
// Il logging preventivo ti fa scoprire bug che non sapevi di avere`
    },
    comparison: {
      wrong: [
        "Aggiungere log solo quando c'è un bug",
        "Fidarsi della spiegazione dell'AI su cosa fa il codice",
        "Log vaghi tipo console.log('qui')",
        "Rimuovere i log 'perché ora funziona'"
      ],
      correct: [
        "Log preventivi su tutte le funzioni critiche",
        "Log strutturati con contesto e timestamp",
        "Terminale dedicato per vedere i log in tempo reale",
        "Verificare empiricamente il comportamento del codice"
      ]
    },
    commonMistakes: [
      "Pensare 'aggiungo log se serve' invece di 'aggiungo log sempre'",
      "Log senza contesto che non aiutano a capire cosa succede",
      "Non guardare i log durante lo sviluppo",
      "Rimuovere log utili per 'pulire' il codice"
    ],
    rule: {
      text: "Se non vedi cosa succede, stai programmando alla cieca. Il logging è verifica, non debug.",
      warning: true
    },
    keyPoints: [
      "Il logging verifica cosa il codice FA, non cosa l'AI DICE che fa",
      "Aggiungi log PRIMA di avere problemi, non dopo",
      "Log strutturati: timestamp, contesto, input, output",
      "Tieni un terminale dedicato ai log durante lo sviluppo"
    ]
  },
  {
    id: "ambiente-sacrificabile",
    number: 10,
    title: "Ambiente sacrificabile",
    subtitle: "Se hai paura di rompere, non puoi sperimentare",
    icon: Bomb,
    description: "L'ambiente di sviluppo deve essere completamente sacrificabile. Nessun dato reale, nessuna credenziale definitiva, nessuna conseguenza irreversibile. Se hai paura di rompere qualcosa, userai l'AI in modo difensivo e accetterai soluzioni mediocri.",
    why: "La paura è il nemico della sperimentazione. Se ogni errore ha conseguenze reali, smetterai di sperimentare. Smetterai di essere critico verso il codice AI perché 'almeno questo funziona e non rompe nulla'. Un ambiente sacrificabile ti libera dalla paura e ti restituisce lo spirito critico necessario per lavorare bene con l'AI.",
    implementation: [
      "Assicurati che rompere tutto non faccia danni reali",
      "Usa dati di test, mai dati di produzione",
      "Credenziali temporanee o di development, mai quelle definitive",
      "Database di sviluppo separato, facilmente ricreabile",
      "Backup automatici o snapshot dell'ambiente"
    ],
    codeExample: {
      language: "plaintext",
      filename: "environment-check.md",
      code: `# Checklist ambiente sacrificabile
─────────────────────────────────

DATI:
  ✓ Database di sviluppo (non produzione)
  ✓ Dati fake/generati (non dati reali utenti)
  ✓ File di test (non documenti importanti)

CREDENZIALI:
  ✓ API keys di development/sandbox
  ✓ Account di test (non account personali)
  ✓ Nessun segreto di produzione nel codice

CONSEGUENZE:
  ✓ Se cancello tutto → posso ricreare in 5 min
  ✓ Se il codice è buggato → nessun danno reale
  ✓ Se l'AI genera codice pericoloso → ambiente isolato

Domanda chiave:
"Se eseguo codice completamente sbagliato, 
 cosa è la cosa peggiore che può succedere?"
 
Risposta accettabile: "Devo rifare il setup"
Risposta inaccettabile: "Perdo dati / soldi / accesso"`
    },
    comparison: {
      wrong: [
        "Sviluppare con dati di produzione 'per comodità'",
        "Usare credenziali reali nell'ambiente di sviluppo",
        "Avere paura di 'rompere qualcosa'",
        "Accettare codice mediocre 'purché non tocchi nulla'"
      ],
      correct: [
        "Database di sviluppo con dati fake",
        "API keys di sandbox/development",
        "Ambiente completamente ricreabile",
        "Libertà di sperimentare senza conseguenze"
      ]
    },
    commonMistakes: [
      "Usare il database di produzione 'per vedere dati reali'",
      "Hardcodare credenziali di produzione nel codice",
      "Non avere un modo rapido per ricreare l'ambiente",
      "Sviluppare in un ambiente dove gli errori hanno conseguenze"
    ],
    rule: {
      text: "Un ambiente non sacrificabile è incompatibile con sperimentazione assistita dall'AI. La paura blocca lo spirito critico.",
      warning: true
    },
    keyPoints: [
      "Se hai paura di rompere, userai l'AI in modo difensivo",
      "La paura porta ad accettare soluzioni mediocri 'pur di non toccare'",
      "Dati fake, credenziali di test, ambiente ricreabile",
      "Libertà di sbagliare = libertà di essere critici"
    ],
    checklist: {
      title: "Ambiente pronto per sperimentare:",
      items: [
        "Nessun dato di produzione coinvolto",
        "Credenziali di development/sandbox",
        "Posso ricreare l'ambiente in 5 minuti",
        "Non ho paura di eseguire codice sperimentale"
      ]
    }
  }
];
