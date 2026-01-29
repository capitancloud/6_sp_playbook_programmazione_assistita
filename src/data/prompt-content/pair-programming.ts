import { LucideIcon, Users, RotateCcw, RefreshCw, Link, ThumbsDown, GitCompare, AlertTriangle, ShieldCheck, Sparkles, Star, Target, ListTree, ClipboardList, Clock, Briefcase } from "lucide-react";

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

export const pairProgrammingSteps: PromptStep[] = [
  {
    id: "pair-programming-simulato",
    number: 61,
    title: "Pair programming simulato",
    description: `**Perché questa tecnica:**
Il pair programming tradizionale tra umani funziona perché obbliga a verbalizzare il ragionamento: quando devi spiegare cosa stai per fare a un collega, spesso ti accorgi di problemi che non avresti notato lavorando da solo. Simulare questa dinamica con l'AI cattura lo stesso beneficio: invece di chiedere "scrivi questo codice", chiedi all'AI di ragionare con te ad alta voce prima di scrivere, creando un dialogo che porta a soluzioni più ponderate.

**Come funziona:**
L'AI assume il ruolo di un collega tecnico competente. Prima di scrivere codice, deve discutere l'approccio: quali alternative esistono, quali trade-off comportano, quali rischi vede. Tu partecipi attivamente alla discussione, facendo domande, sollevando obiezioni, proponendo alternative. Solo dopo aver raggiunto un accordo sull'approccio, l'AI procede con l'implementazione. Il risultato è codice che nasce da una decisione consapevole, non da un impulso.

**Quando usarla:**
Usa questa tecnica quando lavori su problemi non banali dove l'approccio non è ovvio, quando vuoi imparare oltre che produrre, quando temi di avere bias che ti impediscono di vedere alternative, quando il problema è sufficientemente importante da giustificare tempo di riflessione, o quando ti senti bloccato e vuoi qualcuno con cui ragionare.

**Errore comune:**
L'errore è lasciare che l'AI faccia tutto il ragionamento mentre tu approvi passivamente. Il pair programming funziona solo se entrambi contribuiscono attivamente. Un altro errore è saltare la fase di discussione per "risparmiare tempo" — è proprio quella fase che previene gli errori costosi.`,
    icon: Users,
    prompts: [
      {
        label: "Sessione di pair programming",
        text: `## Pair Programming Simulato

### Modalità di collaborazione
Da questo momento lavoriamo in **pair programming**.

### Regole della sessione

**Il tuo ruolo (AI):**
- Sei un collega sviluppatore senior
- Prima di scrivere codice, discuti l'approccio
- Solleva dubbi e alternative
- Chiedi chiarimenti quando qualcosa non è chiaro
- Proponi, non imponi

**Il mio ruolo (umano):**
- Guido la direzione generale
- Faccio domande e sollevo obiezioni
- Approvo o rifiuto le proposte
- Decido quando procedere con l'implementazione

### Flusso di lavoro
1. **Discussione**: Prima parliamo dell'approccio
2. **Decisione**: Concordiamo su cosa fare
3. **Implementazione**: Solo dopo l'accordo, scrivi il codice
4. **Review**: Rivediamo insieme il risultato

### Problema da affrontare
[Descrivi il problema o la feature da implementare]

### Inizia
Inizia chiedendomi chiarimenti o proponendo un approccio iniziale da discutere.
NON scrivere codice finché non abbiamo concordato l'approccio.`
      }
    ]
  },
  {
    id: "coding-turni",
    number: 62,
    title: "Coding a turni controllati",
    description: `**Perché questa tecnica:**
Quando lasci che l'AI scriva tutto il codice in una volta, perdi il controllo: potresti trovarti con centinaia di righe che non capisci completamente, decisioni architetturali prese senza il tuo input, e un codebase che non senti tuo. Il coding a turni risolve questo problema: tu e l'AI vi alternate, e dopo ogni turno hai l'opportunità di capire, correggere, e guidare la direzione. Il risultato è codice che comprendi profondamente.

**Come funziona:**
Definisci esplicitamente che l'AI deve fermarsi dopo ogni "unità logica" di codice (una funzione, un componente, un blocco significativo). Prima di continuare, tu rivedi cosa è stato scritto, fai domande, richiedi modifiche, o approvi. Solo dopo il tuo feedback esplicito l'AI procede con la parte successiva. Questo crea un ciclo continuo di scrittura-review-approvazione che mantiene te al centro del processo.

**Quando usarla:**
Questa tecnica è fondamentale quando stai imparando (ogni turno è un'opportunità di capire), quando lavori su codice critico dove non puoi permetterti sorprese, quando vuoi mantenere uno stile o architettura specifici, quando non ti fidi completamente dell'output dell'AI, o quando il progetto è abbastanza grande da richiedere controllo incrementale.

**Errore comune:**
L'errore è definire turni troppo grandi ("scrivi l'intero backend, poi mi fermo") che annullano il beneficio del controllo incrementale. L'altro errore è approvare i turni senza veramente leggere e capire — a quel punto tanto vale chiedere tutto in una volta.`,
    icon: RotateCcw,
    prompts: [
      {
        label: "Sviluppo incrementale controllato",
        text: `## Coding a Turni Controllati

### Regole della sessione

**Struttura dei turni:**
1. Tu scrivi UNA parte del codice (max 20-30 righe o una funzione)
2. Ti fermi e mi presenti cosa hai scritto
3. Io rivedo, faccio domande, chiedo modifiche
4. Solo dopo il mio OK esplicito, procedi con il turno successivo

**Cosa fare a ogni turno:**
- Descrivi brevemente cosa stai per scrivere
- Scrivi SOLO quella parte
- Spiega le scelte non ovvie
- Chiedi: "Posso procedere?"

**Cosa NON fare:**
- NON scrivere più di un blocco logico per turno
- NON procedere senza il mio feedback
- NON assumere che il silenzio significhi approvazione

### Progetto da sviluppare
[Descrivi il progetto o la feature]

### Primo turno
Inizia proponendo cosa scriverai nel primo turno.
Aspetta la mia approvazione prima di scrivere il codice.

### Segnali di controllo
- "OK, procedi" → vai avanti
- "Modifica X" → correggi prima di procedere
- "Spiega Y" → chiarisci prima di procedere
- "Stop" → fermati completamente`
      }
    ]
  },
  {
    id: "miglioramento-iterativo",
    number: 63,
    title: "Miglioramento iterativo senza cambiare comportamento",
    description: `**Perché questa tecnica:**
Il refactoring puro — migliorare il codice senza cambiarne il comportamento — è una delle discipline più importanti e meno praticate. È facile cedere alla tentazione di "migliorare" aggiungendo anche una piccola feature, o cambiando un comportamento "che tanto andava sistemato". Ma ogni cambiamento di comportamento durante il refactoring è un rischio: se qualcosa si rompe, non sai se è colpa del refactoring o del cambiamento. Questa tecnica impone la disciplina del refactoring puro.

**Come funziona:**
Dichiari esplicitamente che stai facendo refactoring e che il comportamento osservabile del codice deve rimanere IDENTICO. L'AI può modificare nomi, struttura, organizzazione, leggibilità, performance interna — ma input e output devono restare esattamente gli stessi. Se l'AI vede opportunità di migliorare il comportamento, deve segnalarle separatamente, non implementarle durante il refactoring.

**Quando usarla:**
Usa questa tecnica prima di aggiungere nuove feature (prepara il terreno con refactoring puro), quando il codice funziona ma è difficile da mantenere, quando vuoi migliorare la testabilità senza riscrivere i test, quando fai code review e vuoi separare "migliorie strutturali" da "cambiamenti funzionali", o quando lavori su codice critico dove non puoi permetterti regressioni.

**Errore comune:**
L'errore classico è permettere "piccoli" cambiamenti di comportamento perché "sono miglioramenti ovvi". No: se cambia il comportamento, non è refactoring. L'altro errore è non avere test prima di refactorare — senza test, come verifichi che il comportamento è rimasto identico?`,
    icon: RefreshCw,
    prompts: [
      {
        label: "Refactoring puro",
        text: `## Miglioramento Iterativo Senza Cambiare Comportamento

### Codice da refactorare
\`\`\`
[incolla il codice]
\`\`\`

### Vincolo assoluto
Il comportamento osservabile deve rimanere **IDENTICO**:
- Stessi input → Stessi output
- Stessi side effects
- Stessi errori per gli stessi casi limite

### Cosa puoi modificare
- ✅ Nomi di variabili e funzioni
- ✅ Struttura e organizzazione del codice
- ✅ Estrazione di funzioni/metodi
- ✅ Semplificazione della logica
- ✅ Rimozione di duplicazioni
- ✅ Miglioramento della leggibilità
- ✅ Ottimizzazioni interne (se non cambiano l'output)

### Cosa NON puoi modificare
- ❌ Signature delle funzioni pubbliche
- ❌ Valori di ritorno
- ❌ Comportamento in caso di errore
- ❌ Aggiungere nuove funzionalità
- ❌ Cambiare logica di business

### Se vedi miglioramenti al comportamento
NON implementarli. Invece, elencali separatamente:
"Nota: Ho notato che [X] potrebbe essere migliorato. Lo segnalo per un intervento futuro separato."

### Output richiesto
1. Codice refactorizzato
2. Lista delle modifiche strutturali effettuate
3. Conferma: "Il comportamento osservabile è IDENTICO"
4. (Opzionale) Suggerimenti per miglioramenti funzionali futuri`
      }
    ]
  },
  {
    id: "continuita-lavoro",
    number: 64,
    title: "Prompt di continuità del lavoro",
    description: `**Perché questa tecnica:**
Uno dei problemi più frustranti quando lavori con l'AI è la perdita di contesto tra sessioni. Inizi un progetto, prendi decisioni architetturali, stabilisci convenzioni — e poi nella sessione successiva l'AI sembra aver dimenticato tutto, proponendo soluzioni inconsistenti con ciò che avevi già deciso. Questa tecnica risolve il problema fornendo esplicitamente il contesto delle decisioni precedenti, obbligando l'AI a rispettarle.

**Come funziona:**
All'inizio di ogni sessione (o quando serve continuità), fornisci un riepilogo delle decisioni già prese: architettura scelta, convenzioni di naming, librerie selezionate, pattern adottati, approcci decisi. Dichiari esplicitamente che queste decisioni non sono in discussione — l'AI deve lavorare all'interno di questi vincoli, non rimetterli in discussione ogni volta. Se l'AI vede problemi con le decisioni precedenti, deve segnalarli esplicitamente, non aggirarli silenziosamente.

**Quando usarla:**
Questa tecnica è essenziale per progetti che durano più di una sessione, quando più persone lavorano con l'AI sullo stesso progetto, quando hai stabilito standard che devono essere rispettati, quando riprendevi un lavoro dopo una pausa, o quando noti che l'AI sta proponendo soluzioni inconsistenti con decisioni precedenti.

**Errore comune:**
L'errore è non documentare le decisioni man mano che le prendi — poi è difficile ricostruirle. L'altro errore è essere troppo rigidi: se una decisione precedente si rivela chiaramente sbagliata, deve essere possibile rimetterla in discussione, ma esplicitamente, non implicitamente.`,
    icon: Link,
    prompts: [
      {
        label: "Mantenimento della continuità",
        text: `## Continuità del Lavoro

### Contesto del progetto
[Descrivi brevemente il progetto]

### Decisioni architetturali già prese (NON rimettere in discussione)

**Stack tecnologico:**
- [Framework/librerie scelte]
- [Database/storage]
- [Altri componenti]

**Pattern e convenzioni:**
- Naming: [convenzioni]
- Struttura file: [organizzazione]
- Gestione stato: [approccio]
- Error handling: [strategia]

**Scelte specifiche già fatte:**
1. [Decisione 1]: [motivazione breve]
2. [Decisione 2]: [motivazione breve]
3. [Decisione 3]: [motivazione breve]

### Lavoro già completato
- [Feature/componente 1]: completato
- [Feature/componente 2]: completato
- [Feature/componente 3]: in corso

### Regole per questa sessione

**DEVI:**
- Rispettare le decisioni sopra elencate
- Mantenere coerenza con il codice esistente
- Segnalare esplicitamente se vedi problemi con le decisioni precedenti

**NON DEVI:**
- Proporre alternative alle decisioni già prese
- Cambiare pattern o convenzioni stabilite
- Introdurre nuove dipendenze senza motivo

### Lavoro da fare oggi
[Descrivi cosa vuoi completare in questa sessione]

### Se noti problemi con le decisioni precedenti
NON ignorarli silenziosamente. Invece:
"⚠️ Segnalazione: La decisione [X] potrebbe causare problemi perché [Y]. Vuoi riconsiderarla?"`
      }
    ]
  },
  {
    id: "autocritica-forzata",
    number: 65,
    title: "Prompt di autocritica forzata",
    description: `**Perché questa tecnica:**
L'AI tende a presentare le proprie soluzioni con eccessiva sicurezza, senza evidenziare dubbi, alternative scartate, o potenziali problemi. Questo crea una falsa sensazione di completezza e correttezza. L'autocritica forzata ribalta questa dinamica: obblighi l'AI a cercare attivamente i difetti nel proprio lavoro, a identificare punti deboli, a anticipare critiche. Il risultato è un output più onesto e completo, che ti permette di prendere decisioni informate.

**Come funziona:**
Dopo che l'AI ha prodotto una soluzione, le chiedi esplicitamente di criticarla. Specifichi un numero minimo di punti deboli da identificare (es. almeno 3) per evitare risposte superficiali del tipo "questa soluzione è ottima, non vedo problemi". L'AI deve analizzare la propria proposta cercando: errori potenziali, casi limite non gestiti, assunzioni rischiose, alternative migliori non considerate, trade-off non esplicitati.

**Quando usarla:**
Usa questa tecnica quando la prima risposta dell'AI ti sembra "troppo bella per essere vera", quando stai per prendere una decisione importante basata sull'output dell'AI, quando vuoi capire i limiti di una soluzione prima di implementarla, quando fai due diligence su codice generato, o quando vuoi imparare a valutare criticamente le soluzioni.

**Errore comune:**
L'errore è accettare critiche superficiali: "potrebbe essere più efficiente" non è una critica utile. Le critiche devono essere specifiche e azionabili. L'altro errore è trattare l'autocritica come formalità — se l'AI trova problemi reali, devi affrontarli, non ignorarli.`,
    icon: ThumbsDown,
    prompts: [
      {
        label: "Autocritica della soluzione",
        text: `## Autocritica Forzata

### Soluzione da criticare
[Incolla la soluzione proposta dall'AI, oppure chiedi di criticare la risposta precedente]

### Richiesta di autocritica

Critica la soluzione che hai appena proposto come se fossi un reviewer senior e scettico.

**Trova ALMENO 3 punti deboli** nelle seguenti categorie:

**1. Correttezza**
- Ci sono bug potenziali?
- Casi limite non gestiti?
- Assunzioni che potrebbero essere false?

**2. Design**
- La struttura è la migliore possibile?
- Ci sono alternative migliori che non hai considerato?
- Il codice è troppo complesso o troppo semplice?

**3. Manutenibilità**
- Sarà facile modificare questo codice?
- Le dipendenze sono appropriate?
- Il codice è testabile?

**4. Performance**
- Ci sono inefficienze?
- Il codice scala bene?

**5. Sicurezza**
- Ci sono vulnerabilità potenziali?
- L'input è validato adeguatamente?

### Formato richiesto

Per ogni punto debole:
| # | Categoria | Problema | Gravità | Soluzione |
|---|-----------|----------|---------|-----------|
| 1 | ? | [Descrizione specifica] | Alta/Media/Bassa | [Come risolvere] |
| 2 | ? | ... | ... | ... |
| 3 | ? | ... | ... | ... |

### Dopo la critica
Vuoi che implementi le correzioni per i problemi identificati?`
      }
    ]
  },
  {
    id: "verifica-incrociata",
    number: 66,
    title: "Prompt di verifica incrociata",
    description: `**Perché questa tecnica:**
Quando scrivi e rivedi il tuo stesso codice, tendi a vedere ciò che intendevi scrivere, non ciò che hai effettivamente scritto. Lo stesso vale per l'AI: quando genera e poi "verifica" il proprio output, rischia di confermare i propri errori invece di trovarli. La verifica incrociata simula il processo di code review da parte di un collega: l'AI deve esaminare la soluzione come se l'avesse scritta qualcun altro, con occhio critico e senza bias di conferma.

**Come funziona:**
Chiedi all'AI di assumere il ruolo di un reviewer esterno che vede il codice per la prima volta. Il reviewer non conosce le intenzioni originali — deve dedurle dal codice stesso. Questo cambio di prospettiva spesso rivela: codice che sembra chiaro all'autore ma non lo è, assunzioni implicite che non sono documentate, edge case che l'autore ha considerato mentalmente ma non nel codice.

**Quando usarla:**
Questa tecnica è utile come controllo di qualità prima di considerare completato un lavoro, quando hai dubbi sulla robustezza di una soluzione, quando il codice deve essere letto/mantenuto da altri, quando vuoi verificare che il codice sia auto-esplicativo, o quando simuli il processo di code review prima di una review reale.

**Errore comune:**
L'errore è non entrare veramente nella finzione del "reviewer esterno" — l'AI potrebbe comunque dare per scontate cose che conosce dalla generazione. Puoi mitigare questo chiedendo esplicitamente di non assumere conoscenza pregressa e di valutare solo ciò che è visibile nel codice.`,
    icon: GitCompare,
    prompts: [
      {
        label: "Review come sviluppatore esterno",
        text: `## Verifica Incrociata

### Codice da verificare
\`\`\`
[incolla il codice]
\`\`\`

### Il tuo ruolo
Fingi di essere uno sviluppatore che vede questo codice per la **prima volta**.
NON hai accesso a:
- Le intenzioni originali dell'autore
- Discussioni o decisioni precedenti
- Contesto non presente nel codice

### Valuta basandoti SOLO su ciò che vedi

**1. Comprensibilità**
- Il codice è auto-esplicativo?
- I nomi comunicano l'intento?
- Servirebbero commenti che non ci sono?

**2. Correttezza apparente**
- La logica sembra corretta?
- Ci sono pattern sospetti?
- I tipi sono usati correttamente?

**3. Completezza**
- Mancano gestioni di errore evidenti?
- Ci sono TODO o codice incompleto?
- I casi limite sembrano coperti?

**4. Manutenibilità**
- Sarebbe facile modificare questo codice?
- Ci sono dipendenze nascoste?
- Il codice segue standard comuni?

### Domande che un nuovo sviluppatore farebbe
Elenca 3-5 domande che chiederesti all'autore per capire meglio il codice.

### Segnalazioni
Per ogni problema trovato:
- Cosa hai notato
- Perché è un problema
- Cosa suggeriresti

### Verdict
Come reviewer, questo codice è:
- [ ] Approvato
- [ ] Approvato con commenti
- [ ] Richiede modifiche
- [ ] Richiede discussione`
      }
    ]
  },
  {
    id: "controllo-allucinazione",
    number: 67,
    title: "Prompt di controllo dell'allucinazione",
    description: `**Perché questa tecnica:**
L'AI può "allucinare" — inventare API che non esistono, sintassi che non funziona, comportamenti non garantiti dalle librerie. Questo accade perché l'AI genera testo plausibile, non verificato. In un contesto di programmazione, le allucinazioni causano errori runtime, ore di debugging, e frustrazione. Questa tecnica obbliga l'AI a distinguere esplicitamente tra ciò che sa con certezza e ciò che sta assumendo o inventando.

**Come funziona:**
Chiedi all'AI di contrassegnare esplicitamente ogni parte della risposta secondo il livello di certezza: "so con certezza" vs "sto assumendo" vs "potrebbe non essere corretto". Questo costringe l'AI a riflettere sulla fonte delle proprie affermazioni. Le parti marcate come incerte diventano punti da verificare prima dell'uso. Meglio sapere cosa devi controllare che scoprirlo dopo ore di debugging.

**Quando usarla:**
Questa tecnica è critica quando lavori con librerie o API che non conosci bene, quando l'AI propone sintassi o pattern che non hai mai visto, quando la risposta dell'AI sembra troppo specifica per essere memorizzata (potrebbe essere inventata), quando lavori con versioni recenti di librerie (l'AI potrebbe avere conoscenze obsolete), o quando il costo di un errore è alto.

**Errore comune:**
L'errore è fidarsi delle auto-valutazioni dell'AI: se dice "sono sicuro", non significa che abbia ragione. Le segnalazioni di incertezza sono utili, ma anche le parti "certe" vanno verificate per codice critico. L'altro errore è non seguire effettivamente le verifiche suggerite — a quel punto la tecnica è inutile.`,
    icon: AlertTriangle,
    prompts: [
      {
        label: "Identificazione di parti incerte",
        text: `## Controllo dell'Allucinazione

### Contesto
[Descrivi cosa stai cercando di fare]

### Richiesta con controllo certezza

Per ogni parte della tua risposta, indica il livello di certezza:

**Legenda:**
- ✅ **CERTO**: Documentato, verificato, comportamento garantito
- ⚠️ **PROBABILE**: Basato su pattern comuni, ma non verificato
- ❓ **INCERTO**: Assunzione, memoria vaga, potrebbe essere sbagliato
- 🔴 **VERIFICA**: Sintassi/API che potrebbero essere cambiate o inesistenti

### Formato richiesto

\`\`\`
// ✅ CERTO: Array.map esiste in JavaScript ed è standard
const doubled = numbers.map(n => n * 2);

// ⚠️ PROBABILE: Questo pattern è comune, ma verifica la documentazione
const result = await someLibrary.doThing();

// ❓ INCERTO: Non sono sicuro se questa opzione esiste
const config = { experimentalFlag: true };

// 🔴 VERIFICA: Questa API potrebbe essere deprecata o cambiata
legacyLibrary.oldMethod();
\`\`\`

### Alla fine della risposta

**Cose da verificare prima dell'uso:**
1. [Elemento incerto 1]: dove verificare (link documentazione se noto)
2. [Elemento incerto 2]: ...

**Versioni di riferimento:**
- Libreria X: la mia conoscenza si riferisce alla versione Y
- API Z: potrebbero esserci cambiamenti dopo [data approssimativa]

### Ora rispondi a:
[La tua domanda tecnica]`
      }
    ]
  },
  {
    id: "sicurezza-codice",
    number: 68,
    title: "Prompt di sicurezza del codice",
    description: `**Perché questa tecnica:**
La sicurezza non può essere aggiunta dopo — deve essere considerata durante lo sviluppo. Ma è facile dimenticare: quando sei concentrato sulla funzionalità, le vulnerabilità passano inosservate. SQL injection, XSS, secret exposure, authentication bypass — sono errori comuni che hanno conseguenze serie. Questa tecnica trasforma l'AI in un security auditor che esamina sistematicamente il codice cercando vulnerabilità note e pattern pericolosi.

**Come funziona:**
L'AI analizza il codice dal punto di vista di un attaccante: dove sono i punti di ingresso, cosa può essere manipolato, quali assunzioni di sicurezza vengono fatte, dove mancano protezioni. Non cerca solo vulnerabilità tecniche, ma anche errori di design che creano rischi: secret management inadeguato, permessi troppo ampi, logging eccessivo di dati sensibili. Per ogni vulnerabilità identificata, indica gravità e remediation.

**Quando usarla:**
Questa tecnica è obbligatoria prima di andare in produzione, quando il codice gestisce dati utente, autenticazione, pagamenti, quando esponi API pubbliche, quando lavori con codice che altri useranno, durante security review formali, o quando hai dubbi sulla sicurezza di un approccio.

**Errore comune:**
L'errore è trattare l'analisi di sicurezza come una checklist superficiale. Le vulnerabilità reali sono spesso sottili e dipendenti dal contesto. L'altro errore è fidarsi ciecamente del "security check" — l'AI può non vedere vulnerabilità nuove o non standard. Usa questa tecnica come prima linea di difesa, non come unica linea.`,
    icon: ShieldCheck,
    prompts: [
      {
        label: "Security audit del codice",
        text: `## Analisi di Sicurezza del Codice

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Contesto di sicurezza
- Il codice è esposto a: [internet pubblico / rete interna / utenti autenticati]
- Gestisce: [dati sensibili / pagamenti / autenticazione / altro]
- Stack: [frontend / backend / entrambi]

### Analisi richiesta

**1. Injection vulnerabilities**
- [ ] SQL Injection
- [ ] Command Injection
- [ ] XSS (Cross-Site Scripting)
- [ ] LDAP/XML Injection

**2. Authentication & Authorization**
- [ ] Bypass dell'autenticazione possibile?
- [ ] Permessi verificati correttamente?
- [ ] Session management sicuro?

**3. Data exposure**
- [ ] Dati sensibili in log?
- [ ] Secret hardcoded?
- [ ] Informazioni esposte in errori?

**4. Input validation**
- [ ] Input sanitizzato?
- [ ] Limiti applicati?
- [ ] Tipi verificati?

**5. Configuration**
- [ ] HTTPS forzato?
- [ ] Headers di sicurezza?
- [ ] CORS configurato correttamente?

### Report delle vulnerabilità

| Gravità | Vulnerabilità | Dove | Impatto | Remediation |
|---------|---------------|------|---------|-------------|
| 🔴 CRITICA | ? | Riga N | ? | ? |
| 🟠 ALTA | ? | ? | ? | ? |
| 🟡 MEDIA | ? | ? | ? | ? |
| 🟢 BASSA | ? | ? | ? | ? |

### Raccomandazioni immediate
Le prime 3 cose da fare per migliorare la sicurezza di questo codice.`
      }
    ]
  },
  {
    id: "meta-prompt",
    number: 69,
    title: "Meta-prompt: chiedere all'AI come promptarla meglio",
    description: `**Perché questa tecnica:**
L'AI "sa" — in un certo senso — cosa la aiuta a dare risposte migliori. Conosce i pattern di prompt che producono output più precisi, le informazioni di contesto che le servono, le ambiguità che la confondono. Invece di indovinare come formulare le richieste, puoi chiedere direttamente all'AI: "come avrei dovuto chiederti questa cosa per ottenere una risposta migliore?". Questo meta-livello di comunicazione migliora la tua abilità di prompting nel tempo.

**Come funziona:**
Dopo aver ricevuto una risposta (soprattutto se non soddisfacente), chiedi all'AI di analizzare il tuo prompt originale e suggerirti come migliorarlo. L'AI evidenzierà: ambiguità che hanno causato fraintendimenti, contesto mancante che avrebbe aiutato, struttura che avrebbe reso la richiesta più chiara, vincoli che avresti dovuto specificare. Poi puoi usare questi insight per riformulare la richiesta o per migliorare i prompt futuri.

**Quando usarla:**
Usa questa tecnica quando la risposta dell'AI non era quello che volevi, quando stai imparando a usare l'AI più efficacemente, quando vuoi capire perché una richiesta ha prodotto un risultato inaspettato, quando vuoi costruire una libreria di prompt efficaci per il tuo dominio, o semplicemente come esercizio di miglioramento continuo.

**Errore comune:**
L'errore è trattare i suggerimenti come regole assolute: ciò che funziona per un tipo di richiesta potrebbe non funzionare per un altro. L'altro errore è non mettere in pratica i suggerimenti — il meta-prompting è utile solo se usi gli insight per migliorare effettivamente le richieste future.`,
    icon: Sparkles,
    prompts: [
      {
        label: "Miglioramento del prompting",
        text: `## Meta-Prompt: Come Promptarti Meglio

### Il mio prompt originale
\`\`\`
[incolla il prompt che hai usato]
\`\`\`

### La tua risposta (opzionale)
[Se la risposta non era soddisfacente, incollala]

### Analisi richiesta

**1. Cosa non era chiaro nel mio prompt?**
Elenca le ambiguità o le parti che potevano essere interpretate in modi diversi.

**2. Quale contesto mancava?**
Quali informazioni avresti avuto bisogno per rispondere meglio?

**3. Come avrei dovuto strutturare la richiesta?**
Proponi una struttura migliore per questo tipo di domanda.

**4. Quali vincoli avrei dovuto specificare?**
Cosa avresti dovuto sapere che non ti ho detto?

### Prompt migliorato
Riscrivi il mio prompt in una versione ottimizzata:
\`\`\`
[prompt migliorato]
\`\`\`

### Spiegazione delle modifiche
Per ogni modifica significativa, spiega perché migliora la richiesta.

### Pattern generale
C'è un pattern che posso riutilizzare per richieste simili in futuro?
\`\`\`
[template riutilizzabile]
\`\`\``
      }
    ]
  },
  {
    id: "auto-miglioramento",
    number: 70,
    title: "Prompt autoregolante (auto-miglioramento della risposta)",
    description: `**Perché questa tecnica:**
La prima risposta dell'AI raramente è la migliore possibile. L'AI può fare di meglio se le chiedi esplicitamente di riflettere sulla propria risposta e migliorarla. Questo processo di auto-valutazione e revisione simula ciò che fa un professionista esperto: scrivi una bozza, la rivedi, la migliori. La differenza è che l'AI può fare tutto questo in una singola interazione, producendo direttamente un output più raffinato.

**Come funziona:**
Invece di accettare la prima risposta, chiedi all'AI di valutarla su criteri specifici (chiarezza, completezza, correttezza, efficacia) e poi di riscriverla migliorandola. Puoi anche chiedere iterazioni multiple: "valuta questa versione e migliorala ancora". Ogni iterazione raffina l'output. Il risultato è una risposta che ha beneficiato di riflessione e revisione, non solo di generazione impulsiva.

**Quando usarla:**
Questa tecnica è preziosa quando hai bisogno di output di alta qualità e hai tempo per l'iterazione, quando la prima risposta è "vicina" ma non abbastanza, quando vuoi vedere il ragionamento dell'AI su cosa migliorerebbe, quando prepari contenuto importante (documentazione, comunicazioni, codice critico), o quando vuoi imparare cosa rende una risposta migliore.

**Errore comune:**
L'errore è chiedere miglioramenti generici: "rendila migliore" non aiuta. Specifica su quali dimensioni migliorare: più concisa, più dettagliata, più tecnica, più accessibile, più strutturata. L'altro errore è iterare all'infinito — a un certo punto i miglioramenti diventano marginali e non vale più il tempo.`,
    icon: Star,
    prompts: [
      {
        label: "Valutazione e miglioramento",
        text: `## Prompt Autoregolante

### La tua risposta precedente
[Incolla la risposta da migliorare, oppure chiedi di valutare l'ultima risposta]

### Processo di auto-miglioramento

**Fase 1: Auto-valutazione**
Valuta la tua risposta su questi criteri (1-5):

| Criterio | Voto | Motivazione |
|----------|------|-------------|
| Chiarezza | ?/5 | [perché questo voto] |
| Completezza | ?/5 | [cosa manca?] |
| Correttezza | ?/5 | [errori presenti?] |
| Utilità pratica | ?/5 | [è azionabile?] |
| Concisione | ?/5 | [troppo lungo/corto?] |

**Fase 2: Identificazione miglioramenti**
Cosa potrebbe essere fatto meglio?
1. [Miglioramento 1]
2. [Miglioramento 2]
3. [Miglioramento 3]

**Fase 3: Risposta migliorata**
Riscrivi la risposta applicando i miglioramenti identificati.

---

[RISPOSTA MIGLIORATA QUI]

---

**Fase 4: Confronto**
Cosa è cambiato tra la versione originale e quella migliorata?

### Vuoi un'altra iterazione?
Dopo aver visto la versione migliorata, posso fare un altro ciclo di auto-valutazione e miglioramento.`
      }
    ]
  },
  {
    id: "controllo-perimetro",
    number: 71,
    title: "Prompt di controllo del perimetro",
    description: `**Perché questa tecnica:**
L'AI tende ad essere "troppo utile" — se chiedi A, potrebbe darti anche B, C e D che pensa potrebbero esserti utili. A volte questo è positivo, ma spesso causa scope creep: ti ritrovi con risposte enormi che includono cose che non hai chiesto, che complicano la risposta, e che richiedono tempo per essere filtrate. Questa tecnica stabilisce confini espliciti: l'AI deve restare nel perimetro definito e segnalare se una richiesta lo supera.

**Come funziona:**
All'inizio della sessione o della richiesta, definisci esplicitamente cosa è dentro e fuori scope. Può essere un elenco di tecnologie da usare, funzionalità da includere, aspetti da ignorare. Dichiari che se qualcosa esce dallo scope, l'AI deve fermarsi e chiedere conferma prima di procedere. Questo crea un "recinto" che mantiene le risposte focalizzate e previene l'espansione incontrollata.

**Quando usarla:**
Questa tecnica è utile quando hai requisiti specifici e non vuoi soluzioni "creative" che li ignorano, quando lavori con vincoli di tempo o risorse, quando la semplicità è più importante della completezza, quando vuoi evitare over-engineering, o quando hai già deciso cosa NON fare e vuoi che l'AI rispetti queste decisioni.

**Errore comune:**
L'errore è definire il perimetro in modo troppo vago: "non complicare troppo" non è un confine chiaro. L'altro errore è essere troppo rigidi: a volte l'AI ha ragione a suggerire qualcosa fuori scope, e dovrebbe poterlo fare — ma esplicitamente, chiedendo permesso, non implicitamente.`,
    icon: Target,
    prompts: [
      {
        label: "Definizione dei confini",
        text: `## Controllo del Perimetro

### Definizione dello scope

**DENTRO lo scope (lavora su questo):**
- [Obiettivo 1]
- [Obiettivo 2]
- [Obiettivo 3]

**FUORI dallo scope (NON toccare):**
- ❌ [Cosa da escludere 1]
- ❌ [Cosa da escludere 2]
- ❌ [Cosa da escludere 3]

**Vincoli tecnologici:**
- Usa SOLO: [tecnologie/librerie consentite]
- NON usare: [tecnologie/librerie vietate]

**Vincoli di complessità:**
- Massimo N righe di codice per funzione
- Massimo N dipendenze esterne
- Preferisci soluzioni semplici a soluzioni complete

### Regole di comportamento

**Se una richiesta esce dallo scope:**
1. FERMATI
2. Segnala: "⚠️ Questa richiesta esce dallo scope definito perché [motivo]"
3. Chiedi: "Vuoi che proceda comunque o che mi attenga allo scope originale?"

**Se pensi che lo scope dovrebbe essere esteso:**
1. NON estenderlo autonomamente
2. Segnala: "💡 Suggerimento: potrebbe essere utile includere [X] perché [motivo]"
3. Aspetta conferma prima di procedere

### Richiesta
[La tua richiesta specifica]

### Verifica iniziale
Prima di rispondere, conferma:
- Cosa è dentro scope per questa richiesta
- Cosa è esplicitamente fuori scope`
      }
    ]
  },
  {
    id: "decisione-guidata",
    number: 72,
    title: "Prompt di decisione guidata",
    description: `**Perché questa tecnica:**
Molti problemi tecnici hanno più soluzioni valide, ognuna con pro e contro diversi. L'AI tende a proporre UNA soluzione — tipicamente la più comune o la prima che le viene in mente — senza mostrarti le alternative. Questo ti priva della possibilità di scegliere consapevolmente. La decisione guidata ribalta l'approccio: l'AI deve prima mostrarti le opzioni con pro e contro, poi aiutarti a scegliere quella giusta per il TUO contesto specifico.

**Come funziona:**
Invece di chiedere "come faccio X?", chiedi "quali sono le opzioni per fare X?". L'AI deve proporre almeno 2-3 alternative realistiche (non strawman), per ognuna elencando vantaggi, svantaggi, quando è la scelta migliore, e quando è la scelta peggiore. Poi, basandosi sul contesto che hai fornito, l'AI raccomanda l'opzione più adatta — ma la decisione finale resta tua.

**Quando usarla:**
Questa tecnica è preziosa quando prendi decisioni architetturali che avranno impatto a lungo termine, quando scegli tra librerie, framework o approcci, quando il problema ha trade-off significativi (semplicità vs performance, flessibilità vs sicurezza), quando vuoi capire le implicazioni delle diverse scelte, o quando devi giustificare una decisione tecnica ad altri.

**Errore comune:**
L'errore è chiedere troppe opzioni (più di 4-5 diventano overwhelming) o accettare opzioni troppo simili tra loro (le differenze devono essere sostanziali). L'altro errore è ignorare la raccomandazione dell'AI senza considerarla — se ti è stata data, c'è una ragione.`,
    icon: ListTree,
    prompts: [
      {
        label: "Analisi delle alternative",
        text: `## Decisione Guidata

### Il problema/decisione
[Descrivi cosa devi decidere o implementare]

### Contesto specifico
- Progetto: [tipo di progetto]
- Team: [dimensione, esperienza]
- Timeline: [urgenza]
- Priorità: [cosa conta di più? velocità/qualità/manutenibilità/performance]
- Vincoli: [budget, tecnologie esistenti, competenze]

### Richiesta di opzioni

Proponi **3 soluzioni alternative** (no strawman, tutte devono essere realistiche).

Per ogni soluzione:

**Soluzione 1: [Nome descrittivo]**
- **Descrizione**: Cosa comporta questa scelta
- **Pro**:
  - [Vantaggio 1]
  - [Vantaggio 2]
- **Contro**:
  - [Svantaggio 1]
  - [Svantaggio 2]
- **Ideale quando**: [Situazioni in cui questa è la scelta migliore]
- **Evitare quando**: [Situazioni in cui questa è la scelta peggiore]
- **Effort**: [Basso/Medio/Alto]
- **Rischio**: [Basso/Medio/Alto]

[Ripeti per Soluzione 2 e 3]

### Tabella comparativa

| Criterio | Soluzione 1 | Soluzione 2 | Soluzione 3 |
|----------|-------------|-------------|-------------|
| Velocità sviluppo | ? | ? | ? |
| Manutenibilità | ? | ? | ? |
| Performance | ? | ? | ? |
| Curva apprendimento | ? | ? | ? |

### Raccomandazione

**Dato il tuo contesto, consiglio: [Soluzione N]**

Motivazione: [Perché questa è la migliore per il tuo caso specifico]

### Domande per affinare la scelta
Se hai dubbi, rispondi a queste domande per una raccomandazione più precisa:
1. [Domanda discriminante 1]
2. [Domanda discriminante 2]`
      }
    ]
  },
  {
    id: "audit-finale",
    number: 73,
    title: "Prompt di audit finale",
    description: `**Perché questa tecnica:**
Prima di considerare un lavoro "finito", serve un controllo finale sistematico. È facile dimenticare dettagli, lasciare TODO irrisolti, non verificare edge case. L'audit finale è l'ultimo check prima della "consegna" — che sia un merge, un deploy, o una presentazione. Non si tratta di fare nuovi miglioramenti, ma di verificare che tutto ciò che doveva essere fatto sia stato fatto, e che non ci siano rischi nascosti.

**Come funziona:**
L'AI esamina l'intero lavoro svolto (codice, decisioni, documentazione) verificando: completezza rispetto ai requisiti, coerenza interna, qualità del codice, rischi residui, TODO non risolti, assunzioni non verificate. Produce un report strutturato che indica cosa è pronto, cosa richiede attenzione, e cosa blocca il completamento. Il risultato è confidence che il lavoro è veramente finito — o una lista chiara di cosa manca.

**Quando usarla:**
Questa tecnica è il passo finale prima di ogni consegna significativa: merge di feature importanti, deploy in produzione, demo a stakeholder, passaggio di consegne ad altri sviluppatori, chiusura di sprint. È anche utile come self-check personale quando senti di aver finito ma vuoi conferma.

**Errore comune:**
L'errore è fare l'audit troppo presto (quando c'è ancora lavoro da fare) o saltarlo quando il tempo stringe — è proprio quando hai fretta che l'audit è più prezioso. L'altro errore è trattare l'audit come formalità: se emergono problemi, devono essere risolti, non ignorati.`,
    icon: ClipboardList,
    prompts: [
      {
        label: "Controllo finale pre-consegna",
        text: `## Audit Finale

### Lavoro da verificare
[Descrivi il lavoro completato, incolla codice se rilevante]

### Requisiti originali
1. [Requisito 1]
2. [Requisito 2]
3. [Requisito 3]

### Checklist di audit

**Completezza**
- [ ] Tutti i requisiti sono stati implementati?
- [ ] Tutti i TODO sono stati risolti?
- [ ] La documentazione è aggiornata?
- [ ] I test sono stati scritti/aggiornati?

**Qualità**
- [ ] Il codice è leggibile e manutenibile?
- [ ] Nessuna duplicazione evidente?
- [ ] Nomi chiari e consistenti?
- [ ] Error handling appropriato?

**Coerenza**
- [ ] Lo stile è coerente con il resto del progetto?
- [ ] Le convenzioni sono rispettate?
- [ ] Le decisioni architetturali sono coerenti?

**Rischi**
- [ ] Nessuna vulnerabilità di sicurezza nota?
- [ ] Performance accettabili?
- [ ] Edge case gestiti?
- [ ] Rollback possibile se necessario?

### Report dell'audit

| Area | Stato | Note |
|------|-------|------|
| Completezza | ✅/⚠️/❌ | [dettagli] |
| Qualità | ✅/⚠️/❌ | [dettagli] |
| Coerenza | ✅/⚠️/❌ | [dettagli] |
| Rischi | ✅/⚠️/❌ | [dettagli] |

### Issues da risolvere prima della consegna
1. [BLOCCANTE] ...
2. [IMPORTANTE] ...
3. [MINORE] ...

### Issues accettabili come debito tecnico
1. [Issue] - Motivazione per rimandare

### Verdict finale
- [ ] ✅ PRONTO per la consegna
- [ ] ⚠️ PRONTO con riserve (elencate sopra)
- [ ] ❌ NON PRONTO (bloccanti da risolvere)`
      }
    ]
  },
  {
    id: "collaborazione-lungo-termine",
    number: 74,
    title: "Prompt di collaborazione a lungo termine",
    description: `**Perché questa tecnica:**
Le conversazioni one-shot con l'AI sono utili per domande semplici, ma per progetti reali serve continuità: decisioni che si accumulano, contesto che cresce, una "relazione" che si costruisce nel tempo. Questa tecnica stabilisce le basi per una collaborazione a lungo termine, dove l'AI diventa un membro virtuale del team che conosce il progetto, rispetta le convenzioni, e mantiene memoria delle scelte fatte.

**Come funziona:**
Crei un "documento di onboarding" per l'AI che contiene tutto ciò che un nuovo membro del team dovrebbe sapere: visione del progetto, stack tecnologico, convenzioni, decisioni architetturali, anti-pattern da evitare, stile di comunicazione preferito. Questo documento viene aggiornato man mano che il progetto evolve, e viene fornito all'inizio di ogni sessione significativa, creando continuità tra conversazioni separate.

**Quando usarla:**
Questa tecnica è fondamentale per progetti che durano settimane o mesi, quando vuoi che l'AI lavori come un membro del team e non come un consulente occasionale, quando hai bisogno di coerenza tra sessioni diverse, quando più persone nel team usano l'AI sullo stesso progetto, o quando vuoi investire nel setup iniziale per risparmiare tempo nel lungo periodo.

**Errore comune:**
L'errore è non aggiornare il documento di onboarding man mano che le decisioni cambiano — diventa obsoleto e causa inconsistenze. L'altro errore è renderlo troppo lungo: deve essere un riferimento rapido, non un manuale. Infine, ricorda che l'AI non ha vera "memoria" — la continuità dipende da te nel fornire il contesto.`,
    icon: Clock,
    prompts: [
      {
        label: "Setup collaborazione continuativa",
        text: `## Collaborazione a Lungo Termine

### Profilo del progetto

**Nome progetto**: [nome]
**Descrizione**: [1-2 frasi su cosa fa]
**Fase attuale**: [MVP / Sviluppo / Manutenzione / Refactoring]

### Stack tecnologico
- Frontend: [framework, librerie principali]
- Backend: [linguaggio, framework, database]
- Infrastruttura: [hosting, CI/CD, monitoring]
- Testing: [framework, approccio]

### Decisioni architetturali permanenti
Queste decisioni sono state prese e NON vanno rimesse in discussione:

1. **[Decisione 1]**: [motivazione breve]
2. **[Decisione 2]**: [motivazione breve]
3. **[Decisione 3]**: [motivazione breve]

### Convenzioni e standard
- **Naming**: [convenzioni specifiche]
- **Struttura file**: [organizzazione cartelle]
- **Commit**: [formato messaggi]
- **Branching**: [strategia]
- **Code style**: [linter, formatter]

### Pattern preferiti
- [Pattern 1]: Usiamo questo per [caso d'uso]
- [Pattern 2]: ...

### Anti-pattern da evitare
- ❌ [Anti-pattern 1]: [perché]
- ❌ [Anti-pattern 2]: ...

### Stile di lavoro preferito
- [Preferenza 1: es. "codice conciso vs esplicito"]
- [Preferenza 2: es. "commenti solo dove necessario"]

### Come voglio che lavori
- Segui le convenzioni sopra in ogni risposta
- Segnala se qualcosa sembra in conflitto con le decisioni
- Mantieni coerenza con il lavoro precedente
- Chiedi chiarimenti quando necessario

### Nota
Questo documento verrà aggiornato nel tempo. Considera sempre la versione più recente come fonte di verità.`
      }
    ]
  },
  {
    id: "maturita-professionale",
    number: 75,
    title: "Prompt di maturità professionale",
    description: `**Perché questa tecnica:**
In contesti aziendali reali, non basta che il codice funzioni: deve essere affidabile, manutenibile, documentato, testabile, sicuro. Le soluzioni "creative" o sperimentali che funzionano in un progetto personale possono essere rischi inaccettabili in produzione. Questa tecnica alza lo standard di professionalità dell'output dell'AI, chiedendo esplicitamente soluzioni "enterprise-grade" che seguono best practice consolidate e minimizzano i rischi.

**Come funziona:**
Dichiari che la risposta deve essere appropriata per un contesto aziendale serio: codice production-ready, librerie stabili e mainstream, pattern consolidati, documentazione adeguata, gestione errori robusta. L'AI deve evitare: dipendenze esotiche o poco mantenute, pattern sperimentali, hack o workaround, soluzioni "clever" che sacrificano la leggibilità. Il risultato è output che potresti mostrare in una code review aziendale senza imbarazzo.

**Quando usarla:**
Questa tecnica è il default per qualsiasi codice che andrà in produzione, codice che altri sviluppatori dovranno mantenere, progetti con aspettative di lunga vita, contesti dove l'affidabilità è più importante della velocità, o quando lavori con team che hanno standard elevati.

**Errore comune:**
L'errore è interpretare "professionale" come "complicato" — spesso la soluzione più professionale è quella più semplice che risolve il problema. L'altro errore è applicare standard enterprise a prototipi o esperimenti dove la velocità conta più della qualità — il contesto determina lo standard appropriato.`,
    icon: Briefcase,
    prompts: [
      {
        label: "Standard professionale aziendale",
        text: `## Maturità Professionale

### Contesto
Questo lavoro è per un **contesto aziendale professionale**.
Il codice deve essere appropriato per un team serio di una azienda reale.

### Standard richiesti

**Affidabilità**
- Codice production-ready, non proof-of-concept
- Error handling completo e robusto
- Logging appropriato per debug in produzione
- Nessun TODO o codice incompleto

**Manutenibilità**
- Codice leggibile e auto-documentante
- Struttura chiara e coerente
- Commenti dove necessario (non eccessivi)
- Facilmente modificabile da altri sviluppatori

**Sicurezza**
- Nessun secret hardcoded
- Input validation completa
- Nessuna vulnerabilità nota
- Principle of least privilege

**Dipendenze**
- Solo librerie stabili e ben mantenute
- Preferisci soluzioni standard del linguaggio
- Evita dipendenze esotiche o poco usate
- Verifica che le librerie siano attivamente mantenute

**Testing**
- Codice strutturato per essere testabile
- Suggerisci i test che andrebbero scritti
- Edge case identificati e gestiti

### Cosa evitare assolutamente
- ❌ Hack o workaround "creativi"
- ❌ Pattern sperimentali o non standard
- ❌ Soluzioni "clever" che sacrificano leggibilità
- ❌ Dipendenze abbandonate o poco mantenute
- ❌ Codice che funziona "per magia"

### Formato risposta
- Codice commentato dove non ovvio
- Spiega le scelte architetturali
- Indica eventuali trade-off
- Suggerisci documentazione necessaria

### Richiesta
[La tua richiesta specifica]

### Verifica finale
Prima di concludere, conferma che la soluzione:
- È appropriata per un contesto enterprise
- Non richiede conoscenze esotiche per essere mantenuta
- Può passare una code review severa`
      }
    ]
  }
];
