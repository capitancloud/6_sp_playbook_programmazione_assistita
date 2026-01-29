import { 
  ListOrdered,
  Box,
  Tag,
  MessageSquareText,
  FlaskConical,
  GitCompare,
  Wrench,
  SplitSquareVertical,
  FolderTree,
  Lightbulb,
  FastForward,
  Landmark,
  CheckCheck,
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

export const generazioneCodiceSteps: PromptStep[] = [
  {
    id: "step-by-step",
    number: 12,
    title: "Step-by-step coding controllato",
    icon: ListOrdered,
    description: `**Il problema:** Quando chiedi "scrivi una funzione che fa X", l'AI produce tutto in un blocco unico. Se c'è un errore logico, è nascosto dentro centinaia di righe. Non sai dove ha ragionato bene e dove ha sbagliato.

**Perché è fondamentale:** Il coding step-by-step rende il ragionamento dell'AI trasparente e verificabile. Puoi fermarti a ogni passaggio, validare la logica, correggere prima che l'errore si propaghi. È come fare pair programming con l'AI.

**Come applicarlo:** Specifica esplicitamente le fasi che vuoi. Non lasciare all'AI decidere la sequenza. Tu definisci il "come" del processo, lei esegue. Ogni step deve essere atomico e verificabile indipendentemente.

**Quando usarlo:** Algoritmi complessi, logica con dipendenze, qualsiasi cosa dove l'ordine delle operazioni conta. Anche per imparare: vedere il ragionamento passo-passo è il miglior modo per capire.`,
    prompts: [
      {
        text: `Procedi step-by-step con conferma ad ogni fase:

STEP 1 - Firma della funzione:
- Definisci nome, parametri e tipo di ritorno
- Aggiungi docstring con descrizione
- NON implementare ancora la logica
- Aspetta mia conferma

STEP 2 - Logica principale (dopo conferma):
- Implementa il flusso base
- Solo il "happy path", niente edge case
- Aspetta mia conferma

STEP 3 - Casi limite (dopo conferma):
- Aggiungi gestione input vuoti/nulli
- Gestisci valori ai limiti
- Aggiungi validazione input

STEP 4 - Gestione errori (dopo conferma):
- Aggiungi try/except dove serve
- Messaggi di errore chiari
- Aspetta conferma finale

Non procedere allo step successivo senza mio OK.`
      }
    ]
  },
  {
    id: "funzione-singola",
    number: 13,
    title: "Funzione singola per richiesta",
    icon: Box,
    description: `**Il problema:** L'AI ama "aiutare di più". Chiedi una funzione di parsing, ti dà anche validazione, logging, salvataggio su file. Risultato: funzioni accoppiate, difficili da testare, impossibili da riutilizzare.

**Perché è fondamentale:** Il principio "una funzione = una responsabilità" è alla base del codice pulito. Funzioni piccole e focalizzate sono testabili, riutilizzabili, comprensibili. Funzioni "mostro" sono l'opposto.

**Come applicarlo:** Sii esplicito: "una sola funzione", "nessuna funzione helper aggiuntiva". Se servono funzioni ausiliarie, le chiederai in prompt separati. Tu controlli la granularità del codice.

**Effetto collaterale positivo:** Funzioni singole forzano nomi migliori. Se non riesci a dare un nome chiaro a una funzione, probabilmente sta facendo troppe cose.`,
    prompts: [
      {
        text: `Regole per questa richiesta:

SINGOLA RESPONSABILITÀ:
- Scrivi UNA sola funzione
- La funzione deve fare UNA cosa e farla bene
- Se pensi servano funzioni helper, fermati e chiedi

COSA NON FARE:
- Non aggiungere funzioni di utilità "bonus"
- Non creare wrapper o decorator
- Non implementare varianti della funzione
- Non aggiungere una funzione main() di esempio

VERIFICA MENTALE:
- La funzione deve essere descrivibile in una frase
- Se serve "e" nella descrizione, sta facendo troppo
- Esempio OK: "calcola la media di una lista"
- Esempio NO: "legge il file E calcola la media E salva"`
      }
    ]
  },
  {
    id: "naming-guidato",
    number: 14,
    title: "Naming guidato e professionale",
    icon: Tag,
    description: `**Il problema:** L'AI usa spesso nomi generici: data, result, temp, x, i, item. Funzionano nel contesto immediato ma diventano incomprensibili quando il codice cresce. "Cosa c'è in data?" diventa la domanda costante.

**Perché è fondamentale:** I nomi sono il primo livello di documentazione. Un buon nome elimina la necessità di commenti. Nomi come calculate_average_price, user_email_list, is_valid_input raccontano la storia del codice senza leggerlo.

**Come applicarlo:** Specifica convenzioni esplicite. Chiedi nomi "che spiegano il contenuto senza leggere il codice". Bandisci abbreviazioni ambigue (usr, tmp, calc). L'AI sa usare nomi migliori, ma deve essere obbligata.

**Standard consigliati:** Verbi per funzioni (calculate, validate, format). Sostantivi per variabili (user_count, file_path). Prefissi booleani (is_, has_, can_). Plurali per collezioni (users, items).`,
    prompts: [
      {
        text: `Standard di naming da seguire rigorosamente:

FUNZIONI (verbo + oggetto):
- calculate_total_price ✓ (non calc_price)
- validate_user_input ✓ (non check)
- format_date_string ✓ (non fmt_date)

VARIABILI (sostantivo descrittivo):
- user_email_address ✓ (non email)
- product_price_cents ✓ (non price)
- error_message_text ✓ (non msg)

BOOLEANI (prefisso interrogativo):
- is_valid, has_permission, can_edit ✓
- valid, permission, editable ✗

COLLEZIONI (plurale esplicito):
- active_users, pending_orders ✓
- user_list, order_data ✗

COSTANTI (UPPER_SNAKE_CASE):
- MAX_RETRY_COUNT, DEFAULT_TIMEOUT_SECONDS

VIETATI:
- Singole lettere (x, i, n) tranne in loop brevi
- Abbreviazioni ambigue (tmp, usr, calc, val)
- Nomi generici (data, result, item, thing)`
      }
    ]
  },
  {
    id: "commenti-didattici",
    number: 15,
    title: "Commenti obbligatori a scopo didattico",
    icon: MessageSquareText,
    description: `**Il problema:** I commenti standard spiegano il "cosa" che è già ovvio dal codice. "# incrementa il contatore" su "counter += 1" è rumore inutile. Non aiuta a capire, distrae.

**Perché è fondamentale:** I commenti utili spiegano il "perché". Perché questa scelta? Perché non l'alternativa? Quale ragionamento ha portato qui? Questi commenti trasformano il codice in materiale didattico.

**Come applicarlo:** Chiedi commenti che spieghino "il ragionamento dietro", non "cosa fa la riga". L'AI deve giustificare le scelte, non descrivere la sintassi. Deve essere come se un senior stesse facendo mentoring.

**Formato consigliato:** Commenti brevi sopra i blocchi logici, non su ogni riga. Spiegano l'intenzione del blocco, non i dettagli implementativi. Rispondono alla domanda: "perché hai fatto così?"`,
    prompts: [
      {
        text: `Stile di commenti richiesto: DIDATTICO

COSA VOGLIO:
- Commenti che spiegano il PERCHÉ, non il COSA
- Ragionamento dietro le scelte implementative
- Avvertimenti su possibili trappole
- Spiegazione dei casi limite gestiti

COSA NON VOGLIO:
- "# incrementa i" (ovvio dal codice)
- "# ciclo for" (ovvio dalla sintassi)
- Commenti su ogni singola riga

FORMATO:
# --- SEZIONE: Nome della sezione ---
# Qui spiego perché questa sezione esiste
# e quale problema risolve

# NOTA: Spiegazione di una scelta non ovvia
# ATTENZIONE: Warning su un possibile problema
# ALTERNATIVA: Perché non ho scelto un altro approccio

ESEMPIO DI BUON COMMENTO:
# Usiamo un dizionario invece di una lista perché
# la ricerca per chiave è O(1) vs O(n).
# Con input grandi, la differenza è significativa.`
      }
    ]
  },
  {
    id: "esempi-io",
    number: 16,
    title: "Esempi di input e output",
    icon: FlaskConical,
    description: `**Il problema:** Descrizioni testuali sono ambigue. "Una funzione che conta le parole" può significare mille cose. Conta parole uniche? Include punteggiatura? Case-sensitive? Ogni interpretazione produce codice diverso.

**Perché è fondamentale:** Un esempio concreto di input/output disambigua meglio di mille parole. L'AI può "testare mentalmente" il suo codice contro l'esempio. Se l'output non corrisponde, sa che qualcosa è sbagliato.

**Come applicarlo:** Fornisci almeno un esempio completo: input esatto → output esatto. Meglio ancora: più esempi che coprono casi diversi (caso base, caso limite, caso di errore). Gli esempi diventano specifiche eseguibili.

**Tecnica avanzata:** Chiedi all'AI di produrre altri esempi dopo il codice. Se non riesce a inventare esempi coerenti, probabilmente non ha capito il problema.`,
    prompts: [
      {
        text: `Specifiche tramite esempi concreti:

ESEMPIO 1 - Caso base:
Input: ["mela", "pera", "mela", "banana"]
Output: {"mela": 2, "pera": 1, "banana": 1}

ESEMPIO 2 - Lista vuota:
Input: []
Output: {}

ESEMPIO 3 - Elemento singolo:
Input: ["unico"]
Output: {"unico": 1}

ESEMPIO 4 - Case sensitivity:
Input: ["Mela", "mela", "MELA"]
Output: {"mela": 3}  # tutto lowercase

ESEMPIO 5 - Con spazi:
Input: ["  mela  ", "mela", " mela"]
Output: {"mela": 3}  # spazi rimossi

CONTRATTO:
- Il codice DEVE produrre esattamente questi output
- Se un esempio non è chiaro, chiedi prima di implementare
- Dopo il codice, verifica mentalmente ogni esempio`
      }
    ]
  },
  {
    id: "naive-migliorata",
    number: 17,
    title: "Versione naïve seguita da versione migliorata",
    icon: GitCompare,
    description: `**Il problema:** L'AI tende a mostrare subito la soluzione "ottimale", saltando il ragionamento. Perdi l'opportunità di capire come si arriva alla soluzione finale, quali trade-off esistono, perché l'ottimizzazione è necessaria.

**Perché è fondamentale:** Vedere il percorso da "semplice" a "ottimizzato" è il modo migliore per imparare. Capisci cosa è stato migliorato e perché. Puoi decidere se l'ottimizzazione vale la complessità aggiunta.

**Come applicarlo:** Chiedi esplicitamente due versioni: prima quella "ingenua" che un principiante scriverebbe, poi quella "migliorata" con spiegazione delle differenze. L'AI deve giustificare ogni cambiamento.

**Quando usarlo:** Per imparare nuovi concetti. Per valutare se l'ottimizzazione serve davvero. Per avere una versione semplice di fallback se quella ottimizzata dà problemi.`,
    prompts: [
      {
        text: `Approccio richiesto: PRIMA NAIVE, POI OTTIMIZZATO

VERSIONE 1 - NAIVE:
- Scrivi la soluzione più semplice possibile
- Come la scriverebbe un principiante
- Nessuna ottimizzazione
- Nessun pattern avanzato
- Deve funzionare, non essere elegante

VERSIONE 2 - MIGLIORATA:
- Riscrivi con le ottimizzazioni appropriate
- Per ogni cambiamento, spiega:
  • Cosa hai modificato
  • Perché è meglio
  • Qual è il trade-off (se c'è)

CONFRONTO FINALE:
- Complessità temporale: naive vs ottimizzata
- Complessità spaziale: naive vs ottimizzata
- Leggibilità: quale è più chiara?
- Quando usare una vs l'altra`
      }
    ]
  },
  {
    id: "manutenibilita",
    number: 18,
    title: "Prompt orientato alla manutenibilità",
    icon: Wrench,
    description: `**Il problema:** Codice che funziona oggi può essere un incubo domani. Nomi criptici, logica contorta, dipendenze nascoste. Chi lo modifica (spesso il te stesso del futuro) perde ore a capire cosa fa.

**Perché è fondamentale:** Il codice si scrive una volta, si mantiene per anni. Ogni ora risparmiata in scrittura costa dieci ore in manutenzione se il codice è oscuro. La manutenibilità è investimento, non lusso.

**Come applicarlo:** Chiedi codice "che un altro sviluppatore può modificare senza chiederti". Questo forza: nomi chiari, struttura prevedibile, commenti sui punti non ovvi, nessun "trick" furbo.

**Mentalità:** Immagina che tra 6 mesi un collega (o tu stesso) debba aggiungere una feature o fixare un bug. Quanto tempo ci metterà a capire il codice? Quello è il costo della manutenibilità.`,
    prompts: [
      {
        text: `Obiettivo: CODICE MANUTENIBILE

Immagina questo scenario:
- Tra 6 mesi un altro sviluppatore legge questo codice
- Deve aggiungere una nuova feature
- Non può chiederti spiegazioni
- Ha 30 minuti per capire cosa fa

Il codice deve permettergli di:
1. Capire lo scopo in 2 minuti leggendo i nomi
2. Trovare dove modificare in 5 minuti
3. Fare la modifica senza rompere altro

REQUISITI SPECIFICI:
- Funzioni corte (max 15 righe)
- Un livello di indentazione preferito (max 2)
- Nomi autoesplicativi, zero abbreviazioni
- Commenti sui "perché", non sui "cosa"
- Nessuna dipendenza nascosta tra funzioni
- Ordine logico: prima le funzioni base, poi quelle composite`
      }
    ]
  },
  {
    id: "separazione-responsabilita",
    number: 19,
    title: "Separazione delle responsabilità fin dalla generazione",
    icon: SplitSquareVertical,
    description: `**Il problema:** Funzioni che fanno tutto: leggono file, calcolano, formattano, stampano. Impossibili da testare singolarmente. Se cambi il formato di output, rischi di rompere la logica.

**Perché è fondamentale:** La separazione delle responsabilità è il principio architetturale più importante. Permette: test unitari veri, riuso delle componenti, modifiche localizzate senza effetti collaterali.

**Come applicarlo:** Chiedi esplicitamente funzioni separate per: input/output, logica di business, formattazione/presentazione. L'AI deve produrre componenti indipendenti che puoi combinare.

**Pattern classico:** Una funzione legge i dati (I/O). Una funzione li elabora (logica pura). Una funzione li formatta (presentazione). Tre pezzi testabili e sostituibili indipendentemente.`,
    prompts: [
      {
        text: `Architettura richiesta: SEPARAZIONE CHIARA

Dividi il codice in tre layer distinti:

LAYER 1 - INPUT/OUTPUT:
- Funzioni che leggono da file/rete/stdin
- Funzioni che scrivono su file/rete/stdout
- Nessuna logica di business qui
- Esempio: read_csv_file(), write_json_output()

LAYER 2 - LOGICA DI BUSINESS:
- Funzioni pure (stesso input = stesso output)
- Nessun I/O, nessun side effect
- Nessuna dipendenza da file system o rete
- Esempio: calculate_statistics(), filter_valid_items()

LAYER 3 - FORMATTAZIONE:
- Trasformazione dati → presentazione
- Nessuna logica di business
- Nessun I/O diretto
- Esempio: format_as_table(), prepare_report_data()

REGOLA D'ORO:
- Il Layer 2 deve funzionare anche senza Layer 1 e 3
- Posso testare la logica passando dati in memoria
- Posso cambiare formato output senza toccare logica`
      }
    ]
  },
  {
    id: "struttura-progetto",
    number: 20,
    title: "Prompt per strutturare il progetto (file, moduli, cartelle)",
    icon: FolderTree,
    description: `**Il problema:** Tutto in un file funziona per script piccoli. Ma quando il progetto cresce, diventa un monolite ingestibile. Dove metto le utility? Dove i test? Dove la configurazione?

**Perché è fondamentale:** Una buona struttura fin dall'inizio evita refactoring dolorosi dopo. Sapere dove trovare ogni cosa accelera lo sviluppo. Una struttura standard facilita l'onboarding di altri sviluppatori.

**Come applicarlo:** Prima di chiedere codice, chiedi la struttura. L'AI deve proporre file, cartelle e responsabilità. Tu validi l'architettura, poi chiedi l'implementazione. Architettura prima del codice.

**Quando usarlo:** Progetti con più di 3-4 funzioni. Qualsiasi cosa che prevedi crescerà. Quando vuoi test separati dal codice. Quando hai configurazione da separare.`,
    prompts: [
      {
        text: `Richiesta: SOLO STRUTTURA, NIENTE CODICE

Proponi la struttura per un progetto che:
[descrivi brevemente il progetto]

PER OGNI FILE:
- Nome completo con path
- Responsabilità in 1 frase
- Quali altri file importa
- Dimensione stimata (piccolo/medio/grande)

FORMATO RICHIESTO:
project/
├── src/
│   ├── main.py          # Entry point, gestisce CLI
│   ├── core/
│   │   ├── __init__.py
│   │   ├── logic.py     # Logica di business pura
│   │   └── models.py    # Strutture dati
│   └── utils/
│       └── helpers.py   # Funzioni di utilità
├── tests/
│   └── test_logic.py    # Test per logic.py
├── config/
│   └── settings.py      # Configurazione
└── README.md            # Documentazione

NON SCRIVERE CODICE.
Solo struttura con spiegazioni.
Il codice verrà richiesto file per file.`
      }
    ]
  },
  {
    id: "traduzione-concetto",
    number: 21,
    title: "Prompt di traduzione concetto → codice",
    icon: Lightbulb,
    description: `**Il problema:** Sai cosa vuoi ottenere concettualmente, ma non come tradurlo in codice. "Voglio che l'utente possa annullare l'operazione" è chiaro come concetto, opaco come implementazione.

**Perché è fondamentale:** Il gap tra idea e codice è dove nascono i bug. L'AI può colmare questo gap, ma deve capire l'intenzione prima di scrivere. Esplicitare il concetto prima del codice riduce incomprensioni.

**Come applicarlo:** Descrivi prima il comportamento voluto in linguaggio naturale. L'AI deve prima confermare di aver capito, poi proporre l'approccio, poi scrivere il codice. Tre fasi per evitare fraintendimenti.

**Formato utile:** "Voglio che quando X succede, il sistema faccia Y". Descrizione comportamentale, non tecnica. L'AI traduce in tecnico.`,
    prompts: [
      {
        text: `Richiesta: TRADUZIONE CONCETTO → CODICE

CONCETTO DA IMPLEMENTARE:
"[descrivi il comportamento voluto in linguaggio naturale]"

Esempio: "Quando l'utente inserisce un valore non valido, 
il sistema deve mostrare un messaggio chiaro e permettere 
di riprovare senza perdere i dati già inseriti"

PROCESSO RICHIESTO:

1. CONFERMA COMPRENSIONE
- Riformula il concetto con parole tue
- Elenca i casi d'uso coperti
- Chiedi chiarimenti se necessario

2. PROPOSTA APPROCCIO (prima del codice)
- Come intendi implementarlo?
- Quali pattern/strutture userai?
- Quali sono le alternative scartate e perché?

3. IMPLEMENTAZIONE (dopo mia conferma)
- Codice che implementa il concetto
- Commenti che collegano codice ↔ concetto
- Test che verificano il comportamento`
      }
    ]
  },
  {
    id: "generazione-incrementale",
    number: 22,
    title: "Prompt di generazione incrementale",
    icon: FastForward,
    description: `**Il problema:** Risposte lunghe sono difficili da digerire. Se l'AI genera 200 righe, dove guardi prima? Come verifichi che tutto sia corretto? Come fai rollback se qualcosa non va?

**Perché è fondamentale:** La generazione incrementale permette verifica continua. Ogni blocco è piccolo abbastanza da capire. Puoi correggere in corso d'opera invece che alla fine. È version control mentale.

**Come applicarlo:** Chiedi esplicitamente blocchi piccoli con pausa tra uno e l'altro. L'AI genera, tu validi, poi procedi. Se qualcosa non va, lo correggi subito prima che influenzi il resto.

**Dimensione consigliata:** 10-20 righe per blocco. Abbastanza da essere significativo, poco abbastanza da essere verificabile a colpo d'occhio.`,
    prompts: [
      {
        text: `Modalità: GENERAZIONE INCREMENTALE

REGOLE:
- Genera massimo 15-20 righe per volta
- Fermati e aspetta mio feedback
- Non procedere senza mia conferma esplicita

SEQUENZA:
1. Genera il primo blocco (es: import e strutture dati)
   → Aspetta "OK" o correzioni

2. Genera il secondo blocco (es: funzione principale)
   → Aspetta "OK" o correzioni

3. Continua blocco per blocco...

COME RISPONDO:
- "OK" = procedi al prossimo blocco
- "OK ma [modifica]" = applica modifica e procedi
- "Fermati" = stop, devo riflettere
- "Riscrivi" = questo blocco non va, rifallo

ALLA FINE:
- Mostra il codice completo assemblato
- Verifica che i blocchi siano coerenti tra loro`
      }
    ]
  },
  {
    id: "vincolo-architetturale",
    number: 23,
    title: "Prompt di vincolo architetturale",
    icon: Landmark,
    description: `**Il problema:** L'AI cambia paradigma senza avvisare. Inizi con funzioni pure, finisci con classi. Inizi sincrono, finisci con async. Ogni cambio rompe la coerenza del codice.

**Perché è fondamentale:** L'incoerenza architetturale è debito tecnico istantaneo. Codice mezzo funzionale e mezzo OOP è più difficile da capire di codice interamente in uno stile. La coerenza è chiarezza.

**Come applicarlo:** Dichiara lo stile architetturale all'inizio e vietane esplicitamente le violazioni. L'AI deve rispettare il vincolo per tutto il codice, non solo all'inizio.

**Stili comuni:** Funzionale puro (niente classi, niente stato). OOP classico (classi con metodi). Procedurale (funzioni con stato passato esplicitamente). Scegli uno e mantienilo.`,
    prompts: [
      {
        text: `VINCOLO ARCHITETTURALE: [scegli uno]

OPZIONE A - FUNZIONALE PURO:
- Solo funzioni, niente classi
- Niente stato globale o mutabile
- Funzioni pure: stesso input = stesso output
- Composizione invece di ereditarietà
- Immutabilità: non modificare mai i parametri

OPZIONE B - OOP CLASSICO:
- Logica incapsulata in classi
- Stato gestito come attributi di istanza
- Metodi che operano sullo stato interno
- Ereditarietà solo se c'è vera relazione is-a
- Niente funzioni standalone fuori dalle classi

OPZIONE C - PROCEDURALE:
- Funzioni con stato passato esplicitamente
- Strutture dati semplici (dict, tuple)
- Niente classi, niente lambda complesse
- Flusso lineare e leggibile

VINCOLO ATTIVO: [specifica quale]
Non deviare da questo stile per nessun motivo.
Se sembra necessario, chiedi prima di cambiare.`
      }
    ]
  },
  {
    id: "coerenza-interna",
    number: 24,
    title: "Prompt di coerenza interna",
    icon: CheckCheck,
    description: `**Il problema:** L'AI non ha memoria della propria risposta. Una funzione usa snake_case, la successiva camelCase. Prima dict comprehension, poi cicli for. Ogni incoerenza è attrito mentale per chi legge.

**Perché è fondamentale:** Il cervello umano riconosce pattern. Codice coerente si legge più velocemente perché sai cosa aspettarti. Incoerenze spezzano il flusso di lettura e nascondono bug.

**Come applicarlo:** Chiedi esplicitamente coerenza in: naming (stesso stile ovunque), formattazione (stesso pattern), approccio (stesse soluzioni per problemi simili). L'AI deve auto-verificarsi.

**Checklist di coerenza:** Nomi: stesso stile (snake_case vs camelCase). Stringhe: stesse virgolette (' vs "). Strutture: stesse scelte (dict vs classe). Errori: stesso pattern (eccezioni vs return codes).`,
    prompts: [
      {
        text: `Requisito: COERENZA INTERNA TOTALE

Prima di restituire il codice, verifica:

NAMING:
☐ Tutte le funzioni: stesso stile (snake_case)
☐ Tutte le variabili: stesso stile (snake_case)
☐ Tutte le costanti: stesso stile (UPPER_CASE)
☐ Nessun mix camelCase/snake_case

STRINGHE:
☐ Tutte le stringhe usano stesso quote style
☐ F-string usate in modo coerente
☐ Nessun mix "..." e '...'

STRUTTURE:
☐ Problemi simili → soluzioni simili
☐ Stessa struttura dati per casi analoghi
☐ Stesso pattern di iterazione

GESTIONE ERRORI:
☐ Stesso stile (try/except vs return None)
☐ Stessi messaggi di errore per casi simili
☐ Nessun mix di approcci

SE TROVI INCOERENZE:
- Correggile prima di restituire
- Se hai dubbi su quale convenzione usare, chiedi`
      }
    ]
  }
];
