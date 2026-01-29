import { 
  Settings, 
  UserCog, 
  GraduationCap, 
  Target, 
  Lock, 
  FileOutput, 
  Feather, 
  Minimize2, 
  Focus, 
  FileCode, 
  Ban,
  LucideIcon
} from "lucide-react";

export interface PromptStep {
  id: string;
  number: number;
  title: string;
  icon: LucideIcon;
  description: string;
  prompts: {
    text: string;
    label?: string;
  }[];
}

export const fondamentaSteps: PromptStep[] = [
  {
    id: "contesto-tecnico",
    number: 1,
    title: "Contesto tecnico esplicito (linguaggio, versione, ambiente)",
    icon: Settings,
    description: `**Il problema:** L'AI non ha accesso al tuo ambiente di sviluppo. Non sa quale versione di Python stai usando, se sei su Windows o Linux, se hai dipendenze installate. Senza queste informazioni, genera codice "generico" che spesso non funziona nel tuo contesto specifico.

**Perché è fondamentale:** Una funzione che usa f-string non funziona in Python 2.7. Un path con backslash non funziona su Linux. Una libreria che richiede compilazione C potrebbe non installarsi su Windows. Questi errori si evitano dichiarando il contesto all'inizio.

**Come applicarlo:** Inizia ogni sessione specificando: linguaggio e versione esatta, sistema operativo, eventuali vincoli di ambiente (virtualenv, container, serverless). Questo diventa il "contratto" che l'AI deve rispettare.

**Errore comune:** Dare per scontato che l'AI "capisca" dal codice che incolli. Non lo fa. Ogni prompt è una conversazione nuova senza memoria implicita del tuo stack.`,
    prompts: [
      {
        text: `Scrivi codice in Python 3.11, pensato per essere eseguito su Linux.

Il codice deve essere compatibile con ambienti virtualenv e non usare librerie esterne.`
      }
    ]
  },
  {
    id: "ruolo-tecnico",
    number: 2,
    title: "Assegnazione del ruolo tecnico all'AI",
    icon: UserCog,
    description: `**Il problema:** Senza un ruolo definito, l'AI risponde in modo neutro e generico. A volte spiega troppo, a volte troppo poco. A volte usa pattern enterprise quando ti serve un prototipo veloce.

**Perché è fondamentale:** Il ruolo orienta il tipo di ragionamento. Un "senior developer" privilegia manutenibilità e best practice. Un "tutor" spiega ogni passaggio. Un "hacker" cerca la soluzione più veloce. Dichiarare il ruolo è come scegliere quale "collega" virtuale vuoi al tuo fianco.

**Come applicarlo:** Scegli il ruolo in base all'obiettivo della sessione. Per codice di produzione: "sviluppatore senior". Per imparare: "tutor paziente". Per debugging: "esperto di troubleshooting". Per refactoring: "architetto software".

**Effetto pratico:** Lo stesso problema, con ruoli diversi, produce soluzioni completamente diverse. Il ruolo non è decorativo: cambia strutturalmente l'output.`,
    prompts: [
      {
        text: `Agisci come uno sviluppatore backend senior con esperienza in codice pulito e manutenibile.

Ragiona prima sulla struttura e poi scrivi il codice.`
      }
    ]
  },
  {
    id: "livello-utente",
    number: 3,
    title: "Dichiarazione del livello dell'utente",
    icon: GraduationCap,
    description: `**Il problema:** L'AI non sa se sei un principiante o un esperto. Senza questa informazione, oscilla tra spiegazioni banali ("una variabile è un contenitore...") e soluzioni avanzate incomprensibili (monadi, generics complessi, pattern astratti).

**Perché è fondamentale:** La calibrazione del livello influenza: profondità delle spiegazioni, complessità delle soluzioni proposte, quantità di codice ausiliario, uso di pattern avanzati vs approcci semplici.

**Come applicarlo:** Sii onesto e specifico. "Principiante" è vago. Meglio: "conosco le basi di Python ma non ho mai usato decoratori" oppure "sono esperto di JavaScript ma nuovo a TypeScript". Questo permette all'AI di tarare la risposta esattamente sul tuo livello.

**Errore comune:** Fingere un livello superiore per "risparmiare spiegazioni". Risultato: codice che non capisci e che non puoi mantenere o debuggare.`,
    prompts: [
      {
        text: `Considera che sono un principiante: conosco le basi del linguaggio ma non pattern avanzati.

Evita soluzioni troppo complesse.`
      }
    ]
  },
  {
    id: "obiettivo-funzionale",
    number: 4,
    title: "Obiettivo funzionale chiaro (cosa deve fare il codice)",
    icon: Target,
    description: `**Il problema:** "Fammi una funzione per gestire gli utenti" è troppo vago. Gestire come? Creare? Eliminare? Autenticare? Serializzare? L'AI non può indovinare l'obiettivo preciso e produce codice generico che raramente corrisponde a ciò che serve.

**Perché è fondamentale:** L'AI è bravissima a risolvere problemi ben definiti. È pessima a interpretare intenzioni vaghe. Più l'obiettivo è concreto, più il codice sarà utilizzabile senza modifiche.

**Come applicarlo:** Descrivi il comportamento atteso in termini di input → elaborazione → output. Cosa entra? Cosa succede? Cosa esce? Se riesci a descriverlo come un test ("dato X, deve restituire Y"), l'AI produrrà codice migliore.

**Tecnica avanzata:** Includi un esempio concreto. "Dato il file users.txt con righe 'mario,30' e 'lucia,25', deve stampare 'mario ha 30 anni'." L'esempio disambigua meglio di mille parole.`,
    prompts: [
      {
        text: `L'obiettivo del codice è:

dato un file di testo, contare quante volte appare ogni parola e stampare il risultato ordinato per frequenza.`
      }
    ]
  },
  {
    id: "vincoli-tecnici",
    number: 5,
    title: "Vincoli tecnici espliciti",
    icon: Lock,
    description: `**Il problema:** Senza vincoli, l'AI sceglie la soluzione più "elegante" secondo i suoi criteri. Spesso significa: librerie esterne, pattern complessi, soluzioni over-engineered. Magari funzionano, ma non nel tuo contesto.

**Perché è fondamentale:** I vincoli definiscono lo spazio delle soluzioni accettabili. "Nessuna libreria esterna" esclude numpy. "Solo standard library" limita le opzioni. "Massimo 50 righe" forza la semplicità. I vincoli sono più potenti dell'obiettivo nel determinare la qualità del risultato.

**Come applicarlo:** Elenca esplicitamente: cosa NON usare, limiti di complessità, requisiti di performance, compatibilità richieste. Ogni vincolo restringe lo spazio di ricerca e migliora la precisione.

**Errore comune:** Dimenticare vincoli ovvi per te ma non per l'AI. "Non usare async" se il tuo ambiente non lo supporta. "Non usare typing" se sei su Python 2. L'AI non sa cosa "non puoi" usare.`,
    prompts: [
      {
        text: `Vincoli:

- non usare librerie esterne
- evitare strutture dati complesse
- codice leggibile e facilmente modificabile`
      }
    ]
  },
  {
    id: "output-preciso",
    number: 6,
    title: "Richiesta di output preciso (solo codice, codice + spiegazione, diff)",
    icon: FileOutput,
    description: `**Il problema:** L'AI ama spiegare. Senza indicazioni, mescola codice, commenti inline, spiegazioni testuali, note, avvertimenti. Il risultato è un blob difficile da copiare e usare direttamente.

**Perché è fondamentale:** Formati diversi servono contesti diversi. Stai debuggando? Ti serve solo il diff. Stai imparando? Vuoi spiegazioni dettagliate. Stai integrando? Ti serve solo il codice, pulito e copiabile.

**Come applicarlo:** Specifica esattamente il formato: "solo codice, nessun commento", "codice con commenti inline", "prima il codice, poi la spiegazione in sezione separata", "mostra solo le righe modificate".

**Formati utili:** "Solo codice" per integrazione veloce. "Codice + spiegazione separata" per capire. "Diff" per modifiche a codice esistente. "Pseudocodice" per ragionare sulla logica prima dell'implementazione.`,
    prompts: [
      {
        text: `Restituisci solo il codice finale, senza spiegazioni testuali.`,
        label: "Opzione 1"
      },
      {
        text: `Restituisci prima il codice e poi una breve spiegazione separata.`,
        label: "Opzione 2"
      }
    ]
  },
  {
    id: "semplicita-leggibilita",
    number: 7,
    title: "Prompt orientato alla semplicità e leggibilità",
    icon: Feather,
    description: `**Il problema:** L'AI tende a mostrare competenza con soluzioni sofisticate. List comprehension annidate, lambda, operatori ternari concatenati, pattern avanzati. Tecnicamente corretti, praticamente illeggibili per chi deve mantenerli.

**Perché è fondamentale:** Il codice si scrive una volta, si legge cento. Ogni volta che torni su quel file, ogni volta che un collega lo apre, ogni volta che devi debuggare. La semplicità non è debolezza: è investimento in manutenibilità.

**Come applicarlo:** Chiedi esplicitamente codice che "un junior potrebbe capire". Questo non abbassa la qualità: la alza. Forza l'AI a preferire costrutti semplici, nomi chiari, flussi lineari.

**Principio guida:** Se devi rileggere una riga tre volte per capirla, è troppo complessa. Chiedi la versione "naive" o "esplicita" e spesso sarà migliore.`,
    prompts: [
      {
        text: `Privilegia la semplicità e la leggibilità rispetto all'ottimizzazione.

Scrivi codice che potrei spiegare a un junior.`
      }
    ]
  },
  {
    id: "codice-minimale",
    number: 8,
    title: "Richiesta di codice minimale",
    icon: Minimize2,
    description: `**Il problema:** L'AI adora il boilerplate. Classi con costruttori vuoti, interfacce per un solo uso, astrazioni premature, gestione errori per casi che non esistono. Il risultato è codice "enterprise" per problemi da script di 20 righe.

**Perché è fondamentale:** Quando stai esplorando, prototipando o imparando, ogni riga extra è rumore. Ti distrae dal problema reale. Ti fa perdere tempo a capire infrastruttura invece che logica.

**Come applicarlo:** Chiedi "la soluzione più corta possibile", "senza classi se non necessarie", "funzioni pure invece di oggetti". L'AI sa scrivere codice minimale, ma devi chiederlo esplicitamente.

**Quando usarlo:** Prototipi, script one-off, esplorazione di API, test di concetti. Quando il codice è "usa e getta" o "dimostrazione di fattibilità". Per codice di produzione, altri vincoli diventano più importanti.`,
    prompts: [
      {
        text: `Scrivi la soluzione più minimale possibile, evitando classi o astrazioni non necessarie.`
      }
    ]
  },
  {
    id: "un-problema-per-prompt",
    number: 9,
    title: "Un problema per prompt",
    icon: Focus,
    description: `**Il problema:** "Leggi il file, parsalo, validalo, trasformalo e salvalo" in un solo prompt produce codice monolitico, difficile da testare, impossibile da debuggare passo per passo.

**Perché è fondamentale:** I problemi composti hanno dipendenze nascoste. Se il parsing fallisce, la trasformazione non ha senso. Se la validazione è sbagliata, tutto il resto è inutile. Separando i problemi, puoi verificare ogni pezzo prima di procedere.

**Come applicarlo:** Scomponi il problema in step atomici. Un prompt per leggere. Uno per parsare. Uno per validare. Testa ogni pezzo. Poi integra. È più lento? No. È più veloce, perché trovi gli errori subito invece che alla fine.

**Regola pratica:** Se il prompt contiene "e poi", "e anche", "inoltre", probabilmente stai chiedendo troppo. Ogni "e" è un potenziale punto di rottura.`,
    prompts: [
      {
        text: `In questo prompt occupati solo della lettura del file.

Non implementare altre funzionalità.`
      }
    ]
  },
  {
    id: "pseudocodice-prima",
    number: 10,
    title: "Pseudocodice prima del codice",
    icon: FileCode,
    description: `**Il problema:** L'AI che scrive codice direttamente a volte "perde la strada" a metà. Inizia con un'idea, poi deriva verso un'altra, e il risultato è codice incoerente con logica frammentata.

**Perché è fondamentale:** Lo pseudocodice forza l'AI a pensare prima alla struttura, poi ai dettagli. È come fare un disegno prima di dipingere. Riduce errori logici, migliora la coerenza, rende il codice finale più pulito.

**Come applicarlo:** Chiedi esplicitamente "prima lo pseudocodice, poi il codice reale". Valuta lo pseudocodice. Se la logica è corretta, chiedi la conversione. Se è sbagliata, correggi prima lo pseudocodice. È molto più facile correggere logica in italiano che in Python.

**Quando è essenziale:** Algoritmi complessi, logica con molti branch, trasformazioni di dati articolate. Qualsiasi cosa dove "il come" non è ovvio.`,
    prompts: [
      {
        text: `Prima scrivi lo pseudocodice ad alto livello.

Solo dopo converti lo pseudocodice in codice reale.`
      }
    ]
  },
  {
    id: "cosa-non-fare",
    number: 11,
    title: "Dichiarazione esplicita di cosa NON fare",
    icon: Ban,
    description: `**Il problema:** Dire cosa vuoi lascia infiniti gradi di libertà. L'AI può interpretare "scrivi una funzione di login" in mille modi: con OOP, senza, con hashing, senza, con database, con file, con sessioni, con token...

**Perché è fondamentale:** I vincoli negativi ("non fare X") sono spesso più potenti di quelli positivi ("fai Y"). Eliminano intere categorie di soluzioni sbagliate. Restringono lo spazio di ricerca. Prevengono le deviazioni più comuni.

**Come applicarlo:** Pensa a cosa l'AI potrebbe fare che non vuoi. "Non usare OOP" se vuoi funzioni pure. "Non gestire errori" se è un prototipo. "Non usare regex" se preferisci parsing esplicito. Ogni "non" che aggiungi rende la risposta più precisa.

**Tecnica avanzata:** Dopo aver ricevuto codice indesiderato, aggiungi quel pattern alla lista dei "non". "Non usare enumerate" se continua a proporlo. L'AI impara dai vincoli espliciti.`,
    prompts: [
      {
        text: `Non usare programmazione orientata agli oggetti.

Non usare funzionalità avanzate del linguaggio.`
      }
    ]
  }
];
