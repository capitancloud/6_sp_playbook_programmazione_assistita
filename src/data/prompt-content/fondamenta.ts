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
        text: `Contesto tecnico:
- Linguaggio: Python 3.11
- Sistema operativo: Linux (Ubuntu 22.04)
- Ambiente: virtualenv isolato
- Dipendenze disponibili: solo libreria standard
- Editor: VS Code con estensione Python

Il codice deve essere compatibile con questo ambiente.
Non usare librerie esterne che richiedono pip install.
Usa type hints per migliorare la leggibilità.`
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
        text: `Agisci come uno sviluppatore backend senior con 10+ anni di esperienza.

Il tuo approccio:
- Privilegi codice pulito, leggibile e manutenibile
- Pensi sempre alla gestione degli errori
- Consideri i casi limite prima di scrivere
- Usi nomi di variabili e funzioni espressivi
- Eviti soluzioni "clever" a favore di soluzioni chiare

Prima di scrivere codice:
1. Ragiona brevemente sulla struttura
2. Identifica i punti critici
3. Solo dopo implementa la soluzione`
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
        text: `Il mio livello di competenza:
- Conosco le basi di Python (variabili, funzioni, cicli, liste)
- Ho usato dizionari ma non sono esperto
- Non ho mai usato decoratori o context manager
- Non conosco la programmazione orientata agli oggetti
- Capisco cosa fa un try/except ma non li uso spesso

Calibra le tue risposte su questo livello:
- Evita pattern avanzati senza spiegarli
- Preferisci soluzioni con costrutti base
- Se usi qualcosa di nuovo, spiega brevemente perché`
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
        text: `Obiettivo funzionale:
Creare una funzione che conta la frequenza delle parole in un file.

Input:
- Percorso di un file di testo (.txt)
- Il file contiene testo in italiano con punteggiatura

Elaborazione:
- Leggere il contenuto del file
- Rimuovere la punteggiatura
- Convertire tutto in minuscolo
- Contare le occorrenze di ogni parola

Output:
- Dizionario {parola: conteggio}
- Ordinato per frequenza decrescente
- Stampato a schermo in formato leggibile

Esempio:
File: "Ciao mondo. Ciao a tutti."
Output atteso: ciao: 2, mondo: 1, a: 1, tutti: 1`
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
        text: `Vincoli tecnici da rispettare:

Librerie:
- Solo libreria standard Python
- Niente numpy, pandas, o dipendenze esterne
- Niente requests (uso urllib se serve HTTP)

Stile:
- Massimo 80 caratteri per riga
- Funzioni sotto le 20 righe
- Nomi variabili in inglese, commenti in italiano

Performance:
- Deve gestire file fino a 10MB
- Tempo massimo accettabile: 5 secondi

Compatibilità:
- Python 3.8+ (no walrus operator se evitabile)
- Deve funzionare su Windows e Linux`
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
        text: `Formato output richiesto:

1. SOLO CODICE
   - Nessuna spiegazione prima o dopo
   - Nessun commento inline (tranne docstring)
   - Codice pronto per copia-incolla
   - Include gli import necessari all'inizio`,
        label: "Solo codice"
      },
      {
        text: `Formato output richiesto:

1. CODICE COMPLETO
   - Con docstring per ogni funzione
   - Import all'inizio

2. SPIEGAZIONE (dopo il codice)
   - Cosa fa ogni funzione principale
   - Scelte implementative e perché
   - Possibili miglioramenti futuri
   - Come testare il codice`,
        label: "Codice + spiegazione"
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
        text: `Principi di stile da seguire:

Leggibilità sopra tutto:
- Preferisci cicli for espliciti a list comprehension complesse
- Una operazione per riga, non concatenare
- Nomi di variabili che spiegano il contenuto
- Nomi di funzioni che spiegano l'azione

Semplicità:
- Se puoi farlo in modo semplice, fallo semplice
- Evita lambda se una funzione normale è più chiara
- Niente ternary operator annidati
- Niente "tricks" del linguaggio

Test mentale:
- Il codice deve essere spiegabile a un junior in 2 minuti
- Ogni funzione deve avere uno scopo ovvio dal nome
- Il flusso deve essere lineare e prevedibile`
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
        text: `Requisiti di minimalismo:

Struttura:
- Soluzione più corta possibile
- Niente classi, solo funzioni
- Niente file separati, tutto in un modulo
- Niente configurazione esterna

Evita:
- Pattern come Factory, Strategy, Observer
- Astrazioni "per il futuro"
- Gestione errori per casi improbabili
- Logging, metrics, monitoring
- Docstring elaborate

Obiettivo:
- Codice che risolve SOLO il problema dato
- Massimo 50 righe totali
- Eseguibile con: python script.py`
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
        text: `Scope di questo prompt: SOLO lettura file

Quello che voglio:
- Una funzione read_data(filepath) 
- Legge un file CSV
- Restituisce una lista di dizionari

Quello che NON voglio in questo prompt:
- Validazione dei dati
- Trasformazione dei dati  
- Salvataggio su database
- Gestione di formati diversi da CSV
- Interfaccia utente

Questi verranno gestiti in prompt separati.
Concentrati solo sulla lettura pulita del file.`
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
        text: `Approccio richiesto: PSEUDOCODICE FIRST

Step 1 - Pseudocodice in italiano:
- Descrivi la logica ad alto livello
- Usa frasi semplici, non codice
- Numera i passaggi principali
- Indica dove servono cicli o condizioni
- Evidenzia i casi limite

Step 2 - Revisione:
- Aspetta la mia conferma sul pseudocodice
- Posso chiedere modifiche alla logica

Step 3 - Implementazione:
- Solo dopo mia conferma, converti in Python
- Segui esattamente la struttura del pseudocodice
- Ogni passaggio del pseudocodice = commento nel codice`
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
        text: `Lista esplicita di cosa NON fare:

Paradigmi:
- NON usare classi o programmazione OOP
- NON usare decoratori
- NON usare metaclassi o descriptors

Costrutti:
- NON usare list comprehension annidate
- NON usare lambda functions
- NON usare walrus operator (:=)
- NON usare match/case (Python 3.10+)

Pattern:
- NON implementare pattern GoF
- NON usare dependency injection
- NON creare interfacce/protocolli

Librerie:
- NON suggerire librerie esterne
- NON usare asyncio
- NON usare multiprocessing

Se qualcosa di questa lista sembra necessario,
chiedi prima invece di procedere.`
      }
    ]
  }
];
