import { LucideIcon, Target, Layers, Copy, RefreshCw, Tag, Trash2, GitBranch, Scale, Zap, TrendingUp, Palette, Shield, Footprints, Award } from "lucide-react";

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

export const refactoringSteps: PromptStep[] = [
  {
    id: "refactoring-obiettivo-singolo",
    number: 37,
    title: "Refactoring con obiettivo singolo",
    description: `**Perché questa tecnica:**
Ogni refactoring deve avere un solo obiettivo chiaro e misurabile. Se modifichi contemporaneamente nomi, struttura e performance, diventa impossibile capire quale cambiamento ha causato un miglioramento o una regressione. La focalizzazione su un singolo aspetto ti permette di valutare l'impatto reale di ogni intervento e di tornare indietro con precisione se qualcosa va storto. Questo approccio segue il principio scientifico di cambiare una sola variabile alla volta.

**Come funziona:**
Dichiari esplicitamente l'unico obiettivo del refactoring (leggibilità, performance, testabilità, modularità) e vieti all'AI di modificare altri aspetti del codice. Ad esempio, se l'obiettivo è "migliorare la leggibilità", l'AI può rinominare variabili e riorganizzare il codice, ma NON può ottimizzare algoritmi o cambiare l'architettura. Questo crea un vincolo che forza risposte focalizzate e verificabili.

**Quando usarla:**
Usa questa tecnica quando vuoi migliorare un aspetto specifico del codice senza rischiare effetti collaterali. È particolarmente utile quando lavori su codice critico dove ogni cambiamento deve essere tracciabile, quando fai code review e vuoi isolare i miglioramenti, o quando stai preparando il codice per una modifica più grande e vuoi prima "pulirlo" in modo controllato.

**Errore comune:**
L'errore tipico è fare refactoring "generici" senza un obiettivo definito: "migliora questo codice" porta l'AI a toccare tutto, rendendo impossibile capire cosa ha funzionato. Un altro errore è definire obiettivi troppo ampi come "rendilo migliore" invece di obiettivi specifici come "riduci l'annidamento a massimo 2 livelli".`,
    icon: Target,
    prompts: [
      {
        label: "Refactoring focalizzato sulla leggibilità",
        text: `## Refactoring con Obiettivo Singolo

### Obiettivo esclusivo
Migliorare la **leggibilità** del codice.

### Vincoli rigorosi
- ❌ NON modificare il comportamento del codice
- ❌ NON ottimizzare le performance
- ❌ NON cambiare l'architettura
- ❌ NON aggiungere funzionalità

### Azioni consentite
- ✅ Rinominare variabili per chiarezza
- ✅ Riorganizzare l'ordine delle dichiarazioni
- ✅ Aggiungere spaziatura logica
- ✅ Semplificare espressioni complesse
- ✅ Estrarre costanti con nomi significativi

### Codice da refactorare
\`\`\`
[incolla il codice]
\`\`\`

### Output richiesto
1. Codice refactorizzato
2. Lista delle modifiche effettuate
3. Conferma che il comportamento è invariato`
      }
    ]
  },
  {
    id: "riduzione-complessita",
    number: 38,
    title: "Riduzione della complessità",
    description: `**Perché questa tecnica:**
La complessità ciclomatica misura quanti percorsi diversi può prendere il codice durante l'esecuzione. Ogni if, ogni switch case, ogni loop aggiunge un percorso. Quando i livelli di annidamento superano 3-4, il codice diventa quasi impossibile da seguire mentalmente, difficile da testare (servono troppi test per coprire tutti i percorsi) e prone a bug nascosti negli angoli meno testati. Ridurre la complessità significa rendere il codice più lineare, più prevedibile e più facile da verificare.

**Come funziona:**
Chiedi all'AI di mappare ogni punto di complessità del codice (if annidati, switch giganti, loop con condizioni multiple) e di applicare tecniche specifiche per linearizzare il flusso. Le tecniche principali sono: early return (esci subito se le precondizioni falliscono), guard clauses (metti i controlli all'inizio), estrazione di funzioni (spezza blocchi autonomi), lookup tables (sostituisci switch con oggetti di mappatura), e decomposizione delle condizioni (dai nomi significativi a condizioni complesse).

**Quando usarla:**
Applica questa tecnica quando vedi funzioni con più di 3 livelli di indentazione, switch con più di 5-6 casi, condizioni booleane con più di 3 operatori, o quando ti accorgi che devi "scorrere con gli occhi" avanti e indietro per capire cosa fa il codice. È anche il momento giusto quando i test unitari richiedono troppi setup diversi per coprire tutti i casi.

**Errore comune:**
Il rischio è semplificare troppo, sacrificando la chiarezza dell'intento originale. A volte un if annidato esprime meglio la logica di business rispetto a una serie di early return. L'obiettivo non è avere zero indentazione, ma avere indentazione che riflette la reale complessità del problema.`,
    icon: Layers,
    prompts: [
      {
        label: "Analisi e riduzione complessità",
        text: `## Riduzione della Complessità

### Codice da analizzare
\`\`\`
[incolla il codice complesso]
\`\`\`

### Analisi richiesta
1. **Mappa della complessità**: Identifica ogni punto di annidamento
2. **Livello attuale**: Conta i livelli massimi di indentazione
3. **Complessità ciclomatica**: Stima il numero di percorsi possibili

### Tecniche da applicare (in ordine di priorità)
1. **Early return**: Elimina else non necessari
2. **Guard clauses**: Sposta le condizioni di uscita all'inizio
3. **Estrazione di funzioni**: Separa blocchi logici autonomi
4. **Lookup tables**: Sostituisci switch/if con oggetti di mappatura
5. **Decomposizione condizioni**: Assegna nomi a condizioni complesse

### Output richiesto
| Metrica | Prima | Dopo |
|---------|-------|------|
| Livelli annidamento | ? | ? |
| Complessità ciclomatica | ? | ? |
| Righe di codice | ? | ? |

Codice semplificato con commenti sulle modifiche.`
      }
    ]
  },
  {
    id: "eliminazione-duplicazioni",
    number: 39,
    title: "Eliminazione di duplicazioni",
    description: `**Perché questa tecnica:**
Il principio DRY (Don't Repeat Yourself) esiste perché ogni duplicazione crea un debito tecnico: quando modifichi una copia, devi ricordarti di modificare anche le altre, e prima o poi dimenticherai. Il risultato è codice che si comporta in modo inconsistente, bug che sembrano risolti ma riappaiono in altre parti dell'applicazione, e tempo sprecato a fare le stesse modifiche in più punti. La duplicazione è letteralmente un bug in attesa di manifestarsi.

**Come funziona:**
L'AI analizza il codice cercando tre tipi di duplicazione: esatta (blocchi identici), strutturale (stessa struttura con valori diversi), e semantica (logica simile espressa in modo diverso). Per ogni duplicazione propone una strategia: estrazione in funzione comune per duplicazioni esatte, parametrizzazione per duplicazioni strutturali, e refactoring con pattern per duplicazioni semantiche. La chiave è creare astrazioni che abbiano senso nel dominio, non astrazioni forzate.

**Quando usarla:**
Usa questa tecnica quando ti accorgi che stai facendo copia-incolla di codice, quando una modifica richiede cambiamenti in più punti del codebase, quando vedi funzioni che fanno "quasi la stessa cosa", o durante code review quando noti pattern ripetuti. È anche utile come check periodico su moduli che crescono organicamente nel tempo.

**Errore comune:**
L'errore più grave è creare astrazioni premature: due blocchi di codice che sembrano simili potrebbero avere responsabilità diverse e evolvere in direzioni diverse. Forzarli in un'unica astrazione crea accoppiamento artificiale. La regola pratica è: aspetta di vedere la duplicazione almeno 3 volte prima di astrarre, e verifica che le copie cambino sempre insieme.`,
    icon: Copy,
    prompts: [
      {
        label: "Identificazione e rimozione duplicazioni",
        text: `## Eliminazione di Duplicazioni

### Codice da analizzare
\`\`\`
[incolla il codice con sospette duplicazioni]
\`\`\`

### Analisi richiesta

**Fase 1: Identificazione**
- Trova tutti i blocchi di codice duplicati o quasi-duplicati
- Per ogni duplicazione indica:
  - Righe coinvolte
  - Percentuale di somiglianza
  - Differenze tra le versioni

**Fase 2: Classificazione**
| Tipo di duplicazione | Strategia consigliata |
|---------------------|----------------------|
| Esatta | Estrazione diretta in funzione |
| Strutturale | Parametrizzazione |
| Semantica | Refactoring con pattern |

**Fase 3: Proposta di soluzione**
- Crea funzioni/utility condivise
- Mantieni i punti di variazione come parametri
- Verifica che la nuova astrazione abbia senso semantico

### Vincolo importante
NON creare astrazioni forzate. Se due blocchi sembrano simili ma hanno responsabilità diverse, lasciali separati e spiega perché.`
      }
    ]
  },
  {
    id: "conversione-stile",
    number: 40,
    title: "Conversione di stile (procedurale, OOP, funzionale)",
    description: `**Perché questa tecnica:**
Ogni paradigma di programmazione ha punti di forza specifici: il procedurale è diretto e facile da seguire per operazioni sequenziali, l'OOP eccelle nel modellare domini complessi con entità che hanno stato e comportamento, il funzionale brilla nella trasformazione di dati e nella composizione di operazioni. Quando il paradigma non è adatto al problema, il codice diventa contorto. Convertire al paradigma giusto può trasformare codice confuso in codice elegante.

**Come funziona:**
Specifichi esplicitamente lo stile di partenza e quello di destinazione, e l'AI converte il codice mantenendo esattamente lo stesso comportamento (input identici devono produrre output identici). La conversione non è meccanica: richiede di ripensare la struttura. Da procedurale a OOP significa identificare entità, responsabilità, e relazioni. Da OOP a funzionale significa eliminare stato mutabile, isolare side effects, e comporre funzioni pure.

**Quando usarla:**
Questa tecnica è preziosa quando integri codice legacy scritto in un paradigma diverso dal resto del progetto, quando ti rendi conto che il paradigma attuale sta creando più problemi di quanti ne risolva, quando vuoi sfruttare features del linguaggio che funzionano meglio con un certo paradigma (es. React hooks preferiscono stile funzionale), o quando il team ha maggiore esperienza con un paradigma specifico.

**Errore comune:**
L'errore classico è forzare un paradigma dove non ha senso: non tutto deve essere una classe (OOP forzato), non tutto deve essere una funzione pura (funzionale forzato). Un altro errore è perdere funzionalità durante la conversione perché non si è verificato che tutti i casi d'uso sono ancora coperti.`,
    icon: RefreshCw,
    prompts: [
      {
        label: "Conversione tra paradigmi",
        text: `## Conversione di Stile di Programmazione

### Codice originale
\`\`\`
[incolla il codice]
\`\`\`

### Stile attuale
[Procedurale / Object-Oriented / Funzionale]

### Stile di destinazione
[Procedurale / Object-Oriented / Funzionale]

### Requisiti della conversione
1. **Comportamento identico**: Input/output devono rimanere esattamente uguali
2. **Idiomaticità**: Usa pattern tipici del paradigma di destinazione
3. **Leggibilità**: Il risultato deve essere naturale, non forzato

### Per conversione a OOP
- Identifica le entità (classi)
- Definisci responsabilità di ogni classe
- Incapsula stato e comportamento
- Usa ereditarietà solo se ha senso

### Per conversione a Funzionale
- Elimina stato mutabile
- Usa funzioni pure
- Preferisci composizione a iterazione
- Gestisci side effects ai bordi

### Output
1. Codice convertito
2. Mappatura concettuale: cosa diventa cosa
3. Test per verificare equivalenza comportamentale`
      }
    ]
  },
  {
    id: "rinomina-semantica",
    number: 41,
    title: "Rinomina semantica di variabili e funzioni",
    description: `**Perché questa tecnica:**
Il codice si legge molte più volte di quante si scriva. Un nome ben scelto comunica l'intento senza bisogno di commenti, riduce il tempo per capire cosa fa il codice, e previene errori di interpretazione. Nomi come "data", "temp", "x", "result" sono segnali di codice scritto di fretta: non dicono nulla sul contenuto o sullo scopo. Il costo cognitivo di nomi vaghi si accumula: ogni volta che incontri "data" devi risalire a cosa contiene, interrompendo il flusso di lettura.

**Come funziona:**
L'AI analizza sistematicamente ogni nome nel codice (variabili, funzioni, parametri, costanti) e propone alternative che esprimano meglio l'intento. Segue convenzioni professionali: variabili con sostantivi che descrivono il contenuto (userEmail, orderTotal), funzioni con verbi che descrivono l'azione (calculateDiscount, validateInput), booleani con prefissi interrogativi (isValid, hasPermission, canEdit). I nomi devono essere abbastanza lunghi da essere chiari, ma abbastanza corti da essere leggibili.

**Quando usarla:**
Applica questa tecnica quando erediti codice con nomi criptici, quando durante una code review noti che devi chiedere "cosa contiene questa variabile?", quando vedi abbreviazioni ambigue (usr, cnt, tmp, res), o quando le funzioni hanno nomi generici come "process", "handle", "doStuff" che non dicono cosa processano, gestiscono o fanno.

**Errore comune:**
Un errore frequente è creare nomi troppo lunghi che diventano illeggibili (getUserAccountEmailAddressFromDatabaseById). Un altro errore è nominare in base all'implementazione invece che al concetto: "stringArray" dice il tipo ma non il contenuto, "customerNames" dice il contenuto ed è più utile. Evita anche di cambiare nomi che fanno parte di API pubbliche o convenzioni del framework.`,
    icon: Tag,
    prompts: [
      {
        label: "Analisi e miglioramento naming",
        text: `## Rinomina Semantica

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Analisi dei nomi attuali
Per ogni variabile/funzione con nome migliorabile:

| Nome attuale | Problema | Nome proposto | Motivazione |
|--------------|----------|---------------|-------------|
| ? | ? | ? | ? |

### Criteri di naming da applicare
- **Variabili**: sostantivi che descrivono il contenuto
- **Funzioni**: verbi che descrivono l'azione
- **Booleani**: prefissi is/has/can/should
- **Collezioni**: plurale che indica il tipo di elementi
- **Costanti**: SCREAMING_SNAKE_CASE per valori magici

### Convenzioni da rispettare
- Lingua: [italiano/inglese - specificare]
- Stile: [camelCase/snake_case/PascalCase]
- Lunghezza: 2-4 parole max, evita abbreviazioni ambigue

### Output
1. Codice con nomi aggiornati
2. Tabella delle modifiche
3. Conferma: "La logica NON è stata modificata"`
      }
    ]
  },
  {
    id: "pulizia-codice-morto",
    number: 42,
    title: "Pulizia del codice morto",
    description: `**Perché questa tecnica:**
Il codice morto è codice che esiste nel codebase ma non viene mai eseguito: funzioni mai chiamate, variabili dichiarate ma mai lette, import non utilizzati, condizioni che sono sempre false. Questo codice ha un costo: occupa spazio visivo rendendo più difficile navigare il file, può confondere chi legge facendo pensare che sia importante, richiede manutenzione quando si fanno refactoring generali, e nei casi peggiori può contenere bug latenti che si attivano se qualcuno lo riabilita per errore.

**Come funziona:**
L'AI analizza il codice cercando sistematicamente: variabili dichiarate mai referenziate, funzioni definite mai invocate, parametri di funzione mai utilizzati, import di moduli mai usati, codice commentato datato, rami condizionali che non possono mai essere raggiunti (es. if(false)). Per ogni elemento morto, classifica il livello di sicurezza della rimozione: alcuni sono sicuramente morti, altri potrebbero essere usati dinamicamente (reflection, eval, callback esterni).

**Quando usarla:**
Esegui questa pulizia periodicamente come igiene del codebase, dopo aver rimosso funzionalità (per eliminare i residui), quando un modulo sembra "pesante" e difficile da navigare, prima di un refactoring maggiore (per partire da una base pulita), o quando il linter segnala molti warning su variabili inutilizzate.

**Errore comune:**
L'errore più pericoloso è rimuovere codice che sembra morto ma è usato in modi non ovvi: callback passati a librerie esterne, metodi chiamati via reflection o dinamicamente, handler registrati in file di configurazione, codice condizionale attivato solo in produzione. Prima di rimuovere, verifica che non ci siano usi dinamici. In caso di dubbio, commenta prima di eliminare definitivamente.`,
    icon: Trash2,
    prompts: [
      {
        label: "Identificazione e rimozione codice morto",
        text: `## Pulizia del Codice Morto

### Codice da analizzare
\`\`\`
[incolla il codice]
\`\`\`

### Contesto del progetto
- Framework/linguaggio: [specificare]
- Esistono usi dinamici (reflection, eval, callback esterni)? [sì/no]

### Cerca e classifica

**Categoria 1: Sicuro da rimuovere**
- [ ] Variabili dichiarate mai usate
- [ ] Funzioni mai chiamate nel codebase visibile
- [ ] Import non utilizzati
- [ ] Codice commentato datato
- [ ] Parametri mai letti

**Categoria 2: Verificare prima di rimuovere**
- [ ] Funzioni esportate (potrebbero essere usate esternamente)
- [ ] Codice condizionale con flag sempre false
- [ ] Metodi che potrebbero essere chiamati via reflection

**Categoria 3: NON rimuovere (spiega perché)**
- Codice che sembra morto ma ha usi legittimi

### Output richiesto
1. Lista di ciò che può essere rimosso in sicurezza
2. Lista di ciò che richiede verifica
3. Codice pulito finale
4. Stima: righe rimosse e percentuale di riduzione`
      }
    ]
  },
  {
    id: "separazione-responsabilita",
    number: 43,
    title: "Separazione chiara delle responsabilità",
    description: `**Perché questa tecnica:**
Il Single Responsibility Principle (SRP) afferma che ogni modulo dovrebbe avere "un solo motivo per cambiare". In pratica, significa che una funzione dovrebbe fare una cosa sola, farla bene, e farla completamente. Funzioni che mescolano validazione, logica di business, formattazione output e logging sono impossibili da testare in isolamento, difficili da riutilizzare, e cambiano per troppe ragioni diverse. Quando una funzione è difficile da nominare con un verbo singolo, probabilmente fa troppe cose.

**Come funziona:**
L'AI analizza la funzione o classe target e identifica le diverse responsabilità mescolate: input validation, trasformazione dati, logica di business, side effects (I/O, logging, database), formattazione output. Per ogni responsabilità propone un'unità separata (funzione o classe) con un nome che descrive esattamente quella responsabilità. Poi mostra come le nuove unità si compongono per ottenere il comportamento originale, tipicamente attraverso una funzione "orchestratrice" che le chiama in sequenza.

**Quando usarla:**
Applica questa tecnica quando una funzione supera le 20-30 righe, quando il nome della funzione contiene "and" o "or" (processAndSave, validateOrCreate), quando per testare una parte devi fare setup complesso per parti non coinvolte, quando vuoi riutilizzare solo una porzione della logica, o quando diversi sviluppatori devono modificare la stessa funzione per ragioni diverse.

**Errore comune:**
L'errore opposto all'over-responsabilità è l'over-separation: creare funzioni di 2-3 righe che frammentano la logica e costringono a saltare continuamente tra file per capire cosa succede. Il bilanciamento corretto è: ogni funzione dovrebbe essere comprensibile leggendola dall'alto in basso senza dover guardare altrove, ma non dovrebbe contenere logica che potrebbe esistere indipendentemente.`,
    icon: GitBranch,
    prompts: [
      {
        label: "Analisi e separazione responsabilità",
        text: `## Separazione delle Responsabilità

### Codice da analizzare
\`\`\`
[incolla la funzione/classe complessa]
\`\`\`

### Analisi delle responsabilità attuali
Elenca ogni responsabilità distinta presente nel codice:
1. ?
2. ?
3. ?

### Principio guida: Single Responsibility
Ogni funzione/classe deve avere **un solo motivo per cambiare**.

### Proposta di separazione

**Nuova struttura:**
\`\`\`
funzione1: [responsabilità specifica]
funzione2: [responsabilità specifica]
funzione3: [responsabilità specifica]
orchestratore: [combina le funzioni se necessario]
\`\`\`

### Criteri di separazione
- Ogni nuova funzione deve essere testabile in isolamento
- Ogni nuova funzione deve avere un nome chiaro e specifico
- Le dipendenze tra funzioni devono essere esplicite
- NON creare funzioni troppo piccole (< 3 righe) se non necessario

### Output
1. Codice separato in funzioni coerenti
2. Diagramma delle dipendenze tra le nuove funzioni
3. Per ogni funzione: nome, input, output, responsabilità`
      }
    ]
  },
  {
    id: "trade-off-analisi",
    number: 44,
    title: "Prompt di trade-off (semplicità vs performance)",
    description: `**Perché questa tecnica:**
In ingegneria del software non esistono soluzioni perfette, solo trade-off. Ogni scelta ha un costo: codice più performante è spesso più complesso, codice più flessibile è spesso più verbose, codice più robusto è spesso più lento. L'AI tende a proporre "la soluzione migliore" senza considerare il contesto, ma "migliore" dipende da cosa ottimizzi. Questa tecnica forza l'AI a esplicitare i compromessi invece di nasconderli.

**Come funziona:**
Chiedi esplicitamente all'AI di produrre due (o più) versioni dello stesso codice, ciascuna ottimizzata per un criterio diverso. Tipicamente: una versione semplice/leggibile vs una versione performante, oppure una versione minimale vs una versione estensibile. Per ogni versione l'AI deve dichiarare: cosa guadagni, cosa perdi, quando preferirla. Questo rende visibili trade-off che altrimenti resterebbero impliciti nella "soluzione unica" proposta.

**Quando usarla:**
Usa questa tecnica quando devi prendere decisioni architetturali significative, quando sospetti che l'AI stia over-engineering (troppo complesso per il problema) o under-engineering (troppo semplice per i requisiti reali), quando vuoi capire le implicazioni di diverse scelte prima di implementare, o quando devi giustificare una scelta tecnica a colleghi o stakeholder.

**Errore comune:**
L'errore tipico è scegliere sempre la versione "avanzata" o "performante" senza considerare il costo di complessità. La performance prematura è la radice di molto male: codice ottimizzato che non aveva bisogno di essere ottimizzato, ma che ora è difficile da modificare. L'altro errore è non considerare che i trade-off cambiano nel tempo: oggi la semplicità è più importante, tra un anno potrebbe servire la performance.`,
    icon: Scale,
    prompts: [
      {
        label: "Analisi trade-off con due versioni",
        text: `## Analisi dei Trade-off

### Codice/problema da analizzare
\`\`\`
[incolla il codice o descrivi il problema]
\`\`\`

### Richiesta: Due versioni alternative

**Versione A: Ottimizzata per semplicità**
- Priorità: leggibilità, manutenibilità, facilità di debug
- Accetta compromessi su performance

**Versione B: Ottimizzata per performance**
- Priorità: velocità, efficienza memoria, scalabilità
- Accetta compromessi su leggibilità

### Per ogni versione fornisci:
1. Implementazione completa
2. Complessità temporale (Big O)
3. Complessità spaziale (Big O)
4. Righe di codice
5. Facilità di modifica (1-5)
6. Rischio di bug (1-5)

### Tabella comparativa finale

| Criterio | Versione A | Versione B |
|----------|------------|------------|
| Performance | ? | ? |
| Leggibilità | ? | ? |
| Manutenibilità | ? | ? |
| Rischio bug | ? | ? |

### Raccomandazione
"Usa Versione A quando: ..."
"Usa Versione B quando: ..."`
      }
    ]
  },
  {
    id: "ottimizzazione-performance",
    number: 45,
    title: "Prompt di performance",
    description: `**Perché questa tecnica:**
"Premature optimization is the root of all evil" (Donald Knuth), ma ignorare problemi di performance reali è altrettanto dannoso. La chiave è ottimizzare solo quando hai misurato che qualcosa è effettivamente lento, non quando "sembra" lento. Questa tecnica serve quando hai dati concreti (profiling, metriche, lamentele utenti) che indicano un problema di performance, e vuoi risolverlo senza introdurre complessità inutile.

**Come funziona:**
L'AI analizza il codice cercando pattern notoriamente inefficienti: loop che iterano più volte sugli stessi dati, chiamate ripetute che potrebbero essere cache-ate, allocazioni di memoria in loop caldi, algoritmi con complessità alta quando ne esistono di migliori, query N+1 verso database o API. Per ogni collo di bottiglia identificato, propone un'ottimizzazione specifica con stima del miglioramento atteso e del costo di implementazione.

**Quando usarla:**
Usa questa tecnica SOLO quando hai evidenze concrete di lentezza: tempi di risposta misurati, profiling che indica dove va il tempo, utenti che si lamentano. Mai ottimizzare "a sensazione" o perché "potrebbe essere lento". Le metriche guidano le priorità: un'operazione che richiede 5 secondi ed è eseguita 1000 volte al giorno è più importante di una che richiede 1 minuto ma è eseguita una volta al mese.

**Errore comune:**
L'errore classico è micro-ottimizzare dettagli irrilevanti (usare i vs i++ nel loop, StringBuilder vs concatenazione per 3 stringhe) mentre i veri colli di bottiglia (query database inefficienti, chiamate di rete duplicate) restano ignorati. Un altro errore è ottimizzare senza misurare prima e dopo: come fai a sapere se ha funzionato?`,
    icon: Zap,
    prompts: [
      {
        label: "Analisi e ottimizzazione performance",
        text: `## Ottimizzazione delle Performance

### Codice da ottimizzare
\`\`\`
[incolla il codice]
\`\`\`

### Contesto operativo
- Volume dati tipico: [es. 1000 elementi, 10MB, 100 richieste/sec]
- Vincoli: [memoria limitata? latenza critica? CPU-bound?]
- Misurazioni attuali: [se disponibili]

### Analisi richiesta

**Fase 1: Identificazione colli di bottiglia**
Per ogni punto critico:
| Punto | Problema | Impatto stimato | Priorità |
|-------|----------|-----------------|----------|
| ? | ? | ? | ? |

**Fase 2: Ottimizzazioni proposte**
Solo per problemi ad alto impatto:
1. [Ottimizzazione]: costo implementazione vs beneficio atteso
2. [Ottimizzazione]: ...

### Tecniche da considerare
- [ ] Memoization/caching
- [ ] Early exit da loop
- [ ] Lazy evaluation
- [ ] Batch processing
- [ ] Strutture dati più efficienti
- [ ] Algoritmi con complessità inferiore

### Output
1. Codice ottimizzato
2. Stima miglioramento per ogni modifica
3. Trade-off introdotti (se presenti)

### Regola d'oro
"Ottimizza solo ciò che hai misurato come lento. Non toccare il resto."`
      }
    ]
  },
  {
    id: "scalabilita",
    number: 46,
    title: "Prompt di scalabilità",
    description: `**Perché questa tecnica:**
Il codice che funziona perfettamente con 100 utenti potrebbe crollare con 10.000. La scalabilità è un requisito non funzionale spesso ignorato durante lo sviluppo iniziale, ma diventa critico quando l'applicazione cresce. Questa tecnica ti permette di identificare preventivamente i punti di rottura e di preparare il codice per volumi maggiori prima che diventino un problema in produzione.

**Come funziona:**
Definisci lo scenario attuale (volume dati, utenti concorrenti, frequenza operazioni) e lo scenario target (tipicamente 10x o 100x). L'AI analizza il codice cercando tutto ciò che non scala linearmente: strutture dati che degradano con dimensione (liste dove servirebbero hash map), operazioni O(n²) nascoste, risorse che si esauriscono (connessioni database, memoria), single point of failure, stato condiviso che crea contention.

**Quando usarla:**
Applica questa tecnica quando prevedi crescita significativa, quando il sistema inizia a mostrare segni di stress sotto carico (timeout, rallentamenti), prima di campagne marketing o lanci che porteranno traffico, quando passi da MVP a prodotto serio, o quando ricevi i primi warning dai sistemi di monitoring.

**Errore comune:**
L'errore opposto è over-engineering per scale che non raggiungerai mai: costruire infrastruttura per milioni di utenti quando ne hai 100 è spreco di tempo e complessità. La regola pratica è: ottimizza per 10x della scala attuale, non per 1000x. L'altro errore è concentrarsi solo su un aspetto (es. database) ignorando altri colli di bottiglia (es. chiamate API esterne, file system).`,
    icon: TrendingUp,
    prompts: [
      {
        label: "Analisi e miglioramento scalabilità",
        text: `## Analisi di Scalabilità

### Codice attuale
\`\`\`
[incolla il codice]
\`\`\`

### Scenario attuale
- Volume dati: [attuale]
- Utenti concorrenti: [attuale]
- Frequenza operazioni: [attuale]

### Scenario target (10x)
- Volume dati: [target]
- Utenti concorrenti: [target]  
- Frequenza operazioni: [target]

### Analisi richiesta

**Punti di rottura**
Identifica dove il codice inizierà a fallire:
| Componente | Limite attuale | Comportamento a 10x | Criticità |
|------------|----------------|---------------------|-----------|
| ? | ? | ? | ? |

**Colli di bottiglia**
1. [Bottleneck]: perché non scala
2. [Bottleneck]: ...

### Modifiche per scalabilità
Per ogni modifica:
- Cosa cambia
- Perché aiuta a scalare
- Costo di implementazione
- Trade-off introdotti

### Output
1. Codice adattato per 10x
2. Architettura suggerita per 100x
3. Metriche da monitorare per prevenire problemi`
      }
    ]
  },
  {
    id: "standardizzazione-stile",
    number: 47,
    title: "Prompt di standardizzazione dello stile",
    description: `**Perché questa tecnica:**
Quando più persone scrivono codice nello stesso progetto, inevitabilmente emergono stili diversi: qualcuno usa camelCase, qualcuno snake_case; qualcuno preferisce arrow functions, qualcuno function tradizionali; qualcuno mette spazi ovunque, qualcuno li evita. Questa inconsistenza aumenta il carico cognitivo: ogni volta che passi a una porzione di codice con stile diverso, devi "cambiare marcia" mentalmente. La standardizzazione elimina questo attrito.

**Come funziona:**
Definisci esplicitamente le convenzioni target per ogni aspetto dello stile: naming (camelCase, snake_case, PascalCase), formattazione (indentazione, lunghezza righe, virgole finali), struttura (ordine import, ordine membri classe), e preferenze sintattiche (stringhe singole vs doppie, arrow vs function). L'AI applica queste convenzioni uniformemente a tutto il codice, senza modificare la logica.

**Quando usarla:**
Applica questa tecnica quando integri codice da fonti diverse (merge di team, librerie esterne adattate), dopo code review che evidenziano inconsistenze stilistiche, quando adotti nuove convenzioni a livello di team o progetto, prima di condividere codice pubblicamente (open source, documentazione), o quando il linter segnala troppi warning stilistici da gestire manualmente.

**Errore comune:**
L'errore principale è standardizzare prima di avere convenzioni chiare e condivise: senza una guida di stile documentata, ognuno applicherà la propria idea di "stile corretto". Un altro errore è applicare standard diversi in parti diverse del progetto (es. frontend vs backend) quando non c'è una ragione tecnica per farlo.`,
    icon: Palette,
    prompts: [
      {
        label: "Uniformare stile e convenzioni",
        text: `## Standardizzazione dello Stile

### Codice da uniformare
\`\`\`
[incolla il codice con stili misti]
\`\`\`

### Convenzioni da applicare

**Naming**
- Variabili: [camelCase/snake_case]
- Funzioni: [camelCase/snake_case]
- Classi: [PascalCase]
- Costanti: [SCREAMING_SNAKE_CASE]
- File: [kebab-case/camelCase]

**Formattazione**
- Indentazione: [spazi/tab, numero]
- Lunghezza riga max: [80/100/120]
- Virgole finali: [sì/no]
- Punto e virgola: [sempre/mai/quando necessario]

**Struttura**
- Ordine import: [built-in, esterni, interni]
- Ordine membri classe: [proprietà, costruttore, metodi pubblici, privati]
- Spaziatura tra blocchi: [linee vuote]

**Stile codice**
- Stringhe: [singole/doppie/template]
- Confronti: [=== sempre / == quando appropriato]
- Arrow functions: [sempre / solo callback]

### Output richiesto
1. Codice uniformato
2. Lista delle modifiche per categoria
3. Conferma: "Nessuna modifica alla logica"`
      }
    ]
  },
  {
    id: "robustezza",
    number: 48,
    title: "Prompt di robustezza",
    description: `**Perché questa tecnica:**
Il codice robusto non si limita a funzionare quando tutto va bene: gestisce gracefully quando le cose vanno male. Input non validi, risorse non disponibili, timeout di rete, dati corrotti, utenti che fanno cose inaspettate. In produzione, "tutto va bene" è l'eccezione, non la regola. Il codice robusto anticipa i problemi, fallisce in modo controllato, fornisce messaggi utili, e permette recovery quando possibile.

**Come funziona:**
L'AI analizza ogni punto dove il codice può fallire e aggiunge gestione appropriata. Per input: validazione di tipi, range, formati, valori null/undefined. Per risorse esterne: timeout, retry con backoff, circuit breaker. Per errori: catch specifici (non generici), logging utile per debug, messaggi user-friendly. Per stato: invarianti verificate, transazioni atomiche, cleanup in caso di fallimento.

**Quando usarla:**
Applica questa tecnica prima di andare in produzione (il codice "funzionante" in sviluppo spesso non è abbastanza robusto), quando il codice viene usato in contesti meno controllati (input da utenti, API pubbliche), quando i bug report indicano crash su edge case, o quando lavori su parti critiche dove un fallimento ha conseguenze serie.

**Errore comune:**
Un errore comune è gestire troppi casi impossibili, appesantendo il codice con controlli che non scatteranno mai (defensive programming estremo). L'altro estremo è fidarsi troppo dell'input e dell'ambiente, assumendo che tutto sia sempre valido. Il bilanciamento corretto dipende dal contesto: codice interno può assumere di più, API pubbliche devono validare tutto.`,
    icon: Shield,
    prompts: [
      {
        label: "Analisi e miglioramento robustezza",
        text: `## Miglioramento della Robustezza

### Codice da rafforzare
\`\`\`
[incolla il codice]
\`\`\`

### Contesto di esecuzione
- Input proviene da: [utente/API esterna/database/file]
- Ambiente: [sviluppo/produzione]
- Tolleranza ai crash: [bassa/media/alta]

### Analisi vulnerabilità

**Punti di potenziale fallimento**
| Punto | Tipo di errore | Probabilità | Impatto |
|-------|----------------|-------------|---------|
| ? | ? | ? | ? |

### Difese da implementare

**Input validation**
- [ ] Verifica tipi
- [ ] Verifica range/limiti
- [ ] Sanitizzazione

**Error handling**
- [ ] Try-catch appropriati
- [ ] Errori specifici (non generici)
- [ ] Logging utile per debug

**Fallback**
- [ ] Valori default sensati
- [ ] Graceful degradation
- [ ] Recovery automatico dove possibile

### Output richiesto
1. Codice con robustezza migliorata
2. Per ogni modifica: cosa può andare storto e come viene gestito
3. Test case per verificare la robustezza`
      }
    ]
  },
  {
    id: "refactoring-incrementale",
    number: 49,
    title: "Prompt di refactoring incrementale",
    description: `**Perché questa tecnica:**
I grandi refactoring sono pericolosi: cambiano troppo codice in una volta, rendendo difficile identificare cosa ha causato eventuali problemi, impossibili da fare merge con il lavoro di altri, e rischiosi da revertire perché coinvolgono troppe parti. Il refactoring incrementale divide il lavoro in piccoli passi, ognuno sicuro, testabile e reversibile indipendentemente. È più lento? No, perché riduce il rischio di dover ricominciare da zero.

**Come funziona:**
Invece di proporre una riscrittura completa, l'AI divide il refactoring in una sequenza di passi discreti. Ogni passo deve essere completabile in un tempo ragionevole (idealmente < 30 minuti), lasciare il codice in uno stato funzionante (tutti i test passano), essere testabile indipendentemente, e essere facilmente reversibile se qualcosa va storto. Tra un passo e l'altro puoi fare commit, chiedere review, o decidere di fermarti.

**Quando usarla:**
Questa dovrebbe essere la tecnica DEFAULT per qualsiasi refactoring non banale. È particolarmente importante quando lavori su codice critico che non può rompersi, quando altri stanno lavorando sullo stesso codebase, quando il refactoring è grande e non sai quanto tempo richiederà, o quando vuoi poter interrompere e riprendere in seguito.

**Errore comune:**
L'errore è sottovalutare i "piccoli" cambiamenti: un passo che "cambia solo una cosa" può avere effetti a cascata inaspettati. Ogni passo deve essere seguito da verifica (test, review rapida). Un altro errore è pianificare troppi passi in anticipo: spesso la sequenza ottimale emerge mentre procedi, non prima di iniziare.`,
    icon: Footprints,
    prompts: [
      {
        label: "Piano di refactoring incrementale",
        text: `## Refactoring Incrementale

### Codice attuale
\`\`\`
[incolla il codice]
\`\`\`

### Obiettivo finale
[Descrivi cosa vuoi ottenere]

### Vincolo fondamentale
Ogni passo deve:
- Essere completabile in < 30 minuti
- Lasciare il codice funzionante
- Essere testabile indipendentemente
- Essere reversibile facilmente

### Piano proposto

**Passo 1: [Nome descrittivo]**
- Cosa cambia: ...
- Rischio: basso/medio/alto
- Test da eseguire: ...
- Rollback: come annullare

**Passo 2: [Nome descrittivo]**
- Cosa cambia: ...
- Dipende da: Passo 1
- Rischio: ...
- Test da eseguire: ...

**[Continua per ogni passo]**

### Checkpoint
Dopo ogni N passi, verifica:
- [ ] Tutti i test passano
- [ ] Nessuna regressione
- [ ] Il codice compila/funziona
- [ ] I colleghi possono fare review

### Output
1. Lista ordinata dei passi
2. Per ogni passo: codice modificato
3. Stima tempo totale
4. Punti di "non ritorno" (dove non conviene tornare indietro)`
      }
    ]
  },
  {
    id: "qualita-complessiva",
    number: 50,
    title: "Prompt di qualità complessiva",
    description: `**Perché questa tecnica:**
Prima di migliorare devi sapere dove sei. Questa tecnica fornisce una fotografia oggettiva dello stato del codice, valutando multiple dimensioni di qualità e identificando i problemi in ordine di priorità. È come un check-up medico per il codice: non risolve i problemi, ma ti dice quali sono e quanto sono gravi, permettendoti di pianificare gli interventi in modo informato.

**Come funziona:**
L'AI analizza il codice su cinque dimensioni fondamentali: leggibilità (quanto è facile capire cosa fa), manutenibilità (quanto è facile modificarlo), robustezza (quanto gestisce bene gli errori), performance (quanto è efficiente), e testabilità (quanto è facile testarlo). Per ogni dimensione assegna un voto motivato e identifica il problema principale. Poi ordina i problemi per priorità, considerando sia la gravità che la facilità di risoluzione.

**Quando usarla:**
Esegui questa valutazione prima di iniziare un ciclo di refactoring (per decidere su cosa concentrarti), durante audit periodici del codebase (per monitorare l'evoluzione della qualità), quando erediti codice da altri (per capire cosa ti aspetta), quando devi stimare il debito tecnico, o quando devi convincere stakeholder che serve tempo per migliorare la qualità.

**Errore comune:**
L'errore è valutare senza criteri oggettivi: "questo codice è brutto" non è azionabile. Servono metriche specifiche e confrontabili. Un altro errore è dare peso uguale a tutti i problemi: un bug di sicurezza è più urgente di una variabile mal nominata. La prioritizzazione deve considerare impatto (quanto è grave se non risolto) e effort (quanto costa risolverlo).`,
    icon: Award,
    prompts: [
      {
        label: "Valutazione qualità completa",
        text: `## Valutazione della Qualità Complessiva

### Codice da valutare
\`\`\`
[incolla il codice]
\`\`\`

### Dimensioni di analisi

**1. Leggibilità** (1-10)
- Naming chiaro?
- Struttura comprensibile?
- Commenti utili (non rumore)?

**2. Manutenibilità** (1-10)
- Facile da modificare?
- Basso accoppiamento?
- Alta coesione?

**3. Robustezza** (1-10)
- Gestione errori adeguata?
- Input validation?
- Edge case coperti?

**4. Performance** (1-10)
- Algoritmi efficienti?
- Nessuno spreco evidente?
- Scalabile?

**5. Testabilità** (1-10)
- Funzioni pure?
- Dipendenze iniettabili?
- Effetti collaterali isolati?

### Report finale

| Dimensione | Voto | Problema principale |
|------------|------|---------------------|
| Leggibilità | ?/10 | ? |
| Manutenibilità | ?/10 | ? |
| Robustezza | ?/10 | ? |
| Performance | ?/10 | ? |
| Testabilità | ?/10 | ? |
| **MEDIA** | ?/10 | |

### Problemi in ordine di priorità
1. [Critico]: ... (da risolvere subito)
2. [Alto]: ... (da pianificare)
3. [Medio]: ... (quando c'è tempo)
4. [Basso]: ... (nice to have)

### Raccomandazione
"Il debito tecnico principale è... La prima azione da intraprendere è..."`
      }
    ]
  }
];
