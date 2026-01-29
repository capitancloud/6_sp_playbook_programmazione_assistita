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
Ogni refactoring deve avere un solo obiettivo chiaro. Se ne fai dieci insieme, non sai cosa ha migliorato o peggiorato cosa. La focalizzazione permette di misurare l'impatto.

**Come funziona:**
Dichiari esplicitamente l'unico obiettivo del refactoring (leggibilità, performance, testabilità) e vieti all'AI di modificare altri aspetti del codice.

**Quando usarla:**
Quando vuoi migliorare un aspetto specifico senza rischiare regressioni o effetti collaterali indesiderati.

**Errore comune:**
Fare refactoring "generici" che toccano tutto e non permettono di capire cosa ha funzionato.`,
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
Serve a eliminare if annidati, logica contorta e flussi poco chiari. La complessità ciclomatica alta rende il codice difficile da testare e mantenere.

**Come funziona:**
Chiedi all'AI di identificare i punti di complessità eccessiva e proporre soluzioni che riducano l'annidamento e semplifichino il flusso logico.

**Quando usarla:**
Quando hai funzioni con molti livelli di indentazione, switch giganti, o condizioni complesse difficili da seguire.

**Errore comune:**
Semplificare troppo sacrificando la chiarezza dell'intento originale.`,
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
Duplice logica = doppia manutenzione. Ogni duplicazione è un bug in attesa di manifestarsi quando aggiorni solo una delle copie.

**Come funziona:**
L'AI analizza il codice cercando pattern ripetuti (esatti o simili) e propone strategie di centralizzazione: funzioni comuni, classi base, utility condivise.

**Quando usarla:**
Quando noti che stai copiando-incollando codice, o quando una modifica richiede cambiamenti in più punti.

**Errore comune:**
Creare astrazioni premature per codice che sembra simile ma ha responsabilità diverse.`,
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
Serve per adattare il codice a uno stile o standard aziendale. Ogni paradigma ha vantaggi specifici e contesti in cui eccelle.

**Come funziona:**
Specifichi lo stile di partenza e quello di arrivo, l'AI converte il codice mantenendo esattamente lo stesso comportamento.

**Quando usarla:**
Quando integri codice legacy in un progetto con convenzioni diverse, o quando un paradigma è più adatto al problema.

**Errore comune:**
Forzare un paradigma dove non ha senso, o perdere funzionalità durante la conversione.`,
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
I nomi sbagliati rendono il codice più difficile del necessario. Un buon nome elimina la necessità di commenti e riduce il carico cognitivo.

**Come funziona:**
L'AI analizza ogni nome nel codice e propone alternative che esprimano meglio l'intento, seguendo convenzioni di naming professionali.

**Quando usarla:**
Quando trovi variabili come "data", "temp", "x", "res", o funzioni con nomi vaghi come "process", "handle", "doStuff".

**Errore comune:**
Nomi troppo lunghi che diventano illeggibili, o nomi che descrivono l'implementazione invece del concetto.`,
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
Codice non usato = rumore + rischio. Ogni riga inutilizzata è un costo di manutenzione e una potenziale fonte di confusione.

**Come funziona:**
L'AI analizza il codice cercando funzioni mai chiamate, variabili mai lette, import inutilizzati, condizioni sempre false/vere.

**Quando usarla:**
Durante la manutenzione periodica, dopo aver rimosso funzionalità, o quando il codebase sembra "pesante".

**Errore comune:**
Rimuovere codice che sembra morto ma è usato dinamicamente (reflection, lazy loading, callback esterni).`,
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
Una funzione deve fare una cosa sola. Funzioni multi-scopo sono difficili da testare, riusare e comprendere.

**Come funziona:**
L'AI analizza ogni funzione identificando le diverse responsabilità, poi propone una separazione in unità coerenti e indipendenti.

**Quando usarla:**
Quando una funzione è difficile da nominare (segno che fa troppe cose), o quando devi testare solo una parte del suo comportamento.

**Errore comune:**
Separare troppo creando funzioni banali di 2 righe che frammentano la logica.`,
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
Ogni scelta ha un costo. Qui costringi l'AI a ragionare sui compromessi invece di proporre sempre la "soluzione migliore" senza contesto.

**Come funziona:**
Chiedi esplicitamente due versioni del codice (es. una semplice, una performante) con analisi dei pro/contro di ciascuna.

**Quando usarla:**
Quando devi prendere decisioni architetturali, o quando sospetti che l'AI stia over-engineering o under-engineering.

**Errore comune:**
Scegliere sempre la versione "avanzata" senza considerare il costo di complessità.`,
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
Serve quando il codice funziona ma è lento. L'ottimizzazione prematura è male, ma ignorare problemi di performance reali è peggio.

**Come funziona:**
L'AI analizza il codice cercando colli di bottiglia evidenti (loop inefficienti, chiamate ripetute, allocazioni inutili) e propone ottimizzazioni mirate.

**Quando usarla:**
Quando hai misurato che qualcosa è lento (non quando "sembra" lento). Mai ottimizzare senza dati.

**Errore comune:**
Ottimizzare micro-dettagli irrilevanti ignorando i veri colli di bottiglia.`,
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
Pensato per codice che oggi funziona, ma domani potrebbe non reggere. La scalabilità è un requisito non funzionale spesso ignorato.

**Come funziona:**
Chiedi all'AI di simulare cosa succede con volumi 10x o 100x superiori, e di proporre modifiche preventive.

**Quando usarla:**
Quando prevedi crescita, o quando il sistema inizia a mostrare segni di stress sotto carico.

**Errore comune:**
Over-engineering per scale che non raggiungerai mai, o ignorare limiti evidenti.`,
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
Utile per allineare codice scritto da più persone. Lo stile inconsistente aumenta il carico cognitivo e causa errori.

**Come funziona:**
Definisci le convenzioni target e l'AI uniforma tutto il codice a quello standard, senza modificare la logica.

**Quando usarla:**
Quando integri codice da fonti diverse, dopo code review che evidenziano inconsistenze, o quando adotti nuove convenzioni.

**Errore comune:**
Standardizzare prima di avere convenzioni chiare e condivise.`,
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
Qui l'obiettivo è rendere il codice più resistente agli errori. Il codice robusto gestisce l'imprevisto senza crashare.

**Come funziona:**
L'AI analizza ogni punto dove il codice può fallire (input non validi, risorse mancanti, timeout) e aggiunge gestione appropriata.

**Quando usarla:**
Prima del deploy in produzione, o quando il codice viene usato in contesti meno controllati.

**Errore comune:**
Gestire troppi casi impossibili appesantendo il codice, o fidarsi troppo dell'input.`,
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
Evita i grandi refactor distruttivi. I refactor incrementali sono più sicuri, più facili da testare e da annullare.

**Come funziona:**
Invece di riscrivere tutto, l'AI propone una sequenza di piccoli passi, ognuno verificabile indipendentemente.

**Quando usarla:**
Sempre, quando possibile. Preferisci 10 piccoli refactor a 1 grande riscrittura.

**Errore comune:**
Sottovalutare i "piccoli" cambiamenti che in realtà toccano troppo codice.`,
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
Una valutazione onesta dello stato del codice. Prima di migliorare devi sapere dove sei. Questa tecnica fornisce una fotografia oggettiva.

**Come funziona:**
L'AI analizza il codice su multiple dimensioni (leggibilità, manutenibilità, performance, sicurezza, testabilità) e produce un report prioritizzato.

**Quando usarla:**
Prima di iniziare un ciclo di refactoring, durante audit periodici, o quando erediti codice da altri.

**Errore comune:**
Valutare senza criteri oggettivi, o dare peso uguale a problemi di gravità diversa.`,
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
