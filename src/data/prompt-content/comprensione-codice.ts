import { LucideIcon, Baby, ArrowDownUp, GraduationCap, Lightbulb, Search, FileQuestion, ListTodo, HelpCircle, ClipboardCheck, ShieldAlert } from "lucide-react";

export interface PromptStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  prompts: {
    label?: string;
    text: string;
  }[];
}

export const comprensioneCodiceSteps: PromptStep[] = [
  {
    id: "spiegazione-principianti",
    number: 51,
    title: "Spiegazione per principianti assoluti",
    description: `**Perché questa tecnica:**
Quando studi codice nuovo o devi spiegarlo a qualcuno con meno esperienza, il problema non è la complessità del codice ma il linguaggio usato per spiegarlo. L'AI tende a usare gergo tecnico che presuppone conoscenze pregresse, rendendo le spiegazioni inutili per chi sta imparando. Questa tecnica forza l'AI ad abbassare drasticamente il livello di linguaggio senza sacrificare la correttezza, traducendo concetti complessi in linguaggio accessibile a chiunque.

**Come funziona:**
Chiedi esplicitamente all'AI di spiegare come se parlasse a una persona che non ha mai visto una riga di codice. L'AI deve evitare acronimi non spiegati, termini tecnici non definiti, e riferimenti a concetti presumibilmente noti. Ogni concetto nuovo deve essere introdotto con una definizione semplice, idealmente con un'analogia del mondo reale. Il risultato è una spiegazione che un liceale potrebbe seguire.

**Quando usarla:**
Usa questa tecnica quando stai studiando un linguaggio o framework nuovo e le documentazioni ufficiali presuppongono troppo, quando devi fare onboarding di junior developer o stagisti, quando prepari materiale didattico per corsi o workshop, quando vuoi verificare di aver capito davvero qualcosa (se non riesci a spiegarlo semplicemente, forse non l'hai capito), o quando devi spiegare codice a stakeholder non tecnici.

**Errore comune:**
L'errore è confondere "semplice" con "impreciso". Una spiegazione per principianti deve essere accessibile MA corretta. Dire "il database è come un foglio Excel" è un'analogia utile; dire "il database salva le cose" è troppo vago per essere utile. L'altro errore è mantenere alcuni termini tecnici "perché tanto li sanno tutti" — no, non li sanno tutti.`,
    icon: Baby,
    prompts: [
      {
        label: "Spiegazione accessibile a tutti",
        text: `## Spiegazione per Principianti Assoluti

### Codice da spiegare
\`\`\`
[incolla il codice]
\`\`\`

### Livello del destinatario
La persona che leggerà questa spiegazione:
- NON ha mai programmato
- NON conosce termini tecnici
- È intelligente ma totalmente nuova a questo mondo

### Requisiti della spiegazione

**Linguaggio**
- Evita TUTTI gli acronimi (o spiegali al primo uso)
- Evita gergo tecnico senza definizione
- Usa frasi brevi e struttura semplice
- Quando introduci un concetto, definiscilo prima

**Struttura**
1. Inizia con "Cosa fa questo codice in una frase"
2. Spiega il contesto: perché esiste questo codice?
3. Vai riga per riga (o blocco per blocco)
4. Concludi con "Risultato finale"

**Analogie**
Per ogni concetto astratto, fornisci un'analogia dalla vita quotidiana:
- Variabile → ?
- Funzione → ?
- Loop → ?
- Condizione → ?

### Output
Una spiegazione che un liceale senza esperienza di programmazione potrebbe seguire e capire.`
      }
    ]
  },
  {
    id: "spiegazione-inversa",
    number: 52,
    title: "Spiegazione inversa (output → logica)",
    description: `**Perché questa tecnica:**
Quando leggi codice dall'alto in basso, segui il flusso di esecuzione ma non sempre capisci il "perché" delle scelte. La spiegazione inversa parte dal risultato finale — ciò che il codice produce — e risale a ritroso chiedendo "come ci siamo arrivati?". Questo approccio è particolarmente potente per codice complesso dove il percorso logico non è ovvio, perché ti costringe a connettere ogni pezzo al risultato che contribuisce a produrre.

**Come funziona:**
Fornisci all'AI il codice insieme a un esempio di output che produce. L'AI deve partire dall'output e tracciare all'indietro: "Questo risultato viene da questa operazione, che a sua volta dipende da quest'altra, che riceve questi input...". Il risultato è una mappa causa-effetto che mostra come ogni parte del codice contribuisce al risultato finale, rendendo visibili le dipendenze e la logica sottostante.

**Quando usarla:**
Questa tecnica è ideale quando hai codice che funziona ma non capisci come, quando stai debuggando e vuoi tracciare come un valore finale viene calcolato, quando fai reverse engineering di algoritmi complessi, quando vuoi capire le trasformazioni che i dati subiscono attraverso il codice, o quando devi documentare codice legacy che nessuno ricorda come funziona.

**Errore comune:**
L'errore è non fornire un output concreto: senza un esempio specifico, l'AI può solo speculare. Più l'output è specifico (con valori reali), più precisa sarà la ricostruzione. Un altro errore è usare questa tecnica su codice troppo semplice dove la lettura diretta sarebbe più veloce.`,
    icon: ArrowDownUp,
    prompts: [
      {
        label: "Ricostruzione logica dall'output",
        text: `## Spiegazione Inversa (Output → Logica)

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Output osservato
\`\`\`
[incolla l'output che il codice produce]
\`\`\`

### Richiesta di analisi inversa

Parti dall'output finale e ricostruisci all'indietro:

**Fase 1: Origine del risultato**
- Quale riga/operazione produce direttamente questo output?
- Quali valori intermedi sono necessari?

**Fase 2: Tracciamento delle dipendenze**
Per ogni valore intermedio:
- Da dove viene?
- Quale trasformazione ha subito?
- Quali input lo hanno generato?

**Fase 3: Mappa delle trasformazioni**
\`\`\`
Input iniziale: [valore]
    ↓ [operazione 1]
Valore intermedio 1: [valore]
    ↓ [operazione 2]
Valore intermedio 2: [valore]
    ↓ [operazione finale]
Output: [valore]
\`\`\`

### Output richiesto
1. Mappa visuale del flusso dati (input → output)
2. Per ogni passaggio: perché quella trasformazione?
3. Punti critici dove la logica non è ovvia`
      }
    ]
  },
  {
    id: "spiegazione-lezione",
    number: 53,
    title: "Spiegazione in stile lezione",
    description: `**Perché questa tecnica:**
Una buona lezione non è solo una spiegazione: ha una struttura pedagogica che guida l'apprendimento. Inizia con il contesto (perché questo argomento è importante), introduce i concetti necessari prima di usarli, fornisce esempi progressivi, e conclude con un riepilogo. Questa struttura è molto più efficace per l'apprendimento rispetto a una semplice descrizione del codice, perché attiva connessioni multiple nel cervello di chi impara.

**Come funziona:**
L'AI trasforma il codice in una mini-lezione strutturata seguendo principi pedagogici: hook iniziale (perché dovrebbe importarti), prerequisiti (cosa devi sapere prima), spiegazione dei concetti chiave, esempio pratico commentato, esercizi per verificare la comprensione, e riepilogo finale. Il codice diventa il "caso di studio" attorno al quale costruire l'insegnamento.

**Quando usarla:**
Usa questa tecnica quando stai preparando materiale formativo (documentazione, tutorial, corsi), quando fai mentoring e vuoi insegnare, non solo mostrare, quando vuoi consolidare la tua comprensione di un argomento (insegnare è il modo migliore per imparare), quando devi presentare codice a un pubblico con livelli misti di esperienza, o quando crei documentazione interna per il team.

**Errore comune:**
L'errore è trasformare la lezione in un monologo senza interazione. Anche in forma scritta, una buona lezione include domande ("Cosa pensi che succeda se...?"), pause per riflettere, e inviti all'azione ("Prova a modificare questo valore e osserva"). Un altro errore è coprire troppo in una sola lezione — meglio spiegare bene un concetto che superficialmente dieci.`,
    icon: GraduationCap,
    prompts: [
      {
        label: "Trasformazione in mini-lezione",
        text: `## Spiegazione in Stile Lezione

### Codice da trasformare in lezione
\`\`\`
[incolla il codice]
\`\`\`

### Pubblico target
- Livello: [principiante/intermedio/avanzato]
- Contesto: [studenti/colleghi/autodidatti]

### Struttura della lezione richiesta

**1. Hook (30 secondi)**
Perché questo argomento è importante? Quale problema risolve?

**2. Prerequisiti**
Cosa deve già sapere chi legge? Lista breve e specifica.

**3. Concetti chiave**
Per ogni concetto nuovo nel codice:
- Nome e definizione semplice
- Perché esiste/a cosa serve
- Esempio minimo

**4. Walkthrough del codice**
Spiegazione passo-passo con:
- Commenti inline
- "Nota bene" per i punti non ovvi
- Domande retoriche per far pensare

**5. Variazioni ed esperimenti**
"Cosa succede se modifichi X?" (2-3 esperimenti suggeriti)

**6. Errori comuni**
Cosa sbagliano spesso i principianti con questo tipo di codice?

**7. Riepilogo**
3-5 bullet point: cosa dovresti ricordare

**8. Prossimi passi**
Cosa studiare dopo per approfondire?`
      }
    ]
  },
  {
    id: "analogie-metafore",
    number: 54,
    title: "Uso di analogie e metafore",
    description: `**Perché questa tecnica:**
Il cervello umano impara collegando il nuovo al noto. Le analogie creano ponti tra concetti astratti (difficili da visualizzare) e esperienze concrete (facili da ricordare). "Un array è come una fila di cassetti numerati" è più memorabile di "un array è una struttura dati indicizzata". Le metafore ben scelte non solo spiegano, ma creano modelli mentali che aiutano a ragionare sul codice anche in situazioni nuove.

**Come funziona:**
Chiedi all'AI di spiegare il codice usando esclusivamente analogie dal mondo reale, minimizzando il gergo tecnico. L'AI deve trovare paralleli concreti per ogni concetto astratto: oggetti fisici per strutture dati, azioni quotidiane per algoritmi, relazioni umane per interazioni tra componenti. Le analogie devono essere coerenti tra loro, costruendo un "mondo parallelo" che rispecchia la logica del codice.

**Quando usarla:**
Questa tecnica è potente quando spieghi a non-programmatori (manager, clienti, stakeholder), quando insegni concetti fondamentali che saranno riusati spesso, quando vuoi creare documentazione memorabile, quando un concetto è particolarmente astratto e difficile da visualizzare, o quando noti che le spiegazioni tecniche "non attaccano".

**Errore comune:**
L'errore classico è usare analogie che non reggono: "Git è come salvare versioni di un documento Word" funziona per l'idea base ma crolla quando parli di branch e merge. Le analogie devono essere oneste sui propri limiti. Un altro errore è mescolare analogie incompatibili ("l'array è una fila di cassetti" e poi "l'array è una lista della spesa" — sono due modelli mentali diversi).`,
    icon: Lightbulb,
    prompts: [
      {
        label: "Spiegazione con analogie concrete",
        text: `## Spiegazione con Analogie e Metafore

### Codice da spiegare
\`\`\`
[incolla il codice]
\`\`\`

### Requisiti
Spiega questo codice usando SOLO analogie dal mondo reale.
Minimizza i termini tecnici — quando li usi, accompagnali con l'analogia.

### Struttura richiesta

**Analogia principale**
Trova un'analogia del mondo reale che catturi l'essenza di cosa fa questo codice.
"Questo codice è come [analogia], perché..."

**Mappatura dei componenti**
| Elemento nel codice | Analogia nel mondo reale |
|---------------------|--------------------------|
| [variabile/funzione] | [oggetto/azione quotidiana] |
| ... | ... |

**Narrazione**
Racconta cosa fa il codice come se stessi descrivendo la situazione analoga:
"Immagina di essere in [scenario]. Prima fai [azione], poi..."

**Limiti dell'analogia**
Ogni analogia ha dei limiti. Dove questa analogia smette di funzionare?
"Attenzione: a differenza di [analogia], nel codice..."

### Vincoli
- Le analogie devono essere coerenti tra loro
- Evita riferimenti troppo di nicchia (devono essere universali)
- Se un concetto non ha buona analogia, ammettilo`
      }
    ]
  },
  {
    id: "reverse-engineering",
    number: 55,
    title: "Reverse engineering (cosa fa questo codice?)",
    description: `**Perché questa tecnica:**
Questa è la situazione più comune per uno sviluppatore professionista: erediti codice scritto da altri (o da te stesso tempo fa), devi capire cosa fa, e non puoi permetterti di riscriverlo. Il reverse engineering sistematico ti permette di costruire una comprensione affidabile del codice esistente, identificando input, output, side effects, dipendenze e comportamenti edge case — tutto ciò che serve per modificarlo senza romperlo.

**Come funziona:**
L'AI analizza il codice come un investigatore: identifica i punti di ingresso (dove inizia l'esecuzione), traccia il flusso dei dati, cataloga le trasformazioni, mappa le dipendenze esterne, e documenta i comportamenti osservabili. Non riscrive nulla — produce una "mappa" del codice esistente che permette di navigarlo con sicurezza. Include anche ipotesi sulle intenzioni originali e warning su parti ambigue.

**Quando usarla:**
Usa questa tecnica quando erediti un progetto legacy senza documentazione, quando entri in un team e devi capire il codebase rapidamente, quando devi fare manutenzione su codice che non tocchi da mesi, quando prepari un refactoring e vuoi prima capire cosa non rompere, o quando fai code review di codice complesso che non conosci.

**Errore comune:**
L'errore principale è saltare subito alle conclusioni: "questo codice fa X" senza verificare. Il reverse engineering richiede umiltà — formulare ipotesi e validarle. Un altro errore è ignorare i side effects: il codice potrebbe fare più di quanto sembri (modificare stato globale, scrivere file, chiamare API). Infine, evita di confondere "cosa fa" con "cosa dovrebbe fare" — documenta il comportamento reale, non quello inteso.`,
    icon: Search,
    prompts: [
      {
        label: "Analisi sistematica del codice",
        text: `## Reverse Engineering: Cosa Fa Questo Codice?

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Analisi richiesta (NON riscrivere il codice)

**1. Overview in una frase**
Cosa fa questo codice, riassunto in max 20 parole?

**2. Punti di ingresso**
- Dove inizia l'esecuzione?
- Quali sono gli input accettati?
- Da dove vengono chiamati?

**3. Flusso di esecuzione**
Descrivi il percorso principale:
1. Prima succede...
2. Poi...
3. Infine...

**4. Trasformazioni dei dati**
| Input | Trasformazione | Output |
|-------|----------------|--------|
| ? | ? | ? |

**5. Dipendenze**
- Funzioni/moduli chiamati
- Variabili globali lette/scritte
- Risorse esterne (file, DB, API)

**6. Side effects**
Cosa modifica questo codice oltre al return value?
- Stato globale?
- File system?
- Database?
- Chiamate di rete?

**7. Edge cases e comportamenti speciali**
Cosa succede con input vuoti/null/estremi?

**8. Ipotesi sulle intenzioni**
Perché questo codice esiste? Quale problema risolve?

**9. Zone d'ombra**
Parti del codice che restano ambigue o poco chiare.`
      }
    ]
  },
  {
    id: "esplicitazione-assunzioni",
    number: 56,
    title: "Prompt di esplicitazione delle assunzioni",
    description: `**Perché questa tecnica:**
Ogni codice dà per scontate cose che non sono scritte esplicitamente: che l'input sarà valido, che il database sarà raggiungibile, che l'utente avrà certi permessi, che l'array non sarà vuoto. Queste assunzioni implicite sono la fonte principale di bug in produzione, perché funzionano finché sono vere e crashano silenziosamente quando vengono violate. Esplicitare le assunzioni le rende visibili, criticabili e potenzialmente protette con validazioni.

**Come funziona:**
L'AI esamina il codice cercando tutto ciò che viene dato per scontato ma non verificato: tipi di input non controllati, null checks mancanti, precondizioni non validate, risorse presumibilmente disponibili, ordini di esecuzione impliciti, formati dati attesi. Per ogni assunzione identifica: cosa si assume, dove nel codice, cosa succede se l'assunzione è violata, e come proteggersi.

**Quando usarla:**
Questa tecnica è cruciale prima di andare in produzione (per scoprire bombe a orologeria), durante security review (le assunzioni violate sono vettori di attacco), quando espandi il codice a nuovi casi d'uso (le vecchie assunzioni potrebbero non reggere), quando fai debugging di errori intermittenti (spesso causati da assunzioni violate occasionalmente), o quando documenti codice per altri sviluppatori.

**Errore comune:**
L'errore è pensare che le assunzioni "ovvie" non vadano documentate. Se l'input deve essere positivo, scrivilo. Se il database deve essere online, documentalo. Le assunzioni ovvie per te non sono ovvie per il te del futuro o per i tuoi colleghi. Un altro errore è elencare assunzioni senza valutare il rischio di violazione e le conseguenze.`,
    icon: FileQuestion,
    prompts: [
      {
        label: "Scoperta delle assunzioni nascoste",
        text: `## Esplicitazione delle Assunzioni Implicite

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Ricerca sistematica delle assunzioni

**Categoria 1: Assunzioni sugli input**
| Assunzione | Dove nel codice | Se violata, cosa succede? |
|------------|-----------------|---------------------------|
| L'input non è null | ? | ? |
| L'input ha formato X | ? | ? |
| L'input è nel range Y | ? | ? |

**Categoria 2: Assunzioni sull'ambiente**
- Database raggiungibile?
- File system accessibile?
- Rete disponibile?
- Memoria sufficiente?
- Permessi adeguati?

**Categoria 3: Assunzioni sullo stato**
- Variabili già inizializzate?
- Ordine di chiamata delle funzioni?
- Stato globale in condizione specifica?

**Categoria 4: Assunzioni sui dati**
- Collezioni non vuote?
- Chiavi sempre presenti?
- Valori unici?
- Ordine specifico?

**Categoria 5: Assunzioni temporali**
- Timeout impliciti?
- Operazioni sincrone vs asincrone?
- Race conditions possibili?

### Valutazione del rischio
Per ogni assunzione critica:
| Assunzione | Probabilità di violazione | Gravità se violata | Azione suggerita |
|------------|--------------------------|-------------------|------------------|
| ? | Bassa/Media/Alta | Bassa/Media/Alta | Validare/Documentare/Ignorare |`
      }
    ]
  },
  {
    id: "incompletezza-intenzionale",
    number: 57,
    title: "Prompt di incompletezza intenzionale (TODO ragionati)",
    description: `**Perché questa tecnica:**
Nessun codice è mai "completo" — c'è sempre qualcosa che manca, che potrebbe essere migliorato, o che è stato lasciato per dopo. La differenza tra codice professionale e codice amatoriale non è l'assenza di incompletezze, ma la consapevolezza di quali sono. I TODO ragionati documentano esplicitamente cosa manca e perché, permettendo decisioni informate su cosa prioritizzare e evitando che le lacune diventino bug o debito tecnico nascosto.

**Come funziona:**
L'AI analizza il codice con occhio critico cercando tutto ciò che potrebbe essere aggiunto, migliorato o completato: gestione errori mancante, edge case non coperti, validazioni assenti, logging insufficiente, test mancanti, documentazione incompleta, performance non ottimizzate. Per ogni lacuna genera un TODO con: cosa manca, perché è importante, e una stima di priorità e effort.

**Quando usarla:**
Usa questa tecnica quando fai review di codice proprio o altrui (per creare una roadmap di miglioramenti), quando prepari un refactoring (per avere visibilità del debito tecnico), quando erediti un progetto e vuoi capire cosa resta da fare, quando fai stime di effort per completare una feature, o quando vuoi trasformare codice "funzionante" in codice "production-ready".

**Errore comune:**
L'errore è creare TODO vaghi come "// TODO: migliorare questo". Un buon TODO spiega cosa va fatto e perché è importante. Un altro errore è creare troppi TODO senza priorità — se tutto è importante, niente lo è. Infine, evita di confondere "nice to have" con "must have": non tutto ciò che manca è necessario.`,
    icon: ListTodo,
    prompts: [
      {
        label: "Identificazione lacune e TODO ragionati",
        text: `## Incompletezza Intenzionale: TODO Ragionati

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Contesto
- Questo codice è: [MVP/produzione/prototipo]
- Priorità attuale: [funzionalità/robustezza/performance]

### Analisi delle incompletezze

**1. Funzionalità mancanti**
Cosa il codice non fa ma probabilmente dovrebbe?

**2. Gestione errori**
- [ ] Try-catch mancanti
- [ ] Errori non gestiti
- [ ] Messaggi poco utili
- [ ] Recovery non implementato

**3. Validazione input**
- [ ] Tipi non verificati
- [ ] Range non controllati
- [ ] Formati non validati

**4. Edge cases**
- [ ] Input vuoto/null
- [ ] Valori estremi
- [ ] Concorrenza
- [ ] Timeout

**5. Qualità del codice**
- [ ] Nomi migliorabili
- [ ] Codice duplicato
- [ ] Complessità riducibile

**6. Documentazione**
- [ ] Commenti mancanti
- [ ] Contratti non espliciti
- [ ] Esempi d'uso

### TODO prioritizzati

| Priorità | TODO | Motivazione | Effort stimato |
|----------|------|-------------|----------------|
| 🔴 Alta | // TODO: [cosa] | [perché] | [ore/giorni] |
| 🟡 Media | // TODO: [cosa] | [perché] | [ore/giorni] |
| 🟢 Bassa | // TODO: [cosa] | [perché] | [ore/giorni] |

### Codice con TODO inseriti
\`\`\`
[codice con TODO posizionati nei punti corretti]
\`\`\``
      }
    ]
  },
  {
    id: "quiz-domande",
    number: 58,
    title: "Generazione di quiz e domande sul codice",
    description: `**Perché questa tecnica:**
La comprensione passiva (leggere e annuire) è molto meno efficace della comprensione attiva (rispondere a domande, fare previsioni, spiegare). I quiz trasformano lo studio del codice da attività passiva ad attività che richiede elaborazione mentale, rendendo l'apprendimento più profondo e duraturo. Inoltre, le domande rivelano lacune nella comprensione che la semplice lettura non evidenzia: pensavi di aver capito, poi non sai rispondere.

**Come funziona:**
L'AI genera domande di diverso tipo e difficoltà: domande fattuali ("cosa restituisce questa funzione con input X?"), domande di comprensione ("perché l'autore ha usato un hash map invece di un array?"), domande di previsione ("cosa succede se l'input è vuoto?"), domande di modifica ("come cambieresti questo codice per supportare Y?"). Per ogni domanda fornisce anche la risposta corretta e una spiegazione.

**Quando usarla:**
Questa tecnica è perfetta per lo studio personale (testing yourself è la tecnica di studio più efficace), per la formazione di nuovi membri del team, per creare materiale didattico e assessment, per verificare la propria comprensione prima di modificare codice, o per sessioni di pair programming dove vuoi insegnare oltre che fare.

**Errore comune:**
L'errore è generare solo domande facili e fattuali ("a cosa serve la riga 5?"). Le domande che veramente testano la comprensione sono quelle che richiedono ragionamento: previsioni, confronti, valutazioni. Un altro errore è non usare le domande attivamente — generarle e poi non provare a rispondere prima di leggere le risposte.`,
    icon: HelpCircle,
    prompts: [
      {
        label: "Generazione quiz multi-livello",
        text: `## Generazione di Quiz sul Codice

### Codice da trasformare in quiz
\`\`\`
[incolla il codice]
\`\`\`

### Livello del quiz
[Principiante / Intermedio / Avanzato]

### Tipologie di domande richieste

**Domande fattuali (3)**
Testano la lettura attenta del codice.
"Cosa restituisce la funzione X quando riceve Y?"

**Domande di comprensione (3)**
Testano la comprensione del perché.
"Perché l'autore ha scelto questa struttura dati?"

**Domande di previsione (2)**
Testano la capacità di simulare mentalmente.
"Cosa succede se l'input è [caso edge]?"

**Domande di modifica (2)**
Testano la capacità di applicare la comprensione.
"Come modificheresti il codice per aggiungere [feature]?"

### Formato output

Per ogni domanda:
\`\`\`
**Domanda N** [Tipo: Fattuale/Comprensione/Previsione/Modifica]
[Testo della domanda]

<details>
<summary>Risposta</summary>
[Risposta corretta]

**Spiegazione:** [Perché questa è la risposta corretta]
</details>
\`\`\`

### Bonus: Domanda trabocchetto
Una domanda che sembra facile ma nasconde una sottigliezza.`
      }
    ]
  },
  {
    id: "checklist-qualita",
    number: 59,
    title: "Checklist di qualità del codice",
    description: `**Perché questa tecnica:**
Le code review manuali sono inconsistenti: dipendono dall'umore, dalla fretta, dall'esperienza del reviewer. Una checklist trasforma la review in un processo sistematico e ripetibile, assicurando che gli stessi criteri vengano applicati ogni volta. Le checklist riducono il carico cognitivo (non devi ricordare tutto), aumentano la copertura (non dimentichi aspetti), e permettono di delegare (anche un junior può eseguire una checklist).

**Come funziona:**
L'AI analizza il codice e genera una checklist personalizzata basata su ciò che il codice fa. La checklist include categorie come: correttezza funzionale, gestione errori, sicurezza, performance, leggibilità, testabilità, manutenibilità. Per ogni item della checklist indica: cosa verificare, perché è importante, e un verdict (pass/fail/warning) basato sull'analisi del codice specifico.

**Quando usarla:**
Usa questa tecnica come parte del processo di code review standard, prima di fare merge di feature importanti, quando prepari codice per la produzione, quando vuoi creare standard di qualità per il team, o quando fai self-review prima di chiedere review ad altri (meglio trovare i problemi da soli).

**Errore comune:**
L'errore è creare checklist troppo lunghe che nessuno segue. Una buona checklist è focalizzata sui rischi principali per quel tipo di codice. Un altro errore è trattare la checklist come formalità invece che come strumento: spuntare tutto "pass" senza verificare realmente. Infine, le checklist devono evolvere — aggiungi item quando scopri nuove categorie di bug.`,
    icon: ClipboardCheck,
    prompts: [
      {
        label: "Checklist di review personalizzata",
        text: `## Checklist di Qualità del Codice

### Codice da valutare
\`\`\`
[incolla il codice]
\`\`\`

### Tipo di codice
[API / UI Component / Business Logic / Utility / Database Query]

### Checklist personalizzata

**🔧 Correttezza funzionale**
- [ ] Il codice fa ciò che dovrebbe?
- [ ] Tutti i casi d'uso sono coperti?
- [ ] I valori di ritorno sono corretti?

**⚠️ Gestione errori**
- [ ] Gli errori sono catturati?
- [ ] I messaggi di errore sono utili?
- [ ] C'è recovery dove possibile?

**🔒 Sicurezza**
- [ ] Input sanitizzato?
- [ ] Nessuna SQL injection?
- [ ] Nessun secret hardcoded?
- [ ] Permessi verificati?

**⚡ Performance**
- [ ] Complessità algoritmica accettabile?
- [ ] Nessuna operazione inutile?
- [ ] Risorse rilasciate correttamente?

**📖 Leggibilità**
- [ ] Nomi chiari e descrittivi?
- [ ] Struttura logica?
- [ ] Commenti dove necessario (ma non eccessivi)?

**🧪 Testabilità**
- [ ] Funzioni pure dove possibile?
- [ ] Dipendenze iniettabili?
- [ ] Side effects isolati?

**🔄 Manutenibilità**
- [ ] Codice DRY (no duplicazioni)?
- [ ] Single responsibility?
- [ ] Accoppiamento basso?

### Valutazione
| Categoria | Stato | Note |
|-----------|-------|------|
| Correttezza | ✅/⚠️/❌ | [commento] |
| Errori | ✅/⚠️/❌ | [commento] |
| Sicurezza | ✅/⚠️/❌ | [commento] |
| Performance | ✅/⚠️/❌ | [commento] |
| Leggibilità | ✅/⚠️/❌ | [commento] |
| Testabilità | ✅/⚠️/❌ | [commento] |
| Manutenibilità | ✅/⚠️/❌ | [commento] |

### Verdict finale
[APPROVE / RICHIEDE MODIFICHE / BLOCCA]

Motivazione: ...`
      }
    ]
  },
  {
    id: "code-review-severa",
    number: 60,
    title: "Prompt di code review severa",
    description: `**Perché questa tecnica:**
Tutti vogliamo sentirci dire che il nostro codice è buono, ma questo non ci rende sviluppatori migliori. Una code review severa — eseguita come in un team senior di una big tech — trova i problemi che una review gentile sorvola. Non è cattiveria: è il tipo di feedback che previene bug in produzione, security breach, debito tecnico. Se il tuo codice supera una review severa, puoi essere ragionevolmente sicuro che sia solido.

**Come funziona:**
L'AI assume il ruolo di un reviewer senior e esigente: non cerca scuse, non minimizza i problemi, non loda ciò che è semplicemente "accettabile". Valuta il codice contro standard elevati e segnala tutto ciò che non li raggiunge: cattive pratiche, rischi nascosti, decisioni discutibili, codice che "funziona ma non dovrebbe". Il tono è diretto e professionale, concentrato sui problemi concreti e sulle azioni correttive.

**Quando usarla:**
Questa tecnica è preziosa prima di merge importanti dove i bug avrebbero conseguenze serie, quando vuoi prepararti a una review reale da parte di colleghi senior, quando sospetti che il tuo codice abbia problemi ma non li vedi, quando vuoi imparare cosa guarda un reviewer esperto, o quando stai preparando codice per open source dove molti occhi lo giudicheranno.

**Errore comune:**
L'errore è prendere la severità sul personale. Questa è una review del codice, non di te come persona. L'obiettivo è migliorare il codice, non sentirti male. Un altro errore è rifiutare i feedback scomodi: se il reviewer dice che qualcosa è un problema, vale la pena investigare anche se non sei d'accordo istintivamente.`,
    icon: ShieldAlert,
    prompts: [
      {
        label: "Code review da senior developer",
        text: `## Code Review Severa

### Codice da sottoporre a review
\`\`\`
[incolla il codice]
\`\`\`

### Contesto
- Questo codice andrà in: [produzione/staging/sviluppo]
- Impatto: [critico/alto/medio/basso]

### Istruzioni per il reviewer

Agisci come un senior developer in una big tech che sta facendo code review.
- NON essere gentile per educazione
- NON minimizzare i problemi
- NON trovare scuse
- SII diretto e specifico
- SPIEGA perché ogni problema è un problema

### Analisi richiesta

**🚨 Problemi critici (blockers)**
Cose che DEVONO essere risolte prima del merge.
Per ognuna: cosa, dove, perché è critico, come risolvere.

**⚠️ Problemi importanti**
Cose che andrebbero risolte, anche se tecnicamente il codice funziona.

**💭 Suggerimenti**
Miglioramenti non urgenti ma consigliati.

**❓ Domande per l'autore**
Cose che non sono chiare e richiedono spiegazione.

### Formato per ogni problema
\`\`\`
**[CRITICO/IMPORTANTE/SUGGERIMENTO]** Riga N

Problema: [descrizione concisa]

Perché è un problema: [impatto concreto]

Cosa fare: [azione correttiva specifica]
\`\`\`

### Verdict
- [ ] APPROVED - Nessun problema critico
- [ ] NEEDS CHANGES - Risolvere i problemi prima del merge
- [ ] REQUEST CHANGES - Richiede revisione sostanziale

### Nota finale
Una frase su cosa l'autore dovrebbe imparare da questa review.`
      }
    ]
  }
];
