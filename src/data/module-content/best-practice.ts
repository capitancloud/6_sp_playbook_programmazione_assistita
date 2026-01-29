import { Step } from "./mentalita";
import { 
  Layers, 
  Target, 
  MessageCircle, 
  CheckCheck, 
  Users, 
  RefreshCw, 
  Copy, 
  Wrench, 
  GitBranch, 
  PackageCheck 
} from "lucide-react";

export const bestPracticeSteps: Step[] = [
  {
    id: 1,
    number: 1,
    icon: Layers,
    title: "Contesto minimo ma sufficiente",
    subtitle: "Solo ciò che serve, niente di più",
    description: `Quando scrivi un prompt, includi **solo queste quattro cose**:

• **Stack / linguaggio** - Quale tecnologia stai usando
• **Obiettivo** - Cosa vuoi ottenere
• **Vincoli** - Cosa non può essere cambiato
• **Livello di qualità** - Prototipo, produzione, esperimento

Tutto il resto è rumore. Confonde l'AI e produce soluzioni inutili o troppo generiche.

Un prompt lungo non è un prompt migliore. Anzi, più è lungo, più è probabile che contenga informazioni contraddittorie o irrilevanti che porteranno l'AI fuori strada.`,
    why: `L'AI non ha bisogno della storia del tuo progetto o delle tue frustrazioni precedenti. Ha bisogno di **informazioni azionabili**: cosa, come, con quali limiti.

Quando sovraccarichi un prompt di contesto, l'AI deve decidere cosa è importante e cosa no. E spesso decide male.

Un prompt conciso e preciso produce risposte concise e precise.`,
    implementation: [
      "Prima di scrivere il prompt, elenca mentalmente: stack, obiettivo, vincoli, livello",
      "Scrivi il prompt in massimo 6-7 righe. Se ne servono di più, probabilmente non hai chiaro l'obiettivo",
      "Rimuovi tutto ciò che non è direttamente necessario per la risposta",
      "Non spiegare il 'perché' a meno che non sia un vincolo - l'AI non ne ha bisogno",
      "Rileggi il prompt: ogni frase aggiunge valore? Se no, eliminala"
    ],
    codeExample: {
      code: `// ❌ PROMPT TROPPO LUNGO E CONFUSO
"Sto lavorando su un'app React che ho iniziato 6 mesi fa
e adesso devo aggiungere una validazione email perché
gli utenti inseriscono dati sbagliati e questo causa
problemi nel backend che usa Node e MongoDB, comunque
vorrei usare una regex ma non sono sicuro se è il modo
migliore, forse una libreria sarebbe meglio ma non so
quale, cosa mi consigli? Ah, e deve funzionare anche
su browser vecchi perché alcuni clienti usano IE11..."

// ✅ PROMPT EFFICACE (4 elementi chiave)
"TypeScript/React, devo validare email lato client.
Vincoli: no librerie esterne, supporto ES5.
Livello: produzione.
Voglio: funzione che ritorna { valid: boolean, error?: string }"

// Il secondo prompt è:
// - 75% più corto
// - 100% più chiaro
// - Produce risposte 10x più utili`,
      language: "typescript",
      filename: "prompt-comparison.md"
    },
    rule: {
      text: "Se il prompt supera le 6-7 righe, probabilmente stai compensando mancanza di chiarezza con quantità di parole.",
      warning: true
    },
    keyPoints: [
      "4 elementi: stack, obiettivo, vincoli, livello - nient'altro",
      "Prompt lungo ≠ prompt migliore, anzi spesso è il contrario",
      "Ogni frase deve aggiungere valore azionabile",
      "Il 'perché' non serve all'AI, solo il 'cosa' e il 'come'",
      "6-7 righe massimo per la maggior parte delle richieste"
    ],
    commonMistakes: [
      "Raccontare la storia del progetto - all'AI non interessa",
      "Includere frustrazioni o tentativi precedenti - rumore",
      "Spiegare il contesto di business - raramente rilevante",
      "Aggiungere 'sarebbe bello se...' - confonde le priorità"
    ]
  },
  {
    id: 2,
    number: 2,
    icon: Target,
    title: "Richieste orientate al risultato",
    subtitle: "Cosa deve succedere, non come farlo",
    description: `Non dire all'AI **come** fare le cose. Digli **cosa** deve succedere.

Quando descrivi l'implementazione, stai programmando tu - male. Stai vincolando l'AI a un approccio che potrebbe non essere il migliore.

Quando descrivi il risultato, lasci all'AI la libertà di proporre la soluzione ottimale. E puoi valutare il risultato rispetto ai tuoi criteri, non rispetto alla tua idea preconcepita.`,
    why: `Quando dici "usa una regex", l'AI userà una regex - anche se esiste un modo migliore.

Quando dici "rifiuta input invalido con errore leggibile", l'AI può proporre regex, libreria di validazione, parser custom, o qualsiasi altra soluzione appropriata.

**Tu definisci il problema, l'AI propone la soluzione.**`,
    implementation: [
      "Rileggi il prompt prima di inviarlo: stai descrivendo il COME o il COSA?",
      "Se trovi verbi come 'usa', 'implementa con', 'fai così', riformula",
      "Descrivi comportamenti osservabili: 'quando X succede, deve fare Y'",
      "Specifica i criteri di successo, non i passi per raggiungerli",
      "Lascia che l'AI proponga l'approccio, poi valutalo"
    ],
    comparison: {
      wrong: [
        "\"Usa una regex per validare l'email\" - stai imponendo una soluzione",
        "\"Implementa un ciclo for che itera sugli elementi\" - stai codificando tu",
        "\"Crea una funzione che usa map e filter\" - troppo specifico",
        "\"Fai un try-catch intorno a questa chiamata\" - micro-management"
      ],
      correct: [
        "\"Input non valido deve essere rifiutato con errore leggibile\"",
        "\"Processa ogni elemento e raccogli i risultati\"",
        "\"Filtra gli elementi che soddisfano X e trasformali in Y\"",
        "\"Gestisci il caso in cui la chiamata fallisce senza crashare\""
      ]
    },
    rule: {
      text: "Se stai descrivendo l'implementazione, stai programmando tu male, non aiutando l'AI. Descrivi il risultato, non i passi.",
      warning: true
    },
    keyPoints: [
      "COSA deve succedere, mai COME deve essere fatto",
      "Comportamenti osservabili, non passi implementativi",
      "L'AI può proporre soluzioni migliori di quelle che immagini",
      "Puoi sempre chiedere alternative se la prima non ti convince",
      "Tu definisci il problema, l'AI propone la soluzione"
    ],
    commonMistakes: [
      "Dire 'usa X' invece di 'ottieni Y' - vincola inutilmente",
      "Descrivere algoritmi invece di risultati",
      "Imporre pattern che conosci invece di chiedere il pattern migliore",
      "Micro-gestire ogni dettaglio implementativo"
    ]
  },
  {
    id: 3,
    number: 3,
    icon: MessageCircle,
    title: "Spiegazioni insieme al codice",
    subtitle: "Non solo cosa fa, ma perché",
    description: `Ogni volta che chiedi codice, aggiungi **sempre** questa richiesta:

**"Spiegami cosa fa e perché."**

Pretendi tre cose:
• **Spiegazione del flusso** - Cosa succede passo per passo
• **Motivazioni delle scelte** - Perché questa soluzione e non un'altra
• **Trade-off** - Cosa si guadagna e cosa si perde

Questo separa codice buono da codice "solo funzionante". Ti permette di decidere consapevolmente cosa tenere.`,
    why: `Codice senza spiegazione è solo output, non conoscenza.

Quando ricevi solo codice, non sai se è la soluzione migliore, se ci sono alternative, se ha limitazioni nascoste. Lo incolli e speri che funzioni.

Quando ricevi codice + spiegazione, **capisci**. E solo quando capisci puoi modificare, debuggare, estendere.`,
    implementation: [
      "Aggiungi 'Spiegami cosa fa e perché' a OGNI richiesta di codice",
      "Se la spiegazione non è chiara, chiedi di riformularla",
      "Chiedi esplicitamente i trade-off: 'cosa si perde con questa scelta?'",
      "Se la spiegazione non corrisponde al tuo modello mentale, fermati e approfondisci",
      "Le spiegazioni diventano la documentazione del tuo codice"
    ],
    codeExample: {
      code: `// ❌ RISPOSTA SENZA SPIEGAZIONE
function validateEmail(email: string): boolean {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// ✅ RISPOSTA CON SPIEGAZIONE
function validateEmail(email: string): boolean {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

/*
COSA FA:
Verifica che l'email contenga esattamente un @ con
testo prima e dopo, e almeno un punto dopo @.

PERCHÉ QUESTA SCELTA:
Regex semplice invece di RFC 5322 completo perché:
- Copre 99% dei casi reali
- Leggibile e modificabile
- Evita regex di 1000+ caratteri

TRADE-OFF:
- ✅ Semplice, veloce, leggibile
- ❌ Non valida email tecnicamente valide come "a"@b.c
- ❌ Non verifica esistenza del dominio

ALTERNATIVE:
- Libreria validator.js per validazione RFC completa
- API esterna per verifica dominio (più lenta)
*/`,
      language: "typescript",
      filename: "code-with-explanation.ts"
    },
    rule: {
      text: "Codice senza spiegazione è solo output, non conoscenza. Pretendi sempre il 'perché' oltre al 'cosa'."
    },
    keyPoints: [
      "'Spiegami cosa fa e perché' in OGNI richiesta di codice",
      "Flusso + motivazioni + trade-off = comprensione completa",
      "Se la spiegazione non è chiara, il codice non è pronto",
      "Le spiegazioni riducono la dipendenza dall'AI",
      "Codice compreso > codice solo funzionante"
    ],
    commonMistakes: [
      "Accettare codice senza capire cosa fa - debito tecnico",
      "Non chiedere i trade-off - ogni scelta ha un costo",
      "Ignorare le spiegazioni perché 'tanto funziona'",
      "Non chiedere alternative quando la spiegazione non convince"
    ]
  },
  {
    id: 4,
    number: 4,
    icon: CheckCheck,
    title: "Validare sempre il codice",
    subtitle: "Nessun codice è accettato automaticamente",
    description: `Non esiste codice "accettato automaticamente". Ogni riga che incolli deve passare attraverso un processo di validazione.

**Flusso corretto:**
1. Leggi riga per riga
2. Verifica nomi e flusso
3. Esegui o simula mentalmente
4. Solo dopo lo integri

Se una riga non ti è chiara: **non la incolli**. Non la lasci "tanto funziona". Una riga non compresa è un bug potenziale nel tuo codice.`,
    why: `Quando incolli codice senza validarlo, stai introducendo una scatola nera nel tuo sistema.

Oggi funziona. Domani si rompe. E quando si rompe, non sai dove cercare perché non hai mai capito cosa faceva.

La validazione non è overhead - è **protezione** contro il debugging infinito.`,
    implementation: [
      "Leggi il codice PRIMA di incollarlo, non dopo",
      "Per ogni riga, chiediti: so cosa fa? So perché è così?",
      "Rinomina variabili se i nomi non sono chiari nel TUO contesto",
      "Esegui mentalmente il codice con input di esempio",
      "Se trovi una riga che non capisci, fermati e chiedi spiegazioni"
    ],
    checklist: {
      title: "Checklist validazione codice AI",
      items: [
        "Ho letto ogni riga, non solo il blocco nel suo insieme?",
        "Capisco cosa fa ogni funzione chiamata?",
        "I nomi delle variabili hanno senso nel mio contesto?",
        "So cosa succede con input edge case (null, vuoto, invalido)?",
        "Ho eseguito mentalmente il codice con un esempio?",
        "Ci sono parti che lascio 'perché funziona'? (red flag!)"
      ]
    },
    rule: {
      text: "Se non capisci una riga, quella riga è un bug potenziale. Non incollare codice che non sai spiegare.",
      warning: true
    },
    keyPoints: [
      "Leggi PRIMA di incollare, non dopo",
      "Ogni riga deve essere compresa, non solo accettata",
      "Rinomina ciò che non è chiaro nel tuo contesto",
      "Simula mentalmente con input reali",
      "'Tanto funziona' = bug che esploderà in futuro"
    ],
    commonMistakes: [
      "Incollare interi blocchi senza leggerli - molto comune, molto pericoloso",
      "Lasciare codice 'tanto funziona' - bomba a orologeria",
      "Non rinominare variabili con nomi generici dell'AI",
      "Saltare la simulazione mentale perché 'sembra giusto'"
    ]
  },
  {
    id: 5,
    number: 5,
    icon: Users,
    title: "AI come pair programmer",
    subtitle: "Un collega che può sbagliare",
    description: `Tratta ogni risposta dell'AI come se fosse di un collega:

• **Può sbagliare** - anche le risposte sicure possono essere errate
• **Può fraintendere** - non legge nel pensiero
• **Può proporre soluzioni subottimali** - non conosce il tuo contesto completo

Non accettare passivamente. Fai domande. Chiedi alternative. Chiedi semplificazioni.

La mentalità corretta: **l'AI propone, tu decidi.**`,
    why: `L'AI non è un oracolo infallibile. È uno strumento potente ma con limitazioni.

Quando la tratti come autorità assoluta, smetti di pensare criticamente. Accetti soluzioni che non capiresti mai da un collega. Perdi il controllo del tuo codice.

Quando la tratti come pair programmer, mantieni il pensiero critico attivo. Fai le stesse domande che faresti a un collega.`,
    implementation: [
      "Quando ricevi una risposta, chiediti: accetterei questo da un collega junior?",
      "Fai domande: 'Perché questo approccio e non X?'",
      "Chiedi alternative: 'Ci sono altri modi per farlo?'",
      "Chiedi semplificazioni: 'Si può fare in modo più semplice?'",
      "Sfida le assunzioni: 'Cosa succede se questo non è vero?'"
    ],
    comparison: {
      wrong: [
        "\"L'AI l'ha detto, quindi sarà giusto\" - no, può sbagliare",
        "\"Non capisco ma funziona\" - non accettabile",
        "\"È troppo complicato da mettere in discussione\" - red flag",
        "\"L'AI sa meglio di me\" - delega pericolosa del pensiero"
      ],
      correct: [
        "\"Interessante, ma perché non usare X invece?\"",
        "\"Puoi spiegare questo passaggio? Non mi è chiaro\"",
        "\"Ci sono alternative più semplici?\"",
        "\"Cosa succede se l'input è null/vuoto/invalido?\""
      ]
    },
    rule: {
      text: "L'AI propone, tu decidi. Mai il contrario. Mantieni sempre il pensiero critico attivo."
    },
    keyPoints: [
      "L'AI può sbagliare, fraintendere, proporre soluzioni subottimali",
      "Fai le stesse domande che faresti a un collega",
      "Chiedi sempre alternative e semplificazioni",
      "Sfida le assunzioni, non accettarle passivamente",
      "Tu sei l'architetto, l'AI è l'assistente"
    ],
    commonMistakes: [
      "Trattare l'AI come autorità infallibile",
      "Non fare domande per 'non sembrare stupidi' (con un'AI!)",
      "Accettare complessità inutile perché 'l'AI saprà'",
      "Delegare il pensiero critico allo strumento"
    ]
  },
  {
    id: 6,
    number: 6,
    icon: RefreshCw,
    title: "Iterare invece di cercare la perfezione",
    subtitle: "Cicli brevi battono prompt elaborati",
    description: `Non cercare il prompt "magico" che produce la soluzione perfetta al primo tentativo.

Usa **cicli brevi**:
1. **Primo prompt** - Soluzione base, anche imperfetta
2. **Secondo** - Chiarimento su ciò che non funziona
3. **Terzo** - Miglioramento mirato su aspetti specifici

Questo approccio riduce la frustrazione, migliora la qualità progressivamente, e mantiene il controllo sul risultato.`,
    why: `Il prompt perfetto non esiste. Cercare di scriverlo porta a:
• Prompt lunghissimi e confusi
• Frustrazione quando non funziona al primo tentativo
• Perdita di tempo in "ottimizzazione" del prompt

Iterare è **più veloce e più efficace**. Ogni ciclo ti avvicina al risultato. E impari cosa funziona per le prossime volte.`,
    implementation: [
      "Inizia con un prompt semplice, anche se sai che non sarà perfetto",
      "Valuta la risposta: cosa manca? cosa è sbagliato?",
      "Secondo prompt: correggi UN aspetto specifico",
      "Ripeti finché il risultato è accettabile (max 3-5 iterazioni)",
      "Se dopo 5 iterazioni non funziona, il problema è nella definizione, non nel prompt"
    ],
    codeExample: {
      code: `// ITERAZIONE IN PRATICA

// Prompt 1 (base):
"Funzione che valida email in TypeScript"
// → Ricevi una soluzione base, magari troppo semplice

// Prompt 2 (chiarimento):
"Aggiungi gestione del caso null e stringa vuota"
// → Ora gestisce i casi limite

// Prompt 3 (miglioramento):
"Ritorna un oggetto { valid, error } invece di boolean"
// → Ora hai il formato che volevi

// Prompt 4 (rifinitura):
"Aggiungi tipi espliciti per l'oggetto di ritorno"
// → Codice production-ready

// 4 prompt semplici > 1 prompt complicatissimo
// Ogni step è verificabile e controllabile`,
      language: "typescript",
      filename: "iteration-example.md"
    },
    rule: {
      text: "Una buona iterazione batte sempre un prompt troppo elaborato. Il prompt perfetto non esiste."
    },
    keyPoints: [
      "Primo prompt semplice, poi affina iterativamente",
      "Ogni iterazione corregge UN aspetto specifico",
      "Max 3-5 iterazioni per singola feature",
      "Se non funziona dopo 5 tentativi, ripensa il problema",
      "Impari di più iterando che cercando la perfezione"
    ],
    commonMistakes: [
      "Spendere 20 minuti a scrivere il 'prompt perfetto'",
      "Frustrarsi quando il primo tentativo non è perfetto",
      "Riscrivere tutto da zero invece di iterare",
      "Prompt troppo lunghi per 'essere sicuri' - effetto opposto"
    ]
  },
  {
    id: 7,
    number: 7,
    icon: Copy,
    title: "Evitare il copia-incolla cieco",
    subtitle: "Se non capisci, non incollare",
    description: `Regola **non negoziabile**: se non capisci una riga, non la incolli.

Non "la studio dopo". Non "tanto funziona". Non "è troppo complicata per me".

**Azioni concrete quando trovi codice che non capisci:**
• Chiedi spiegazioni dettagliate
• Riscrivila con parole tue
• Semplificala finché la capisci
• Se non riesci, scartala e chiedi un approccio diverso`,
    why: `Il copia-incolla cieco è il modo più veloce per creare codice che non controlli.

Ogni riga che non capisci è:
• Un bug che non saprai debuggare
• Una modifica che non saprai fare
• Una review che non saprai difendere

Mantenere la **proprietà intellettuale** del tuo codice significa capirlo tutto.`,
    implementation: [
      "Prima di incollare, passa il mouse su ogni riga: sai cosa fa?",
      "Se trovi una riga misteriosa, fermati e chiedi 'cosa fa questa riga?'",
      "Prova a riscrivere il concetto con le TUE parole/strutture",
      "Se non riesci a semplificare, chiedi 'c'è un modo più semplice?'",
      "Meglio codice semplice che capisci che codice 'elegante' che non capisci"
    ],
    comparison: {
      wrong: [
        "\"Non capisco ma funziona, lo lascio\" - bomba a orologeria",
        "\"Lo studio dopo\" - non succede mai",
        "\"È pattern avanzato, mi fido\" - non dovresti",
        "\"Troppo complicato per me\" - allora non è il codice giusto per te"
      ],
      correct: [
        "\"Non capisco questa riga, puoi spiegare?\"",
        "\"Puoi riscriverlo in modo più semplice?\"",
        "\"Fammi vedere un approccio alternativo\"",
        "\"Preferisco codice più lungo ma che capisco\""
      ]
    },
    rule: {
      text: "Se non capisci una riga, non la incolli. Questa regola non ha eccezioni.",
      warning: true
    },
    keyPoints: [
      "Zero righe misteriose nel tuo codice",
      "Chiedi spiegazioni per tutto ciò che non è chiaro",
      "Riscrivere con le tue parole = verificare comprensione",
      "Codice semplice che capisci > codice elegante che non capisci",
      "La proprietà intellettuale del codice è la comprensione"
    ],
    commonMistakes: [
      "'Lo studio dopo' - spoiler: non lo studierai mai",
      "'Funziona quindi va bene' - finché non si rompe",
      "Copiare pattern 'best practice' senza capirli",
      "Vergognarsi di chiedere spiegazioni - l'AI non giudica"
    ]
  },
  {
    id: 8,
    number: 8,
    icon: Wrench,
    title: "Guidare il refactor",
    subtitle: "Obiettivi specifici, non 'migliora'",
    description: `Non dire all'AI:

**"Migliora questo codice"**

Questa richiesta è troppo vaga. L'AI non sa cosa significa "migliore" per te.

**Dì invece:**
• Migliora la **leggibilità** (nomi, struttura, commenti)
• Riduci la **complessità** (meno nesting, meno condizioni)
• Separa le **responsabilità** (ogni funzione fa una cosa)
• Elimina le **duplicazioni** (DRY - Don't Repeat Yourself)`,
    why: `"Migliora" è soggettivo. Per l'AI potrebbe significare:
• Codice più corto (ma meno leggibile)
• Pattern più "elegante" (ma più complesso)
• Best practice generiche (ma non adatte al tuo caso)

Quando sei specifico, l'AI sa esattamente cosa fare. E tu sai esattamente come valutare il risultato.`,
    implementation: [
      "Prima di chiedere refactor, identifica IL problema specifico",
      "Usa termini precisi: leggibilità, complessità, responsabilità, duplicazioni",
      "Chiedi UN miglioramento alla volta, non tutti insieme",
      "Dopo il refactor, verifica che il problema specifico sia risolto",
      "Se il refactor introduce nuovi problemi, chiedi di annullare"
    ],
    checklist: {
      title: "Tipi di refactor da chiedere",
      items: [
        "LEGGIBILITÀ: rinomina variabili, aggiungi commenti, formatta meglio",
        "COMPLESSITÀ: riduci nesting, semplifica condizioni, spezza funzioni lunghe",
        "RESPONSABILITÀ: ogni funzione fa UNA cosa, separa logica da presentazione",
        "DUPLICAZIONI: estrai codice comune in funzioni riusabili",
        "PERFORMANCE: solo dopo che funziona, con metriche specifiche",
        "TESTABILITÀ: rendi il codice più facile da testare (dependency injection)"
      ]
    },
    rule: {
      text: "Refactor senza obiettivo specifico è solo rimescolamento. 'Migliora' non è un obiettivo."
    },
    keyPoints: [
      "'Migliora' non è una richiesta - è un desiderio vago",
      "Identifica IL problema: leggibilità? complessità? duplicazioni?",
      "Un refactor alla volta, non tutti insieme",
      "Verifica che il problema specifico sia risolto",
      "Più sei specifico, migliore sarà il refactor"
    ],
    commonMistakes: [
      "Chiedere 'migliora' senza dire cosa non va",
      "Chiedere troppi miglioramenti insieme - risultato confuso",
      "Non verificare se il refactor ha risolto il problema originale",
      "Accettare refactor che introducono nuova complessità"
    ]
  },
  {
    id: 9,
    number: 9,
    icon: GitBranch,
    title: "Usare l'AI per alternative",
    subtitle: "Sempre almeno due approcci",
    description: `Chiedi esplicitamente:

**"Dammi almeno due approcci diversi."**

Poi valuta ogni alternativa secondo criteri oggettivi:
• **Semplicità** - Quanto è facile da capire?
• **Leggibilità** - Quanto è chiaro il flusso?
• **Manutenibilità** - Sarà facile modificarlo tra 6 mesi?
• **Allineamento** - Rispetta i vincoli del progetto?

Questo ti mantiene nel ruolo di **architetto** invece di esecutore.`,
    why: `Quando ricevi una sola soluzione, tendi ad accettarla. Non hai confronto.

Quando ne ricevi due o più, sei costretto a pensare: quale è meglio **per il mio caso**?

Questo processo ti mantiene nel controllo delle decisioni architetturali. Evita il lock-in mentale su un solo approccio.`,
    implementation: [
      "Aggiungi 'dammi almeno 2 approcci diversi' alle richieste importanti",
      "Per ogni approccio, chiedi pro e contro espliciti",
      "Valuta ogni alternativa sui tuoi criteri, non su quelli dell'AI",
      "Scegli consapevolmente, documentando il perché",
      "Le alternative scartate possono tornare utili se cambiano i requisiti"
    ],
    codeExample: {
      code: `// RICHIESTA EFFICACE
"Per validare email, dammi almeno 2 approcci diversi
con pro e contro di ciascuno."

// RISPOSTA TIPICA:

// APPROCCIO 1: Regex semplice
// Pro: veloce, zero dipendenze, leggibile
// Contro: non copre tutti i casi RFC 5322

// APPROCCIO 2: Libreria validator.js
// Pro: validazione RFC completa, testata, mantenuta
// Contro: dipendenza esterna, overkill per casi semplici

// APPROCCIO 3: API di verifica email
// Pro: verifica esistenza reale del dominio
// Contro: richiede rete, latenza, costo

// ORA PUOI DECIDERE:
// - Prototipo? → Regex semplice
// - Produzione con form? → Libreria
// - Produzione critica? → Libreria + API`,
      language: "typescript",
      filename: "alternatives-example.md"
    },
    rule: {
      text: "Una sola soluzione è una non-scelta. Chiedi sempre alternative per mantenere il controllo architetturale."
    },
    keyPoints: [
      "Sempre almeno 2 approcci per decisioni importanti",
      "Valuta su criteri tuoi: semplicità, leggibilità, manutenibilità",
      "Scegli consapevolmente, documentando il perché",
      "Le alternative scartate sono backup per cambi futuri",
      "Tu sei l'architetto, l'AI propone opzioni"
    ],
    commonMistakes: [
      "Accettare la prima soluzione senza chiedere alternative",
      "Non valutare le alternative sui propri criteri",
      "Scegliere sempre la 'più elegante' invece della più adatta",
      "Non documentare perché si è scelta un'alternativa"
    ]
  },
  {
    id: 10,
    number: 10,
    icon: PackageCheck,
    title: "Consolidare solo ciò che è compreso",
    subtitle: "Zero codice magico nel progetto",
    description: `Integra nel tuo progetto **solo** codice che:

• **Sai spiegare** - Potresti descriverlo a un collega
• **Sai modificare** - Potresti cambiarlo se servisse
• **Sai difendere in review** - Potresti giustificare ogni scelta

Tutto il resto:
• Resta fuori dal progetto
• Viene riscritto finché lo capisci
• Viene scartato in favore di alternative comprensibili`,
    why: `Il codice "magico" - che funziona ma non capisci - è **debito tecnico immediato**.

Non è debito che accumuli nel tempo. È debito che hai dal momento in cui lo incolli.

Ogni riga magica:
• Rallenterà il debugging
• Bloccherà le modifiche
• Creerà dipendenza dall'AI per ogni cambiamento`,
    implementation: [
      "Prima di committare, rileggiti tutto il codice nuovo",
      "Per ogni blocco: 'saprei spiegarlo in review?' Se no, non committare",
      "Il codice che non capisci va in un file separato 'to_review'",
      "Dedica tempo a capire il codice 'to_review' o a riscriverlo",
      "Mai pushare codice con parti che 'lasci per dopo'"
    ],
    comparison: {
      wrong: [
        "\"Non capisco ma funziona, lo pusho\" - debito tecnico istantaneo",
        "\"Lo capirò quando dovrò modificarlo\" - sarà troppo tardi",
        "\"È pattern standard, non serve capire\" - sì, serve",
        "\"L'AI lo ha scritto, sarà giusto\" - fiducia mal riposta"
      ],
      correct: [
        "\"Posso spiegare ogni riga a un collega\"",
        "\"So cosa modificare se cambiano i requisiti\"",
        "\"Posso giustificare ogni scelta in review\"",
        "\"Se si rompe, so dove cercare il problema\""
      ]
    },
    rule: {
      text: "Il codice 'magico' è debito tecnico immediato. Se non lo capisci, non lo mergi. Zero eccezioni.",
      warning: true
    },
    keyPoints: [
      "Tre criteri: spiegare, modificare, difendere in review",
      "Zero codice magico nel branch principale",
      "Il codice non compreso va in quarantena finché non lo capisci",
      "Meglio meno codice che capisci che più codice che non capisci",
      "La vera ownership è la comprensione, non il commit"
    ],
    commonMistakes: [
      "Committare codice 'da capire dopo' - non succede mai",
      "Fidarsi che 'l'AI sa cosa fa' - non è responsabilità dell'AI",
      "Pushare in fretta per 'finire' - il debito costa più della fretta",
      "Pensare che 'funziona' = 'va bene' - sono due cose diverse"
    ]
  }
];
