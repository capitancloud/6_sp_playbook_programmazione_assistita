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
    description: `Prima di scrivere qualsiasi prompt o riga di codice, fermati e scrivi una frase che inizi con "Devo risolvere il problema di…". Sembra banale, ma questo semplice esercizio è incredibilmente potente. Ti obbliga a nominare il problema, non la soluzione. La differenza è cruciale: se parti dalla soluzione ("voglio usare una regex") ti sei già vincolato a un approccio specifico. Se parti dal problema ("devo validare che l'input sia un'email valida") lasci spazio a soluzioni migliori che potresti non aver considerato.

Questo step impedisce all'AI di guidare la direzione del lavoro. Quando non hai chiaro il problema, tendi a fare domande vaghe e l'AI risponde con soluzioni generiche che potrebbero non essere adatte al tuo caso specifico. Inoltre, se il problema cambia durante lo sviluppo (e succede spesso), te ne accorgi subito perché hai quella frase scritta da confrontare.`,
    why: "Quando non definisci chiaramente il problema, l'AI diventa il pilota invece del copilota. Ti propone soluzioni che sembrano ragionevoli ma che potrebbero non risolvere ciò che davvero ti serve. Scrivere il problema in una frase semplice è un test di comprensione: se non riesci a farlo, significa che non hai ancora capito cosa stai cercando di risolvere.",
    implementation: [
      "Apri un file di note, un documento o anche un foglio di carta. L'importante è scrivere, non solo pensare.",
      "Scrivi la frase: 'Devo risolvere il problema di...' e completala con parole tue, senza tecnicismi.",
      "Rileggi la frase: è chiara? Un non-tecnico capirebbe qual è il problema? Se no, riscrivi.",
      "Tieni questa frase visibile durante tutta la sessione. Quando senti di star divagando, torna a leggerla.",
      "Se durante il lavoro il problema cambia, aggiorna la frase. Non barare con te stesso."
    ],
    codeExample: {
      code: `// ❌ APPROCCIO SBAGLIATO - Partire dalla soluzione
"Voglio usare regex per validare le email"
"Devo implementare un middleware Express"
"Voglio usare una libreria di validazione"

// Perché è sbagliato?
// Ti sei già vincolato a una soluzione specifica
// L'AI ottimizzerà per quella soluzione, non per il tuo problema reale

// ✅ APPROCCIO CORRETTO - Partire dal problema
"Devo risolvere il problema di validare input utente 
evitando crash e comportamenti indefiniti quando 
l'utente inserisce dati malformati nel form di registrazione."

// Perché funziona meglio?
// - Descrive IL PROBLEMA, non una possibile soluzione
// - Lascia spazio a soluzioni che non avevi considerato
// - L'AI può proporre approcci diversi (regex, libreria, API, ...)
// - Puoi valutare le proposte rispetto al problema, non alla soluzione`,
      language: "typescript",
      filename: "problem-first-approach.md"
    },
    rule: {
      text: "Se non riesci a scrivere questa frase in modo semplice, non hai ancora capito il problema. Fermati e rifletti prima di procedere.",
      warning: true
    },
    keyPoints: [
      "Il problema viene SEMPRE prima della soluzione - mai il contrario",
      "Una frase semplice rivela quanto hai realmente capito del problema",
      "L'AI non deve guidare la direzione: tu definisci il problema, lei propone soluzioni",
      "Se il problema cambia, la frase ti permette di accorgertene subito",
      "Questo step richiede 2 minuti ma ti fa risparmiare ore di lavoro inutile"
    ],
    commonMistakes: [
      "Saltare questo step perché 'tanto so cosa devo fare' - è proprio quando pensi di saperlo che sbagli di più",
      "Scrivere la soluzione invece del problema: 'Devo usare React Query' invece di 'Devo gestire lo stato dei dati dal server'",
      "Scrivere frasi troppo tecniche che nascondono il problema reale dietro gergo",
      "Non aggiornare la frase quando il problema evolve durante la sessione"
    ]
  },
  {
    id: 2,
    number: 2,
    icon: Target,
    title: "Obiettivo tecnico esplicito",
    subtitle: "Definisci quando hai finito",
    description: `Subito dopo aver definito il problema, devi rispondere a una domanda fondamentale: "Come faccio a sapere quando ho finito?". Sembra ovvio, ma la maggior parte delle sessioni di lavoro infinite nasce proprio dalla mancanza di questa risposta. Usa il formato: "È finito quando…" e completa con comportamenti osservabili e verificabili.

Questo obiettivo diventa tre cose contemporaneamente: il tuo criterio di accettazione (sai esattamente cosa deve funzionare), il tuo filtro contro lo scope creep (se qualcosa non serve a raggiungere l'obiettivo, non lo fai), e il tuo metro di giudizio per le proposte dell'AI (ogni suggerimento va valutato rispetto a questo obiettivo).

La chiave è la verificabilità: a fine sessione, guardando il risultato, devi poter dire con certezza "funziona" o "non funziona". Se la risposta è "dipende" o "più o meno", l'obiettivo era troppo vago.`,
    why: "Senza un criterio chiaro di completamento, il lavoro non finisce mai. C'è sempre qualcosa da migliorare, un caso edge da gestire, un refactoring da fare. L'obiettivo esplicito ti dà il permesso di fermarti. Ti dice: 'Quando questa condizione è vera, hai finito. Puoi smettere.' Senza questo, rischi di lavorare all'infinito o di accettare soluzioni incomplete perché non sai cosa significhi 'completo'.",
    implementation: [
      "Prendi il problema che hai definito nello step precedente",
      "Scrivi: 'È finito quando...' e completa con UN comportamento osservabile",
      "Fai il test del sì/no: a fine sessione, guardando il risultato, puoi dire chiaramente 'funziona' o 'non funziona'?",
      "Se la risposta è 'dipende', l'obiettivo è ancora troppo vago. Riformula con più precisione.",
      "Scrivi l'obiettivo nel file di sessione, subito sotto la definizione del problema"
    ],
    comparison: {
      wrong: [
        "\"Voglio che funzioni bene\" - cosa significa 'bene'? Non è misurabile",
        "\"Deve essere robusto\" - robusto rispetto a cosa? Troppo vago",
        "\"Tipo quello che fa la libreria X\" - stai delegando la definizione a qualcun altro",
        "\"Quando mi sembra ok\" - le sensazioni non sono criteri oggettivi"
      ],
      correct: [
        "\"È finito quando validateEmail('test@example.com') ritorna true\"",
        "\"È finito quando validateEmail('invalid') ritorna { valid: false, error: 'FORMAT' }\"",
        "\"È finito quando tutti e 5 i test case nella lista passano\"",
        "\"È finito quando il tempo di risposta medio è sotto i 100ms su 1000 richieste\""
      ]
    },
    rule: {
      text: "Se non puoi dire chiaramente quando fermarti, non ti fermerai mai. L'obiettivo esplicito è il tuo permesso di smettere.",
      warning: true
    },
    keyPoints: [
      "L'obiettivo deve essere MISURABILE: sì/no, passa/non passa, funziona/non funziona",
      "Comportamenti osservabili, non sensazioni o intenzioni vaghe",
      "Diventa il tuo scudo contro lo scope creep: se non serve all'obiettivo, non lo fai",
      "Ti permette di valutare oggettivamente le proposte dell'AI",
      "A fine sessione sai con certezza se hai raggiunto l'obiettivo o no"
    ],
    commonMistakes: [
      "Obiettivi che descrivono attività ('refactorare il modulo') invece di risultati ('il modulo fa X')",
      "Obiettivi troppo ambiziosi per una singola sessione - meglio piccoli e completabili",
      "Cambiare obiettivo a metà sessione senza rendersene conto",
      "Usare parole vaghe come 'migliorare', 'ottimizzare', 'sistemare' senza definire cosa significano"
    ]
  },
  {
    id: 3,
    number: 3,
    icon: FileInput,
    title: "Input chiaramente definiti",
    subtitle: "Spiega come a un junior",
    description: `Prima di scrivere qualsiasi codice, elenca tutti gli input che la tua funzione, componente o sistema riceverà. Fallo come se dovessi spiegarli a un junior developer che non conosce il progetto. Per ogni input, specifica tre cose: il tipo (stringa, numero, oggetto, array...), il formato (se è una stringa, che formato ha? email? data ISO? JSON?), e i limiti (lunghezza massima, range di valori, può essere null?).

Perché questo step è così importante? L'AI ha una tendenza naturale a inventare assunzioni sugli input. Se non specifichi che l'email può essere null, l'AI assumerà che non lo sia mai. Se non dici che l'età deve essere tra 0 e 120, l'AI potrebbe generare codice che accetta -5 o 999. Ogni assunzione implicita è un bug in attesa di manifestarsi.

Definire gli input in modo esplicito trasforma queste assunzioni nascoste in decisioni consapevoli. E quando qualcosa va storto, sai esattamente dove guardare.`,
    why: "L'AI tende a riempire i vuoti con assunzioni ragionevoli ma potenzialmente sbagliate. Non sa che nel tuo sistema le email possono arrivare in maiuscolo, o che i numeri di telefono includono il prefisso internazionale, o che certi campi possono essere null in casi specifici. Se non glielo dici, assumerà il caso più comune - che potrebbe non essere il tuo caso.",
    implementation: [
      "Elenca OGNI input che la tua funzione/componente riceverà",
      "Per ogni input, scrivi il TIPO: string, number, boolean, object, array, Date...",
      "Per ogni input, scrivi il FORMATO se applicabile: email, UUID, ISO date, URL...",
      "Per ogni input, scrivi i LIMITI: min/max length, range numerico, valori permessi",
      "Per ogni input, specifica se può essere NULL o UNDEFINED",
      "Aggiungi un ESEMPIO concreto per ogni input"
    ],
    codeExample: {
      code: `// TEMPLATE PER DEFINIRE GLI INPUT
// Usa questo formato prima di iniziare a codificare

interface UserRegistrationInput {
  // Campo: email
  // Tipo: string
  // Formato: RFC 5322 email (user@domain.tld)
  // Limiti: max 255 caratteri, lowercase, no spazi
  // Nullable: NO
  // Esempio: "mario.rossi@example.com"
  email: string;

  // Campo: password  
  // Tipo: string
  // Formato: testo libero
  // Limiti: min 8 caratteri, max 128, almeno 1 numero e 1 maiuscola
  // Nullable: NO
  // Esempio: "SecurePass123"
  password: string;

  // Campo: age
  // Tipo: number (integer)
  // Formato: anni compiuti
  // Limiti: 13-120 (minori non ammessi, ultracentenari rari ma possibili)
  // Nullable: SÌ (campo opzionale)
  // Esempio: 28
  age?: number;

  // Campo: referralCode
  // Tipo: string
  // Formato: codice alfanumerico uppercase
  // Limiti: esattamente 8 caratteri, solo A-Z e 0-9
  // Nullable: SÌ
  // Esempio: "FRIEND23"
  referralCode?: string;
}

// Questo livello di dettaglio PREVIENE i bug
// L'AI sa esattamente cosa aspettarsi`,
      language: "typescript",
      filename: "input-definition-template.ts"
    },
    rule: {
      text: "Ogni input non definito è una fonte di bug futuri. L'AI riempirà i vuoti con assunzioni - assicurati che siano le TUE assunzioni."
    },
    keyPoints: [
      "Tipo + formato + limiti per OGNI input, nessuna eccezione",
      "Previeni le assunzioni implicite dell'AI specificando tutto",
      "Documenta i casi limite già in questa fase (null, vuoto, malformato)",
      "Un esempio concreto vale più di mille parole",
      "Questo documento diventa anche la tua documentazione"
    ],
    commonMistakes: [
      "Assumere che l'AI 'capirà' cosa intendi - non lo farà, specifica tutto",
      "Dimenticare i casi null/undefined - sono spesso la fonte principale di bug",
      "Non specificare i limiti: 'una stringa' non basta, serve 'stringa max 255 caratteri'",
      "Saltare questo step per 'risparmiare tempo' - lo pagherai in debugging"
    ]
  },
  {
    id: 4,
    number: 4,
    icon: FileOutput,
    title: "Output atteso senza ambiguità",
    subtitle: "Comportamento, non solo tipo",
    description: `Definire l'output non significa solo dire "ritorna un boolean". Significa descrivere il COMPORTAMENTO completo della funzione in ogni scenario possibile. Quando ritorna true? Quando ritorna false? Può lanciare eccezioni? Quali? Ha side effect come logging, modifiche al database, invio di notifiche?

Pensa all'output come a un contratto: "Se mi dai questo input, ti garantisco questo output in queste condizioni". Più il contratto è preciso, meno ambiguità ci saranno nelle soluzioni proposte dall'AI.

Il problema principale con output mal definiti è che l'AI produrrà codice che funziona "quasi sempre" ma fallisce in modi sottili. Ritorna true quando dovrebbe ritornare un oggetto errore. Non logga quando dovrebbe. Modifica stato che non doveva toccare. Questi bug sono difficilissimi da trovare perché il codice sembra funzionare.`,
    why: "Se l'output non è chiaro, ogni soluzione dell'AI sarà 'quasi giusta' ma mai completamente corretta. L'AI ottimizza per ciò che capisce dalle tue istruzioni. Se le istruzioni sono ambigue, la soluzione sarà ambigua. Definire l'output in modo preciso elimina l'ambiguità e produce codice che fa esattamente quello che ti aspetti.",
    implementation: [
      "Descrivi il valore di ritorno con il suo SIGNIFICATO SEMANTICO, non solo il tipo",
      "Elenca TUTTI i possibili valori di ritorno e quando si verificano",
      "Specifica OGNI eccezione che può essere lanciata e in quali condizioni",
      "Documenta OGNI side effect: logging, scritture DB, eventi, notifiche, modifiche stato",
      "Se la funzione è asincrona, descrivi cosa succede durante l'attesa e cosa al completamento",
      "Includi esempi concreti di input → output per i casi principali"
    ],
    checklist: {
      title: "Checklist per Output Completo",
      items: [
        "Valore di ritorno: tipo E significato (non solo 'boolean' ma 'true se valido, false se invalido')",
        "Ogni caso di errore: quale eccezione, quando, con quale messaggio",
        "Side effect di scrittura: database, file system, cache, stato globale",
        "Side effect di lettura: da dove legge dati? Può fallire?",
        "Logging: cosa viene loggato, a quale livello (debug, info, error)",
        "Eventi emessi: quali eventi, con quali payload",
        "Comportamento asincrono: Promise, callback, timeout, retry"
      ]
    },
    rule: {
      text: "Se l'output non è chiaro, ogni soluzione dell'AI sarà 'quasi giusta'. 'Quasi' non è abbastanza.",
      warning: true
    },
    keyPoints: [
      "Output = COMPORTAMENTO completo, non solo tipo di ritorno",
      "Side effect devono essere documentati esplicitamente",
      "Ogni eccezione possibile deve essere prevista e descritta",
      "Esempi concreti input → output chiariscono meglio di mille parole",
      "Il contratto di output diventa la base per i test"
    ],
    commonMistakes: [
      "Dire solo il tipo ('ritorna boolean') senza il significato ('true = valido, false = invalido')",
      "Dimenticare i side effect: logging, modifiche DB, eventi - sono parte dell'output",
      "Non specificare le eccezioni: quando fallisce? Con quale messaggio? Cosa fare?",
      "Assumere che l'AI capirà il comportamento 'ovvio' - niente è ovvio per l'AI"
    ]
  },
  {
    id: 5,
    number: 5,
    icon: AlertTriangle,
    title: "Casi limite individuati",
    subtitle: "I bug vivono ai margini",
    description: `L'AI è bravissima a gestire il "caso felice" - quello dove tutto funziona come previsto. Ma i bug reali non vivono lì. Vivono ai margini: input null quando non te lo aspetti, stringhe vuote che sembrano valide, numeri che sono tecnicamente corretti ma semanticamente impossibili (età = -5, data di nascita nel futuro).

Prima di iniziare a codificare, scrivi almeno tre casi problematici che il tuo codice dovrà gestire. Non devono essere casi probabili - devono essere casi possibili. Se è possibile che qualcuno passi null, devi decidere cosa fare. Se è possibile che la stringa sia vuota, devi gestirlo.

Questo esercizio ti costringe a pensare come un tester, non come uno sviluppatore ottimista. E quando chiedi all'AI di scrivere codice, puoi esplicitamente dire: "deve gestire anche questi casi limite".`,
    why: "L'AI spesso ottimizza per il caso medio, quello dove tutti gli input sono perfetti e tutto funziona. Ma nel mondo reale gli utenti inseriscono dati sbagliati, le API restituiscono errori, i database sono temporaneamente irraggiungibili. Se non pensi a questi casi prima, li scoprirai in produzione - nel modo peggiore.",
    implementation: [
      "Prendi la lista degli input che hai definito nello step 3",
      "Per OGNI input, chiediti: cosa succede se è null? vuoto? malformato?",
      "Scrivi almeno 3 casi limite specifici per questa funzione",
      "Per ogni caso limite, decidi: deve fallire? con quale errore? o deve gestirlo silenziosamente?",
      "Includi questi casi limite quando fai richieste all'AI",
      "Questi casi limite diventeranno i tuoi test"
    ],
    keyPoints: [
      "Input null, undefined, o completamente mancante - cosa succede?",
      "Stringa vuota '' vs stringa con solo spazi '   ' - sono diversi?",
      "Array vuoto [] vs array con un solo elemento [x] - comportamento diverso?",
      "Numero zero vs numero negativo - entrambi validi? entrambi errore?",
      "Date al limite: 1 gennaio 1900, 31 dicembre 2099 - funzionano?",
      "Unicode, emoji, caratteri speciali: 'José', '日本語', '🎉' - gestiti?",
      "Formato corretto ma valore impossibile: 32 gennaio, età 500, email @@@.com"
    ],
    rule: {
      text: "Se non pensi ai casi limite prima di codificare, li scoprirai in produzione. E in produzione costano 100x di più da sistemare.",
      warning: true
    },
    commonMistakes: [
      "Pensare 'nessuno passerà mai null qui' - qualcuno lo farà, garantito",
      "Confondere 'improbabile' con 'impossibile' - se è possibile, va gestito",
      "Gestire i casi limite dopo, come 'fix' - è molto più costoso",
      "Fidarsi che l'AI penserà ai casi limite - raramente lo fa senza che glielo chiedi"
    ]
  },
  {
    id: 6,
    number: 6,
    icon: Lock,
    title: "Vincoli noti",
    subtitle: "Cosa non può cambiare",
    description: `Ogni progetto ha vincoli: il linguaggio è già deciso, certe librerie sono vietate, la performance deve essere sotto una certa soglia, deve funzionare su browser vecchi, deve integrarsi con sistemi legacy. Questi vincoli non sono negoziabili - e l'AI non li conosce a meno che tu non glieli dica.

Se non dichiari i vincoli, l'AI ti proporrà soluzioni perfettamente ragionevoli che però non puoi usare. Ti suggerirà Python quando devi usare Java. Proporrà librerie che la tua azienda ha vietato. Genererà codice che richiede Node 20 quando sei bloccato su Node 16. E tu perderai tempo a spiegare perché non puoi usare quella soluzione, per poi ricominciare da capo.

Dichiarare i vincoli in anticipo elimina questo ciclo di frustrazioni. L'AI lavora entro i confini che hai definito, producendo soluzioni immediatamente utilizzabili.`,
    why: "Un vincolo non dichiarato è un vincolo che verrà violato. L'AI non può leggere nel pensiero e non conosce il contesto del tuo progetto. Se non le dici che devi usare TypeScript strict mode, userà any ovunque. Se non le dici che la risposta deve arrivare in 50ms, ti proporrà soluzioni eleganti ma lente. Dichiarare i vincoli è rispetto per il tuo tempo futuro.",
    implementation: [
      "Elenca il linguaggio e la versione specifica (es: 'TypeScript 5.0, strict mode')",
      "Specifica framework e librerie obbligatorie o vietate",
      "Indica i requisiti di compatibilità: browser supportati, versioni Node, dispositivi",
      "Definisci i requisiti di performance: tempo di risposta, memoria, CPU",
      "Nota i vincoli di sicurezza: CORS, CSP, autenticazione richiesta",
      "Includi vincoli di business: non può dipendere da servizi a pagamento, deve funzionare offline, ecc."
    ],
    comparison: {
      wrong: [
        "L'AI suggerisce Python ma il progetto è in Java - 30 minuti persi",
        "Propone lodash ma è vietata dalle policy aziendali - devi riscrivere",
        "La soluzione richiede async/await ma devi supportare IE11 - non funziona",
        "Performance 500ms quando il requisito è 50ms - da rifare completamente"
      ],
      correct: [
        "\"Vincolo linguaggio: TypeScript 5.x, strict mode, no any\"",
        "\"Vincolo dipendenze: solo librerie già nel progetto, no nuove dipendenze\"",
        "\"Vincolo compatibilità: Node 16 LTS, Chrome/Firefox/Safari ultimi 2 anni\"",
        "\"Vincolo performance: risposta API < 100ms p99, memoria < 512MB\""
      ]
    },
    rule: {
      text: "Un vincolo non dichiarato è un vincolo che verrà violato. Dichiara tutto ciò che non è negoziabile."
    },
    keyPoints: [
      "Vincoli tecnici: linguaggio, versione, framework, librerie permesse/vietate",
      "Vincoli di compatibilità: browser, dispositivi, sistemi operativi, versioni runtime",
      "Vincoli di performance: latenza, throughput, memoria, CPU",
      "Vincoli di sicurezza: CORS, CSP, autenticazione, autorizzazione",
      "Vincoli di business: costi, licenze, dipendenze da servizi esterni"
    ],
    commonMistakes: [
      "Assumere che l'AI 'saprà' che usi TypeScript - specifica sempre",
      "Non menzionare le versioni: 'Node' non basta, serve 'Node 16.x LTS'",
      "Dimenticare i vincoli di performance finché non è troppo tardi",
      "Non dichiarare le librerie vietate - l'AI le suggerirà"
    ]
  },
  {
    id: 7,
    number: 7,
    icon: HelpCircle,
    title: "Assunzioni dichiarate",
    subtitle: "Cosa dai per scontato",
    description: `Ogni sviluppatore lavora con assunzioni implicite: "l'input sarà già validato dal frontend", "il database sarà sempre disponibile", "l'utente sarà autenticato quando arriva qui". Queste assunzioni sono spesso corrette - ma quando non lo sono, causano bug misteriosi e difficili da debuggare.

Il problema delle assunzioni implicite è che sono invisibili. Non le scrivi, non le testi, non le documenti. Quando qualcosa va storto, non pensi nemmeno di metterle in discussione perché le dai così per scontate da non ricordare che sono assunzioni.

Scrivere le assunzioni le rende visibili. Quando il codice fallisce in modo strano, puoi guardare la lista e chiederti: "quale di queste assunzioni potrebbe essere falsa?". Inoltre, puoi chiedere all'AI di validare le tue assunzioni o di sfidarle esplicitamente.`,
    why: "Le assunzioni non dichiarate sono bug in attesa di manifestarsi. Quando l'assunzione è vera, tutto funziona. Quando diventa falsa - e prima o poi succede - il codice fallisce in modi misteriosi. Scrivere le assunzioni ti dà una checklist di 'dove guardare quando qualcosa non funziona'. Vale oro durante il debugging.",
    implementation: [
      "Prima di codificare, fermati e chiediti: 'cosa sto dando per scontato?'",
      "Scrivi ogni assunzione in forma esplicita: 'Assumo che X sia sempre vero'",
      "Per ogni assunzione, scrivi cosa succederebbe se fosse falsa",
      "Decidi: devo validare questa assunzione nel codice? O posso davvero darla per scontata?",
      "Condividi le assunzioni con l'AI: 'Sto assumendo che X. È un'assunzione ragionevole?'",
      "Quando il codice fallisce, la prima cosa da fare è verificare le assunzioni"
    ],
    codeExample: {
      code: `/* ============================================
   ASSUNZIONI PER QUESTA IMPLEMENTAZIONE
   ============================================
   
   Leggi questa lista quando qualcosa non funziona!
   
   1. ASSUNZIONE: L'input arriva già sanitizzato dal middleware
      Se falsa: aggiungere validazione/sanitizzazione in entrata
      Verificata: sì, middleware validationMiddleware.ts linea 45
   
   2. ASSUNZIONE: Il database è sempre disponibile e risponde
      Se falsa: implementare retry logic e fallback
      Verificata: no, assumiamo uptime 99.9%
   
   3. ASSUNZIONE: Il contesto è single-thread (no race condition)
      Se falsa: aggiungere locking/mutex sui dati condivisi
      Verificata: sì, Node.js event loop è single-threaded
   
   4. ASSUNZIONE: L'utente è già autenticato quando arriva qui
      Se falsa: verificare token JWT prima di procedere
      Verificata: sì, route protetta da authMiddleware
   
   5. ASSUNZIONE: I dati nel cache sono sempre validi
      Se falsa: implementare cache invalidation
      Verificata: no, TTL 5 minuti, possibile stale data
   
   ============================================ */

// Quando qualcosa si rompe in modo strano,
// torna qui e verifica ogni assunzione.
// Una di queste sarà diventata falsa.`,
      language: "typescript",
      filename: "assumptions-checklist.ts"
    },
    rule: {
      text: "Le assunzioni non dichiarate sono bug in attesa. Scriverle ti dice dove guardare quando qualcosa non funziona."
    },
    keyPoints: [
      "Ogni assunzione può essere sbagliata - anche quelle 'ovvie'",
      "Documentarle crea una checklist per il debugging",
      "Puoi chiedere all'AI di sfidare le tue assunzioni",
      "Quando un'assunzione diventa falsa, il codice fallisce in modi misteriosi",
      "Le assunzioni verificate sono meglio di quelle solo 'ragionevoli'"
    ],
    commonMistakes: [
      "Non scrivere le assunzioni perché 'sono ovvie' - ovvie per te, non per il debug futuro",
      "Assumere senza verificare: 'il middleware valida tutto' - davvero? hai controllato?",
      "Non aggiornare le assunzioni quando il contesto cambia",
      "Ignorare le assunzioni durante il debugging - sono spesso la causa del problema"
    ]
  },
  {
    id: 8,
    number: 8,
    icon: Ban,
    title: "Cosa NON va fatto",
    subtitle: "Esclusioni esplicite",
    description: `Definire cosa NON farai è altrettanto importante - forse più importante - che definire cosa farai. Ogni sessione di lavoro ha una tendenza naturale ad espandersi: "già che ci sono, aggiungo anche...", "l'AI ha suggerito questa feature extra, sembra utile...", "potrei ottimizzare anche...".

Questo è lo scope creep, ed è il killer silenzioso della produttività. Trasforma sessioni di 30 minuti in maratone di 4 ore. Ti fa perdere il focus sull'obiettivo originale. Ti lascia con codice mezzo finito su tre fronti diversi.

La lista delle esclusioni è il tuo scudo. Quando l'AI suggerisce qualcosa di interessante ma fuori scope, guardi la lista e dici: "No, questo è esplicitamente escluso per questa sessione". Quando il tuo cervello inizia a divagare, la lista ti riporta al focus. Non è rigidità - è disciplina che protegge il tuo tempo.`,
    why: "Decidere cosa NON fare è più importante che decidere cosa fare. Le possibilità sono infinite, il tempo no. Senza esclusioni esplicite, ogni sessione tende ad espandersi fino a riempire tutto il tempo disponibile - e anche oltre. La lista delle esclusioni ti dà il permesso di dire 'no' - all'AI, a te stesso, alle idee interessanti ma distraenti.",
    implementation: [
      "Prima di iniziare, scrivi almeno 3 cose che NON farai in questa sessione",
      "Includi le 'tentazioni comuni': ottimizzazioni premature, refactoring non richiesto, feature extra",
      "Sii specifico: non 'niente extra' ma 'niente UI', 'niente test', 'niente documentazione'",
      "Tieni la lista visibile durante la sessione",
      "Quando l'AI suggerisce qualcosa nella lista, rispondi esplicitamente: 'No, fuori scope'",
      "Le cose escluse possono diventare l'obiettivo della prossima sessione"
    ],
    checklist: {
      title: "Template Esclusioni (personalizza per ogni sessione)",
      items: [
        "Niente UI/frontend in questa iterazione - solo logica backend",
        "Niente ottimizzazioni performance - prima deve funzionare",
        "Niente supporto a formati/casi extra non nei requisiti",
        "Niente refactoring di codice esistente che già funziona",
        "Niente gestione di edge case improbabili - solo casi realistici",
        "Niente documentazione estesa - solo commenti essenziali nel codice"
      ]
    },
    rule: {
      text: "Decidere cosa NON fare è più importante che decidere cosa fare. La lista delle esclusioni è il tuo scudo contro lo scope creep.",
      warning: true
    },
    keyPoints: [
      "Protegge dallo scope creep che uccide la produttività",
      "Ti dà il 'permesso' di dire no all'AI quando suggerisce extra",
      "Mantiene il focus sull'obiettivo della sessione",
      "Le esclusioni di oggi possono essere gli obiettivi di domani",
      "Non è rigidità, è disciplina che protegge il tuo tempo"
    ],
    commonMistakes: [
      "Non avere una lista: ogni cosa interessante diventa una tentazione",
      "Lista troppo vaga: 'niente extra' non funziona, serve 'niente X, Y, Z'",
      "Ignorare la lista perché 'ci vuole un attimo' - non è mai un attimo",
      "Sentirsi in colpa a dire no a idee interessanti - le farai dopo, non ora"
    ]
  },
  {
    id: 9,
    number: 9,
    icon: Gauge,
    title: "Livello di qualità accettabile",
    subtitle: "Prototipo, produzione o esperimento?",
    description: `Non tutto il codice richiede lo stesso livello di qualità. Un prototipo per validare un'idea può essere scritto in modo rapido e sporco. Codice di produzione che gestirà dati reali di utenti reali richiede test, error handling, documentazione. Un esperimento per capire se un approccio funziona può fallire - anzi, deve poter fallire velocemente.

Il problema nasce quando non scegli esplicitamente il livello. Finisci per trattare un prototipo con la cura del codice di produzione (overengineering, spreco di tempo) o peggio, per trattare codice di produzione come un prototipo (bug in prod, utenti arrabbiati, notti insonni).

Scegliere il livello prima di iniziare calibra le aspettative tue e dell'AI. Un prompt che inizia con "Questo è un prototipo, non servono test" produce codice molto diverso da "Questo va in produzione, servono test completi e error handling robusto".`,
    why: "Trattare un prototipo come produzione causa overengineering - perdi ore su qualità che non serve. Trattare produzione come prototipo causa disastri - bug, downtime, dati persi. L'unico modo per evitare entrambi è scegliere esplicitamente il livello PRIMA di iniziare, non durante o dopo.",
    implementation: [
      "Prima di ogni sessione, scegli esplicitamente: 🧪 Prototipo, 🚀 Produzione, o 🔬 Esperimento",
      "Comunica la scelta all'AI nel primo prompt: 'Questo è un prototipo, qualità minima'",
      "Per ogni livello, sappi cosa include e cosa esclude (vedi sotto)",
      "Non cambiare livello a metà sessione - se serve più qualità, fallo nella prossima sessione",
      "Documenta il livello scelto nel file di sessione"
    ],
    comparison: {
      wrong: [
        "Tratti un prototipo come produzione → overengineering, settimane per una demo",
        "Tratti produzione come prototipo → bug in prod, utenti arrabbiati, escalation",
        "Aggiungi test a un esperimento che butterai → tempo perso",
        "Zero test in produzione perché 'è urgente' → debito tecnico infinito"
      ],
      correct: [
        "\"🧪 Prototipo: codice minimal che dimostra l'idea, zero test, niente error handling\"",
        "\"🚀 Produzione: test unitari, error handling completo, logging, documentazione\"",
        "\"🔬 Esperimento: voglio capire se l'approccio funziona, può fallire, imparo qualcosa\"",
        "\"MVP: funzionalità base funzionante, test solo sui path critici, refactor dopo validazione\""
      ]
    },
    rule: {
      text: "Se non scegli il livello di qualità, lo sceglierà l'ansia - e sceglierà sempre il livello sbagliato."
    },
    keyPoints: [
      "🧪 Prototipo: funziona per la demo, codice usa-e-getta, zero test, zero docs",
      "🚀 Produzione: test completi, error handling robusto, logging, documentato, review",
      "🔬 Esperimento: esplorativo, può (deve?) fallire velocemente, focus su apprendimento",
      "Il livello si sceglie PRIMA, non durante o dopo",
      "Comunicare il livello all'AI cambia radicalmente il codice prodotto"
    ],
    commonMistakes: [
      "Non scegliere: lasci che l'ansia decida, finisci con qualità incoerente",
      "Cambiare livello a metà: 'ok facciamo prototipo... ma aggiungiamo test... e error handling...'",
      "Vergognarsi del prototipo: se è un prototipo, DEVE essere scritto velocemente",
      "Produzione 'urgente' senza test: l'urgenza di oggi diventa l'emergenza di domani"
    ]
  },
  {
    id: 10,
    number: 10,
    icon: StopCircle,
    title: "Punto di stop definito",
    subtitle: "Quando la sessione finisce",
    description: `Questa è forse la regola più difficile da seguire, ma anche la più importante per la tua sostenibilità a lungo termine. Prima di iniziare qualsiasi sessione, devi decidere: quando mi fermo? Cosa deve essere vero perché io possa chiudere l'editor con la coscienza pulita?

Senza un punto di stop definito, le sessioni tendono a espandersi all'infinito. C'è sempre qualcosa da migliorare. L'AI può sempre suggerire un'ottimizzazione. Puoi sempre aggiungere un altro test. E prima che te ne renda conto, sono passate 4 ore e sei stanco, frustrato, e hai perso il focus.

Il punto di stop è il tuo permesso di smettere. Non è arrendersi - è disciplina. Dice: "Quando questa condizione è vera, ho finito. Non 'potrei fare di più', ho finito. Chiudo e faccio altro."`,
    why: "Una sessione senza punto di stop è una sessione che divora tempo. L'over-engineering nasce dal non saper fermarsi. La stanchezza si accumula. La qualità delle decisioni cala. E alla fine, il codice scritto nelle ultime 2 ore di una sessione infinita è quasi sempre peggiore del codice scritto nella prima ora. Definire lo stop ti protegge da te stesso.",
    implementation: [
      "Prima di iniziare, scrivi esattamente quando ti fermerai. Non 'quando avrò finito' ma criteri specifici.",
      "Definisci criteri OGGETTIVI: test che passano, feature che funziona, tempo massimo",
      "Imposta un limite di tempo O di iterazioni - quello che arriva prima",
      "Scrivi il punto di stop nel file di sessione, in modo visibile",
      "Quando raggiungi il punto di stop, FERMATI. Anche se 'potresti fare ancora una cosina'",
      "Le 'cosine' rimanenti diventano l'obiettivo della prossima sessione"
    ],
    codeExample: {
      code: `/* ============================================
   DEFINIZIONE PUNTO DI STOP
   ============================================
   
   Leggi questo quando stai per dire "ancora 5 minuti..."
   
   ✅ MI FERMO QUANDO:
   
   1. La funzione validateEmail passa questi 3 test:
      - "test@example.com" → true
      - "" → false con errore EMAIL_EMPTY
      - "invalid" → false con errore EMAIL_FORMAT
   
   2. Il codice compila senza errori TypeScript
   
   3. Ho committato con un messaggio chiaro
   
   ⏱️ LIMITI DI SICUREZZA:
   
   - Tempo massimo: 45 minuti
   - Prompt massimi: 5 richieste complesse all'AI
   - Se raggiungo uno di questi → mi fermo comunque
   
   ⚠️ REMINDER:
   
   "Ancora 5 minuti" è una bugia. 
   Se ho raggiunto il punto di stop, CHIUDO.
   Le cose rimanenti le faccio nella prossima sessione.
   
   ============================================ */`,
      language: "typescript",
      filename: "stop-criteria.ts"
    },
    rule: {
      text: "Una sessione senza punto di stop è una sessione che divora tempo. Definisci quando fermarti PRIMA di iniziare.",
      warning: true
    },
    keyPoints: [
      "Criteri oggettivi, non sensazioni: 'i test passano', non 'mi sembra ok'",
      "Limite di tempo E limite di iterazioni - quello che arriva prima",
      "Il punto di stop è il tuo PERMESSO di smettere, non una sconfitta",
      "Rispetta lo stop anche se vuoi continuare - la disciplina ti protegge",
      "Le cose rimanenti diventano l'obiettivo della prossima sessione"
    ],
    commonMistakes: [
      "'Ancora 5 minuti' - mai veri, diventano sempre 45",
      "Criteri vaghi: 'quando avrò finito' non è un criterio, è una speranza",
      "Ignorare il punto di stop perché 'ci sono quasi' - no, fermati",
      "Non avere limiti di sicurezza (tempo/iterazioni) - le sessioni esplodono"
    ]
  }
];
