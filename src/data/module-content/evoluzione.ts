import { 
  LineChart, 
  Repeat, 
  AlertCircle, 
  MessageSquareText, 
  Layout, 
  BookMarked, 
  Trash, 
  Sparkles, 
  FileCheck, 
  RefreshCw,
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

export const evoluzioneSteps: Step[] = [
  {
    id: "analisi-sessioni",
    title: "1. Analisi sessioni",
    icon: LineChart,
    description: "Dopo alcune sessioni di lavoro, fermati ad analizzare non il codice prodotto, ma come hai lavorato. Questo è il meta-livello che distingue chi migliora da chi ripete gli stessi errori con sintassi diversa.\n\nL'analisi delle sessioni rivela pattern invisibili durante il lavoro: dove perdi tempo sistematicamente, quando l'AI ti aiuta davvero vs quando ti confonde, quali tipi di richieste producono risultati migliori.\n\nNon serve un'analisi elaborata: bastano 5 righe di note oneste dopo ogni sessione significativa. Nel tempo, queste note rivelano pattern che nessuna singola osservazione potrebbe mostrare.",
    why: "Senza analisi del processo, migliori solo il prodotto — e nemmeno quello in modo sistematico. Ogni sessione è un esperimento, ma se non raccogli i dati, non impari nulla.\n\nIl codice cambia, i progetti cambiano, ma i tuoi pattern di lavoro restano sorprendentemente stabili. Se perdi tempo in revisioni infinite oggi, lo farai anche domani — a meno che non te ne accorga esplicitamente.\n\nL'analisi trasforma l'esperienza in apprendimento. Senza di essa, hai solo anzianità: tanti anni che sono in realtà lo stesso anno ripetuto.",
    implementation: [
      "Dopo alcune sessioni, fermati ad analizzare COME hai lavorato, non il codice",
      "Domanda chiave: dove ho perso tempo inutilmente?",
      "Domanda chiave: quando l'AI è stata davvero utile?",
      "Domanda chiave: quando l'AI mi ha confuso o rallentato?",
      "Basta una nota di 5 righe — non serve un report elaborato",
      "Cerca pattern che si ripetono tra sessioni diverse"
    ],
    codeExample: {
      language: "markdown",
      code: `## Analisi sessione — 2024-01-15

### Tempo speso
- Totale: 3 ore
- Produttivo: ~1.5 ore
- Perso: ~1.5 ore (debugging loop infinito)

### Dove ho perso tempo
- 45 min su un bug che l'AI continuava a "fixare" senza capire
- Avrei dovuto fermarmi e analizzare io dopo il 2° tentativo

### Quando l'AI è stata utile
- Generazione boilerplate iniziale (ottima)
- Suggerimenti per nomi di funzioni (buoni)
- Spiegazione di un pattern che non conoscevo (eccellente)

### Quando l'AI mi ha confuso
- Refactor suggerito che ha rotto dipendenze nascoste
- Troppi approcci alternativi senza criterio di scelta

### Pattern che noto (dopo 5 sessioni)
- Perdo tempo quando accetto troppi suggerimenti senza verificare
- Funziono meglio con prompt specifici che con richieste generiche
- Il mattino sono più critico, il pomeriggio più passivo

### Cosa cambiare
- Massimo 2 tentativi AI per bug, poi debug manuale
- Prompt più specifici, meno "sistema tutto"`
    },
    rule: {
      text: "Se non analizzi il processo, ripeterai gli stessi errori con codice diverso.",
      warning: true
    },
    keyPoints: [
      "Analizza come hai lavorato, non solo cosa hai prodotto",
      "5 righe di note oneste valgono più di un'analisi elaborata mai fatta",
      "I pattern emergono solo confrontando più sessioni",
      "Cerca cosa ripeti sempre — nel bene e nel male",
      "L'esperienza senza riflessione è solo anzianità"
    ],
    commonMistakes: [
      "Analizzare solo il codice, mai il processo",
      "Non prendere note — 'me lo ricordo' (no, non te lo ricordi)",
      "Analisi troppo elaborate che non fai mai",
      "Ignorare i pattern negativi perché 'funziona comunque'",
      "Non confrontare sessioni diverse per trovare pattern"
    ],
    checklist: {
      question: "Stai analizzando il tuo processo di lavoro?",
      title: "Verifica analisi sessioni",
      items: [
        "Ho annotato dove ho perso tempo",
        "Ho identificato quando l'AI è stata utile vs confondente",
        "Ho cercato pattern che si ripetono",
        "Ho scritto cosa cambiare nella prossima sessione",
        "Confronto le note tra sessioni diverse"
      ]
    }
  },
  {
    id: "pattern-efficaci",
    title: "2. Pattern efficaci",
    icon: Repeat,
    description: "Individua cosa funziona sempre per te — non in teoria, ma nella pratica del tuo lavoro quotidiano. Questi sono i tuoi pattern efficaci: certi tipi di prompt, certi cicli di lavoro, certi momenti in cui fermarti.\n\nOgni persona ha un modo diverso di lavorare efficacemente con l'AI. Ciò che funziona per altri potrebbe non funzionare per te. L'unico modo per scoprire i tuoi pattern efficaci è osservare te stesso e annotare cosa produce risultati.\n\nUna volta identificati, questi pattern vanno preservati e riutilizzati sistematicamente. Ripetere ciò che funziona è più intelligente che inventare sempre nuovi approcci.",
    why: "L'improvvisazione costante è inefficiente. Ogni volta che reinventi il tuo approccio, sprechi energia mentale che potresti usare per il problema reale.\n\nI pattern efficaci sono capitale accumulato. Un prompt che funziona bene, un ritmo di lavoro che mantiene la concentrazione, un momento specifico per fare review — questi sono asset che puoi riutilizzare infinitamente.\n\nSenza pattern espliciti, sei in balia dell'umore del momento. Con pattern documentati, hai un sistema che funziona anche quando sei stanco o distratto.",
    implementation: [
      "Osserva cosa funziona SEMPRE per te (non occasionalmente)",
      "Identifica: quali tipi di prompt danno risultati chiari?",
      "Identifica: quali cicli di lavoro mantengono la concentrazione?",
      "Identifica: quando è il momento giusto per fermarti e verificare?",
      "ANNOTA questi pattern — non affidarti alla memoria",
      "RIUTILIZZA sistematicamente — non reinventare ogni volta"
    ],
    codeExample: {
      language: "markdown",
      code: `## I miei pattern efficaci — Libreria personale

### Prompt che funzionano sempre

**Per iniziare un task:**
"Devo implementare [X]. Prima di scrivere codice, dimmi:
1. Quali sono i casi d'uso principali?
2. Quali edge case devo considerare?
3. Quale approccio suggerisci e perché?"

**Per debugging:**
"Questo comportamento: [descrizione].
Questo è il codice: [codice].
Ipotizzo che il problema sia [ipotesi].
Confermi o hai un'ipotesi diversa?"

**Per refactor:**
"Migliora SOLO [aspetto specifico] di questo codice.
NON cambiare il comportamento.
NON toccare [parte da preservare]."

---

### Cicli di lavoro efficaci

**Ciclo breve (30 min):**
1. Obiettivo scritto (2 min)
2. Implementazione con AI (20 min)
3. Review manuale (5 min)
4. Commit o scarta (3 min)

**Regola dei 2 tentativi:**
Se l'AI non risolve in 2 tentativi → debug manuale

---

### Momenti di stop

- Dopo ogni merge: rilettura veloce
- Quando non capisco l'output: STOP, non incollare
- Quando ho dubbi: scrivere il dubbio prima di continuare
- Fine giornata: chiusura esplicita sessione`
    },
    rule: {
      text: "Ripetere ciò che funziona è più intelligente che inventare sempre.",
      warning: false
    },
    keyPoints: [
      "Ogni persona ha pattern efficaci diversi — trova i tuoi",
      "Annota i pattern, non affidarti alla memoria",
      "Riutilizza sistematicamente ciò che funziona",
      "I pattern riducono l'energia mentale spesa su 'come lavorare'",
      "Efficienza reale > improvvisazione creativa"
    ],
    commonMistakes: [
      "Reinventare l'approccio ogni volta — spreco di energia",
      "Non annotare cosa funziona — perdi i pattern efficaci",
      "Copiare i pattern di altri senza verificare che funzionino per te",
      "Troppi pattern — meglio pochi ma usati sempre",
      "Pattern rigidi che non si adattano al contesto"
    ],
    checklist: {
      question: "Hai identificato e documentato i tuoi pattern efficaci?",
      title: "Verifica pattern personali",
      items: [
        "Ho identificato prompt che funzionano sempre per me",
        "Ho identificato il mio ciclo di lavoro ottimale",
        "Ho annotato i momenti giusti per fermarmi",
        "Riutilizzo questi pattern invece di improvvisare",
        "Rivedo e aggiorno i pattern periodicamente"
      ]
    }
  },
  {
    id: "errori-ricorrenti",
    title: "3. Errori ricorrenti",
    icon: AlertCircle,
    description: "Osserva gli errori che commetti spesso: dove perdi chiarezza, quando accetti codice mediocre, in quali situazioni ti fidi troppo dell'AI. Questi errori ricorrenti sono prevedibili — e quindi prevenibili.\n\nRendere visibili i propri errori prima di iniziare a lavorare cambia il comportamento. Scrivere 'Tendo a fidarmi troppo del primo output' crea una consapevolezza che influenza le decisioni in tempo reale.\n\nUn errore visto in anticipo perde metà del suo potere. Non perché sparisca, ma perché lo riconosci quando sta per accadere.",
    why: "Gli errori ricorrenti sono i più costosi perché li paghi ripetutamente. Ogni volta che cadi nello stesso pattern negativo, perdi tempo e accumuli frustrazione.\n\nLa consapevolezza esplicita è l'antidoto. Un errore che resta implicito ('tendo a essere frettoloso') ha tutto il potere di un automatismo. Un errore scritto e visibile ('ATTENZIONE: tendo a non rileggere il codice AI') diventa un checkpoint consapevole.\n\nNon si tratta di eliminare gli errori — si tratta di riconoscerli prima che accadano.",
    implementation: [
      "Osserva: cosa sbagli SPESSO (non occasionalmente)?",
      "Osserva: dove perdi chiarezza e controllo?",
      "Osserva: quando accetti codice mediocre per fretta?",
      "Osserva: quando ti fidi troppo dell'AI?",
      "SCRIVI questi errori e rendili visibili PRIMA di iniziare",
      "Esempio: 'Tendo a fidarmi troppo del primo output'"
    ],
    codeExample: {
      language: "markdown",
      code: `## I miei errori ricorrenti — Checklist pre-sessione

### ⚠️ Errori che commetto spesso

**1. Fretta nell'accettare output AI**
- Sintomo: incollo senza rileggere
- Trigger: quando sono "nel flusso"
- Contromisura: regola dei 30 secondi (leggo sempre prima di incollare)

**2. Debug infinito con AI**
- Sintomo: 5+ tentativi senza capire il problema
- Trigger: errori che non capisco
- Contromisura: massimo 2 tentativi, poi debug manuale

**3. Scope creep**
- Sintomo: "già che ci sono aggiungo anche..."
- Trigger: quando il codice funziona e mi sento produttivo
- Contromisura: obiettivo scritto visibile, controllare prima di aggiungere

**4. Refactor senza obiettivo**
- Sintomo: "miglioro un po' questo..."
- Trigger: codice che "non mi piace" senza motivo specifico
- Contromisura: scrivere cosa miglioro e cosa deve restare uguale

**5. Sessioni troppo lunghe**
- Sintomo: qualità in calo dopo 2 ore
- Trigger: deadline o "ancora 5 minuti"
- Contromisura: timer, pause obbligate, chiusura esplicita

---

### Prima di ogni sessione, rileggo questa lista.
### "Oggi quali di questi errori potrei commettere?"`
    },
    rule: {
      text: "Un errore visto in anticipo perde metà del suo potere.",
      warning: false
    },
    keyPoints: [
      "Gli errori ricorrenti sono prevedibili — quindi prevenibili",
      "Scrivere l'errore crea consapevolezza che influenza le decisioni",
      "Rendi visibili i tuoi errori PRIMA di iniziare a lavorare",
      "Non eliminare gli errori — riconoscili quando stanno per accadere",
      "Ogni errore ha trigger specifici: identificali"
    ],
    commonMistakes: [
      "Pensare che 'questa volta sarà diverso' — non lo sarà",
      "Non scrivere gli errori — restano impliciti e potenti",
      "Lista troppo lunga — meglio 3-5 errori principali",
      "Non identificare i trigger — sai cosa ma non quando",
      "Non definire contromisure concrete"
    ],
    checklist: {
      question: "Conosci e monitori i tuoi errori ricorrenti?",
      title: "Verifica consapevolezza errori",
      items: [
        "Ho identificato i miei 3-5 errori più frequenti",
        "Conosco i trigger che li attivano",
        "Ho definito contromisure concrete",
        "Rileggo la lista prima delle sessioni",
        "Aggiorno la lista quando scopro nuovi pattern"
      ]
    }
  },
  {
    id: "prompt-migliori",
    title: "4. Prompt migliori",
    icon: MessageSquareText,
    description: "Non accumulare prompt a caso. Migliora sistematicamente quelli che ti hanno dato risultati chiari, hanno ridotto le iterazioni, e hanno mantenuto il controllo sul codice prodotto.\n\nUna piccola libreria personale di prompt efficaci vale più di mille prompt generici. Prompt di analisi, prompt di refactor, prompt per chiedere alternative — ognuno affinato dalla tua esperienza.\n\nIl tempo investito nel migliorare i prompt si ripaga in ogni sessione futura. Un prompt migliore significa meno rumore, meno iterazioni, più qualità al primo tentativo.",
    why: "I prompt sono l'interfaccia tra te e l'AI. Un prompt vago produce output vaghi. Un prompt preciso produce output utilizzabili.\n\nLa differenza tra un prompt mediocre e uno eccellente può essere di 10 minuti per singola richiesta. Moltiplicato per decine di richieste al giorno, il risparmio è enorme.\n\nI prompt migliori non sono quelli più lunghi o più elaborati — sono quelli che hanno dimostrato di funzionare nel tuo contesto specifico. Per questo serve una libreria personale, non una collezione copiata da altri.",
    implementation: [
      "Non accumulare prompt a caso — seleziona quelli che funzionano",
      "Identifica prompt che: danno risultati chiari al primo tentativo",
      "Identifica prompt che: riducono il numero di iterazioni",
      "Identifica prompt che: mantengono il controllo sul codice",
      "Crea una piccola libreria personale organizzata per tipo",
      "Categorie utili: analisi, refactor, debug, alternative, spiegazioni"
    ],
    codeExample: {
      language: "markdown",
      code: `## La mia libreria prompt — Versione 2.3

### Prompt di ANALISI (prima di implementare)

**Analisi requisiti:**
"Prima di implementare, analizza questi requisiti:
[requisiti]

Dimmi:
1. Cosa è chiaro
2. Cosa è ambiguo
3. Quali domande dovrei fare prima di procedere"

**Analisi codice esistente:**
"Analizza questo codice. Non modificarlo.
[codice]

Dimmi:
1. Cosa fa (in 2-3 frasi)
2. Dipendenze e side effects
3. Punti deboli o potenziali bug"

---

### Prompt di IMPLEMENTAZIONE

**Task specifico:**
"Implementa [funzionalità specifica].
Requisiti:
- [requisito 1]
- [requisito 2]
Vincoli:
- [vincolo tecnico]
- [vincolo di stile]

NON implementare [cosa escludere]."

---

### Prompt di REFACTOR

**Refactor mirato:**
"Migliora SOLO [aspetto specifico] di questo codice.
[codice]

Cosa deve migliorare: [obiettivo]
Cosa deve restare IDENTICO: [vincoli]
Comportamento esterno: invariato"

---

### Prompt di DEBUG

**Debug con ipotesi:**
"Comportamento osservato: [cosa succede]
Comportamento atteso: [cosa dovrebbe succedere]
Codice: [codice rilevante]
La mia ipotesi: [cosa penso sia il problema]

Confermi la mia ipotesi? Se no, quale è la tua?"

---

### Prompt di ALTERNATIVE

**Richiesta alternative:**
"Proponi 3 approcci alternativi per [problema].
Per ognuno:
- Pro
- Contro
- Quando usarlo

Poi dimmi quale consigli per il mio caso e perché."`
    },
    rule: {
      text: "Prompt migliori = meno rumore = più qualità.",
      warning: false
    },
    keyPoints: [
      "Qualità > quantità: meglio 10 prompt eccellenti che 100 mediocri",
      "I migliori prompt sono quelli testati nel TUO contesto",
      "Organizza per tipo: analisi, implementazione, refactor, debug",
      "Migliora iterativamente — ogni versione meglio della precedente",
      "Un buon prompt si ripaga in ogni sessione futura"
    ],
    commonMistakes: [
      "Accumulare prompt senza selezionare quelli efficaci",
      "Copiare prompt da altri senza adattarli al proprio stile",
      "Prompt troppo lunghi e complessi — la semplicità vince",
      "Non versionate i prompt — perdi i miglioramenti",
      "Usare sempre gli stessi prompt senza migliorarli"
    ],
    checklist: {
      question: "Hai una libreria personale di prompt efficaci?",
      title: "Verifica qualità prompt",
      items: [
        "Ho selezionato i prompt che funzionano meglio per me",
        "I prompt sono organizzati per tipo/scopo",
        "Miglioro i prompt basandomi sui risultati",
        "Ho prompt per analisi, implementazione, refactor, debug",
        "Evito prompt vaghi o troppo generici"
      ]
    }
  },
  {
    id: "ambiente",
    title: "5. Ambiente",
    icon: Layout,
    description: "Rivedi periodicamente il tuo ambiente di lavoro: quali tool tieni aperti, quali shortcut usi davvero, quali distrazioni interrompono il flusso. Rimuovi tutto ciò che non usi o che spezza la concentrazione.\n\nCon l'AI, un ambiente rumoroso amplifica gli errori. Più distrazioni hai, meno attenzione dedichi alla review del codice generato. Meno attenzione significa più bug che passano inosservati.\n\nMeno strumenti aperti significa più intenzione in ogni azione. Un ambiente minimalista non è una preferenza estetica — è una strategia per mantenere il controllo.",
    why: "L'ambiente influenza il comportamento più di quanto pensiamo. Tool aperti 'per sicurezza' consumano attenzione. Notifiche interrompono il flusso. Tab accumulate creano rumore visivo.\n\nOgni interruzione ha un costo di context-switching. Tornare al punto dove eri richiede minuti, non secondi. In una sessione di 2 ore, qualche interruzione può costare 30 minuti di lavoro effettivo.\n\nL'ambiente ideale è quello che rimuove le decisioni inutili. Se devi decidere ogni volta quale tool usare, stai sprecando energia decisionale.",
    implementation: [
      "Rivedi periodicamente: quali tool tieni aperti?",
      "Rivedi: quali shortcut usi davvero vs quali ignori?",
      "Identifica: quali distrazioni interrompono il flusso?",
      "RIMUOVI ciò che non usi — non 'potrebbe servire'",
      "RIMUOVI ciò che spezza il flusso — notifiche, tab inutili",
      "Un ambiente minimalista = più controllo"
    ],
    codeExample: {
      language: "markdown",
      code: `## Audit ambiente di lavoro — Trimestrale

### Tool aperti durante le sessioni

**Essenziali (sempre):**
- Editor (VS Code)
- Terminale
- Browser (max 5 tab)
- Chat AI

**Opzionali (solo se servono):**
- Documentazione specifica
- Tool di test
- DB client

**Da chiudere (distrazioni):**
- ❌ Email
- ❌ Slack (o silenziato)
- ❌ Social
- ❌ Tab "da leggere dopo"

---

### Shortcut che uso davvero

**Uso ogni giorno:**
- Cmd+P: apertura file veloce
- Cmd+Shift+F: ricerca globale
- Cmd+D: selezione multipla
- Cmd+/: toggle commento

**Devo imparare:**
- Navigazione tra tab
- Multicursor avanzato

**Non uso mai (rimuovere dalle liste):**
- [shortcut inutili che occupano spazio mentale]

---

### Distrazioni identificate

| Distrazione | Frequenza | Soluzione |
|-------------|-----------|-----------|
| Notifiche email | Alta | Chiudere email durante sessioni |
| Slack | Media | Modalità DND, check ogni 2 ore |
| Tab accumulate | Alta | Regola max 5 tab, bookmark il resto |
| Telefono | Media | In altra stanza o silenzioso |

---

### Ambiente ideale (mia configurazione)

1. Monitor pulito, solo tool essenziali
2. Notifiche disattivate
3. Telefono silenzioso
4. Sessioni da 90 min max
5. Pausa tra sessioni (no scroll, cammina)`
    },
    rule: {
      text: "Meno strumenti, più intenzione.",
      warning: false
    },
    keyPoints: [
      "L'ambiente influenza il comportamento più di quanto pensi",
      "Ogni distrazione ha un costo di context-switching",
      "Rimuovi ciò che non usi — 'potrebbe servire' = non serve",
      "Con l'AI, ambiente rumoroso = più errori non notati",
      "Minimalismo = strategia, non estetica"
    ],
    commonMistakes: [
      "Tenere tool aperti 'per sicurezza' — consumano attenzione",
      "Non disattivare notifiche — interruzioni costose",
      "Tab accumulate — rumore visivo, decisioni inutili",
      "Non fare audit periodici — l'ambiente degenera",
      "Ambiente diverso ogni volta — manca automatismo"
    ],
    checklist: {
      question: "Il tuo ambiente è ottimizzato per il focus?",
      title: "Verifica ambiente lavoro",
      items: [
        "Ho solo tool essenziali aperti durante le sessioni",
        "Notifiche disattivate (email, chat, telefono)",
        "Numero limitato di tab browser",
        "Conosco e uso le shortcut essenziali",
        "Faccio audit periodico e rimuovo il superfluo"
      ]
    }
  },
  {
    id: "playbook-personale",
    title: "6. Playbook personale",
    icon: BookMarked,
    description: "Trasforma questo metodo in regole tue. Non tutto serve a tutti — il valore sta nell'adattare i principi generali al tuo modo di lavorare, ai tuoi progetti, alle tue debolezze specifiche.\n\nScrivi cosa fai sempre, cosa eviti sempre, cosa fai solo in certi contesti. Questo diventa il tuo playbook personale: una guida rapida, un riferimento nelle decisioni, uno standard contro cui misurarti.\n\nUn metodo personalizzato viene usato. Un metodo generico viene letto una volta e dimenticato.",
    why: "I metodi generici falliscono perché non tengono conto del contesto. Ciò che funziona per un progetto enterprise non funziona per un side project. Ciò che funziona per un developer senior non funziona per un junior.\n\nIl playbook personale è l'intersezione tra principi universali e realtà individuale. È il 'cosa faccio io' che hai costruito attraverso l'esperienza e la riflessione.\n\nScrivere il playbook lo rende reale. Finché è 'nella tua testa', cambia continuamente e non puoi migliorarlo sistematicamente.",
    implementation: [
      "Trasforma i principi generali in regole adatte a TE",
      "Non tutto serve a tutti — seleziona ciò che funziona",
      "Scrivi: cosa fai SEMPRE (non negoziabile)",
      "Scrivi: cosa eviti SEMPRE (anti-pattern personali)",
      "Scrivi: cosa fai solo in CERTI CONTESTI (regole condizionali)",
      "Il playbook diventa: guida rapida, riferimento, standard"
    ],
    codeExample: {
      language: "markdown",
      code: `## Il mio Playbook — v1.4

### 🟢 SEMPRE (non negoziabile)

1. **Scrivo l'obiettivo prima di iniziare**
   - Max 2 frasi
   - Deve essere verificabile

2. **Rileggo prima di incollare codice AI**
   - Regola dei 30 secondi minimo
   - Se non capisco → non incollo

3. **Chiudo esplicitamente ogni sessione**
   - Stato: pronto / da migliorare / da scartare
   - Scritto, non solo pensato

4. **Max 2 ore per sessione**
   - Timer visibile
   - Pausa obbligatoria

---

### 🔴 MAI (anti-pattern personali)

1. **Mai "fix" generici all'AI**
   - Sempre: ipotesi + domanda specifica

2. **Mai accettare codice che non capisco**
   - Se non so spiegarlo → non lo uso

3. **Mai refactor senza obiettivo scritto**
   - Cosa migliora + cosa resta uguale

4. **Mai sessioni dopo le 22:00**
   - La qualità crolla, i bug aumentano

---

### 🟡 DIPENDE (regole condizionali)

1. **Progetti nuovi**
   - Più esplorazione, meno rigidità
   - Obiettivi più vaghi accettabili

2. **Bug critici**
   - Salta alcune review
   - Ma: documentare debito dopo

3. **Lavoro in team**
   - Review più formale
   - Documentazione più esplicita

---

### 📊 Metriche personali

- Sessioni produttive: >70% del tempo utile
- Bug post-commit: <1 per settimana
- Tempo su debug AI loops: <15 min per sessione`
    },
    rule: {
      text: "Un metodo personalizzato viene usato, uno generico viene letto.",
      warning: false
    },
    keyPoints: [
      "Adatta i principi generali al TUO contesto specifico",
      "Scrivi il playbook — in testa non è un playbook",
      "SEMPRE / MAI / DIPENDE: tre categorie chiare",
      "Un metodo personalizzato diventa automatico",
      "Versiona e migliora il playbook nel tempo"
    ],
    commonMistakes: [
      "Copiare metodi di altri senza adattarli",
      "Playbook troppo lungo — nessuno legge 20 pagine",
      "Non scrivere — 'ce l'ho in testa' = non esiste",
      "Troppo rigido — serve flessibilità per i contesti",
      "Non aggiornare — il playbook deve evolvere"
    ],
    checklist: {
      question: "Hai un playbook personale scritto?",
      title: "Verifica playbook",
      items: [
        "Ho scritto cosa faccio SEMPRE",
        "Ho scritto cosa evito SEMPRE",
        "Ho regole condizionali per contesti diversi",
        "Il playbook è accessibile rapidamente",
        "Lo aggiorno quando scopro nuovi pattern"
      ]
    }
  },
  {
    id: "riduzione-sprechi",
    title: "7. Riduzione sprechi",
    icon: Trash,
    description: "Identifica le attività che ripeti spesso ma che non aggiungono valore: setup manuali, test ripetitivi, prompt ridondanti. Ogni spreco tolto libera energia mentale per ciò che conta davvero.\n\nGli sprechi si accumulano silenziosamente. Un minuto qui, due minuti là — alla fine della settimana sono ore perse in attività che potevano essere automatizzate o eliminate.\n\nLa riduzione degli sprechi non è ottimizzazione prematura. È igiene del processo. Automatizza ciò che si ripete, elimina ciò che non serve.",
    why: "L'energia mentale è limitata. Ogni decisione, ogni attività ripetitiva, ogni setup manuale consuma parte di quel budget. Quando l'energia finisce, la qualità crolla.\n\nGli sprechi peggiori sono quelli invisibili — così integrati nel flusso che non li noti più. 'Così si fa' diventa una giustificazione per non migliorare.\n\nCon l'AI questo è amplificato: prompt ripetuti, configurazioni manuali, verifiche che potrebbero essere automatiche. Ogni spreco tolto è velocità guadagnata.",
    implementation: [
      "Identifica attività che ripeti spesso (giornalmente o per ogni task)",
      "Chiediti: questa attività aggiunge valore o è solo 'come si fa'?",
      "Esempi di sprechi: setup manuali, test ripetitivi, prompt ridondanti",
      "Per ogni spreco: può essere automatizzato? Può essere eliminato?",
      "Automatizza con script, template, snippet, alias",
      "Elimina ciò che non serve — 'abbiamo sempre fatto così' non è una ragione"
    ],
    codeExample: {
      language: "markdown",
      code: `## Analisi sprechi — Audit mensile

### Attività ripetitive identificate

| Attività | Frequenza | Tempo | Valore? | Azione |
|----------|-----------|-------|---------|--------|
| Setup ambiente progetto | Ogni progetto | 15 min | Basso | Script automatico |
| Scrivere boilerplate | Ogni file | 5 min | Nullo | Template/snippet |
| Prompt descrizione task | Ogni task | 3 min | Medio | Template prompt |
| Test manuali base | Ogni commit | 10 min | Medio | Test automatici |
| Cercare documentazione | Spesso | 5-10 min | Basso | Bookmark organizzati |

---

### Sprechi eliminati questo mese

**1. Setup progetto → Script automatico**
\`\`\`bash
# Prima: 15 minuti di setup manuale
# Dopo: 1 comando
./new-project.sh nome-progetto
\`\`\`
Risparmio: ~2 ore/mese

**2. Prompt ripetuti → Template**
\`\`\`
# Prima: riscrivere ogni volta
# Dopo: alias + personalizzazione
pb-debug [codice]  # prompt debug con template
pb-refactor [file] # prompt refactor con template
\`\`\`
Risparmio: ~1 ora/mese

**3. Test manuali → CI/CD**
Prima: test manuali ogni commit
Dopo: test automatici su push
Risparmio: ~3 ore/mese

---

### Prossimi sprechi da eliminare

1. Documentazione manuale → Generazione automatica
2. Review checklist mentale → Checklist scritta
3. Deploy manuale → Pipeline automatica`
    },
    rule: {
      text: "Ogni spreco tolto libera energia mentale.",
      warning: false
    },
    keyPoints: [
      "Gli sprechi si accumulano silenziosamente — fai audit regolari",
      "Automatizza ciò che si ripete identico",
      "Elimina ciò che non aggiunge valore",
      "'Abbiamo sempre fatto così' non è una ragione valida",
      "L'energia mentale risparmiata va a ciò che conta"
    ],
    commonMistakes: [
      "Non notare gli sprechi — sono diventati 'normali'",
      "Automatizzare prima di capire se serve — a volte basta eliminare",
      "Ottimizzare micro-attività trascurando macro-sprechi",
      "Non misurare il tempo — senza dati non vedi gli sprechi",
      "Automatizzare una volta e non mantenere"
    ],
    checklist: {
      question: "Stai attivamente riducendo gli sprechi?",
      title: "Verifica riduzione sprechi",
      items: [
        "Ho identificato le attività ripetitive",
        "Ho valutato quali aggiungono valore e quali no",
        "Ho automatizzato almeno le più frequenti",
        "Ho eliminato quelle che non servono",
        "Faccio audit periodici per nuovi sprechi"
      ]
    }
  },
  {
    id: "buone-abitudini",
    title: "8. Buone abitudini",
    icon: Sparkles,
    description: "Rendi automatiche le azioni giuste: scrivere l'obiettivo prima di iniziare, chiudere la sessione esplicitamente, rileggere a freddo. Non serve disciplina eroica — serve ripetizione coerente.\n\nLe abitudini battono la motivazione perché non richiedono decisione. Quando qualcosa è automatico, lo fai anche quando sei stanco, distratto, o semplicemente non hai voglia.\n\nIl segreto non è aggiungere mille abitudini insieme. È costruirne una alla volta, fino a che diventa automatica, poi passare alla successiva.",
    why: "La forza di volontà è una risorsa limitata. Ogni decisione consapevole la consuma. Se devi decidere ogni volta se scrivere l'obiettivo, se fare la review, se chiudere la sessione — prima o poi deciderai di no.\n\nLe abitudini bypassano la forza di volontà. Diventano 'cosa fai' invece che 'cosa decidi di fare'. Non c'è negoziazione, non c'è procrastinazione — c'è solo il comportamento automatico.\n\nCostruire buone abitudini è l'investimento con il ROI più alto. Una volta automatiche, producono valore senza richiedere attenzione.",
    implementation: [
      "Identifica le azioni giuste che vuoi rendere automatiche",
      "Esempi: scrivere obiettivo, chiudere sessione, rileggere a freddo",
      "Non serve disciplina eroica — serve ripetizione coerente",
      "Una abitudine alla volta — non aggiungerne 5 insieme",
      "Attacca la nuova abitudine a un trigger esistente",
      "Tollera imperfezione iniziale — la consistenza batte la perfezione"
    ],
    codeExample: {
      language: "markdown",
      code: `## Le mie abitudini di lavoro — Stack attuale

### ✅ Abitudini consolidate (automatiche)

**1. Obiettivo scritto (da 6 mesi)**
- Trigger: apro l'editor
- Azione: scrivo 1-2 frasi prima di qualsiasi codice
- Tempo per consolidare: 3 settimane

**2. Review pre-incolla (da 4 mesi)**
- Trigger: Cmd+V su codice AI
- Azione: 30 secondi di lettura prima
- Tempo per consolidare: 4 settimane

**3. Chiusura sessione (da 3 mesi)**
- Trigger: timer 90 minuti
- Azione: stato + cosa resta + commit/scarta
- Tempo per consolidare: 2 settimane

---

### 🔄 Abitudine in costruzione (corrente)

**Test mentale pre-commit**
- Trigger: prima di git commit
- Azione: "Cosa potrebbe rompere questo codice?"
- Stato: settimana 2/4
- Difficoltà: tende a saltarlo quando ho fretta

---

### 📋 Prossime abitudini (backlog)

1. Pausa fisica ogni 45 minuti
2. Note vocali per idee durante il lavoro
3. Review settimanale del playbook

---

### Strategia di costruzione abitudini

1. **Una alla volta** — max 4 settimane per consolidare
2. **Trigger chiaro** — evento specifico che attiva l'azione
3. **Azione minima** — versione più semplice possibile
4. **Tolleranza** — se salti un giorno, riprendi senza drammi
5. **Tracking** — segna i giorni di successo (streak)`
    },
    rule: {
      text: "Le abitudini battono la motivazione.",
      warning: false
    },
    keyPoints: [
      "Le abitudini non richiedono decisione — si fanno e basta",
      "Una abitudine alla volta — non sovraccaricare",
      "Attacca nuove abitudini a trigger esistenti",
      "Tollera imperfezione — consistenza > perfezione",
      "Le buone abitudini sono l'investimento con ROI più alto"
    ],
    commonMistakes: [
      "Aggiungere troppe abitudini insieme — fallimento garantito",
      "Aspettare la motivazione — non serve, servono trigger",
      "Abbandonare dopo un fallimento — riprendi senza drammi",
      "Abitudini troppo complesse — inizia con la versione minima",
      "Non avere trigger chiari — l'abitudine non si attiva"
    ],
    checklist: {
      question: "Stai costruendo buone abitudini di lavoro?",
      title: "Verifica abitudini",
      items: [
        "Ho identificato le azioni che voglio rendere automatiche",
        "Lavoro su una abitudine alla volta",
        "Ogni abitudine ha un trigger chiaro",
        "Tollero i fallimenti e riprendo",
        "Traccio i progressi (streak, note)"
      ]
    }
  },
  {
    id: "decisioni-documentate",
    title: "9. Decisioni documentate",
    icon: FileCheck,
    description: "Annota il perché delle scelte tecniche: perché questo approccio, perché non quell'altro. Anche in due righe. Questo aiuta il te futuro, riduce i ripensamenti, e rende il codice difendibile.\n\nLe decisioni non documentate vengono rimesse in discussione — da te stesso tra un mese, da un collega, da chiunque guardi il codice. Ogni volta dovrai ricostruire il ragionamento da zero.\n\nUna decisione documentata invece è chiusa. Il ragionamento è preservato. Se qualcuno (incluso tu) vuole cambiarla, deve prima capire perché era stata presa così.",
    why: "Il codice dice cosa hai fatto, ma non perché. Le alternative scartate non lasciano traccia. I vincoli che hanno guidato la scelta scompaiono.\n\nQuando torni sul codice dopo mesi, non ricordi il contesto. 'Perché ho fatto così?' diventa una domanda senza risposta. E senza risposta, sei tentato di cambiare qualcosa che forse funzionava meglio di come pensi.\n\nDocumentare le decisioni preserva il ragionamento. Non serve un documento formale — bastano due righe nel codice o in un file di note. Ma quelle due righe valgono ore di ricostruzione futura.",
    implementation: [
      "Per ogni decisione significativa, annota il PERCHÉ",
      "Scrivi: perché questo approccio è stato scelto",
      "Scrivi: perché le alternative sono state scartate",
      "Non serve un documento formale — bastano 2 righe",
      "Dove: commenti nel codice, ADR, file DECISIONS.md",
      "Questo rende il codice difendibile e riduce i ripensamenti"
    ],
    codeExample: {
      language: "markdown",
      code: `## DECISIONS.md — Registro decisioni tecniche

### 2024-01-15: Scelta libreria di validazione

**Decisione:** Usare Zod invece di Yup

**Perché Zod:**
- Migliore inferenza TypeScript (tipi automatici)
- API più concisa per casi comuni
- Bundle size simile

**Perché NON Yup:**
- Richiede definizione tipi separata
- API più verbosa per il nostro caso d'uso

**Perché NON validazione manuale:**
- Troppe edge case da gestire
- Maggiore rischio di bug

---

### 2024-01-10: Architettura stato globale

**Decisione:** React Context + useReducer (no Redux)

**Perché questa scelta:**
- Complessità stato: media (non serve Redux)
- Team: tutti conoscono Context
- Velocità: setup immediato

**Cosa riconsiderare se:**
- Stato diventa molto complesso
- Serve time-travel debugging
- Performance diventa problema

---

### Commenti inline per decisioni locali

\`\`\`typescript
// Decisione: retry manuale invece di libreria
// Motivo: caso semplice, non vale dipendenza extra
// Riconsiderare se: logica retry diventa più complessa
async function fetchWithRetry(url: string, maxRetries = 3) {
  // ...
}

// Decisione: validazione sincrona qui
// Motivo: UX immediata più importante di validazione server
// Trade-off accettato: doppia validazione (client + server)
function validateForm(data: FormData) {
  // ...
}
\`\`\``
    },
    rule: {
      text: "Una decisione non documentata verrà rimessa in discussione.",
      warning: true
    },
    keyPoints: [
      "Documenta il PERCHÉ, non solo il COSA",
      "Includi le alternative scartate e il motivo",
      "Due righe bastano — meglio breve che assente",
      "Le decisioni documentate sono chiuse — riducono i ripensamenti",
      "Aiuta il te futuro e chiunque legga il codice"
    ],
    commonMistakes: [
      "Documentare solo il cosa — il perché è più importante",
      "Non documentare le alternative scartate — sembrerà che non le hai considerate",
      "Documenti troppo lunghi — nessuno li legge",
      "Documentare decisioni banali — focus su quelle significative",
      "Non aggiornare quando le condizioni cambiano"
    ],
    checklist: {
      question: "Le tue decisioni tecniche sono documentate?",
      title: "Verifica documentazione decisioni",
      items: [
        "Le decisioni significative hanno un 'perché' scritto",
        "Le alternative scartate sono menzionate",
        "La documentazione è breve e accessibile",
        "So dove trovare le decisioni passate",
        "Aggiorno quando le condizioni cambiano"
      ]
    }
  },
  {
    id: "iterazione-continua",
    title: "10. Iterazione continua",
    icon: RefreshCw,
    description: "Non stravolgere il metodo ogni settimana. Piccoli miglioramenti: una regola in più, una in meno, una adattata. Il metodo evolve come il codice — incrementalmente, con feedback, senza rivoluzioni inutili.\n\nLe rivoluzioni metodologiche raramente funzionano. Cambiare tutto insieme significa perdere ciò che funzionava insieme a ciò che non funzionava. L'approccio incrementale preserva il buono mentre migliora il debole.\n\nMigliora il processo come migliori il software: un commit alla volta, con test, con possibilità di rollback.",
    why: "I grandi cambiamenti falliscono perché superano la capacità di adattamento. Troppe variabili cambiano insieme, e non sai cosa ha funzionato e cosa no.\n\nI piccoli cambiamenti invece sono testabili. Aggiungi una regola, la provi per due settimane, valuti se funziona. Se sì, la tieni. Se no, la togli. Il feedback è chiaro.\n\nQuesta è la mentalità dell'iterazione continua: mai perfetto, sempre in miglioramento. Il metodo di oggi è meglio di quello di ieri, e peggio di quello di domani.",
    implementation: [
      "NON stravolgere il metodo ogni settimana — produce caos",
      "Piccoli miglioramenti incrementali: una regola alla volta",
      "Tipi di cambiamento: aggiungere, rimuovere, adattare",
      "Ogni cambiamento va testato per 2+ settimane prima di valutare",
      "Il metodo evolve come il codice: con feedback e senza rivoluzioni",
      "Documenta i cambiamenti — serve storico per capire l'evoluzione"
    ],
    codeExample: {
      language: "markdown",
      code: `## Changelog del metodo — 2024

### v2.4 (Gennaio)
**Aggiunto:** Regola dei 2 tentativi per debug AI
- Motivo: perdevo troppo tempo in loop di fix
- Risultato dopo 2 settimane: tempo debug -40%
- Stato: CONFERMATO, diventa permanente

### v2.3 (Dicembre)
**Rimosso:** Review obbligatoria di ogni file toccato
- Motivo: troppo overhead per piccole modifiche
- Nuovo approccio: review solo per file nuovi o modifiche sostanziali
- Risultato: velocità +20%, qualità invariata

### v2.2 (Novembre)
**Adattato:** Chiusura sessione
- Prima: 5 minuti di documentazione dettagliata
- Dopo: 2 minuti, solo stato + prossimi step
- Motivo: la documentazione dettagliata non veniva riletta

### v2.1 (Ottobre)  
**Aggiunto:** Playbook personale
- Prima: regole sparse in vari posti
- Dopo: documento unico con SEMPRE/MAI/DIPENDE
- Risultato: consultato effettivamente, decisioni più veloci

---

### Esperimenti in corso (non ancora confermati)

**Test:** Sessioni da 60 min invece di 90 min
- Ipotesi: focus migliore, meno stanchezza
- Durata test: 2 settimane
- Inizio: 2024-01-20
- Valutazione: 2024-02-03

---

### Prossimi cambiamenti da considerare

1. Aggiungere metriche quantitative
2. Formalizzare retrospettiva settimanale
3. Integrare review del playbook nel ciclo`
    },
    rule: {
      text: "Migliora il processo come migliori il software.",
      warning: false
    },
    keyPoints: [
      "Piccoli cambiamenti incrementali — no rivoluzioni",
      "Ogni cambiamento va testato prima di confermare",
      "Tre operazioni: aggiungere, rimuovere, adattare",
      "Documenta l'evoluzione — serve per capire cosa funziona",
      "Il metodo non è mai 'finito' — è sempre in miglioramento"
    ],
    commonMistakes: [
      "Stravolgere tutto insieme — perdi ciò che funzionava",
      "Non testare i cambiamenti — non sai se funzionano",
      "Cambiare troppo spesso — non dai tempo ai cambiamenti",
      "Non documentare l'evoluzione — ripeti errori già fatti",
      "Pensare che esista un metodo 'definitivo'"
    ],
    checklist: {
      question: "Il tuo metodo sta evolvendo in modo sano?",
      title: "Verifica iterazione metodo",
      items: [
        "Faccio piccoli cambiamenti incrementali, non rivoluzioni",
        "Testo ogni cambiamento prima di confermarlo",
        "Documento cosa cambio e perché",
        "Rimuovo ciò che non funziona",
        "Il metodo migliora nel tempo (ho evidenze)"
      ]
    }
  }
];
