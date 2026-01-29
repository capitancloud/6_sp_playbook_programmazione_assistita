import { Step } from "./mentalita";
import { FlaskConical, AlertOctagon, MousePointer, Target, Terminal, RotateCcw, Lightbulb, Trash2, Network, CheckCircle } from "lucide-react";

export const testSteps: Step[] = [
  {
    id: 1,
    number: 1,
    icon: FlaskConical,
    title: "Test minimo",
    subtitle: "Verifica il caso base prima di tutto",
    description: `Appena il codice esiste, verifica il caso base. **Non tutti i casi, non tutte le combinazioni. Solo l'uso più semplice e previsto.**

Il test minimo è il primo reality check. Se il caso base non funziona, tutto il resto è costruito su fondamenta instabili. Non ha senso testare edge case se il percorso principale fallisce.

**Cosa include il caso base:**

Input valido e tipico. Percorso principale dell'esecuzione. Risultato atteso più comune. Questo è tutto ciò che serve per iniziare.

**Perché è fondamentale:**

Verifica che l'idea funzioni prima di investire tempo in dettagli. Se il caso base fallisce, hai feedback immediato che qualcosa non va nell'approccio, non solo nell'implementazione.`,
    why: `Il test minimo separa "l'idea funziona" da "l'implementazione è completa". Prima devi validare l'idea, poi puoi raffinare l'implementazione.

Testare edge case prima del caso base è un errore comune che fa perdere tempo prezioso.`,
    implementation: [
      "Appena il codice esiste, testa il caso base",
      "Input: il valore più tipico e valido",
      "Percorso: il flusso principale, non le eccezioni",
      "Output: il risultato atteso più comune",
      "Solo dopo che il caso base passa, vai avanti"
    ],
    codeExample: {
      language: "typescript",
      filename: "test-minimo.ts",
      code: `// Funzione appena scritta
function calculateDiscount(price: number, percentage: number) {
  return price - (price * percentage / 100);
}

// ✓ Test minimo - caso base
console.log("Test caso base:");
console.log(calculateDiscount(100, 10)); // Atteso: 90
// Se questo non funziona, tutto il resto è inutile

// ✗ NON ancora: edge case, valori estremi, ecc.
// Prima il caso base deve passare`
    },
    rule: {
      text: "Se il caso base fallisce, tutto il resto è inutile.",
      warning: true
    },
    keyPoints: [
      "Testa il caso base prima di qualsiasi altra cosa",
      "Input tipico, percorso principale, output atteso",
      "Non investire tempo in edge case prima del caso base",
      "Feedback veloce sull'idea, non sull'implementazione completa"
    ],
    commonMistakes: [
      "Testare edge case prima del caso base",
      "Costruire test elaborati prima di validare l'idea",
      "Saltare il test minimo 'perché è ovvio'",
      "Passare ai dettagli senza aver validato il flusso principale"
    ],
    checklist: {
      title: "Test minimo",
      items: [
        "Il caso base è stato testato",
        "Input tipico produce output atteso",
        "Il percorso principale funziona",
        "Pronto per testare edge case"
      ]
    }
  },
  {
    id: 2,
    number: 2,
    icon: AlertOctagon,
    title: "Caso peggiore",
    subtitle: "Come fallisce il codice?",
    description: `Subito dopo il caso base, testa il caso peggiore. **Input vuoto, input invalido, input estremo.**

L'obiettivo non è vedere SE il codice fallisce (fallirà), ma COME fallisce. Un codice che fallisce in modo chiaro e gestito è molto meglio di uno che fallisce silenziosamente o in modo catastrofico.

**Non serve automatizzare subito:**

Test manuale va benissimo in questa fase. L'importante è vedere il comportamento, non avere una suite di test completa.

**Cosa osservare:**

Il codice crasha? Ritorna un errore sensato? Fallisce silenziosamente? Produce dati corrotti? Ogni risposta ti dice qualcosa sulla robustezza dell'implementazione.`,
    why: `Il comportamento in errore conta quanto quello in successo. Gli utenti reali invieranno input invalidi. Il sistema reale avrà condizioni estreme. Devi sapere cosa succede.

Scoprire il comportamento in errore in produzione è molto più costoso che scoprirlo ora.`,
    implementation: [
      "Subito dopo il caso base, testa il caso peggiore",
      "Input vuoto: cosa succede con null, undefined, ''?",
      "Input invalido: cosa succede con tipi sbagliati?",
      "Input estremo: cosa succede con valori enormi o negativi?",
      "Osserva COME fallisce, non solo SE fallisce"
    ],
    codeExample: {
      language: "typescript",
      filename: "worst-case.ts",
      code: `// Dopo che il caso base passa, testa il peggio

function calculateDiscount(price: number, percentage: number) {
  return price - (price * percentage / 100);
}

// Test casi peggiori - manuale va bene
console.log("=== Test casi peggiori ===");

console.log("Input vuoto:");
console.log(calculateDiscount(null, 10));     // NaN? Crash? Errore?

console.log("Input invalido:");
console.log(calculateDiscount("cento", 10));  // Come fallisce?

console.log("Input estremo:");
console.log(calculateDiscount(1e15, 150));    // Overflow? Negativo?

// Obiettivo: capire il comportamento, non automatizzare`
    },
    rule: {
      text: "Il comportamento in errore conta quanto quello in successo.",
      warning: false
    },
    keyPoints: [
      "Testa input vuoto, invalido, estremo",
      "Osserva COME fallisce, non solo SE",
      "Test manuale va benissimo in questa fase",
      "Il comportamento in errore rivela la robustezza"
    ],
    commonMistakes: [
      "Testare solo il caso felice",
      "Aspettare l'automazione per testare edge case",
      "Ignorare il comportamento in errore",
      "Credere che 'gli utenti non faranno mai questo'"
    ],
    checklist: {
      title: "Test caso peggiore",
      items: [
        "Testato input vuoto (null, undefined, '')",
        "Testato input invalido (tipi sbagliati)",
        "Testato input estremo (valori enormi, negativi)",
        "Documentato il comportamento in errore"
      ]
    }
  },
  {
    id: 3,
    number: 3,
    icon: MousePointer,
    title: "Verifica manuale",
    subtitle: "Segui il flusso passo-passo",
    description: `Esegui il flusso passo-passo. **Non fidarti di ciò che "dovrebbe" succedere. Guarda cosa succede davvero.**

La verifica manuale è il reality check più importante. L'AI può dirti cosa il codice dovrebbe fare, ma solo l'esecuzione ti dice cosa fa realmente.

**Azioni concrete:**

Segui i dati: dove entrano, come si trasformano, dove escono. Verifica le condizioni: quali branch vengono presi? Osserva le decisioni: sono quelle che ti aspettavi?

**Un test di comprensione:**

Se non riesci a seguire il flusso, il codice è troppo complesso. La difficoltà di seguire manualmente è proporzionale alla difficoltà di debuggare quando qualcosa va storto.`,
    why: `La verifica manuale ti costringe a capire cosa fa il codice, non cosa credi che faccia. È il momento in cui scopri le differenze tra intenzione e realtà.

Con l'AI questo è ancora più importante: il codice generato può fare cose diverse da quelle che ti aspetti.`,
    implementation: [
      "Esegui il flusso passo-passo",
      "Segui i dati: input → trasformazioni → output",
      "Verifica le condizioni: quali branch vengono presi?",
      "Osserva le decisioni: sono quelle attese?",
      "Se non riesci a seguire, il codice è troppo complesso"
    ],
    codeExample: {
      language: "typescript",
      filename: "manual-verification.ts",
      code: `function processOrder(order) {
  // VERIFICA MANUALE: seguo passo-passo
  
  // Step 1: Input - cosa entra?
  console.log("1. Input ricevuto:", order);
  
  // Step 2: Validazione - quale branch?
  const isValid = order.items?.length > 0;
  console.log("2. Validazione:", isValid ? "passa" : "fallisce");
  
  // Step 3: Calcolo - trasformazione corretta?
  const total = order.items.reduce((sum, i) => sum + i.price, 0);
  console.log("3. Totale calcolato:", total);
  
  // Step 4: Output - risultato atteso?
  console.log("4. Output finale:", { ...order, total });
  
  return { ...order, total };
}

// Eseguo e OSSERVO ogni step`
    },
    rule: {
      text: "Se non riesci a seguire il flusso, il codice è troppo complesso.",
      warning: true
    },
    keyPoints: [
      "Esegui passo-passo, non 'a occhio'",
      "Segui i dati attraverso ogni trasformazione",
      "Verifica che le condizioni siano quelle attese",
      "La difficoltà di seguire = difficoltà di debug"
    ],
    commonMistakes: [
      "Fidarsi di ciò che 'dovrebbe' succedere",
      "Non eseguire realmente il codice",
      "Saltare step 'ovvi'",
      "Ignorare la complessità come segnale"
    ],
    checklist: {
      title: "Verifica manuale",
      items: [
        "Flusso eseguito passo-passo",
        "Dati seguiti dall'input all'output",
        "Condizioni verificate",
        "Risultato conforme alle aspettative"
      ]
    }
  },
  {
    id: 4,
    number: 4,
    icon: Target,
    title: "Confronto con obiettivo",
    subtitle: "Sta succedendo quello che avevo definito?",
    description: `Riprendi l'obiettivo scritto all'inizio. **Sta succedendo esattamente quello che avevi definito?**

Non "più o meno". Non "funziona lo stesso". Esattamente quello che avevi scritto. Se non coincide, o il codice è sbagliato, o l'obiettivo va rivisto.

**L'obiettivo come fonte di verità:**

L'obiettivo scritto all'inizio della sessione non è un suggerimento, è il criterio di accettazione. Il codice che "funziona ma fa altro" non è accettabile.

**Quando non coincide:**

Prima verifica se il codice è sbagliato. Se il codice è corretto ma l'obiettivo era sbagliato, aggiorna l'obiettivo e documenta perché. Non lasciare ambiguità.`,
    why: `L'obiettivo scritto vince sempre sul codice. Senza questo principio, è troppo facile convincersi che "va bene lo stesso" quando in realtà stai deviando dal piano.

Il confronto con l'obiettivo è il test finale di successo della sessione.`,
    implementation: [
      "Riprendi l'obiettivo scritto all'inizio",
      "Confronta: sta succedendo ESATTAMENTE quello?",
      "Non accettare 'più o meno' o 'funziona lo stesso'",
      "Se non coincide: correggi codice o aggiorna obiettivo",
      "Documenta qualsiasi deviazione"
    ],
    codeExample: {
      language: "markdown",
      filename: "objective-check.md",
      code: `# Confronto con obiettivo

## Obiettivo originale
"Quando l'utente inserisce un'email invalida, 
il sistema mostra 'Email non valida' e non salva nulla"

## Verifica
□ Email invalida inserita: test@
□ Messaggio mostrato: "Email non valida" ✓
□ Nulla salvato nel database: ✓

## Risultato
✓ COINCIDE - Obiettivo raggiunto

---

## Se NON coincide:
- Il codice è sbagliato? → Correggi il codice
- L'obiettivo era sbagliato? → Aggiorna e documenta perché
- MAI lasciare ambiguità`
    },
    rule: {
      text: "L'obiettivo scritto vince sempre sul codice.",
      warning: false
    },
    keyPoints: [
      "Confronto esatto con l'obiettivo originale",
      "Non accettare 'più o meno'",
      "Correggi codice o aggiorna obiettivo, mai lasciare ambiguità",
      "L'obiettivo è il criterio di accettazione"
    ],
    commonMistakes: [
      "Accettare 'funziona più o meno'",
      "Non rileggere l'obiettivo originale",
      "Cambiare obiettivo senza documentare",
      "Convincersi che la deviazione è accettabile"
    ],
    checklist: {
      title: "Confronto obiettivo",
      items: [
        "Obiettivo originale riletto",
        "Confronto punto per punto",
        "Nessuna deviazione non documentata",
        "Risultato: coincide / non coincide"
      ]
    }
  },
  {
    id: 5,
    number: 5,
    icon: Terminal,
    title: "Logging temporaneo",
    subtitle: "Se non vedi il flusso, stai indovinando",
    description: `Aggiungi log espliciti e temporanei per vedere cosa succede davvero. **Non log generici o decorativi, ma log che mostrano ingressi, decisioni e uscite.**

Il logging temporaneo è il tuo microscopio. Ti permette di vedere esattamente cosa sta succedendo all'interno del codice, senza doverlo indovinare.

**Cosa loggare:**

Ingressi: cosa entra nella funzione? Decisioni: quali branch vengono presi? Uscite: cosa ritorna la funzione? Questi tre punti ti danno visibilità completa sul flusso.

**Perché "temporaneo":**

Questi log servono per il debug, non per la produzione. Una volta che hai capito il comportamento, li rimuovi. Lasciarli inquina il codice e rallenta l'esecuzione.`,
    why: `Senza log, stai indovinando cosa fa il codice. I log temporanei trasformano le ipotesi in dati osservabili.

Con l'AI questo è fondamentale: il codice generato può avere comportamenti non ovvi che solo i log rivelano.`,
    implementation: [
      "Aggiungi log espliciti e mirati",
      "Logga ingressi: 'Input ricevuto: X'",
      "Logga decisioni: 'Condizione Y: true/false'",
      "Logga uscite: 'Output finale: Z'",
      "Rimuovi i log dopo aver capito il comportamento"
    ],
    codeExample: {
      language: "typescript",
      filename: "temp-logging.ts",
      code: `function processPayment(amount: number, userId: string) {
  // LOG TEMPORANEI - da rimuovere dopo debug
  
  // 1. Ingresso
  console.log("[DEBUG] Input:", { amount, userId });
  
  // 2. Decisioni
  const hasDiscount = checkDiscount(userId);
  console.log("[DEBUG] hasDiscount:", hasDiscount);
  
  const finalAmount = hasDiscount ? amount * 0.9 : amount;
  console.log("[DEBUG] finalAmount:", finalAmount);
  
  // 3. Uscita
  const result = chargeCard(userId, finalAmount);
  console.log("[DEBUG] result:", result);
  
  return result;
}

// Dopo aver capito il flusso:
// RIMUOVI tutti i [DEBUG] log`
    },
    rule: {
      text: "Se non vedi il flusso, stai indovinando.",
      warning: true
    },
    keyPoints: [
      "Log mirati: ingressi, decisioni, uscite",
      "Prefisso [DEBUG] per identificarli",
      "Niente log generici o decorativi",
      "Rimuovi dopo aver capito il comportamento"
    ],
    commonMistakes: [
      "Log generici che non dicono nulla",
      "Lasciare log di debug in produzione",
      "Loggare troppo (rumore)",
      "Non loggare abbastanza (cecità)"
    ],
    checklist: {
      title: "Logging temporaneo",
      items: [
        "Log agli ingressi della funzione",
        "Log alle decisioni/branch",
        "Log alle uscite",
        "Log rimossi dopo debug"
      ]
    }
  },
  {
    id: 6,
    number: 6,
    icon: RotateCcw,
    title: "Riproducibilità",
    subtitle: "Stesso input, stesso output, sempre",
    description: `Ripeti lo stesso test più volte. **Stesso input deve produrre stesso output, sempre.**

Se il comportamento cambia tra esecuzioni identiche, hai un problema serio. Potrebbe essere stato nascosto, timing, dipendenze esterne, o condizioni di race. Qualunque sia la causa, la non riproducibilità è un campanello d'allarme enorme.

**Cosa verificare:**

Stesso input produce stesso output? Il comportamento è identico ogni volta? Non ci sono variazioni casuali?

**Con l'AI questo è critico:**

Il codice generato può avere dipendenze nascoste che non sono ovvie. La non riproducibilità rivela queste dipendenze.`,
    why: `Un comportamento non riproducibile è un comportamento non affidabile. Non puoi debuggare ciò che non puoi riprodurre. Non puoi fidarti di ciò che cambia casualmente.

La riproducibilità è la base di qualsiasi test significativo.`,
    implementation: [
      "Ripeti lo stesso test più volte (almeno 3)",
      "Verifica: stesso input → stesso output?",
      "Verifica: comportamento identico ogni volta?",
      "Se cambia: c'è stato, timing, o dipendenza nascosta",
      "Non procedere finché il comportamento non è riproducibile"
    ],
    codeExample: {
      language: "typescript",
      filename: "reproducibility.ts",
      code: `// Test di riproducibilità

function testReproducibility() {
  const testInput = { userId: "123", amount: 100 };
  const results = [];
  
  // Eseguo 5 volte con stesso input
  for (let i = 0; i < 5; i++) {
    const result = processPayment(testInput.amount, testInput.userId);
    results.push(JSON.stringify(result));
    console.log(\`Run \${i + 1}:\`, result);
  }
  
  // Verifico che tutti i risultati siano uguali
  const allSame = results.every(r => r === results[0]);
  
  if (allSame) {
    console.log("✓ RIPRODUCIBILE - Comportamento stabile");
  } else {
    console.log("✗ NON RIPRODUCIBILE - Problema serio!");
    console.log("Variazioni trovate:", [...new Set(results)]);
  }
}

testReproducibility();`
    },
    rule: {
      text: "Se non è riproducibile, non è affidabile.",
      warning: true
    },
    keyPoints: [
      "Ripeti lo stesso test più volte",
      "Stesso input deve dare stesso output",
      "Variazioni = problema serio",
      "Non procedere senza riproducibilità"
    ],
    commonMistakes: [
      "Testare una volta sola",
      "Ignorare variazioni 'minori'",
      "Attribuire variazioni a 'casualità normale'",
      "Non investigare la causa della non riproducibilità"
    ],
    checklist: {
      title: "Test riproducibilità",
      items: [
        "Stesso test eseguito almeno 3 volte",
        "Risultati identici ogni volta",
        "Nessuna variazione nel comportamento",
        "Se variazioni: causa identificata"
      ]
    }
  },
  {
    id: 7,
    number: 7,
    icon: Lightbulb,
    title: "Assunzioni errate",
    subtitle: "Le assunzioni erano vere?",
    description: `Riguarda le assunzioni fatte prima di scrivere il codice. **Erano vere? Sono sempre vere? Lo saranno in futuro?**

Ogni bug serio nasce da un'assunzione falsa. "L'input sarà sempre valido". "L'API risponde sempre in tempo". "L'utente non farà mai X". Queste assunzioni sembrano ragionevoli finché non lo sono più.

**Il test delle assunzioni:**

Riprendi le assunzioni documentate (o implicite). Verifica che siano ancora vere. Chiediti se saranno vere in condizioni diverse.

**Quando un'assunzione fallisce:**

Correggi il codice per non dipendere dall'assunzione, oppure aggiorna le assunzioni documentandole chiaramente come vincoli.`,
    why: `Le assunzioni sono la causa nascosta della maggior parte dei bug. Il codice funziona perfettamente... finché le assunzioni reggono. Quando cadono, il codice crolla.

Verificare le assunzioni esplicitamente previene bug che altrimenti emergerebbero solo in produzione.`,
    implementation: [
      "Riprendi le assunzioni fatte (scritte o implicite)",
      "Per ogni assunzione chiediti: è vera? Sempre?",
      "Testa il codice quando l'assunzione fallisce",
      "Se l'assunzione può fallire: gestisci il caso",
      "Documenta le assunzioni come vincoli espliciti"
    ],
    codeExample: {
      language: "typescript",
      filename: "assumption-check.ts",
      code: `// Assunzioni da verificare

function getUserProfile(userId: string) {
  // ASSUNZIONE 1: userId è sempre una stringa valida
  // Verifica: cosa succede con userId = "" o null?
  
  // ASSUNZIONE 2: L'API risponde sempre
  // Verifica: cosa succede se timeout?
  
  // ASSUNZIONE 3: Il profilo esiste sempre
  // Verifica: cosa succede se utente eliminato?
  
  const response = await api.get(\`/users/\${userId}\`);
  return response.data; // ASSUNZIONE 4: data esiste sempre
}

// Test delle assunzioni:
// - getUserProfile("") → fallisce come?
// - getUserProfile con API offline → fallisce come?
// - getUserProfile con utente inesistente → fallisce come?`
    },
    rule: {
      text: "Ogni bug serio nasce da un'assunzione falsa.",
      warning: true
    },
    keyPoints: [
      "Identifica le assunzioni (esplicite e implicite)",
      "Verifica che siano vere in tutti i casi",
      "Testa cosa succede quando falliscono",
      "Documenta le assunzioni come vincoli"
    ],
    commonMistakes: [
      "Non documentare le assunzioni",
      "Assumere che 'non succederà mai'",
      "Non testare quando le assunzioni falliscono",
      "Lasciare assunzioni implicite non verificate"
    ],
    checklist: {
      title: "Verifica assunzioni",
      items: [
        "Assunzioni identificate e documentate",
        "Ogni assunzione verificata",
        "Casi di fallimento testati",
        "Codice robusto anche quando le assunzioni falliscono"
      ]
    }
  },
  {
    id: 8,
    number: 8,
    icon: Trash2,
    title: "Rimozione tamponi",
    subtitle: "Nessun tampone senza scadenza",
    description: `Elimina fix temporanei, workaround, hack "solo per ora". **Se restano, diventano permanenti e vengono dimenticati.**

I tamponi sono soluzioni temporanee che risolvono sintomi senza affrontare cause. Hanno il loro posto nel debugging, ma devono avere una scadenza dichiarata.

**Con l'AI è ancora peggio:**

L'AI produce facilmente fix rapidi che "funzionano". Questi tamponi si moltiplicano velocemente. Ogni sessione aggiunge nuovi workaround. In poco tempo, il codice è un castello di carte.

**La regola:**

Ogni tampone deve avere una scadenza e un ticket associato. Nessun tampone senza piano di rimozione. Se non puoi rimuoverlo ora, documenta quando e come lo farai.`,
    why: `I tamponi temporanei che restano diventano debito tecnico permanente. Peggio: vengono dimenticati, e nessuno sa più perché quel codice strano esiste.

La rimozione dei tamponi è parte del completamento del lavoro, non un optional "per dopo".`,
    implementation: [
      "Identifica tutti i fix temporanei nel codice",
      "Per ogni tampone: ha una scadenza? Un ticket?",
      "Se no: rimuovilo ora o aggiungi scadenza",
      "Tamponi senza scadenza = tamponi permanenti",
      "Con l'AI: revisiona ogni sessione per tamponi nuovi"
    ],
    codeExample: {
      language: "typescript",
      filename: "remove-workarounds.ts",
      code: `// ❌ Tampone senza scadenza
// @ts-ignore
const data = unsafeOperation();

// ❌ Workaround dimenticato
// TODO: fix this later
const result = hackyFix(data);

// ✓ Tampone con scadenza e ticket
// WORKAROUND: API v1 non supporta batch > 100
// Ticket: TECH-234 - Rimuovere quando migriamo a v2
// Scadenza: Sprint 15 (fine marzo)
for (const chunk of chunks(items, 100)) {
  await processChunk(chunk);
}

// ✓ Meglio: risolvi ora invece di rimandare
const result = properFix(data);`
    },
    rule: {
      text: "Nessun tampone senza scadenza dichiarata.",
      warning: true
    },
    keyPoints: [
      "Identifica tutti i fix temporanei",
      "Ogni tampone ha scadenza e ticket",
      "Nessun TODO senza piano di rimozione",
      "Revisiona ogni sessione per nuovi tamponi"
    ],
    commonMistakes: [
      "Lasciare tamponi 'temporanei' per sempre",
      "TODO senza ticket associato",
      "Workaround senza documentazione",
      "Accumulare fix rapidi dall'AI senza revisione"
    ],
    checklist: {
      title: "Gestione tamponi",
      items: [
        "Tamponi identificati nel codice",
        "Ogni tampone ha scadenza",
        "Ticket creato per ogni workaround",
        "Nessun tampone senza piano di rimozione"
      ]
    }
  },
  {
    id: 9,
    number: 9,
    icon: Network,
    title: "Impatto sul sistema",
    subtitle: "Un codice corretto che rompe il contesto è sbagliato",
    description: `Verifica cosa succede attorno al codice. **Anche se il codice funziona e il test passa, potrebbe rompere il contesto.**

Il codice non vive in isolamento. Interagisce con altri moduli, consuma risorse, produce log, modifica stato condiviso. Un cambiamento locale può avere effetti globali.

**Cosa verificare:**

Performance: il codice è abbastanza veloce nel contesto reale? Risorse: quanta memoria/CPU consuma? Log: produce troppo rumore? Stati condivisi: modifica qualcosa che altri usano?

**Il test di integrazione informale:**

Il codice funziona in isolamento. Ma funziona quando è inserito nel sistema completo? Questa è la domanda finale.`,
    why: `Un codice che funziona perfettamente in isolamento ma rompe il sistema è comunque un bug. L'impatto sul contesto è parte della correttezza.

Con l'AI questo è critico: il codice generato ottimizza il problema locale, non l'integrazione globale.`,
    implementation: [
      "Verifica performance nel contesto reale",
      "Controlla consumo risorse (memoria, CPU)",
      "Verifica che i log non siano rumorosi",
      "Controlla impatto su stati condivisi",
      "Testa l'integrazione con il sistema completo"
    ],
    codeExample: {
      language: "typescript",
      filename: "system-impact.ts",
      code: `// Checklist impatto sul sistema

async function newFeature() {
  // Il codice funziona in isolamento ✓
  // Ma qual è l'impatto sul sistema?
  
  // 1. Performance
  console.time("newFeature");
  const result = await processLargeDataset();
  console.timeEnd("newFeature");
  // Accettabile nel contesto? O rallenta tutto?
  
  // 2. Risorse
  console.log("Memory:", process.memoryUsage());
  // Picchi di memoria? Memory leak?
  
  // 3. Log
  // Troppi log in produzione? Rumore?
  
  // 4. Stati condivisi
  // Modifica cache globali? Session? Database?
  
  return result;
}

// Test finale: funziona nel sistema completo?`
    },
    rule: {
      text: "Un codice corretto che rompe il contesto è comunque sbagliato.",
      warning: false
    },
    keyPoints: [
      "Il codice non vive in isolamento",
      "Verifica performance, risorse, log, stati",
      "Un cambiamento locale può avere effetti globali",
      "L'integrazione è parte della correttezza"
    ],
    commonMistakes: [
      "Testare solo in isolamento",
      "Ignorare impatto su performance",
      "Non verificare consumo risorse",
      "Dimenticare stati condivisi"
    ],
    checklist: {
      title: "Impatto sistema",
      items: [
        "Performance verificata nel contesto reale",
        "Consumo risorse accettabile",
        "Log non rumorosi",
        "Nessun impatto negativo su stati condivisi"
      ]
    }
  },
  {
    id: 10,
    number: 10,
    icon: CheckCircle,
    title: "Decisione finale",
    subtitle: "Pronto, da migliorare, o da scartare?",
    description: `Alla fine di ogni verifica, scegli una sola opzione: **Pronto, Da migliorare, o Da scartare.** Scrivilo davvero.

Questa decisione chiude il ciclo. Senza una decisione esplicita, il lavoro resta in uno stato ambiguo. "Più o meno funziona" non è una decisione. "Vediamo dopo" non è una decisione.

**Le tre opzioni:**

**Pronto:** Il codice soddisfa l'obiettivo, i test passano, non ci sono tamponi. Può essere integrato.

**Da migliorare:** Funziona ma ha problemi noti. Documenta cosa manca e quando lo farai.

**Da scartare:** L'approccio non funziona. Meglio ricominciare che continuare a patchare.`,
    why: `La decisione esplicita chiude il ciclo mentale. Senza di essa, il lavoro resta "in sospeso" nella tua testa, consumando energia cognitiva.

Scrivere la decisione ti costringe a valutare onestamente lo stato del lavoro, senza auto-inganno.`,
    implementation: [
      "Alla fine di ogni verifica, prendi una decisione",
      "Scegli UNA opzione: Pronto / Da migliorare / Da scartare",
      "Scrivila esplicitamente (non solo mentalmente)",
      "Se 'Da migliorare': documenta cosa manca",
      "Se 'Da scartare': non continuare a patchare"
    ],
    codeExample: {
      language: "markdown",
      filename: "final-decision.md",
      code: `# Decisione finale: validateEmail()

## Stato verifica
- [x] Test minimo: passa
- [x] Caso peggiore: gestito
- [x] Verifica manuale: ok
- [x] Confronto obiettivo: coincide
- [ ] Tamponi: presente 1 workaround

## Decisione
**DA MIGLIORARE**

## Motivazione
Manca gestione errore su input nullo.
Workaround presente per edge case unicode.

## Azioni richieste
1. Aggiungere validazione null (30 min)
2. Rimuovere workaround unicode (ticket TECH-456)

## Scadenza miglioramenti
Sprint corrente`
    },
    rule: {
      text: "Scrivere la decisione chiude il ciclo e rende il lavoro sano.",
      warning: false
    },
    keyPoints: [
      "Decisione esplicita: Pronto / Da migliorare / Da scartare",
      "Scrivila, non solo pensarla",
      "Se da migliorare: documenta cosa manca",
      "La decisione chiude il ciclo mentale"
    ],
    commonMistakes: [
      "Lasciare il lavoro in stato ambiguo",
      "Non prendere decisione esplicita",
      "'Più o meno funziona' come decisione",
      "Continuare a patchare invece di scartare"
    ],
    checklist: {
      title: "Decisione finale",
      items: [
        "Decisione presa: Pronto/Migliorare/Scartare",
        "Decisione scritta, non solo pensata",
        "Se migliorare: azioni documentate",
        "Se scartare: non continuare a patchare"
      ]
    }
  }
];
