import { Step } from "./mentalita";
import { Zap, ThumbsUp, HelpCircle, AlertTriangle, Expand, Shuffle, Puzzle, Bug, GitBranch, BookOpen } from "lucide-react";

export const erroriSteps: Step[] = [
  {
    id: 1,
    number: 1,
    icon: Zap,
    title: "Codice troppo veloce",
    subtitle: "Iper-produttività apparente",
    description: `**Errore:** Si produce molto codice in poco tempo, con la sensazione di essere iper-produttivi.

Questo è uno degli errori più insidiosi perché si maschera da successo. L'AI genera codice velocemente, tu lo incolli velocemente, e alla fine della sessione hai centinaia di righe. Ma quante di quelle righe capisci davvero?

**La trappola della velocità:**

La velocità di produzione non è produttività. Produttività è codice che funziona, che capisci, che puoi mantenere. Codice veloce ma non compreso è debito tecnico istantaneo.

**Il costo nascosto:**

Ogni riga non riletta è una riga che dovrai debuggare al buio. Ogni blocco non compreso è un blocco che ti esploderà in faccia quando meno te lo aspetti.`,
    why: `La velocità dell'AI crea l'illusione di produttività. Ma il codice non riletto è codice non compreso, e il codice non compreso è un bug in attesa di manifestarsi.

Il tempo "risparmiato" saltando la rilettura viene pagato con gli interessi durante il debugging.`,
    implementation: [
      "Inserisci pause obbligatorie dopo ogni risposta AI",
      "Prima di incollare: rileggi il codice una volta senza toccarlo",
      "Poi rileggilo simulando l'esecuzione mentalmente",
      "Non passare al prompt successivo senza aver capito il precedente",
      "Imposta un timer: 30 secondi di pausa minima tra risposta e incolla"
    ],
    codeExample: {
      language: "markdown",
      filename: "review-checklist.md",
      code: `# Checklist prima di incollare

□ Ho letto il codice una volta senza toccare nulla
□ Ho simulato mentalmente l'esecuzione
□ Capisco cosa fa ogni riga
□ So perché è stata fatta questa scelta
□ Sono pronto a spiegarlo a un collega

Solo dopo aver spuntato tutto: incolla.`
    },
    rule: {
      text: "Se non hai mai riletto, non hai mai programmato.",
      warning: true
    },
    keyPoints: [
      "La velocità di generazione non è produttività",
      "Ogni riga non riletta è debito tecnico",
      "Pause obbligatorie prevengono errori costosi",
      "Simulare l'esecuzione mentalmente rivela problemi"
    ],
    commonMistakes: [
      "Incollare codice appena arriva dall'AI",
      "Saltare la rilettura 'perché funziona'",
      "Misurare il successo in righe prodotte",
      "Credere che 'tanto rileggo dopo'"
    ],
    checklist: {
      title: "Prima di incollare",
      items: [
        "Ho letto il codice senza toccarlo",
        "Ho simulato l'esecuzione mentalmente",
        "Capisco cosa fa ogni riga",
        "So spiegare perché è stata fatta questa scelta"
      ]
    }
  },
  {
    id: 2,
    number: 2,
    icon: ThumbsUp,
    title: "Fidarsi del primo risultato",
    subtitle: "Il primo output viene accettato",
    description: `**Errore:** Il primo output funziona, quindi viene accettato senza ulteriori verifiche.

L'AI è brava a produrre codice che "funziona". Ma "funziona" non significa "è la soluzione migliore". Il primo risultato è quasi sempre una bozza, non un prodotto finito.

**Perché succede:**

Il primo risultato che funziona attiva il nostro bias di conferma. "Funziona = è giusto". Ma funzionare è il minimo, non l'obiettivo.

**Il costo dell'accettazione passiva:**

Accettando sempre il primo risultato, rinunci al tuo ruolo di architetto. Stai usando l'AI come scorciatoia invece che come strumento di amplificazione.`,
    why: `Il primo risultato è quasi sempre subottimale. Accettarlo senza esplorazione significa rinunciare a soluzioni migliori che esistono ma non hai cercato.

L'AI come scorciatoia produce codice mediocre. L'AI come supporto produce codice eccellente.`,
    implementation: [
      "Etichetta mentalmente: 'Prima versione = bozza'",
      "Obbligati a fare almeno UNA di queste azioni:",
      "- Chiedere un'alternativa all'AI",
      "- Chiedere una semplificazione",
      "- Riscrivere una parte a mano",
      "Non accettare MAI il primo risultato senza una di queste"
    ],
    codeExample: {
      language: "markdown",
      filename: "first-result-protocol.md",
      code: `# Protocollo "Prima Versione"

Ricevuto output dall'AI che funziona.

□ Opzione A: "Dammi un'alternativa a questo approccio"
□ Opzione B: "Semplifica questa soluzione"
□ Opzione C: Riscrivo io almeno una parte

DEVO fare almeno una di queste tre cose.
Solo dopo: valuto quale versione tenere.`
    },
    rule: {
      text: "Se accetti il primo risultato, stai usando l'AI come scorciatoia, non come supporto.",
      warning: true
    },
    keyPoints: [
      "Il primo risultato è una bozza, non il prodotto finito",
      "Chiedere alternative migliora la qualità",
      "Riscrivere a mano consolida la comprensione",
      "L'AI come supporto richiede iterazione"
    ],
    commonMistakes: [
      "Accettare il primo risultato perché 'funziona'",
      "Non esplorare alternative per 'risparmiare tempo'",
      "Credere che l'AI dia sempre la soluzione ottimale",
      "Rinunciare al ruolo di architetto"
    ],
    checklist: {
      title: "Dopo il primo risultato",
      items: [
        "Ho chiesto almeno un'alternativa",
        "Ho valutato se esiste una versione più semplice",
        "Ho riscritto almeno una parte a mano",
        "Ho scelto consapevolmente, non passivamente"
      ]
    }
  },
  {
    id: 3,
    number: 3,
    icon: HelpCircle,
    title: "Codice non compreso",
    subtitle: "Righe che 'non capisco ma funzionano'",
    description: `**Errore:** Righe di codice che "non capisco ma funzionano" vengono lasciate nel progetto.

Questo è il debito tecnico nella sua forma più pura. Codice che funziona ma non capisci è una bomba a orologeria. Non sai quando esploderà, ma esploderà.

**Perché è pericoloso:**

Quando quel codice smetterà di funzionare (e succederà), non saprai dove cercare. Quando dovrai modificarlo (e dovrai), non saprai cosa toccare. Quando un collega ti chiederà spiegazioni (e lo farà), non saprai rispondere.

**La regola non negoziabile:**

Ogni riga del tuo codice deve poter essere spiegata a voce. Se non puoi spiegarla, non è tua. E se non è tua, non dovrebbe essere nel tuo progetto.`,
    why: `Codice non compreso è debito tecnico al 100%. Oggi funziona, domani sarà la causa di bug impossibili da debuggare perché non sai nemmeno cosa quel codice dovrebbe fare.

Il tempo per capire il codice è un investimento. Il tempo per debuggare codice non compreso è una perdita.`,
    implementation: [
      "Regola rigida: ogni riga deve poter essere spiegata a voce",
      "Se non riesci a spiegarla, hai tre opzioni:",
      "- La riscrivi in modo che la capisci",
      "- La rimuovi se non è essenziale",
      "- Chiedi spiegazioni all'AI finché la capisci",
      "Non esiste l'opzione 'la lascio così'"
    ],
    codeExample: {
      language: "typescript",
      filename: "understand-or-remove.ts",
      code: `// ❌ Codice non compreso
const result = data.reduce((acc, x) => 
  ({...acc, [x.id]: x.items?.flatMap(i => 
    i.values?.filter(Boolean) ?? []) ?? []}), {});
// "Non so cosa fa ma funziona"

// ✓ Opzione 1: Riscrivi finché capisci
const result = {};
for (const item of data) {
  const values = [];
  for (const subItem of item.items ?? []) {
    for (const value of subItem.values ?? []) {
      if (value) values.push(value);
    }
  }
  result[item.id] = values;
}
// Ora so esattamente cosa fa`
    },
    rule: {
      text: "Codice non compreso oggi = bug domani.",
      warning: true
    },
    keyPoints: [
      "Ogni riga deve essere spiegabile a voce",
      "Se non capisci, riscrivi o rimuovi",
      "Chiedere spiegazioni all'AI è sempre legittimo",
      "Il tempo per capire è un investimento"
    ],
    commonMistakes: [
      "Lasciare righe 'che funzionano ma non capisco'",
      "Vergognarsi di chiedere spiegazioni",
      "Credere che 'tanto non la toccherò mai'",
      "Rimandare la comprensione a 'dopo'"
    ],
    checklist: {
      title: "Per ogni blocco di codice",
      items: [
        "So spiegare cosa fa ogni riga",
        "Capisco perché è stata fatta questa scelta",
        "Saprei modificarlo se i requisiti cambiassero",
        "Saprei debuggarlo se smettesse di funzionare"
      ]
    }
  },
  {
    id: 4,
    number: 4,
    icon: AlertTriangle,
    title: "Ignorare warning",
    subtitle: "Warning lasciati lì 'per dopo'",
    description: `**Errore:** Warning lasciati nel codice con l'intenzione di risolverli "dopo".

I warning sono segnali. Il compilatore, il linter, l'IDE ti stanno dicendo: "Qui c'è qualcosa che non torna". Ignorarli non li fa sparire. Li accumula.

**Il "dopo" che non arriva mai:**

Ogni warning ignorato è un warning dimenticato. Quando il "dopo" arriva, ci sono così tanti warning che non sai più da dove iniziare. E inizi a ignorarli tutti.

**Con l'AI è ancora peggio:**

L'AI non vede i warning del tuo IDE. Produce codice che funziona ma che genera warning. Se li ignori, le iterazioni successive produrranno altro codice con altri warning. L'effetto valanga è garantito.`,
    why: `I warning sono feedback gratuito sul tuo codice. Ignorarli significa buttare via informazioni preziose e accumulare problemi che si moltiplicano nel tempo.

Un progetto con zero warning è un progetto sotto controllo. Un progetto con warning ignorati è un progetto che sta sfuggendo di mano.`,
    implementation: [
      "Tratta i warning come errori logici: risolvili subito",
      "Se decidi di ignorare un warning, documenta il perché",
      "Usa eslint-disable con commento che spiega la ragione",
      "Mai accumulare più di 3 warning non risolti",
      "A fine sessione: zero warning o motivazione scritta per ognuno"
    ],
    codeExample: {
      language: "typescript",
      filename: "handle-warnings.ts",
      code: `// ❌ Warning ignorato senza spiegazione
// @ts-ignore
const result = unsafeOperation();

// ✓ Warning gestito con motivazione
// @ts-expect-error - API legacy non tipizzata
// TODO: Rimuovere quando migriamo a v2 (ticket: TECH-234)
const result = legacyApi.unsafeOperation();

// ✓ Meglio ancora: risolvi il warning
const result: ExpectedType = await typedApiCall();`
    },
    rule: {
      text: "Nessun warning senza motivo scritto.",
      warning: true
    },
    keyPoints: [
      "I warning sono feedback gratuito",
      "Ignorarli oggi li moltiplica domani",
      "Se ignori, documenta il perché",
      "Zero warning = progetto sotto controllo"
    ],
    commonMistakes: [
      "Lasciare warning 'per dopo'",
      "Usare @ts-ignore senza spiegazione",
      "Accumulare warning finché diventano rumore",
      "Credere che i warning non siano importanti"
    ],
    checklist: {
      title: "Gestione warning",
      items: [
        "Ogni warning è risolto o documentato",
        "Nessun @ts-ignore senza commento",
        "Massimo 3 warning non risolti per file",
        "A fine sessione: revisione warning completa"
      ]
    }
  },
  {
    id: 5,
    number: 5,
    icon: Expand,
    title: "Scope creep",
    subtitle: "Il codice cresce oltre l'obiettivo",
    description: `**Errore:** Il codice cresce oltre l'obiettivo iniziale, aggiungendo feature non pianificate.

Lo scope creep è subdolo. Inizia con "già che ci sono..." e finisce con un progetto che fa troppe cose, nessuna bene. Con l'AI è ancora più facile cadere in questa trappola: le risposte arrivano velocemente, sembra facile aggiungere "ancora una cosa".

**Come si manifesta:**

Stavi fixando un bug, ora stai refactorando un modulo intero. Stavi aggiungendo un campo, ora stai ridisegnando l'intera form. Ogni "piccola aggiunta" porta a un'altra "piccola aggiunta".

**Il costo nascosto:**

Ogni aggiunta fuori scope non ha la stessa qualità del lavoro pianificato. Non è stata pensata, non è stata progettata, non è stata testata. È debito tecnico mascherato da produttività.`,
    why: `Lo scope creep diluisce la qualità. Il lavoro pianificato ha attenzione e cura. Le aggiunte "già che ci sono" sono frettolose e superficiali.

Un obiettivo completato bene vale più di tre obiettivi completati a metà.`,
    implementation: [
      "Tieni visibile problema iniziale e obiettivo tecnico",
      "Ogni nuova idea deve rispondere a: 'Serve a raggiungere l'obiettivo?'",
      "Se la risposta è no: annota l'idea, non implementarla ora",
      "Se il problema cambia: chiudi la sessione, aprine un'altra",
      "Massimo UNA deviazione minore per sessione"
    ],
    codeExample: {
      language: "markdown",
      filename: "scope-guard.md",
      code: `# Sessione corrente
Obiettivo: Fixare bug validazione email

## ✓ In scope
- Identificare causa del bug
- Implementare fix
- Verificare che funziona

## ✗ Fuori scope (annotare per dopo)
- [ ] Refactor generale validazione
- [ ] Aggiungere validazione telefono
- [ ] Migliorare messaggi di errore

Se voglio fare qualcosa di questa lista:
STOP. Chiudo questa sessione, apro la prossima.`
    },
    rule: {
      text: "Se il problema cambia, chiudi la sessione e aprine un'altra.",
      warning: false
    },
    keyPoints: [
      "Obiettivo visibile previene deviazioni",
      "Ogni aggiunta fuori scope riduce qualità",
      "Annotare idee invece di implementarle",
      "Una sessione = un obiettivo"
    ],
    commonMistakes: [
      "Aggiungere feature 'già che ci sono'",
      "Cambiare obiettivo a metà sessione",
      "Non annotare le idee che emergono",
      "Credere che 'è veloce, lo faccio ora'"
    ],
    checklist: {
      title: "Controllo scope",
      items: [
        "L'obiettivo originale è ancora visibile",
        "Ogni modifica serve l'obiettivo",
        "Le idee fuori scope sono annotate",
        "Nessuna feature non pianificata aggiunta"
      ]
    }
  },
  {
    id: 6,
    number: 6,
    icon: Shuffle,
    title: "Refactor senza obiettivo",
    subtitle: "Refactorizzare 'perché sì'",
    description: `**Errore:** Si refactorizza senza un obiettivo chiaro, "perché il codice potrebbe essere migliore".

Il refactor è uno strumento potente, ma senza direzione diventa rimescolamento. Spostare codice da una parte all'altra senza un obiettivo chiaro non migliora nulla, aggiunge solo rischio.

**Il refactor produttivo:**

Ha un obiettivo misurabile: "ridurre duplicazione", "migliorare leggibilità di X", "separare responsabilità Y da Z". Sai cosa deve cambiare e cosa deve restare uguale.

**Il refactor improduttivo:**

"Miglioro un po' questo modulo". Cosa migliori? Come sai se hai migliorato? Quando ti fermi? Senza risposte chiare, stai solo rimescolando.`,
    why: `Il refactor senza obiettivo è attività senza direzione. Puoi passare ore a "migliorare" senza mai finire, perché non sai cosa significa "finito".

Con l'AI, il refactor non guidato produce suggerimenti che sembrano miglioramenti ma sono solo variazioni. Stile diverso, non qualità diversa.`,
    implementation: [
      "Prima di refactor: scrivi cosa vuoi migliorare",
      "Scrivi anche cosa deve restare uguale",
      "Definisci criteri di successo misurabili",
      "Esempio: 'Miglioro leggibilità senza cambiare comportamento'",
      "A fine refactor: verifica che i criteri siano soddisfatti"
    ],
    codeExample: {
      language: "markdown",
      filename: "refactor-plan.md",
      code: `# Piano Refactor: modulo validazione

## Obiettivo specifico
Separare logica di validazione da logica di formattazione errori

## Cosa deve cambiare
- [ ] Validazione in file separato
- [ ] Formattazione errori in file separato
- [ ] Zero duplicazione tra i due

## Cosa deve restare uguale
- Comportamento esterno identico
- Tutti i test esistenti passano
- API pubblica invariata

## Criterio di successo
Due file invece di uno, stessi test che passano.`
    },
    rule: {
      text: "Refactor senza obiettivo = caos elegante.",
      warning: true
    },
    keyPoints: [
      "Ogni refactor ha un obiettivo scritto",
      "Definisci cosa cambia e cosa resta uguale",
      "Criteri di successo misurabili",
      "Verifica a fine refactor"
    ],
    commonMistakes: [
      "Refactorizzare 'perché sì'",
      "Non definire quando il refactor è finito",
      "Cambiare comportamento durante refactor",
      "Refactor infiniti che non concludono"
    ],
    checklist: {
      title: "Prima del refactor",
      items: [
        "Obiettivo specifico scritto",
        "Cosa deve restare uguale definito",
        "Criteri di successo chiari",
        "Test esistenti identificati"
      ]
    }
  },
  {
    id: 7,
    number: 7,
    icon: Puzzle,
    title: "Soluzioni complesse",
    subtitle: "Accettare soluzioni troppo articolate",
    description: `**Errore:** Accettare soluzioni troppo articolate perché sembrano "professionali" o "complete".

L'AI ama le soluzioni elaborate. Pattern avanzati, astrazioni multiple, gestione di edge case che non esistono nel tuo contesto. Tutto questo sembra professionale, ma spesso è solo complessità non necessaria.

**Il test della semplicità:**

Per ogni soluzione ricevuta, chiediti: "Esiste una versione più semplice che risolve lo stesso problema?". Spesso la risposta è sì.

**Il costo della complessità:**

Ogni livello di astrazione è un costo. Ogni pattern avanzato richiede comprensione. La complessità non è un valore, è un costo che devi essere disposto a pagare solo quando ne vale la pena.`,
    why: `La complessità ha un costo di manutenzione che paghi ogni volta che tocchi quel codice. Soluzioni semplici sono più facili da capire, modificare, testare e debuggare.

L'AI tende a over-engineer. Il tuo ruolo è filtrare e semplificare.`,
    implementation: [
      "Per ogni soluzione chiediti: 'Esiste una versione più semplice?'",
      "Chiedi esplicitamente all'AI: 'Semplifica questa soluzione'",
      "Preferisci codice noioso che funziona a codice elegante complesso",
      "Se una soluzione richiede spiegazione, è troppo complessa",
      "Ogni astrazione deve giustificare il suo costo"
    ],
    codeExample: {
      language: "typescript",
      filename: "simple-wins.ts",
      code: `// ❌ Soluzione "professionale" troppo complessa
const ValidationFactory = (rules) => ({
  validate: (data) => rules.reduce((acc, rule) => 
    rule.check(data) ? acc : [...acc, rule.error], []),
  addRule: (rule) => ValidationFactory([...rules, rule])
});

// ✓ Soluzione semplice che risolve lo stesso problema
function validateEmail(email) {
  if (!email) return { valid: false, error: "Email richiesta" };
  if (!email.includes("@")) return { valid: false, error: "Email non valida" };
  return { valid: true };
}

// Stessa funzionalità, 10x più facile da capire e mantenere`
    },
    rule: {
      text: "La complessità è un costo, non un valore.",
      warning: false
    },
    keyPoints: [
      "Chiediti sempre se esiste una versione più semplice",
      "Chiedi all'AI di semplificare",
      "Codice noioso batte codice elegante",
      "Ogni astrazione deve giustificare il suo costo"
    ],
    commonMistakes: [
      "Accettare soluzioni complesse perché 'professionali'",
      "Non chiedere semplificazioni all'AI",
      "Preferire eleganza a manutenibilità",
      "Over-engineering per edge case inesistenti"
    ],
    checklist: {
      title: "Test semplicità",
      items: [
        "Ho chiesto se esiste una versione più semplice",
        "Ogni astrazione è giustificata da un uso reale",
        "Il codice non richiede spiegazione per essere capito",
        "Edge case gestiti sono edge case reali"
      ]
    }
  },
  {
    id: 8,
    number: 8,
    icon: Bug,
    title: "Debug casuale",
    subtitle: "Tentativi a caso, prompt a raffica",
    description: `**Errore:** Debugging fatto per tentativi casuali, con prompt a raffica sperando che qualcosa funzioni.

Quando qualcosa non funziona, la tentazione è bombardare l'AI di richieste: "Fixa questo", "Prova così", "E se facciamo quest'altro?". Questo approccio raramente funziona e spesso peggiora la situazione.

**Il debug metodico:**

Prima di chiedere aiuto, devi capire il problema. Qual è il punto di rottura? Quale comportamento ti aspettavi? Quale comportamento hai ottenuto? Qual è la tua ipotesi?

**Il prompt di debug efficace:**

"Questo comportamento accade quando X. Mi aspettavo Y, invece succede Z. Sospetto che il problema sia in W. Puoi verificare?"`,
    why: `Il debug casuale è rumore. Produce soluzioni che patchano sintomi invece di risolvere cause. Ogni fix casuale introduce potenziali nuovi bug.

Il debug metodico identifica la causa root e la risolve definitivamente.`,
    implementation: [
      "Prima di chiedere fix: individua il punto di rottura",
      "Descrivi: cosa ti aspettavi vs cosa succede",
      "Formula un'ipotesi su dove sta il problema",
      "Solo dopo chiedi aiuto con contesto completo",
      "Template: 'Quando X, mi aspetto Y, succede Z. Sospetto W.'"
    ],
    codeExample: {
      language: "markdown",
      filename: "debug-template.md",
      code: `# Template Debug Prompt

## ❌ Debug casuale
"Il login non funziona, fixalo"
"Ancora non funziona, prova qualcos'altro"
"Neanche questo funziona..."

## ✓ Debug metodico
"Quando clicco Login con credenziali valide:
- Mi aspetto: redirect a /dashboard
- Succede: rimango su /login con errore 'undefined'

Ho verificato:
- Le credenziali sono corrette (testato in API)
- L'errore appare nella console: 'user is undefined'

Sospetto che il problema sia nella risposta dell'auth 
che non viene parsata correttamente. Puoi verificare?"`
    },
    rule: {
      text: "Debug senza ipotesi è rumore.",
      warning: true
    },
    keyPoints: [
      "Identifica il punto di rottura prima di chiedere",
      "Descrivi comportamento atteso vs ottenuto",
      "Formula un'ipotesi",
      "Prompt strutturato produce fix migliori"
    ],
    commonMistakes: [
      "Prompt generici 'non funziona, fixalo'",
      "Tentativi a raffica senza capire il problema",
      "Non verificare le ipotesi prima di applicare fix",
      "Applicare fix senza capire cosa risolvono"
    ],
    checklist: {
      title: "Prima di chiedere debug",
      items: [
        "So qual è il punto di rottura",
        "Ho descritto comportamento atteso vs ottenuto",
        "Ho formulato un'ipotesi",
        "Il prompt include tutto il contesto necessario"
      ]
    }
  },
  {
    id: 9,
    number: 9,
    icon: GitBranch,
    title: "Architettura incoerente",
    subtitle: "Parti del codice seguono stili diversi",
    description: `**Errore:** Parti del codice seguono stili e logiche diverse, creando un progetto frammentato.

Questo succede naturalmente quando si lavora con l'AI: ogni sessione produce codice leggermente diverso. Stili diversi, pattern diversi, convenzioni diverse. Col tempo, il progetto diventa un patchwork incoerente.

**La mappa mentale:**

Per mantenere coerenza, devi avere una visione d'insieme chiara. Cosa fa ogni modulo? Chi è responsabile di cosa? Quali pattern usiamo? Senza questa mappa, ogni nuova parte "inventa" le proprie regole.

**L'effetto sul futuro:**

Un progetto incoerente è difficile da navigare, difficile da modificare, difficile da spiegare. Ogni nuovo sviluppatore (incluso te tra 6 mesi) deve reimparare le regole per ogni modulo.`,
    why: `L'incoerenza architetturale moltiplica il carico cognitivo. Invece di imparare un set di regole e applicarlo ovunque, devi ricordare regole diverse per ogni parte del progetto.

Con l'AI, l'incoerenza si amplifica: se non hai una guida chiara, ogni sessione produce variazioni.`,
    implementation: [
      "Mantieni una visione d'insieme documentata",
      "Documenta: cosa fa ogni modulo, chi è responsabile di cosa",
      "Definisci pattern standard del progetto",
      "Ogni nuova parte deve 'sentirsi a casa'",
      "Review periodiche per allineare stili divergenti"
    ],
    codeExample: {
      language: "markdown",
      filename: "architecture-map.md",
      code: `# Mappa Architettura

## Moduli e responsabilità
- /auth - Autenticazione e sessioni
- /users - Gestione profili utente
- /validation - Tutte le validazioni

## Pattern standard
- Validazione: funzioni pure che ritornano {valid, error}
- API calls: hook custom con react-query
- Stato: zustand per stato globale

## Convenzioni naming
- Componenti: PascalCase
- Hook: use* prefix
- Utilities: camelCase

Ogni nuova feature deve seguire questi pattern.`
    },
    rule: {
      text: "Ogni nuova parte deve 'sentirsi a casa' nel progetto.",
      warning: false
    },
    keyPoints: [
      "Visione d'insieme documentata",
      "Pattern standard definiti",
      "Ogni modulo ha responsabilità chiare",
      "Review periodiche per allineare stili"
    ],
    commonMistakes: [
      "Non documentare l'architettura",
      "Permettere pattern diversi per moduli simili",
      "Non fare review di coerenza",
      "Lasciare che ogni sessione 'inventi' le sue regole"
    ],
    checklist: {
      title: "Coerenza architetturale",
      items: [
        "Mappa architettura aggiornata",
        "Pattern standard documentati",
        "Nuove parti seguono pattern esistenti",
        "Review periodiche di coerenza"
      ]
    }
  },
  {
    id: 10,
    number: 10,
    icon: BookOpen,
    title: "Mai rileggere",
    subtitle: "Il codice viene scritto e mai rivisto",
    description: `**Errore:** Il codice viene scritto e mai rivisto. La "prima stesura" rimane la versione finale.

La prima versione di qualsiasi cosa è sempre migliorabile. Vale per la scrittura, vale per il design, vale per il codice. La rilettura non è un optional, è dove emerge la vera qualità.

**Il momento giusto per rileggere:**

A mente fredda, meglio se il giorno dopo. Quando rileggi subito, il tuo cervello "vede" quello che volevi scrivere, non quello che hai scritto. La distanza temporale rivela i problemi.

**Cosa fare durante la rilettura:**

Elimina ciò che non serve. Semplifica ciò che è complesso. Chiarisci ciò che è ambiguo. Ogni rilettura dovrebbe rimuovere codice, non aggiungerne.`,
    why: `La qualità del codice emerge nella rilettura, non nella prima stesura. Il codice scritto "di getto" funziona, ma raramente è chiaro, semplice e mantenibile.

La rilettura a mente fredda rivela problemi che nel momento della scrittura erano invisibili.`,
    implementation: [
      "Rilettura obbligatoria a mente fredda",
      "Ideale: il giorno dopo la scrittura",
      "Durante la rilettura: elimina, semplifica, chiarisci",
      "Ogni rilettura dovrebbe rimuovere codice",
      "Pianifica sessioni dedicate alla sola rilettura"
    ],
    codeExample: {
      language: "markdown",
      filename: "review-session.md",
      code: `# Sessione di rilettura

File da rivedere: userValidation.ts
Scritto: ieri

## Checklist rilettura

□ Leggo tutto senza modificare
□ Marco le parti che non capisco subito
□ Marco le parti che sembrano ridondanti

## Azioni
□ Elimina: codice morto, commenti obsoleti
□ Semplifica: funzioni troppo lunghe
□ Chiarisci: nomi ambigui, flussi contorti

## Risultato atteso
File più corto, più chiaro, più mantenibile.`
    },
    rule: {
      text: "La qualità emerge nella rilettura, non nella prima stesura.",
      warning: false
    },
    keyPoints: [
      "Rilettura a mente fredda è obbligatoria",
      "Il giorno dopo è il momento ideale",
      "Elimina, semplifica, chiarisci",
      "Ogni rilettura riduce il codice"
    ],
    commonMistakes: [
      "Mai rileggere il codice scritto",
      "Rileggere subito (troppo fresco)",
      "Rileggere per aggiungere invece che semplificare",
      "Non pianificare tempo per la rilettura"
    ],
    checklist: {
      title: "Sessione rilettura",
      items: [
        "Rilettura a mente fredda (giorno dopo)",
        "Prima lettura senza modifiche",
        "Identificate parti da eliminare",
        "Identificate parti da semplificare"
      ]
    }
  }
];
