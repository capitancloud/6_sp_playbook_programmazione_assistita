import { Step } from "./mentalita";
import { Hash, Layers, Target, Cpu, Wand2, MessageSquare, FileCode, Gauge, Palette, StopCircle } from "lucide-react";

export const flowControllatoSteps: Step[] = [
  {
    id: 1,
    number: 1,
    icon: Hash,
    title: "Naming intenzionale",
    subtitle: "Il nome deve rispondere senza leggere il corpo",
    description: `Ogni nome deve rispondere a una domanda semplice: **"Cosa fa questo elemento senza leggere il corpo?"**

I nomi sono il primo livello di documentazione del codice. Un nome ben scelto elimina la necessità di commenti, riduce il carico cognitivo durante la lettura e rende il codice navigabile anche a distanza di mesi.

**Perché con l'AI è ancora più critico:**

L'AI tende a generare nomi generici come \`data\`, \`result\`, \`temp\`, \`handler\`. Questi nomi funzionano nel contesto immediato ma diventano illeggibili quando il codice cresce. I nomi guidano il ragionamento dell'AI nelle iterazioni successive: nomi chiari producono suggerimenti più precisi.`,
    why: `Il naming è la forma più economica di documentazione. Un nome chiaro comunica l'intento senza richiedere la lettura del corpo della funzione o variabile.

Con l'AI questo diventa critico: se accetti nomi generici, le iterazioni successive producono codice sempre più opaco. L'AI "ragiona" anche sui nomi, e nomi chiari migliorano la qualità dei suggerimenti futuri.`,
    implementation: [
      "Rinomina subito variabili ambigue ricevute dall'AI",
      "Evita abbreviazioni 'ovvie solo per te'",
      "Preferisci nomi più lunghi ma espliciti",
      "Usa convenzioni consistenti (camelCase, snake_case)",
      "I booleani iniziano con is/has/can/should"
    ],
    codeExample: {
      language: "typescript",
      filename: "naming-example.ts",
      code: `// ❌ Naming generico dell'AI
const data = await fetch('/api/users');
const res = validate(input);
const temp = process(items);

// ✓ Naming intenzionale
const activeUsers = await fetch('/api/users');
const emailValidationResult = validateEmail(userInput);
const processedOrderItems = processItems(rawItems);`
    },
    rule: {
      text: "Se devi spiegare un nome, è un cattivo nome.",
      warning: false
    },
    keyPoints: [
      "Il nome risponde a 'cosa fa?' senza leggere il corpo",
      "Nessuna abbreviazione ambigua",
      "Convenzione di naming consistente",
      "Booleani con prefisso semantico"
    ],
    commonMistakes: [
      "Accettare nomi generici dall'AI senza rinominarli",
      "Usare abbreviazioni 'ovvie' che non lo sono per altri",
      "Nomi troppo corti per risparmiare caratteri",
      "Nomi che descrivono il tipo invece dell'uso"
    ],
    checklist: {
      title: "Verifica naming",
      items: [
        "Il nome risponde a 'cosa fa?' senza leggere il corpo",
        "Nessuna abbreviazione ambigua",
        "Convenzione di naming consistente",
        "Booleani con prefisso semantico"
      ]
    }
  },
  {
    id: 2,
    number: 2,
    icon: Layers,
    title: "Funzioni piccole",
    subtitle: "Sopra le 20–30 righe, spezza",
    description: `Usa una soglia concreta: **sopra le 20–30 righe, spezza la funzione.**

Le funzioni lunghe sono difficili da testare, difficili da modificare e difficili da comprendere. Con l'AI, funzioni lunghe producono suggerimenti imprecisi perché il contesto diventa troppo ampio.

**Non aspettare il refactor finale:**

Spezzare subito mantiene il controllo sulla complessità. Ogni funzione che supera la soglia dovrebbe essere divisa immediatamente, non "dopo". Il refactor ritardato raramente avviene.

**Test rapido di validazione:**

Riesci a spiegare la funzione in una frase sola? Se hai bisogno di usare "e" o "poi" o "inoltre", la funzione sta facendo troppe cose e va spezzata.`,
    why: `Le funzioni piccole sono più facili da testare, modificare e comprendere. Con l'AI, funzioni contenute producono suggerimenti più precisi perché il contesto è limitato e chiaro.

Il costo di spezzare una funzione è basso. Il costo di mantenere funzioni lunghe cresce esponenzialmente con il tempo.`,
    implementation: [
      "Applica la soglia 20-30 righe come limite massimo",
      "Spezza immediatamente, non 'dopo'",
      "Ogni funzione deve essere spiegabile in una frase",
      "Estrai blocchi logici in funzioni helper",
      "Preferisci molte funzioni piccole a poche grandi"
    ],
    codeExample: {
      language: "typescript",
      filename: "small-functions.ts",
      code: `// ❌ Funzione troppo grande (70+ righe)
function processOrder(order) {
  // validazione (10 righe)
  // calcolo totale (15 righe)
  // applicazione sconti (20 righe)
  // salvataggio database (10 righe)
}

// ✓ Funzioni piccole e focalizzate
function processOrder(order) {
  const validatedOrder = validateOrder(order);
  const orderWithTotal = calculateOrderTotal(validatedOrder);
  const finalOrder = applyDiscounts(orderWithTotal);
  await saveOrder(finalOrder);
}`
    },
    rule: {
      text: "Se non riesci a spiegare una funzione in una frase, fa troppe cose.",
      warning: false
    },
    keyPoints: [
      "Nessuna funzione supera le 30 righe",
      "Ogni funzione è spiegabile in una frase",
      "I blocchi logici sono estratti in helper",
      "Le funzioni hanno un solo livello di astrazione"
    ],
    commonMistakes: [
      "Rimandare il refactor a 'dopo'",
      "Giustificare funzioni lunghe come 'necessarie'",
      "Spezzare solo quando il codice diventa ingestibile",
      "Creare funzioni troppo granulari che frammentano la logica"
    ],
    checklist: {
      title: "Verifica dimensione funzioni",
      items: [
        "Nessuna funzione supera le 30 righe",
        "Ogni funzione è spiegabile in una frase",
        "I blocchi logici sono estratti in helper",
        "Le funzioni hanno un solo livello di astrazione"
      ]
    }
  },
  {
    id: 3,
    number: 3,
    icon: Target,
    title: "Responsabilità singola",
    subtitle: "Un solo motivo per cambiare",
    description: `Ogni funzione deve avere **un solo motivo per cambiare.** Questo è il principio di Single Responsibility applicato al livello più granulare.

**Segnali di violazione da riconoscere:**

Validazione insieme a logica di business. Parsing insieme a persistenza. Logica di dominio insieme a formattazione output. Quando vedi questi pattern, hai trovato una violazione.

**Con l'AI questo è amplificato:**

Più una funzione è focalizzata, migliori sono i suggerimenti che l'AI produrrà nelle iterazioni successive. Una funzione che fa tre cose confonde l'AI tanto quanto confonde te.

**Test semantico:**

Se usi "e" per descrivere cosa fa una funzione ("valida E salva", "calcola E formatta"), quella funzione va spezzata in due.`,
    why: `Il Single Responsibility Principle è il fondamento della manutenibilità. Una funzione con una sola responsabilità cambia per un solo motivo, è testabile in isolamento e riutilizzabile in contesti diversi.

Con l'AI, funzioni focalizzate producono suggerimenti più precisi perché il contesto è chiaro e non ambiguo.`,
    implementation: [
      "Ogni funzione ha un solo motivo per cambiare",
      "Separa validazione da logica di business",
      "Separa parsing da persistenza",
      "Separa calcolo da formattazione",
      "Usa il test della 'e': se la descrizione usa 'e', spezza"
    ],
    codeExample: {
      language: "typescript",
      filename: "single-responsibility.ts",
      code: `// ❌ Violazione SRP
function saveUser(userData) {
  if (!userData.email.includes('@')) throw new Error();
  const user = { ...userData, createdAt: new Date() };
  await database.insert('users', user);
  await sendWelcomeEmail(user.email);
}

// ✓ Responsabilità separate
function validateUserData(userData) { /* solo validazione */ }
function createUserRecord(data) { /* solo trasformazione */ }
async function persistUser(user) { /* solo persistenza */ }
async function notifyNewUser(email) { /* solo notifica */ }`
    },
    rule: {
      text: "Se usi 'e' per descrivere una funzione, va spezzata.",
      warning: true
    },
    keyPoints: [
      "Ogni funzione ha una sola responsabilità",
      "Nessuna funzione combina validazione + logica",
      "Nessuna funzione combina calcolo + I/O",
      "Il test della 'e' passa per ogni funzione"
    ],
    commonMistakes: [
      "Funzioni 'comode' che fanno tutto insieme",
      "Giustificare violazioni come 'ottimizzazione'",
      "Rimandare la separazione a refactor futuri",
      "Creare dipendenze nascoste tra responsabilità"
    ],
    checklist: {
      title: "Verifica responsabilità",
      items: [
        "Ogni funzione ha una sola responsabilità",
        "Nessuna funzione combina validazione + logica",
        "Nessuna funzione combina calcolo + I/O",
        "Il test della 'e' passa per ogni funzione"
      ]
    }
  },
  {
    id: 4,
    number: 4,
    icon: Cpu,
    title: "Struttura prima dell'ottimizzazione",
    subtitle: "La chiarezza batte l'eleganza prematura",
    description: `Resisti alla tentazione delle soluzioni compatte. **La chiarezza batte sempre l'eleganza prematura.**

**Cosa evitare attivamente:**

One-liner brillanti che richiedono 30 secondi per essere compresi. Micro-ottimizzazioni prima di avere misure reali. Codice "furbo" che impressiona ma non comunica.

**Priorità da rispettare in ordine:**

Prima il flusso chiaro: il codice deve leggersi come una storia. Poi la leggibilità: chiunque deve capirlo al primo passaggio. Solo dopo le performance: e solo quando hai misure che dimostrano un problema.

**L'AI spesso propone codice "furbo":**

Soluzioni compatte, catene di metodi, pattern avanzati. Tu scegli codice chiaro. Il codice chiaro si mantiene, il codice furbo si riscrive.`,
    why: `L'ottimizzazione prematura è la radice di molti problemi. Codice "ottimizzato" senza misure è spesso più lento del codice semplice, e sempre più difficile da mantenere.

L'AI tende a proporre soluzioni "impressionanti" che massimizzano la compattezza a scapito della leggibilità. Tu devi filtrare per chiarezza.`,
    implementation: [
      "Evita one-liner complessi",
      "Niente ottimizzazioni senza misure",
      "Priorità: chiarezza > leggibilità > performance",
      "Preferisci codice esplicito a codice compatto",
      "Accetta verbosità se migliora comprensione"
    ],
    codeExample: {
      language: "typescript",
      filename: "clarity-first.ts",
      code: `// ❌ "Elegante" ma incomprensibile
const result = data
  .filter(x => x.active && x.score > threshold)
  .reduce((acc, x) => ({...acc, [x.id]: x.items
    .flatMap(i => i.values).filter(Boolean)}), {});

// ✓ Chiaro e mantenibile
const activeItems = data.filter(item => item.active);
const highScoreItems = activeItems.filter(item => item.score > threshold);

const result = {};
for (const item of highScoreItems) {
  const validValues = item.items.flatMap(i => i.values).filter(Boolean);
  result[item.id] = validValues;
}`
    },
    rule: {
      text: "L'AI propone codice furbo. Tu scegli codice chiaro.",
      warning: false
    },
    keyPoints: [
      "Nessun one-liner che richiede analisi",
      "Ottimizzazioni solo dopo misure concrete",
      "Il flusso è leggibile al primo passaggio",
      "Codice esplicito preferito a compatto"
    ],
    commonMistakes: [
      "Accettare codice 'furbo' dall'AI senza semplificarlo",
      "Ottimizzare senza benchmark",
      "Preferire eleganza a manutenibilità",
      "Comprimere logica per risparmiare righe"
    ],
    checklist: {
      title: "Verifica chiarezza",
      items: [
        "Nessun one-liner che richiede analisi",
        "Ottimizzazioni solo dopo misure concrete",
        "Il flusso è leggibile al primo passaggio",
        "Codice esplicito preferito a compatto"
      ]
    }
  },
  {
    id: 5,
    number: 5,
    icon: Wand2,
    title: "Ridurre la magia",
    subtitle: "Meno magia = più controllo = meno bug",
    description: `Evita tutto ciò che richiede conoscenza implicita per essere compreso. **Meno magia significa più controllo e meno bug.**

**Cosa qualifica come "magia":**

Metaprogrammazione quando non strettamente necessaria. Callback annidati che oscurano il flusso. Astrazioni premature che aggiungono livelli senza valore. Decoratori e proxy usati per impressionare.

**Test di validazione:**

Se una riga sembra "intelligente", chiediti se è davvero necessaria o solo impressionante. Il codice che impressiona raramente è il codice che si mantiene.

**Con l'AI questo è critico:**

L'AI ama pattern avanzati e soluzioni "eleganti". Sta a te riconoscere quando la magia aggiunge valore e quando aggiunge solo complessità.`,
    why: `Il codice "magico" è difficile da debuggare, difficile da modificare e impossibile da comprendere per chi non conosce i trucchi usati.

Con l'AI, la magia si amplifica: pattern avanzati producono codice che funziona ma che nessuno sa mantenere. Il costo della magia si paga in manutenzione.`,
    implementation: [
      "Evita metaprogrammazione non necessaria",
      "Limita callback annidati a massimo 2 livelli",
      "Niente astrazioni senza almeno 3 usi concreti",
      "Preferisci esplicito a implicito sempre",
      "Se sembra 'intelligente', probabilmente è troppo complesso"
    ],
    codeExample: {
      language: "typescript",
      filename: "no-magic.ts",
      code: `// ❌ Troppa "magia"
const createHandler = (config) => (req) => 
  Object.entries(config)
    .reduce((chain, [key, fn]) => 
      chain.then(ctx => fn(ctx, req[key])), 
      Promise.resolve({}));

// ✓ Esplicito e comprensibile
async function handleRequest(req, config) {
  let context = {};
  for (const [key, handler] of Object.entries(config)) {
    context = await handler(context, req[key]);
  }
  return context;
}`
    },
    rule: {
      text: "Meno magia = più controllo = meno bug.",
      warning: false
    },
    keyPoints: [
      "Nessuna metaprogrammazione non necessaria",
      "Callback annidati <= 2 livelli",
      "Astrazioni giustificate da usi concreti",
      "Il codice non richiede 'trucchi' per essere letto"
    ],
    commonMistakes: [
      "Usare pattern avanzati per impressionare",
      "Astrarre prima di avere ripetizioni reali",
      "Accettare magia dall'AI senza semplificare",
      "Giustificare complessità come 'eleganza'"
    ],
    checklist: {
      title: "Verifica semplicità",
      items: [
        "Nessuna metaprogrammazione non necessaria",
        "Callback annidati <= 2 livelli",
        "Astrazioni giustificate da usi concreti",
        "Il codice non richiede 'trucchi' per essere letto"
      ]
    }
  },
  {
    id: 6,
    number: 6,
    icon: MessageSquare,
    title: "Commenti dove servono",
    subtitle: "Il perché, mai il cosa",
    description: `Commenta solo il **perché**, mai il **cosa**. Il codice stesso deve spiegare cosa fa; i commenti spiegano le motivazioni non ovvie.

**Quando commentare:**

Decisioni non ovvie che potrebbero sembrare errori. Workaround per bug esterni o limitazioni di librerie. Scelte architetturali con trade-off. Codice che sembra sbagliato ma è intenzionale.

**Quando NON commentare:**

Ciò che il nome già dice chiaramente. Codice autoesplicativo che non richiede contesto. Ovvietà che insultano l'intelligenza del lettore.

**Con l'AI i commenti diventano guida:**

I commenti che scrivi influenzano le iterazioni future. Commenti chiari sul "perché" guidano l'AI verso soluzioni coerenti.`,
    why: `I commenti che spiegano il "cosa" diventano obsoleti quando il codice cambia. I commenti che spiegano il "perché" restano validi perché le motivazioni cambiano meno spesso del codice.

Con l'AI, i commenti strategici guidano le iterazioni future verso soluzioni coerenti con le decisioni prese.`,
    implementation: [
      "Commenta solo il 'perché', mai il 'cosa'",
      "Documenta decisioni non ovvie",
      "Spiega workaround e loro motivazioni",
      "Mai commentare l'ovvio",
      "I commenti devono aggiungere informazione"
    ],
    codeExample: {
      language: "typescript",
      filename: "comments-why.ts",
      code: `// ❌ Commento inutile (spiega il cosa)
// Incrementa il contatore
counter++;

// ✓ Commento utile (spiega il perché)
// Bypass rate limiter per utenti premium - decisione business Q3
counter++;

// WORKAROUND: API esterna non supporta batch > 100
// Ticket: EXT-234, rimuovere quando fixato upstream
for (const chunk of chunks(items, 100)) {
  await processChunk(chunk);
}`
    },
    rule: {
      text: "Il codice spiega il cosa. I commenti spiegano il perché.",
      warning: false
    },
    keyPoints: [
      "I commenti spiegano il 'perché'",
      "Nessun commento spiega l'ovvio",
      "Workaround documentati con riferimenti",
      "Decisioni architetturali annotate"
    ],
    commonMistakes: [
      "Commentare ogni riga di codice",
      "Commenti che ripetono il nome della funzione",
      "Omettere il perché di decisioni non ovvie",
      "Lasciare commenti obsoleti dopo modifiche"
    ],
    checklist: {
      title: "Verifica commenti",
      items: [
        "I commenti spiegano il 'perché'",
        "Nessun commento spiega l'ovvio",
        "Workaround documentati con riferimenti",
        "Decisioni architetturali annotate"
      ]
    }
  },
  {
    id: 7,
    number: 7,
    icon: FileCode,
    title: "Codice autoesplicativo",
    subtitle: "Migliora i nomi prima di aggiungere commenti",
    description: `Prima di aggiungere un commento, chiediti se puoi eliminarne la necessità migliorando il codice stesso.

**Tecniche per codice autoesplicativo:**

Migliora i nomi: un nome migliore elimina la necessità del commento. Spezza funzioni: funzioni più piccole con nomi chiari si spiegano da sole. Semplifica flussi: logica lineare batte logica ramificata.

**Il codice dovrebbe "leggersi da solo":**

Come una storia ben scritta, il codice dovrebbe guidare il lettore senza richiedere spiegazioni esterne. Ogni refactor che elimina un commento necessario è un miglioramento.

**Indicatore di qualità:**

Un buon refactor elimina commenti inutili. Se dopo un refactor servono più commenti, probabilmente hai peggiorato il codice.`,
    why: `Il codice autoesplicativo non diventa mai obsoleto perché È la documentazione. I commenti possono mentire; il codice esegue sempre esattamente quello che dice.

Investire nel rendere il codice autoesplicativo paga dividendi in ogni lettura futura e in ogni iterazione con l'AI.`,
    implementation: [
      "Migliora i nomi prima di aggiungere commenti",
      "Spezza funzioni complesse in helper con nomi chiari",
      "Semplifica flussi ramificati in logica lineare",
      "Estrai condizioni complesse in funzioni booleane",
      "Un buon refactor elimina commenti, non li aggiunge"
    ],
    codeExample: {
      language: "typescript",
      filename: "self-documenting.ts",
      code: `// ❌ Richiede commento per essere capito
// Controlla se l'utente può accedere
if (user.role === 'admin' || 
    (user.role === 'editor' && resource.ownerId === user.id) ||
    (user.permissions?.includes(resource.type))) {
  // ...
}

// ✓ Autoesplicativo - nessun commento necessario
function canAccessResource(user, resource) {
  if (user.role === 'admin') return true;
  if (isResourceOwner(user, resource)) return true;
  if (hasResourcePermission(user, resource)) return true;
  return false;
}`
    },
    rule: {
      text: "Un buon refactor elimina commenti inutili.",
      warning: false
    },
    keyPoints: [
      "I nomi rendono superflui i commenti",
      "Le funzioni sono abbastanza piccole da essere ovvie",
      "I flussi sono lineari e prevedibili",
      "Le condizioni complesse sono estratte in funzioni"
    ],
    commonMistakes: [
      "Aggiungere commenti invece di migliorare nomi",
      "Lasciare condizioni complesse inline",
      "Preferire compattezza a chiarezza",
      "Non estrarre logica in funzioni helper"
    ],
    checklist: {
      title: "Verifica leggibilità",
      items: [
        "I nomi rendono superflui i commenti",
        "Le funzioni sono abbastanza piccole da essere ovvie",
        "I flussi sono lineari e prevedibili",
        "Le condizioni complesse sono estratte in funzioni"
      ]
    }
  },
  {
    id: 8,
    number: 8,
    icon: Gauge,
    title: "No micro-ottimizzazioni premature",
    subtitle: "Prima misura, poi ottimizza",
    description: `Se stai ottimizzando prima di avere test, misure e comprensione dell'uso reale, **ti stai sabotando.**

**Segnali che stai ottimizzando troppo presto:**

Non hai benchmark che dimostrano un problema. Non sai quale parte del codice è il bottleneck. Stai ottimizzando "perché sembra lento". Stai sacrificando leggibilità per performance teorica.

**Il processo corretto:**

Scrivi codice chiaro. Misura le performance reali. Identifica i bottleneck con profiler. Ottimizza solo dove serve. Misura di nuovo per confermare.

**Con l'AI le ottimizzazioni premature sembrano brillanti:**

L'AI propone spesso soluzioni "ottimizzate" che sono più complesse senza essere più veloci. Il codice semplice è spesso abbastanza veloce.`,
    why: `Le ottimizzazioni premature aggiungono complessità senza benefici misurabili. Il codice ottimizzato è più difficile da modificare, testare e comprendere.

Nella maggior parte dei casi, il codice semplice è abbastanza veloce. Le vere ottimizzazioni arrivano da misure, non da intuizioni.`,
    implementation: [
      "Niente ottimizzazioni senza benchmark",
      "Prima scrivi codice chiaro, poi misura",
      "Usa profiler per identificare bottleneck reali",
      "Ottimizza solo dove le misure indicano problemi",
      "Dopo ogni ottimizzazione, misura di nuovo"
    ],
    codeExample: {
      language: "typescript",
      filename: "no-premature-optimization.ts",
      code: `// ❌ "Ottimizzazione" prematura senza dati
const cache = new Map();
const memoizedCalc = (x) => {
  if (!cache.has(x)) cache.set(x, expensiveCalc(x));
  return cache.get(x);
};
// Ma... questa funzione viene chiamata 3 volte in totale!

// ✓ Prima: codice chiaro
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Poi: misura se c'è un problema reale
// Solo DOPO profiling che mostra bottleneck: aggiungi ottimizzazioni`
    },
    rule: {
      text: "Se stai ottimizzando senza misure, ti stai sabotando.",
      warning: true
    },
    keyPoints: [
      "Nessuna ottimizzazione senza misure",
      "Bottleneck identificati con profiler",
      "Ogni ottimizzazione ha benchmark before/after",
      "Complessità aggiunta solo se giustificata"
    ],
    commonMistakes: [
      "Ottimizzare 'perché sembra lento'",
      "Aggiungere cache senza misurare l'impatto",
      "Sacrificare leggibilità per performance teorica",
      "Accettare 'ottimizzazioni' dell'AI senza verificare"
    ],
    checklist: {
      title: "Verifica ottimizzazioni",
      items: [
        "Nessuna ottimizzazione senza misure",
        "Bottleneck identificati con profiler",
        "Ogni ottimizzazione ha benchmark before/after",
        "Complessità aggiunta solo se giustificata"
      ]
    }
  },
  {
    id: 9,
    number: 9,
    icon: Palette,
    title: "Coerenza stilistica",
    subtitle: "Il disordine si moltiplica",
    description: `Dopo ogni sessione di lavoro con l'AI, dedica tempo a uniformare il codice. **Il disordine si moltiplica e l'AI amplifica le incoerenze future.**

**Azioni da fare a fine sessione:**

Uniforma i nomi secondo le convenzioni del progetto. Allinea lo stile (virgolette, punto e virgola, spaziatura). Sistema indentazione e formattazione. Rimuovi codice morto e import inutilizzati.

**Non rimandare mai:**

Ogni incoerenza lasciata diventa un pattern che l'AI replicherà. Un file disordinato produce suggerimenti disordinati. La coerenza è un investimento che paga in ogni iterazione futura.

**Usa strumenti automatici:**

Prettier, ESLint, formatters automatici. Ma non affidarti solo a loro: la coerenza semantica richiede revisione umana.`,
    why: `La coerenza stilistica riduce il carico cognitivo durante la lettura e rende il codice più facile da navigare. Con l'AI, le incoerenze diventano pattern: codice inconsistente produce suggerimenti inconsistenti.

Il costo di uniformare è basso se fatto subito. Il costo di uniformare codice accumulato è alto.`,
    implementation: [
      "Uniforma nomi a fine sessione",
      "Allinea stile (virgolette, formattazione)",
      "Sistema indentazione consistente",
      "Rimuovi codice morto e import inutilizzati",
      "Usa formatter automatici + revisione manuale"
    ],
    codeExample: {
      language: "typescript",
      filename: "style-consistency.ts",
      code: `// ❌ Incoerenze stilistiche accumulate
const user_name = "Mario";
const userAge = 30;
const USER_EMAIL = 'mario@email.com';

function getUser() { return { user_name, userAge } }
const fetchUsers = async () => { /* stile diverso */ };

// ✓ Stile coerente
const userName = "Mario";
const userAge = 30;
const userEmail = "mario@email.com";

function getUser() {
  return { userName, userAge, userEmail };
}

async function fetchUsers() {
  // stesso stile ovunque
}`
    },
    rule: {
      text: "Meglio codice semplice e coerente che elegante e disomogeneo.",
      warning: false
    },
    keyPoints: [
      "Convenzioni di naming uniformi",
      "Formattazione consistente",
      "Nessun codice morto",
      "Import ordinati e puliti"
    ],
    commonMistakes: [
      "Rimandare la pulizia a 'dopo'",
      "Mescolare convenzioni di naming",
      "Lasciare stili diversi in file diversi",
      "Affidarsi solo ai formatter automatici"
    ],
    checklist: {
      title: "Verifica coerenza",
      items: [
        "Convenzioni di naming uniformi",
        "Formattazione consistente",
        "Nessun codice morto",
        "Import ordinati e puliti"
      ]
    }
  },
  {
    id: 10,
    number: 10,
    icon: StopCircle,
    title: "Fermarsi prima di strafare",
    subtitle: "Smettere al momento giusto è una competenza",
    description: `Quando l'obiettivo iniziale è raggiunto, **fermati, salva, chiudi la sessione.** Questo è il momento più pericoloso per la qualità del codice.

**Le trappole da riconoscere:**

"Già che ci sono, aggiungo anche..." "Miglioro ancora un attimo..." "Questo refactor veloce..." Queste frasi segnalano che stai per creare debito tecnico.

**Perché succede:**

Sei in flow, l'AI risponde velocemente, sembra facile aggiungere "ancora una cosa". Ma ogni aggiunta fuori scope riduce la qualità, aumenta il rischio di bug e allontana dal focus originale.

**Smettere al momento giusto è una competenza tecnica:**

Richiede disciplina e consapevolezza. Definisci il punto di stop PRIMA di iniziare e rispettalo quando lo raggiungi.`,
    why: `Il "già che ci sono" è la fonte principale di debito tecnico non pianificato. Le aggiunte fuori scope non hanno la stessa qualità del lavoro pianificato e introducono rischi non valutati.

Fermarsi al momento giusto preserva la qualità del lavoro fatto e mantiene il focus per le sessioni future.`,
    implementation: [
      "Definisci il punto di stop PRIMA di iniziare",
      "Quando raggiungi l'obiettivo, fermati",
      "Resisti a 'già che ci sono...'",
      "Annota le idee per sessioni future invece di implementarle",
      "Chiudi la sessione quando il lavoro pianificato è completo"
    ],
    codeExample: {
      language: "markdown",
      filename: "session-log.md",
      code: `# Sessione: fixare bug #123
Obiettivo: utente non riceve email di conferma

## Lavoro completato:
- ✓ Identificato problema in sendEmail()
- ✓ Corretto handler async  
- ✓ Test manuale: email arriva
- ✓ Commit: "fix: email confirmation sent correctly"

## NOTE per prossime sessioni:
- TODO: refactor email service (sessione dedicata)
- TODO: aggiungere retry logic (da pianificare)

🛑 STOP. Obiettivo raggiunto.`
    },
    rule: {
      text: "Smettere al momento giusto è una competenza tecnica.",
      warning: true
    },
    keyPoints: [
      "Punto di stop definito prima di iniziare",
      "Obiettivo originale raggiunto",
      "Nessuna aggiunta fuori scope",
      "Idee per il futuro annotate, non implementate"
    ],
    commonMistakes: [
      "Continuare 'già che ci sono'",
      "Aggiungere feature non pianificate",
      "Refactor fuori scope durante fix",
      "Non definire criteri di completamento"
    ],
    checklist: {
      title: "Verifica completamento",
      items: [
        "Punto di stop definito prima di iniziare",
        "Obiettivo originale raggiunto",
        "Nessuna aggiunta fuori scope",
        "Idee per il futuro annotate, non implementate"
      ]
    }
  }
];
