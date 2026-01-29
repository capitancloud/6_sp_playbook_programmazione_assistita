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
  rule: string;
  ruleWarning?: boolean;
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
    description: "Il primo passo per consolidare il lavoro è rileggere il codice con occhi freschi, dopo una pausa reale che permetta di vedere ciò che a caldo sfugge.",
    why: "La rilettura immediata è inefficace perché il cervello è ancora in modalità 'creazione'. La distanza temporale permette di notare incongruenze, eccessi e problemi che durante la scrittura sembravano accettabili.",
    implementation: [
      "Non rileggere subito dopo aver finito",
      "Fai una pausa reale: cambio di contesto, qualche ora, meglio il giorno dopo",
      "Rileggi senza scrivere e senza correggere",
      "Leggi solo per capire e notare cosa non ti convince",
      "Obiettivo: vedere incongruenze, notare eccessi, capire cosa dà fastidio"
    ],
    codeExample: {
      language: "markdown",
      code: `## Checklist rilettura a freddo

### Prima della rilettura:
- [ ] È passato abbastanza tempo (ore/giorno)?
- [ ] Ho cambiato contesto mentale?
- [ ] Sono in modalità "osservazione" non "correzione"?

### Durante la rilettura:
- [ ] Cosa mi sembra confuso?
- [ ] Cosa mi sembra eccessivo?
- [ ] Cosa farei diversamente ora?
- [ ] Quali parti non capisco più?

### Dopo la rilettura:
- [ ] Ho annotato i punti critici?
- [ ] Ho evitato di correggere subito?`
    },
    rule: "Ciò che ti dà fastidio a freddo era già un problema a caldo.",
    keyPoints: [
      "La distanza temporale è fondamentale per vedere i problemi",
      "Leggere senza modificare permette di vedere l'insieme",
      "I dubbi a freddo sono segnali importanti",
      "La fretta di correggere subito compromette l'analisi"
    ],
    commonMistakes: [
      "Rileggere subito dopo aver finito",
      "Iniziare a correggere durante la rilettura",
      "Ignorare le sensazioni di disagio",
      "Non annotare i punti critici"
    ],
    checklist: {
      question: "Stai rispettando la pausa prima della rilettura?",
      title: "Verifica distanza temporale",
      items: [
        "È passato abbastanza tempo dalla scrittura",
        "Ho cambiato contesto (altra attività, pausa reale)",
        "Sto leggendo senza toccare il codice",
        "Sto annotando dubbi invece di correggere subito"
      ]
    }
  },
  {
    id: "refactor-mirato",
    title: "2. Refactor mirato",
    icon: Target,
    description: "Il refactor deve essere chirurgico: solo ciò che è emerso dalla rilettura, con un obiettivo chiaro e definito.",
    why: "Il refactor casuale ('già che ci sono') produce confusione e introduce regressioni. Ogni modifica deve avere una motivazione esplicita e un risultato misurabile.",
    implementation: [
      "Refactorizza solo ciò che hai identificato nella rilettura",
      "Definisci un obiettivo chiaro prima di iniziare",
      "Evita 'già che ci sono' e 'sistemo tutto'",
      "Con l'AI: chiedi refactor su punti specifici, non sull'intero file",
      "Verifica che il refactor abbia raggiunto l'obiettivo"
    ],
    codeExample: {
      language: "typescript",
      code: `// ❌ Refactor casuale
// "Sistemo tutto questo file..."
// Risultato: codice rimescolato, comportamento incerto

// ✅ Refactor mirato
// Obiettivo: "Miglioro naming e separo validazione da logica"

// PRIMA:
function process(d: any) {
  if (!d || !d.x) return null;
  return d.x * 2;
}

// DOPO:
function isValidInput(data: Data | null): data is Data {
  return data !== null && typeof data.value === 'number';
}

function calculateDouble(data: Data): number {
  return data.value * 2;
}

// Obiettivo raggiunto: naming chiaro, validazione separata`
    },
    rule: "Refactor mirato migliora, refactor casuale confonde.",
    keyPoints: [
      "Ogni refactor deve avere un obiettivo esplicito",
      "Lavora solo sui punti identificati nella rilettura",
      "Chiedi all'AI refactor specifici, mai generici",
      "Verifica che l'obiettivo sia stato raggiunto"
    ],
    commonMistakes: [
      "Refactorizzare 'già che ci sono'",
      "Sistemare tutto il file senza criterio",
      "Non definire l'obiettivo prima di iniziare",
      "Chiedere all'AI refactor generici"
    ],
    checklist: {
      question: "Il tuo refactor ha un obiettivo chiaro?",
      title: "Verifica refactor mirato",
      items: [
        "Ho identificato il problema nella rilettura",
        "Ho definito cosa voglio migliorare",
        "Ho definito cosa deve restare uguale",
        "Sto lavorando solo sui punti specifici"
      ]
    }
  },
  {
    id: "pulizia",
    title: "3. Pulizia",
    icon: Trash2,
    description: "Il codice finale deve apparire intenzionale, non frutto di tentativi. Tutto ciò che è temporaneo o morto va eliminato.",
    why: "Log di debug, commenti temporanei e codice morto creano rumore che confonde chi legge (incluso te stesso in futuro). Un codice pulito comunica che ogni riga è stata scelta con intenzione.",
    implementation: [
      "Elimina tutti i log temporanei",
      "Rimuovi i commenti di debug",
      "Cancella il codice morto e le prove fallite",
      "Se qualcosa serve 'forse': non serve",
      "Il codice finale deve sembrare scritto con intenzione"
    ],
    codeExample: {
      language: "typescript",
      code: `// ❌ Codice sporco (pre-pulizia)
function calculateTotal(items: Item[]) {
  console.log("DEBUG: items received", items); // TODO: remove
  // const oldMethod = items.reduce((a, b) => a + b.price, 0);
  
  let total = 0;
  for (const item of items) {
    console.log("processing:", item); // temp log
    total += item.price;
    // total += item.tax; // maybe later?
  }
  
  // console.log("FINAL:", total);
  return total;
}

// ✅ Codice pulito (post-pulizia)
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}`
    },
    rule: "Il codice finale deve sembrare scritto con intenzione, non per tentativi.",
    keyPoints: [
      "Log temporanei vanno sempre rimossi",
      "Codice commentato 'per dopo' non serve mai",
      "Se dubiti che serva, probabilmente non serve",
      "La pulizia è parte del lavoro, non un extra"
    ],
    commonMistakes: [
      "Lasciare console.log di debug",
      "Tenere codice commentato 'per sicurezza'",
      "Rimandare la pulizia a 'dopo'",
      "Pensare che il codice morto non faccia danno"
    ],
    checklist: {
      question: "Il codice è pulito da elementi temporanei?",
      title: "Verifica pulizia codice",
      items: [
        "Nessun console.log di debug",
        "Nessun commento temporaneo (TODO, FIXME, temp)",
        "Nessun codice commentato",
        "Nessuna prova fallita lasciata nel file"
      ]
    }
  },
  {
    id: "allineamento-stile",
    title: "4. Allineamento stile",
    icon: Palette,
    description: "La coerenza stilistica è più importante dell'eleganza. Non importa quale stile scegli, importa che sia uno solo in tutto il progetto.",
    why: "Con l'AI, le incongruenze di stile si moltiplicano velocemente perché ogni risposta può seguire convenzioni diverse. Un codice stilisticamente uniforme è più leggibile e manutenibile.",
    implementation: [
      "Uniforma naming: camelCase, snake_case, PascalCase (scegli uno)",
      "Allinea indentazione e formattazione",
      "Mantieni struttura coerente tra file simili",
      "Applica le stesse convenzioni ovunque",
      "Non importa lo stile scelto, importa che sia uno solo"
    ],
    codeExample: {
      language: "typescript",
      code: `// ❌ Stile incoerente
const user_name = "Mario";        // snake_case
const userAge = 30;               // camelCase
const UserEmail = "m@test.com";   // PascalCase

function GetUser() { }            // PascalCase
function fetch_data() { }         // snake_case
function processItem() { }        // camelCase

// ✅ Stile coerente (camelCase scelto)
const userName = "Mario";
const userAge = 30;
const userEmail = "m@test.com";

function getUser() { }
function fetchData() { }
function processItem() { }

// Convenzioni del progetto:
// - Variabili e funzioni: camelCase
// - Classi e tipi: PascalCase
// - Costanti: UPPER_SNAKE_CASE`
    },
    rule: "Coerenza batte eleganza.",
    keyPoints: [
      "Scegli uno stile e applicalo ovunque",
      "L'AI genera stili diversi: normalizzali",
      "La coerenza migliora la leggibilità più dell'eleganza",
      "Documenta le convenzioni scelte"
    ],
    commonMistakes: [
      "Mescolare convenzioni di naming",
      "Non allineare il codice generato dall'AI",
      "Cambiare stile a metà progetto",
      "Preferire l'eleganza alla coerenza"
    ],
    checklist: {
      question: "Lo stile è uniforme in tutto il codice?",
      title: "Verifica coerenza stilistica",
      items: [
        "Naming coerente (camelCase, PascalCase, etc.)",
        "Indentazione uniforme",
        "Struttura simile tra file dello stesso tipo",
        "Convenzioni documentate e rispettate"
      ]
    }
  },
  {
    id: "test-mancanti",
    title: "5. Test mancanti",
    icon: TestTube,
    description: "Non serve copertura totale, serve copertura consapevole. Ogni parte critica senza test è una scommessa che stai facendo.",
    why: "I test non sono solo per trovare bug: documentano il comportamento atteso. Una parte critica senza test può rompersi silenziosamente in futuro senza che nessuno se ne accorga.",
    implementation: [
      "Guarda cosa non è stato testato durante lo sviluppo",
      "Aggiungi test minimi per le parti critiche",
      "Documenta i test manuali se non automatizzi",
      "Aggiungi controlli automatici essenziali",
      "Non serve copertura totale: serve copertura consapevole"
    ],
    codeExample: {
      language: "typescript",
      code: `// Analisi copertura test

// ✅ Parti testate:
// - Validazione input (test automatico)
// - Calcolo totale (test automatico)

// ⚠️ Parti NON testate (da aggiungere):
// - Gestione errori di rete
// - Comportamento con lista vuota
// - Edge case: valori negativi

// Test mancante da aggiungere:
describe('calculateTotal', () => {
  it('should handle empty list', () => {
    expect(calculateTotal([])).toBe(0);
  });
  
  it('should handle negative values', () => {
    const items = [{ price: 10 }, { price: -5 }];
    expect(calculateTotal(items)).toBe(5);
  });
});

// Test manuale documentato:
// □ Verificare comportamento offline
// □ Testare con connessione lenta
// □ Verificare messaggio errore utente`
    },
    rule: "Ogni parte critica senza test è una scommessa.",
    keyPoints: [
      "Identifica cosa non è testato",
      "Prioritizza le parti critiche",
      "Test manuali documentati valgono",
      "Copertura consapevole > copertura totale"
    ],
    commonMistakes: [
      "Pensare che test = solo test automatici",
      "Non documentare i test manuali",
      "Ignorare le parti critiche",
      "Puntare alla copertura totale senza criterio"
    ],
    checklist: {
      question: "Le parti critiche sono testate?",
      title: "Verifica copertura test",
      items: [
        "Ho identificato cosa non è testato",
        "Le parti critiche hanno almeno un test",
        "I test manuali sono documentati",
        "So quali rischi sto accettando"
      ]
    }
  },
  {
    id: "casi-limite",
    title: "6. Casi limite",
    icon: CornerDownRight,
    description: "I casi limite ignorati tornano sempre. Riprendi quelli identificati all'inizio e verifica che siano gestiti o almeno documentati.",
    why: "Durante lo sviluppo è facile dimenticare gli edge case pianificati. Il consolidamento è il momento per verificare che nessuno sia stato tralasciato e per aggiungere quelli emersi durante il lavoro.",
    implementation: [
      "Riprendi i casi limite scritti all'inizio della sessione",
      "Verifica: sono gestiti? Sono documentati? Sono ancora validi?",
      "Se emergono nuovi edge case: aggiungili alla lista",
      "Non ignorare i casi limite 'improbabili'",
      "Decidi esplicitamente: gestito, documentato, o accettato come rischio"
    ],
    codeExample: {
      language: "markdown",
      code: `## Edge Cases - Verifica finale

### Identificati all'inizio:
| Caso | Stato | Note |
|------|-------|------|
| Input nullo | ✅ Gestito | Ritorna errore specifico |
| Lista vuota | ✅ Gestito | Ritorna 0 |
| Valori negativi | ⚠️ Documentato | Accettati, nessun controllo |
| Overflow numerico | ❌ Non gestito | Da aggiungere TODO |

### Emersi durante sviluppo:
| Caso | Stato | Note |
|------|-------|------|
| Timeout rete | ✅ Gestito | Retry automatico |
| Dati corrotti | ⚠️ Documentato | Log + skip |

### Decisione finale:
- Gestiti: 3
- Documentati: 2
- Da aggiungere: 1 (overflow)`
    },
    rule: "I casi limite ignorati tornano sempre.",
    keyPoints: [
      "Riprendi sempre la lista iniziale di edge case",
      "Nuovi casi emersi vanno aggiunti",
      "Ogni caso deve avere uno stato: gestito, documentato, accettato",
      "Ignorare non è un'opzione valida"
    ],
    commonMistakes: [
      "Dimenticare la lista iniziale di edge case",
      "Ignorare i casi 'improbabili'",
      "Non documentare i casi non gestiti",
      "Non aggiornare la lista con i nuovi casi emersi"
    ],
    checklist: {
      question: "I casi limite sono tutti tracciati?",
      title: "Verifica edge cases",
      items: [
        "Ho ripreso la lista iniziale",
        "Ogni caso ha uno stato definito",
        "I nuovi casi sono stati aggiunti",
        "So quali rischi sto accettando"
      ]
    }
  },
  {
    id: "documentazione",
    title: "7. Documentazione",
    icon: FileText,
    description: "La documentazione è ciò che resta quando l'output viene dimenticato. Se non è documentato, per chi verrà dopo non esiste.",
    why: "Con l'AI il codice viene prodotto velocemente, ma il contesto e le decisioni si perdono altrettanto rapidamente. La documentazione preserva il 'perché' oltre al 'cosa'.",
    implementation: [
      "Aggiorna almeno uno di: README, commento di alto livello, note tecniche",
      "Scrivi cosa fa il codice",
      "Scrivi cosa NON fa",
      "Documenta come usarlo",
      "Elenca i limiti noti"
    ],
    codeExample: {
      language: "markdown",
      code: `## Modulo: OrderProcessor

### Cosa fa
Elabora ordini dal carrello, calcola totali con sconti
e genera conferma per l'utente.

### Cosa NON fa
- Non gestisce pagamenti (delegato a PaymentService)
- Non invia email (delegato a NotificationService)
- Non gestisce inventario

### Come usarlo
\`\`\`typescript
const processor = new OrderProcessor(config);
const result = await processor.process(cart);
\`\`\`

### Limiti noti
- Max 100 items per ordine
- Sconti non cumulabili
- Timeout: 30 secondi

### Decisioni architetturali
- Validazione sincrona per UX
- Persistenza asincrona per performance`
    },
    rule: "Se non è documentato, non esiste.",
    keyPoints: [
      "Documenta il 'perché', non solo il 'cosa'",
      "Cosa NON fa è importante quanto cosa fa",
      "I limiti noti risparmiano debug futuro",
      "La documentazione è parte del deliverable"
    ],
    commonMistakes: [
      "Pensare che il codice sia auto-documentante",
      "Non documentare i limiti noti",
      "Scrivere solo il 'cosa', mai il 'perché'",
      "Rimandare la documentazione a 'dopo'"
    ],
    checklist: {
      question: "La documentazione è aggiornata?",
      title: "Verifica documentazione",
      items: [
        "C'è almeno un file di documentazione aggiornato",
        "È chiaro cosa fa e cosa non fa",
        "I limiti noti sono elencati",
        "È chiaro come usare il codice"
      ]
    }
  },
  {
    id: "commit-consapevole",
    title: "8. Commit consapevole",
    icon: GitCommit,
    description: "Il commit è parte del pensiero, non solo del versionamento. Un buon messaggio spiega cosa, perché, e cosa resta aperto.",
    why: "I messaggi di commit generici ('fix', 'update') rendono impossibile capire la storia del progetto. Un commit ben scritto è documentazione che vive con il codice.",
    implementation: [
      "Scrivi cosa hai fatto (azione)",
      "Scrivi perché (motivazione)",
      "Scrivi cosa resta aperto (se c'è)",
      "Evita messaggi generici: 'fix', 'update', 'varie'",
      "Il commit chiude un'unità logica di lavoro"
    ],
    codeExample: {
      language: "markdown",
      code: `# ❌ Commit generici (da evitare)
fix
update
varie
wip
changes

# ✅ Commit consapevoli

feat: aggiungi validazione input ordini

Aggiunta validazione sincrona per migliorare UX.
Controlli: quantità positiva, prezzo valido, stock disponibile.
Manca: gestione edge case valori null (TODO).

---

fix: correggi calcolo sconto cumulativo

Il bug causava sconti duplicati su ordini multi-prodotto.
Root cause: loop non resettava variabile temporanea.
Test aggiunto per regressione.

---

refactor: separa validazione da logica business

Obiettivo: migliorare testabilità del modulo ordini.
Comportamento invariato, solo riorganizzazione.
Prossimo step: aggiungere test unitari validazione.`
    },
    rule: "Il commit è parte del pensiero, non solo del versionamento.",
    keyPoints: [
      "Cosa + perché + cosa resta aperto",
      "Messaggi generici sono inutili",
      "Il commit documenta la storia del progetto",
      "Ogni commit = un'unità logica completa"
    ],
    commonMistakes: [
      "Usare messaggi generici (fix, update)",
      "Non spiegare il perché",
      "Commit troppo grandi con troppe modifiche",
      "Non menzionare cosa resta da fare"
    ],
    checklist: {
      question: "Il messaggio di commit è informativo?",
      title: "Verifica qualità commit",
      items: [
        "Spiega cosa è stato fatto",
        "Spiega perché è stato fatto",
        "Menziona cosa resta aperto (se applicabile)",
        "Evita messaggi generici"
      ]
    }
  },
  {
    id: "debito-tecnico",
    title: "9. Debito tecnico",
    icon: CreditCard,
    description: "Il debito tecnico non scritto diventa debito infinito. Annota esplicitamente cosa è stato rimandato, perché, e quando andrebbe affrontato.",
    why: "Con l'AI il debito tecnico cresce silenziosamente perché si produce molto codice velocemente. Se non viene tracciato esplicitamente, viene dimenticato e accumula interessi.",
    implementation: [
      "Annota esplicitamente cosa è stato rimandato",
      "Scrivi perché è stato rimandato",
      "Indica quando andrebbe affrontato",
      "Non lasciarlo solo nella testa",
      "Usa un sistema di tracking (TODO file, issue, etc.)"
    ],
    codeExample: {
      language: "markdown",
      code: `## Debito Tecnico - Sprint 12

### Rimandato intenzionalmente:

#### 1. Ottimizzazione query ordini
- **Cosa**: La query carica tutti i campi, dovrebbe caricare solo quelli necessari
- **Perché rimandato**: Focus su funzionalità, performance accettabile per ora
- **Quando affrontare**: Quando ordini > 10k o performance < 200ms
- **Rischio se ignorato**: Medio - degrado graduale performance

#### 2. Test edge case valori null
- **Cosa**: Mancano test per input null su validazione ordini
- **Perché rimandato**: Validazione frontend previene il caso
- **Quando affrontare**: Prima di esporre API pubblica
- **Rischio se ignorato**: Alto - bug silenzioso possibile

#### 3. Refactor duplicazione codice sconti
- **Cosa**: Logica sconti duplicata in 3 file
- **Perché rimandato**: Funziona, priorità era consegna
- **Quando affrontare**: Prossima modifica a logica sconti
- **Rischio se ignorato**: Basso - solo manutenzione più difficile`
    },
    rule: "Debito tecnico non scritto = debito infinito.",
    keyPoints: [
      "Scrivi cosa hai rimandato",
      "Scrivi perché e quando affrontarlo",
      "Il debito in testa non esiste per gli altri",
      "Traccia anche il rischio di ogni debito"
    ],
    commonMistakes: [
      "Tenere il debito tecnico solo in testa",
      "Non spiegare perché è stato rimandato",
      "Non indicare quando andrebbe affrontato",
      "Ignorare il debito fino all'emergenza"
    ],
    checklist: {
      question: "Il debito tecnico è tracciato?",
      title: "Verifica tracking debito",
      items: [
        "Ho annotato cosa è stato rimandato",
        "Ho spiegato perché è stato rimandato",
        "Ho indicato quando andrebbe affrontato",
        "Ho valutato il rischio di ogni debito"
      ]
    }
  },
  {
    id: "chiusura-mentale",
    title: "10. Chiusura mentale",
    icon: CheckCircle,
    description: "Una sessione chiusa bene vale più di una lunga. Chiudi consapevolmente dichiarando lo stato e passando ad altro.",
    why: "Il rumore mentale delle sessioni non chiuse riduce la qualità del lavoro futuro. Dichiarare esplicitamente lo stato permette di staccare davvero e tornare con energie fresche.",
    implementation: [
      "Dichiara lo stato: pronto / da migliorare / da scartare",
      "Scrivilo esplicitamente (non solo pensarlo)",
      "Smetti di pensarci dopo aver chiuso",
      "Passa ad altro (attività diversa)",
      "Questo rende sostenibile il lavoro nel tempo"
    ],
    codeExample: {
      language: "markdown",
      code: `## Chiusura sessione - 2024-01-15

### Lavoro svolto
Implementato modulo validazione ordini con test base.

### Stato finale: ✅ PRONTO (con riserve)

#### Cosa è pronto:
- Validazione sincrona funzionante
- Test caso base passano
- Documentazione aggiornata

#### Cosa resta da fare (prossima sessione):
- Test edge case null
- Ottimizzazione performance
- Review con team

#### Decisione esplicita:
Il codice può andare in staging per test.
Non pronto per produzione senza review.

---

## Esempio stati:

### ✅ PRONTO
Può essere deployato/usato. Debiti noti documentati.

### ⚠️ DA MIGLIORARE
Funziona ma ha problemi noti. Lista specifica cosa migliorare.

### ❌ DA SCARTARE
Non funziona o approccio sbagliato. Spiegare cosa non ha funzionato.`
    },
    rule: "Una sessione chiusa bene vale più di una lunga.",
    ruleWarning: false,
    keyPoints: [
      "Dichiara sempre uno stato esplicito",
      "Scrivere chiude il loop mentale",
      "Staccare davvero migliora le sessioni future",
      "La sostenibilità viene dalla chiusura"
    ],
    commonMistakes: [
      "Finire senza dichiarare lo stato",
      "Continuare a pensare alla sessione dopo",
      "Non scrivere, solo pensare",
      "Sessioni infinite che drenano energie"
    ],
    checklist: {
      question: "Hai chiuso la sessione consapevolmente?",
      title: "Verifica chiusura sessione",
      items: [
        "Ho dichiarato lo stato (pronto/migliorare/scartare)",
        "Ho scritto cosa resta da fare",
        "Ho deciso cosa fare nella prossima sessione",
        "Sono pronto a staccare mentalmente"
      ]
    }
  }
];
