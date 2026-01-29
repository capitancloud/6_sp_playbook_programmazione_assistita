import { 
  Coffee, 
  Target, 
  Trash2, 
  Palette, 
  TestTube, 
  CornerDownRight,
  FileText,
  GitCommit,
  CreditCard,
  CheckCircle,
  LucideIcon
} from "lucide-react";

export interface Step {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  why: string;
  implementation: string[];
  codeExample?: {
    language: string;
    code: string;
  };
  rule: {
    text: string;
    warning?: boolean;
  };
  keyPoints: string[];
  commonMistakes?: string[];
  checklist?: {
    question?: string;
    title: string;
    items: string[];
    warning?: boolean;
  };
}

export const consolidamentoSteps: Step[] = [
  {
    id: "rilettura-freddo",
    title: "1. Rilettura a freddo",
    icon: Coffee,
    description: "Il primo passo per consolidare il lavoro è rileggere il codice con occhi freschi. Non subito dopo aver finito, ma dopo una pausa reale che permetta al cervello di uscire dalla modalità 'creazione' e entrare in quella 'valutazione'.\n\nLa rilettura a freddo rivela ciò che a caldo sfugge: incongruenze logiche, eccessi di complessità, naming confuso, e quella sensazione sottile di 'qualcosa non mi convince' che durante la scrittura viene ignorata.\n\nQuesto passaggio è fondamentale perché con l'AI si produce molto codice velocemente, e la velocità nasconde i problemi. La distanza temporale è l'unico antidoto.",
    why: "La rilettura immediata è inefficace perché il cervello è ancora in modalità 'creazione'. Vedi quello che volevi scrivere, non quello che hai scritto. I pattern mentali sono ancora attivi e mascherano gli errori.\n\nLa distanza temporale — qualche ora, meglio il giorno dopo — permette di vedere il codice come lo vedrebbe un'altra persona. Le incongruenze saltano agli occhi, gli eccessi diventano evidenti, e quella sensazione di 'funziona ma non mi piace' trova finalmente le sue ragioni concrete.\n\nCon l'AI questo è ancora più critico: il codice generato sembra sempre ragionevole nel momento in cui lo ricevi, ma spesso nasconde problemi che emergono solo a mente fredda.",
    implementation: [
      "Non rileggere subito dopo aver finito — il cervello è ancora in modalità creazione",
      "Fai una pausa reale: cambio di contesto, altra attività, qualche ora o il giorno dopo",
      "Quando rileggi, non toccare nulla — solo osservare e capire",
      "Non correggere durante la lettura: prima capisci cosa non va, poi intervieni",
      "Annota le sensazioni: cosa ti dà fastidio? Cosa non capisci più? Cosa faresti diversamente?",
      "Obiettivo: vedere incongruenze, notare eccessi, identificare i punti deboli"
    ],
    codeExample: {
      language: "markdown",
      code: `## Protocollo rilettura a freddo

### Prima della rilettura
- [ ] Sono passate almeno 2-3 ore (meglio se il giorno dopo)?
- [ ] Ho fatto un'attività diversa nel frattempo?
- [ ] Sono in modalità "osservazione", non "correzione"?
- [ ] Ho carta e penna per annotare (non per modificare)?

### Durante la rilettura — Domande guida
1. Cosa mi sembra confuso o difficile da seguire?
2. Cosa mi sembra eccessivamente complesso?
3. Quali parti non capisco più al primo sguardo?
4. Cosa farei diversamente se ricominciassi ora?
5. Quali naming mi sembrano poco chiari?
6. Dove ho la sensazione che "qualcosa non va"?

### Dopo la rilettura
- [ ] Ho annotato tutti i punti critici senza correggerli?
- [ ] Ho resistito alla tentazione di "sistemare al volo"?
- [ ] Ho una lista chiara di cosa richiede intervento?

### Segnali d'allarme tipici
- "Non ricordo perché ho fatto così"
- "Questo sembra più complicato del necessario"
- "Funziona ma non so esattamente come"
- "L'AI ha suggerito questo ma non sono sicuro"`
    },
    rule: {
      text: "Ciò che ti dà fastidio a freddo era già un problema a caldo.",
      warning: false
    },
    keyPoints: [
      "La distanza temporale è l'unico modo per vedere i problemi reali",
      "Leggere senza modificare permette di vedere l'insieme prima dei dettagli",
      "I dubbi e le sensazioni di disagio sono segnali importanti, non rumore",
      "La fretta di correggere subito compromette la qualità dell'analisi",
      "Con l'AI si produce tanto codice: la rilettura è l'unico filtro di qualità"
    ],
    commonMistakes: [
      "Rileggere subito dopo aver finito — il cervello maschera gli errori",
      "Iniziare a correggere durante la rilettura — perdi la visione d'insieme",
      "Ignorare le sensazioni di disagio — sono quasi sempre fondate",
      "Non annotare i punti critici — li dimenticherai",
      "Pensare che 'funziona quindi va bene' — funzionare non basta"
    ],
    checklist: {
      question: "Stai rispettando la pausa prima della rilettura?",
      title: "Verifica distanza temporale",
      items: [
        "È passato abbastanza tempo dalla scrittura (ore/giorno)",
        "Ho cambiato contesto mentale (altra attività, pausa reale)",
        "Sto leggendo senza toccare il codice",
        "Sto annotando i dubbi invece di correggere subito",
        "Ho identificato le sensazioni di disagio"
      ]
    }
  },
  {
    id: "refactor-mirato",
    title: "2. Refactor mirato",
    icon: Target,
    description: "Il refactor deve essere chirurgico: intervenire solo su ciò che è emerso dalla rilettura, con un obiettivo chiaro e definito prima di iniziare.\n\nIl refactor casuale — 'già che ci sono sistemo anche questo' — è una delle principali fonti di regressioni e confusione. Ogni modifica deve avere una motivazione esplicita e un risultato misurabile.\n\nCon l'AI questo è particolarmente critico: chiedere 'migliora questo file' produce rimescolamenti che sembrano professionali ma non hanno direzione. Chiedere 'migliora il naming delle funzioni in questo modulo' produce risultati utili.",
    why: "Il refactor senza obiettivo è pericoloso perché sembra produttivo ma non lo è. Sposti codice, rinomini variabili, riorganizzi funzioni — e alla fine hai un codice diverso ma non necessariamente migliore. Peggio: potresti aver introdotto bug in codice che funzionava.\n\nIl refactor mirato invece parte da un problema specifico identificato nella rilettura: 'questo naming è confuso', 'questa funzione fa troppe cose', 'questa logica è duplicata'. L'obiettivo è chiaro, l'intervento è limitato, il risultato è verificabile.\n\nCon l'AI: se non specifichi esattamente cosa vuoi migliorare e cosa deve restare uguale, otterrai cambiamenti arbitrari che dovrai poi verificare riga per riga.",
    implementation: [
      "Refactorizza SOLO ciò che hai identificato nella rilettura a freddo",
      "Prima di iniziare, scrivi l'obiettivo: 'Miglioro X senza cambiare Y'",
      "Evita categoricamente 'già che ci sono' e 'sistemo tutto'",
      "Con l'AI: chiedi refactor su punti specifici, mai sull'intero file",
      "Dopo il refactor, verifica che l'obiettivo sia stato raggiunto",
      "Verifica che il comportamento non sia cambiato (test, esecuzione manuale)"
    ],
    codeExample: {
      language: "typescript",
      code: `// ❌ REFACTOR CASUALE — Da evitare
// Prompt: "Migliora questo codice"
// Risultato: codice completamente diverso, comportamento incerto,
// ore spese a verificare che funzioni ancora

// ✅ REFACTOR MIRATO — Approccio corretto

// OBIETTIVO SCRITTO PRIMA DI INIZIARE:
// "Miglioro naming e separo validazione da logica.
//  Il comportamento deve restare identico."

// PRIMA del refactor:
function process(d: any) {
  if (!d || !d.x) return null;
  return d.x * 2;
}

// DOPO il refactor:
interface InputData {
  value: number;
}

function isValidInput(data: unknown): data is InputData {
  return (
    data !== null && 
    typeof data === 'object' && 
    'value' in data &&
    typeof (data as InputData).value === 'number'
  );
}

function calculateDouble(data: InputData): number {
  return data.value * 2;
}

function processData(data: unknown): number | null {
  if (!isValidInput(data)) return null;
  return calculateDouble(data);
}

// VERIFICA POST-REFACTOR:
// ✓ Naming migliorato (process → processData, d → data)
// ✓ Validazione separata (isValidInput)
// ✓ Logica separata (calculateDouble)
// ✓ Comportamento identico (stesso input → stesso output)
// ✓ Obiettivo raggiunto`
    },
    rule: {
      text: "Refactor mirato migliora, refactor casuale confonde.",
      warning: false
    },
    keyPoints: [
      "Ogni refactor deve avere un obiettivo esplicito scritto PRIMA di iniziare",
      "Lavora solo sui punti specifici identificati nella rilettura",
      "Definisci cosa deve migliorare E cosa deve restare uguale",
      "Con l'AI: prompt specifici ('migliora naming') non generici ('migliora codice')",
      "Dopo ogni refactor, verifica che l'obiettivo sia stato raggiunto"
    ],
    commonMistakes: [
      "Refactorizzare 'già che ci sono' — fonte principale di regressioni",
      "Chiedere all'AI di 'migliorare tutto il file' — produce caos elegante",
      "Non definire l'obiettivo prima di iniziare — non saprai se hai finito",
      "Non verificare che il comportamento sia invariato — bug silenziosi",
      "Refactorizzare senza aver fatto la rilettura a freddo — intervieni alla cieca"
    ],
    checklist: {
      question: "Il tuo refactor ha un obiettivo chiaro e scritto?",
      title: "Verifica refactor mirato",
      items: [
        "Ho identificato il problema specifico nella rilettura",
        "Ho scritto cosa voglio migliorare",
        "Ho scritto cosa deve restare uguale",
        "Sto lavorando SOLO sui punti specifici",
        "Ho verificato che il comportamento non sia cambiato"
      ]
    }
  },
  {
    id: "pulizia",
    title: "3. Pulizia",
    icon: Trash2,
    description: "Il codice finale deve apparire intenzionale, come se ogni riga fosse stata scelta con cura. Non deve sembrare il risultato di tentativi, esperimenti e correzioni successive.\n\nLa pulizia significa eliminare tutto ciò che è temporaneo: log di debug, commenti 'TODO' dimenticati, codice commentato 'per sicurezza', prove fallite lasciate nel file. Tutto questo crea rumore che confonde chi legge — incluso te stesso tra una settimana.\n\nCon l'AI questo è particolarmente importante perché si tende a produrre molto codice velocemente, lasciando dietro detriti di ogni tentativo. La pulizia è il momento per eliminare tutto ciò che non è parte della soluzione finale.",
    why: "Il rumore nel codice ha costi nascosti ma reali. Ogni console.log dimenticato è una distrazione. Ogni blocco commentato è una domanda: 'Serve? Non serve? Perché è qui?'. Ogni 'TODO' non gestito è una promessa non mantenuta che pesa sulla mente.\n\nIl codice pulito comunica chiarezza di pensiero. Dice: 'Ogni riga qui presente ha una ragione'. Questo rende la manutenzione più facile, il debugging più veloce, e il lavoro in team più fluido.\n\nLa regola del 'forse serve': se qualcosa serve 'forse', non serve. Il version control esiste proprio per recuperare codice eliminato se mai dovesse servire davvero. Non c'è bisogno di tenerlo nel file 'per sicurezza'.",
    implementation: [
      "Elimina TUTTI i console.log di debug — nessuna eccezione",
      "Rimuovi i commenti temporanei: TODO, FIXME, temp, hack",
      "Cancella il codice commentato — il version control lo conserva se serve",
      "Elimina le prove fallite e gli esperimenti lasciati nel file",
      "Applica la regola: se serve 'forse', non serve",
      "Il codice finale deve sembrare scritto con intenzione, non per tentativi"
    ],
    codeExample: {
      language: "typescript",
      code: `// ❌ CODICE SPORCO — Pre-pulizia
// Questo è quello che spesso resta dopo una sessione con l'AI

function calculateTotal(items: Item[]) {
  console.log("DEBUG: items received", items); // TODO: remove
  console.log("length:", items.length); // temp
  
  // Vecchio metodo - non cancellare per sicurezza
  // const oldMethod = items.reduce((a, b) => a + b.price, 0);
  // return oldMethod;
  
  let total = 0;
  for (const item of items) {
    console.log("processing item:", item.id); // debug
    total += item.price;
    // total += item.tax; // TODO: aggiungere tasse dopo
    // FIXME: gestire sconti
  }
  
  // console.log("FINAL TOTAL:", total);
  // alert("debug: " + total); // vecchio debug
  
  return total;
}

// ✅ CODICE PULITO — Post-pulizia
// Ogni riga ha una ragione. Nessun rumore.

function calculateTotal(items: Item[]): number {
  return items.reduce(
    (total, item) => total + item.price, 
    0
  );
}

// Note per sviluppi futuri (in un file separato o issue tracker):
// - Aggiungere calcolo tasse
// - Implementare sistema sconti`
    },
    rule: {
      text: "Il codice finale deve sembrare scritto con intenzione, non per tentativi.",
      warning: false
    },
    keyPoints: [
      "I console.log di debug vanno SEMPRE rimossi — nessuna eccezione",
      "Il codice commentato 'per sicurezza' non serve mai — c'è il version control",
      "Se dubiti che qualcosa serva, probabilmente non serve",
      "La pulizia è parte del lavoro, non un extra opzionale",
      "Il codice pulito comunica chiarezza di pensiero"
    ],
    commonMistakes: [
      "Lasciare console.log 'tanto li tolgo dopo' — non li togli mai",
      "Tenere codice commentato 'per sicurezza' — usa il version control",
      "Rimandare la pulizia — diventa sempre più difficile",
      "Pensare che il rumore non faccia danno — confonde sempre",
      "Non distinguere commenti utili da commenti di debug"
    ],
    checklist: {
      question: "Il codice è pulito da tutti gli elementi temporanei?",
      title: "Verifica pulizia codice",
      items: [
        "Nessun console.log di debug",
        "Nessun commento temporaneo (TODO, FIXME, temp, hack)",
        "Nessun codice commentato 'per sicurezza'",
        "Nessuna prova fallita o esperimento lasciato nel file",
        "Ogni riga presente ha una ragione chiara"
      ]
    }
  },
  {
    id: "allineamento-stile",
    title: "4. Allineamento stile",
    icon: Palette,
    description: "La coerenza stilistica è più importante dell'eleganza. Non importa quale convenzione scegli — camelCase, snake_case, tab o spazi — importa che sia una sola in tutto il progetto.\n\nCon l'AI le incongruenze stilistiche si moltiplicano rapidamente. Ogni risposta può seguire convenzioni diverse, e se non le normalizzi attivamente, ti ritrovi con un codice che sembra scritto da dieci persone diverse.\n\nL'allineamento stilistico non è perfezionismo: è leggibilità. Un codice stilisticamente uniforme si legge più velocemente, si mantiene più facilmente, e comunica professionalità.",
    why: "Il cervello umano riconosce pattern. Quando il codice segue convenzioni coerenti, il cervello può concentrarsi sulla logica invece che sulla forma. Quando le convenzioni cambiano continuamente, ogni riga richiede uno sforzo cognitivo extra per essere interpretata.\n\nCon l'AI questo problema è amplificato: Claude potrebbe usare camelCase in una risposta e snake_case nella successiva. Potrebbe formattare le funzioni in modi diversi. Se non intervieni attivamente per normalizzare, il codice diventa un patchwork.\n\nLa regola è semplice: scegli uno stile, applicalo ovunque, documenta le convenzioni. Non esiste uno stile 'migliore' — esiste solo la coerenza.",
    implementation: [
      "Scegli UNA convenzione di naming e applicala ovunque (camelCase, PascalCase, etc.)",
      "Uniforma indentazione e formattazione in tutto il progetto",
      "Mantieni struttura coerente tra file dello stesso tipo",
      "Normalizza il codice generato dall'AI alle tue convenzioni",
      "Documenta le convenzioni scelte in un file CONVENTIONS.md",
      "Usa linter e formatter automatici per mantenere la coerenza"
    ],
    codeExample: {
      language: "typescript",
      code: `// ❌ STILE INCOERENTE — Tipico output multi-sessione con AI

// File 1: usa snake_case
const user_name = "Mario";
const user_age = 30;
function get_user_data() { }

// File 2: usa camelCase
const userName = "Luigi";
const userAge = 25;
function getUserData() { }

// File 3: mescola tutto
const UserEmail = "test@example.com";  // PascalCase per variabile?
const user_phone = "123";               // snake_case
function fetchUserInfo() { }            // camelCase

// ✅ STILE COERENTE — Convenzioni applicate uniformemente

// CONVENZIONI DEL PROGETTO (documentate):
// - Variabili e funzioni: camelCase
// - Classi, tipi, interfacce: PascalCase  
// - Costanti globali: UPPER_SNAKE_CASE
// - File componenti: PascalCase.tsx
// - File utility: camelCase.ts

// Applicazione coerente:
const userName = "Mario";
const userAge = 30;
const userEmail = "test@example.com";

function getUserData(): UserData { }
function validateUserInput(input: UserInput): boolean { }
function formatUserName(user: User): string { }

interface UserData {
  name: string;
  age: number;
}

const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";`
    },
    rule: {
      text: "Coerenza batte eleganza.",
      warning: false
    },
    keyPoints: [
      "Scegli UNO stile e applicalo ovunque — non esiste lo stile 'migliore'",
      "L'AI genera stili diversi: normalizzali attivamente alle tue convenzioni",
      "La coerenza migliora la leggibilità più di qualsiasi eleganza",
      "Documenta le convenzioni — chi legge deve sapere cosa aspettarsi",
      "Usa strumenti automatici (ESLint, Prettier) per mantenere la coerenza"
    ],
    commonMistakes: [
      "Mescolare convenzioni di naming nello stesso progetto",
      "Non normalizzare il codice generato dall'AI",
      "Cambiare stile a metà progetto 'perché questo è meglio'",
      "Non documentare le convenzioni scelte",
      "Preferire l'eleganza locale alla coerenza globale"
    ],
    checklist: {
      question: "Lo stile è uniforme in tutto il codice?",
      title: "Verifica coerenza stilistica",
      items: [
        "Naming coerente in tutti i file (camelCase O snake_case, non entrambi)",
        "Indentazione uniforme (tab O spazi, non entrambi)",
        "Struttura simile tra file dello stesso tipo",
        "Convenzioni documentate in un file dedicato",
        "Codice AI normalizzato alle convenzioni del progetto"
      ]
    }
  },
  {
    id: "test-mancanti",
    title: "5. Test mancanti",
    icon: TestTube,
    description: "Non serve copertura totale, serve copertura consapevole. Ogni parte critica del codice senza test è una scommessa: stai assumendo che funzionerà sempre senza verifica.\n\nIl consolidamento è il momento per guardare cosa NON è stato testato durante lo sviluppo. Spesso, nella fretta di far funzionare le cose, i test vengono rimandati. Ora è il momento di colmare le lacune più importanti.\n\nI test non devono essere necessariamente automatici: anche un test manuale documentato conta. L'importante è che le parti critiche abbiano una verifica e che tu sia consapevole di cosa non è coperto.",
    why: "I test non servono solo a trovare bug: documentano il comportamento atteso. Un test dice 'questa funzione con questo input deve produrre questo output'. Questa è documentazione eseguibile.\n\nUna parte critica senza test può rompersi silenziosamente. Un cambiamento in un'altra parte del sistema può causare una regressione che nessuno nota finché non è in produzione. I test sono la rete di sicurezza che permette di modificare il codice con fiducia.\n\nCon l'AI questo è particolarmente importante: il codice generato spesso 'sembra funzionare' ma non è stato verificato sistematicamente. I test colmano questa lacuna.",
    implementation: [
      "Identifica cosa NON è stato testato durante lo sviluppo",
      "Prioritizza: le parti critiche devono avere almeno un test",
      "Aggiungi test minimi per i casi base delle funzioni critiche",
      "Documenta i test manuali se non automatizzi",
      "Non serve copertura totale: serve copertura CONSAPEVOLE",
      "Sii esplicito su cosa NON è testato e perché"
    ],
    codeExample: {
      language: "typescript",
      code: `// ANALISI COPERTURA TEST — Post-sessione

// ✅ PARTI TESTATE (durante sviluppo):
// - Validazione input base (test automatico)
// - Calcolo totale ordine (test automatico)
// - Rendering componente principale (test automatico)

// ⚠️ PARTI NON TESTATE — Da aggiungere ora:

// 1. Gestione errori di rete (CRITICO)
describe('OrderService - error handling', () => {
  it('should retry on network failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));
    mockFetch.mockResolvedValueOnce({ ok: true });
    
    const result = await orderService.submit(validOrder);
    
    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(result.success).toBe(true);
  });
  
  it('should fail gracefully after max retries', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));
    
    const result = await orderService.submit(validOrder);
    
    expect(result.success).toBe(false);
    expect(result.error).toContain('Network error');
  });
});

// 2. Edge case lista vuota (MEDIO)
it('should handle empty cart gracefully', () => {
  expect(calculateTotal([])).toBe(0);
  expect(validateCart([])).toEqual({ 
    valid: false, 
    error: 'Cart is empty' 
  });
});

// 3. Test manuali documentati (per casi difficili da automatizzare):
/**
 * TEST MANUALI - Checklist
 * 
 * □ Verificare comportamento offline
 *   1. Disattivare rete
 *   2. Tentare ordine
 *   3. Verificare messaggio errore appropriato
 * 
 * □ Testare con connessione lenta
 *   1. Throttle network a 3G
 *   2. Verificare loading state visibile
 *   3. Verificare nessun timeout prematuro
 */`
    },
    rule: {
      text: "Ogni parte critica senza test è una scommessa.",
      warning: true
    },
    keyPoints: [
      "Identifica cosa NON è testato — questa è la priorità",
      "Le parti critiche DEVONO avere almeno un test",
      "I test manuali documentati contano — meglio di niente",
      "Copertura consapevole > copertura totale",
      "Sii esplicito su cosa non è coperto e quali rischi accetti"
    ],
    commonMistakes: [
      "Pensare che test = solo test automatici",
      "Non documentare i test manuali — vengono dimenticati",
      "Ignorare le parti critiche perché 'funzionano'",
      "Puntare alla copertura totale invece che alla copertura utile",
      "Non essere espliciti sui rischi accettati"
    ],
    checklist: {
      question: "Le parti critiche sono testate?",
      title: "Verifica copertura test",
      items: [
        "Ho identificato cosa NON è testato",
        "Le parti critiche hanno almeno un test (automatico o manuale)",
        "I test manuali sono documentati con checklist",
        "So esattamente quali rischi sto accettando",
        "I test esistenti passano dopo le modifiche"
      ]
    }
  },
  {
    id: "casi-limite",
    title: "6. Casi limite",
    icon: CornerDownRight,
    description: "I casi limite ignorati tornano sempre. Tornano come bug in produzione, come ticket di supporto, come 'strano, non dovrebbe succedere'. Ignorarli non li elimina, li rimanda.\n\nIl consolidamento è il momento per riprendere i casi limite identificati all'inizio della sessione e verificare che siano stati gestiti — o almeno documentati se la gestione è stata rimandata.\n\nCon l'AI spesso si dimenticano gli edge case: la conversazione si concentra sul caso principale, e i casi limite restano in un angolo della mente senza mai essere affrontati esplicitamente.",
    why: "Durante lo sviluppo è facile dimenticare gli edge case pianificati. La mente è concentrata sul far funzionare il caso principale, e i casi limite sembrano 'dettagli da gestire dopo'. Quel 'dopo' spesso non arriva mai.\n\nI casi limite non gestiti sono bombe a orologeria. Funzionano per mesi, poi un utente fa qualcosa di 'strano' (che strano non è — è semplicemente un caso che non avevi considerato) e il sistema si rompe.\n\nIl consolidamento è il momento per fare il punto: quali casi limite avevo identificato? Sono gestiti? Sono documentati? Ne sono emersi di nuovi durante lo sviluppo?",
    implementation: [
      "Riprendi la lista dei casi limite scritti all'inizio della sessione",
      "Per ogni caso: è gestito? È documentato? È ancora valido?",
      "Se emergono nuovi edge case durante il lavoro: aggiungili alla lista",
      "Non ignorare i casi 'improbabili' — accadono sempre",
      "Decidi esplicitamente per ogni caso: gestito / documentato / rischio accettato",
      "Traccia i casi non gestiti come debito tecnico"
    ],
    codeExample: {
      language: "markdown",
      code: `## EDGE CASES — Verifica finale sessione

### Casi identificati all'inizio della sessione:

| Caso | Stato | Gestione | Note |
|------|-------|----------|------|
| Input nullo | ✅ Gestito | Validazione + errore specifico | Test automatico presente |
| Lista vuota | ✅ Gestito | Ritorna 0 con warning | Test automatico presente |
| Valori negativi | ⚠️ Documentato | Accettati senza controllo | Decisione: valori negativi validi per rimborsi |
| Overflow numerico | ❌ Non gestito | — | TODO: aggiungere controllo MAX_SAFE_INTEGER |
| Caratteri speciali | ✅ Gestito | Sanitizzazione input | Test automatico presente |

### Nuovi casi emersi durante lo sviluppo:

| Caso | Stato | Gestione | Note |
|------|-------|----------|------|
| Timeout rete | ✅ Gestito | 3 retry + fallback | Test automatico presente |
| Dati corrotti | ⚠️ Documentato | Log errore + skip | Rischio accettato: evento raro |
| Sessione scaduta | ❌ Non gestito | — | TODO: aggiungere refresh token |

### Riepilogo decisioni:
- **Gestiti**: 4 casi (con test)
- **Documentati**: 2 casi (rischio accettato consapevolmente)
- **Da aggiungere**: 2 casi (tracciati come debito tecnico)

### Rischi accettati esplicitamente:
1. Valori negativi accettati (necessari per rimborsi)
2. Dati corrotti: skip con log (evento raro, impatto limitato)`
    },
    rule: {
      text: "I casi limite ignorati tornano sempre.",
      warning: true
    },
    keyPoints: [
      "Riprendi SEMPRE la lista iniziale di edge case",
      "I nuovi casi emersi vanno aggiunti alla lista",
      "Ogni caso deve avere uno stato esplicito: gestito / documentato / rischio accettato",
      "Ignorare non è un'opzione valida — è solo rimandare il problema",
      "I casi 'improbabili' accadono più spesso di quanto pensi"
    ],
    commonMistakes: [
      "Dimenticare la lista iniziale di edge case",
      "Ignorare i casi 'tanto non succederà mai'",
      "Non documentare i casi non gestiti",
      "Non aggiornare la lista con i nuovi casi emersi",
      "Non essere espliciti sui rischi accettati"
    ],
    checklist: {
      question: "I casi limite sono tutti tracciati?",
      title: "Verifica edge cases",
      items: [
        "Ho ripreso la lista iniziale di edge case",
        "Ogni caso ha uno stato esplicito (gestito/documentato/rischio)",
        "I nuovi casi emersi sono stati aggiunti",
        "So quali rischi sto accettando e perché",
        "I casi non gestiti sono tracciati come debito tecnico"
      ]
    }
  },
  {
    id: "documentazione",
    title: "7. Documentazione",
    icon: FileText,
    description: "La documentazione è ciò che resta quando il contesto della sessione viene dimenticato. Se non è documentato, per chi verrà dopo — incluso te stesso tra un mese — semplicemente non esiste.\n\nCon l'AI si produce codice velocemente, ma il contesto e le decisioni si perdono altrettanto rapidamente. Perché hai scelto questa libreria? Perché questa struttura? Quali alternative hai scartato? Senza documentazione, queste informazioni evaporano.\n\nLa documentazione non deve essere esaustiva: deve essere sufficiente. Cosa fa, cosa non fa, come si usa, quali limiti ha. Questo basta per permettere a chiunque di orientarsi.",
    why: "Il codice risponde alla domanda 'come'. La documentazione risponde alle domande 'cosa', 'perché' e 'come si usa'. Senza queste risposte, chi legge il codice deve ricostruire il contesto da zero.\n\nUn errore comune è pensare che 'il codice sia auto-documentante'. Non lo è. Il codice dice cosa succede, non perché succede. Non dice quali alternative sono state considerate e scartate. Non dice quali limiti esistono by design vs quali sono bug noti.\n\nCon l'AI questo è critico: le conversazioni che hanno portato a certe decisioni scompaiono. La documentazione è l'unico modo per preservare quel contesto.",
    implementation: [
      "Aggiorna almeno UNO di: README, commento di alto livello, note tecniche",
      "Scrivi cosa FA il codice (funzionalità principale)",
      "Scrivi cosa NON fa (limitazioni by design)",
      "Documenta come usarlo (esempio minimo funzionante)",
      "Elenca i limiti noti (cosa non funziona o funziona parzialmente)",
      "Se rilevante: perché hai fatto certe scelte architetturali"
    ],
    codeExample: {
      language: "markdown",
      code: `## OrderProcessor — Documentazione

### Cosa fa
Elabora ordini dal carrello utente: valida i dati, calcola 
totali con sconti applicabili, e genera conferma per l'utente.

### Cosa NON fa (by design)
- **Non gestisce pagamenti** → delegato a PaymentService
- **Non invia notifiche** → delegato a NotificationService  
- **Non modifica inventario** → delegato a InventoryService
- **Non persiste dati** → restituisce risultato, il chiamante decide

### Come usarlo
\`\`\`typescript
import { OrderProcessor } from './order-processor';

const processor = new OrderProcessor({
  currency: 'EUR',
  maxItems: 100,
  enableDiscounts: true
});

const result = await processor.process(cart, user);

if (result.success) {
  console.log('Ordine elaborato:', result.order);
} else {
  console.error('Errore:', result.error);
}
\`\`\`

### Limiti noti
- **Max 100 items per ordine** (configurabile)
- **Sconti non cumulabili** (applica solo il migliore)
- **Timeout: 30 secondi** (per ordini complessi può non bastare)
- **No supporto multi-valuta** (conversione va fatta prima)

### Scelte architetturali
- **Validazione sincrona**: migliore UX, feedback immediato
- **Calcolo sconti lazy**: performance su carrelli piccoli
- **Nessuna persistenza interna**: separation of concerns

### Changelog recente
- v1.2: Aggiunto supporto sconti percentuali
- v1.1: Fix calcolo IVA su prodotti esenti
- v1.0: Release iniziale`
    },
    rule: {
      text: "Se non è documentato, non esiste.",
      warning: false
    },
    keyPoints: [
      "Documenta il 'perché', non solo il 'cosa' — il codice già dice il 'come'",
      "Cosa NON fa è importante quanto cosa fa — evita aspettative sbagliate",
      "I limiti noti risparmiano ore di debug futuro",
      "La documentazione è parte del deliverable, non un extra",
      "Meglio documentazione minima che nessuna documentazione"
    ],
    commonMistakes: [
      "Pensare che il codice sia 'auto-documentante' — non lo è mai",
      "Non documentare i limiti noti — genera frustrazione",
      "Scrivere solo il 'cosa', mai il 'perché' — perde contesto",
      "Rimandare la documentazione a 'quando avrò tempo' — non succede mai",
      "Documentazione troppo dettagliata che nessuno legge"
    ],
    checklist: {
      question: "La documentazione è sufficiente per chi verrà dopo?",
      title: "Verifica documentazione",
      items: [
        "C'è almeno un file di documentazione aggiornato",
        "È chiaro cosa fa il codice (funzionalità principale)",
        "È chiaro cosa NON fa (limitazioni by design)",
        "I limiti noti sono elencati esplicitamente",
        "C'è almeno un esempio di come usare il codice"
      ]
    }
  },
  {
    id: "commit-consapevole",
    title: "8. Commit consapevole",
    icon: GitCommit,
    description: "Il commit è parte del pensiero, non solo del versionamento. Un messaggio di commit ben scritto spiega cosa è stato fatto, perché, e cosa resta ancora aperto.\n\nI messaggi generici — 'fix', 'update', 'varie' — rendono la storia del progetto illeggibile. Tra un mese, guardando la cronologia dei commit, non saprai cosa è successo. Un buon messaggio invece racconta una storia.\n\nIl commit chiude un'unità logica di lavoro. Non è un salvataggio automatico: è una dichiarazione consapevole di 'questo blocco di lavoro è completo e ha senso da solo'.",
    why: "La storia dei commit è documentazione che vive con il codice. Quando qualcosa si rompe, spesso la prima cosa che si fa è guardare i commit recenti: cosa è cambiato? Quando? Perché?\n\nCon messaggi generici, questa storia è inutile. 'fix' non dice cosa è stato sistemato. 'update' non dice cosa è stato aggiornato. 'varie' non dice assolutamente nulla.\n\nUn commit consapevole invece risponde a tre domande: cosa ho fatto? Perché l'ho fatto? Cosa resta da fare? Questo trasforma la cronologia in una narrazione utile.",
    implementation: [
      "Scrivi COSA hai fatto (azione concreta)",
      "Scrivi PERCHÉ l'hai fatto (motivazione, contesto)",
      "Scrivi cosa RESTA APERTO (se c'è lavoro incompleto)",
      "Evita messaggi generici: 'fix', 'update', 'varie', 'wip'",
      "Un commit = un'unità logica completa di lavoro",
      "Se non sai cosa scrivere, probabilmente il commit è troppo grande"
    ],
    codeExample: {
      language: "markdown",
      code: `# ❌ COMMIT GENERICI — Da evitare

fix
update  
varie
wip
changes
stuff
minor fixes
improvements

# Perché sono inutili:
# - Non dicono cosa è cambiato
# - Non dicono perché
# - Rendono la storia illeggibile
# - Impossibile fare rollback mirati

# ✅ COMMIT CONSAPEVOLI — Esempi reali

# Esempio 1: Feature
feat: aggiungi validazione input ordini

Aggiunta validazione sincrona per migliorare UX.
Controlli implementati:
- Quantità positiva
- Prezzo valido  
- Stock disponibile

Manca: gestione edge case valori null (tracciato come TODO).

---

# Esempio 2: Bug fix
fix: correggi calcolo sconto cumulativo

Il bug causava sconti duplicati su ordini multi-prodotto.
Root cause: il loop non resettava la variabile totaleSconto.

Aggiunto test di regressione per prevenire ricorrenza.

---

# Esempio 3: Refactor
refactor: separa validazione da logica business OrderProcessor

Obiettivo: migliorare testabilità del modulo ordini.
Comportamento esterno invariato (test esistenti passano).

Cambiamenti:
- Estratta classe OrderValidator
- OrderProcessor ora usa dependency injection

Prossimo step: aggiungere test unitari per OrderValidator.

---

# Esempio 4: Lavoro incompleto (onesto)
wip: implementazione parziale sistema sconti

Completato:
- Struttura dati sconti
- Validazione codici sconto

Da fare:
- Calcolo sconto effettivo
- Integrazione con checkout

Non deployare: funzionalità incompleta.`
    },
    rule: {
      text: "Il commit è parte del pensiero, non solo del versionamento.",
      warning: false
    },
    keyPoints: [
      "Ogni commit deve rispondere a: cosa? perché? cosa resta?",
      "Messaggi generici ('fix', 'update') sono inutili — evitali sempre",
      "Il commit documenta la storia del progetto — rendila leggibile",
      "Un commit = un'unità logica completa (non un salvataggio)",
      "Se non sai cosa scrivere, il commit è probabilmente troppo grande"
    ],
    commonMistakes: [
      "Usare messaggi generici per pigrizia — la storia diventa illeggibile",
      "Non spiegare il 'perché' — il 'cosa' si vede dal diff",
      "Commit troppo grandi con troppe modifiche — impossibile fare rollback",
      "Non menzionare cosa resta da fare — sorprese future",
      "Commit 'tanto poi sistemo' — non sistemi mai"
    ],
    checklist: {
      question: "Il messaggio di commit è informativo?",
      title: "Verifica qualità commit",
      items: [
        "Spiega COSA è stato fatto (azione concreta)",
        "Spiega PERCHÉ è stato fatto (motivazione)",
        "Menziona cosa RESTA aperto (se applicabile)",
        "Evita messaggi generici (fix, update, varie)",
        "Il commit rappresenta un'unità logica completa"
      ]
    }
  },
  {
    id: "debito-tecnico",
    title: "9. Debito tecnico",
    icon: CreditCard,
    description: "Il debito tecnico non scritto diventa debito infinito. Come il debito finanziario, accumula interessi: più lo ignori, più costa ripagarlo.\n\nCon l'AI il debito tecnico cresce silenziosamente. Si produce molto codice velocemente, si fanno compromessi 'per ora', si rimandano ottimizzazioni 'a dopo'. Se questi compromessi non vengono tracciati esplicitamente, vengono dimenticati — ma i loro effetti no.\n\nIl consolidamento è il momento per fare l'inventario: cosa ho rimandato? Perché? Quando andrebbe affrontato? Qual è il rischio se lo ignoro?",
    why: "Il debito tecnico è inevitabile: a volte ha senso fare compromessi per rispettare una scadenza o validare un'idea. Il problema non è avere debito tecnico — è non saperlo.\n\nIl debito non tracciato è il più pericoloso. Resta nella testa di chi l'ha creato (finché non dimentica) e diventa invisibile per tutti gli altri. Quando poi si manifesta come bug o rallentamento, nessuno sa da dove viene.\n\nTracciare il debito significa: cosa ho rimandato, perché, quando dovrei affrontarlo, e cosa succede se non lo faccio. Con queste informazioni, il debito diventa gestibile.",
    implementation: [
      "Annota ESPLICITAMENTE cosa è stato rimandato",
      "Scrivi PERCHÉ è stato rimandato (scadenza, priorità, complessità)",
      "Indica QUANDO andrebbe affrontato (trigger concreto)",
      "Valuta il RISCHIO se viene ignorato (alto/medio/basso)",
      "Non lasciarlo solo nella testa — scrivilo in un posto condiviso",
      "Usa un sistema di tracking: TODO file, issue tracker, backlog"
    ],
    codeExample: {
      language: "markdown",
      code: `## DEBITO TECNICO — Inventario sessione

### Template per ogni debito:
- **Cosa**: descrizione concreta del compromesso fatto
- **Perché rimandato**: motivazione della decisione
- **Quando affrontare**: trigger concreto (non "prima o poi")
- **Rischio se ignorato**: valutazione impatto (Alto/Medio/Basso)

---

### 1. Ottimizzazione query ordini
- **Cosa**: La query carica tutti i campi, dovrebbe usare SELECT specifico
- **Perché rimandato**: Focus su funzionalità, performance accettabile ora
- **Quando affrontare**: Quando ordini > 10k OPPURE tempo risposta > 200ms
- **Rischio se ignorato**: MEDIO — degrado graduale, non critico immediato

### 2. Test edge case valori null
- **Cosa**: Mancano test per input null su OrderValidator
- **Perché rimandato**: Validazione frontend previene il caso
- **Quando affrontare**: PRIMA di esporre API pubblica o rimuovere validazione FE
- **Rischio se ignorato**: ALTO — bug silenzioso se cambia il frontend

### 3. Refactor duplicazione logica sconti
- **Cosa**: Stessa logica in OrderProcessor, CartService, CheckoutPage
- **Perché rimandato**: Funziona, priorità era consegna feature
- **Quando affrontare**: Alla prossima modifica della logica sconti
- **Rischio se ignorato**: BASSO — solo manutenzione più costosa

### 4. Migrazione a TypeScript strict mode
- **Cosa**: Progetto usa "strict: false", alcuni tipi sono any
- **Perché rimandato**: Migrazione richiederebbe 2+ giorni
- **Quando affrontare**: Prima di aggiungere nuovi sviluppatori al team
- **Rischio se ignorato**: MEDIO — bug di tipo potrebbero sfuggire

---

### Riepilogo:
| Debito | Rischio | Trigger |
|--------|---------|---------|
| Query non ottimizzata | Medio | >10k ordini o >200ms |
| Test null mancanti | Alto | API pubblica |
| Duplicazione sconti | Basso | Modifica logica |
| TypeScript strict | Medio | Nuovo dev in team |`
    },
    rule: {
      text: "Debito tecnico non scritto = debito infinito.",
      warning: true
    },
    keyPoints: [
      "Scrivi cosa hai rimandato — se è solo nella tua testa, non esiste per gli altri",
      "Scrivi perché E quando affrontarlo — 'prima o poi' non è un trigger",
      "Valuta il rischio di ogni debito — non tutti i debiti sono uguali",
      "Il debito tracciato è gestibile, quello ignorato è pericoloso",
      "Con l'AI il debito cresce velocemente — inventarialo spesso"
    ],
    commonMistakes: [
      "Tenere il debito tecnico solo in testa — viene dimenticato",
      "Non spiegare perché è stato rimandato — sembra incompetenza invece che decisione",
      "Trigger vaghi ('prima o poi') — non sono actionable",
      "Ignorare il debito fino all'emergenza — costa molto di più",
      "Non valutare il rischio — tratti tutti i debiti come uguali"
    ],
    checklist: {
      question: "Il debito tecnico è tracciato esplicitamente?",
      title: "Verifica inventario debito",
      items: [
        "Ho annotato COSA è stato rimandato",
        "Ho spiegato PERCHÉ è stato rimandato",
        "Ho indicato QUANDO andrebbe affrontato (trigger concreto)",
        "Ho valutato il RISCHIO di ogni debito",
        "Il debito è scritto in un posto condiviso (non solo nella mia testa)"
      ]
    }
  },
  {
    id: "chiusura-mentale",
    title: "10. Chiusura mentale",
    icon: CheckCircle,
    description: "Una sessione chiusa bene vale più di una lunga. Il rumore mentale delle sessioni non chiuse drena energie e riduce la qualità del lavoro futuro.\n\nChiudere una sessione significa dichiarare esplicitamente uno stato: questo lavoro è pronto, oppure richiede miglioramenti, oppure va scartato. Scriverlo — non solo pensarlo — chiude il loop mentale e permette di staccare davvero.\n\nQuesto passaggio rende il lavoro sostenibile nel tempo. Sessioni infinite che si trascinano creano stanchezza cronica. Chiusure consapevoli creano spazio mentale per le sessioni future.",
    why: "Il cervello non chiude automaticamente i loop aperti. Una sessione di lavoro non conclusa esplicitamente resta 'aperta' nella mente, consumando risorse cognitive in background. Questo è l'effetto Zeigarnik: i compiti incompleti restano in memoria più dei compiti completati.\n\nDichiarare esplicitamente lo stato — pronto, da migliorare, da scartare — chiude il loop. Il cervello può 'archiviare' il lavoro e liberare risorse per altro.\n\nQuesto non è perfezionismo: è igiene mentale. Permette di tornare al lavoro con energie fresche invece che con il peso delle sessioni precedenti.",
    implementation: [
      "Dichiara lo stato ESPLICITAMENTE: pronto / da migliorare / da scartare",
      "SCRIVILO — non basta pensarlo, deve essere documentato",
      "Se 'da migliorare': specifica cosa manca",
      "Se 'da scartare': spiega cosa non ha funzionato (learning)",
      "Dopo aver dichiarato lo stato: smetti di pensarci",
      "Passa ad un'altra attività per chiudere davvero il loop"
    ],
    codeExample: {
      language: "markdown",
      code: `## CHIUSURA SESSIONE — Template

### Data: 2024-01-15
### Durata: 3 ore
### Focus: Implementazione validazione ordini

---

### Lavoro svolto
- Implementato OrderValidator con validazione sincrona
- Aggiunti test per casi base
- Documentazione aggiornata
- Integrato in OrderProcessor

### Stato finale: ⚠️ DA MIGLIORARE

### Cosa è pronto:
- [x] Validazione casi base funzionante
- [x] Test per happy path
- [x] Documentazione uso base
- [x] Integrazione con OrderProcessor

### Cosa manca per "pronto":
- [ ] Test edge case input null
- [ ] Gestione errori più granulare
- [ ] Performance test su carrelli grandi

### Decisione esplicita:
> Il codice può andare in staging per test interni.
> NON pronto per produzione senza completare i punti aperti.
> Prossima sessione: focus su edge cases.

---

## STATI POSSIBILI:

### ✅ PRONTO
Il lavoro è completo e può essere usato/deployato.
Debiti tecnici noti sono documentati ma non bloccanti.

### ⚠️ DA MIGLIORARE  
Funziona ma ha lacune note. Lista specifica di cosa completare.
Non deployare in produzione senza revisione.

### ❌ DA SCARTARE
Approccio sbagliato o non funzionante.
Documentare cosa non ha funzionato per evitare di ripetere.

---

## Ora: STACCO
Ho dichiarato lo stato. Il lavoro è archiviato.
Passo ad altra attività. Tornerò con mente fresca.`
    },
    rule: {
      text: "Una sessione chiusa bene vale più di una lunga.",
      warning: false
    },
    keyPoints: [
      "Dichiara SEMPRE uno stato esplicito — non lasciare il lavoro 'in sospeso'",
      "SCRIVERE chiude il loop mentale — pensare non basta",
      "Staccare davvero migliora la qualità delle sessioni future",
      "La sostenibilità viene dalla chiusura, non dalla durata",
      "Sessioni infinite = stanchezza cronica = qualità in calo"
    ],
    commonMistakes: [
      "Finire senza dichiarare lo stato — il loop resta aperto",
      "Solo pensare invece di scrivere — non chiude il loop",
      "Continuare a pensare al lavoro dopo 'aver finito'",
      "Sessioni troppo lunghe senza chiusura — diminishing returns",
      "'Finisco solo questa cosa' — la sessione non finisce mai"
    ],
    checklist: {
      question: "Hai chiuso la sessione consapevolmente?",
      title: "Verifica chiusura mentale",
      items: [
        "Ho dichiarato lo stato (pronto / da migliorare / da scartare)",
        "Ho SCRITTO lo stato, non solo pensato",
        "Ho specificato cosa resta da fare (se applicabile)",
        "Ho deciso il focus della prossima sessione",
        "Sono pronto a staccare mentalmente e passare ad altro"
      ]
    }
  }
];
