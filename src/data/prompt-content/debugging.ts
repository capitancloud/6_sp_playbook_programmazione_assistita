import { 
  FileWarning,
  Search,
  PlayCircle,
  HelpCircle,
  Minimize2,
  CheckCircle,
  AlertTriangle,
  TestTube,
  RotateCcw,
  Bug,
  Scissors,
  GitCompare,
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

export const debuggingSteps: PromptStep[] = [
  {
    id: "debug-errori-reali",
    number: 25,
    title: "Debug con errori reali e completi",
    icon: FileWarning,
    description: `**Il problema:** Incollare solo "non funziona" o una singola riga di errore è come chiamare il meccanico e dire "la macchina fa un rumore". Quale rumore? Quando? A che velocità? Senza contesto, l'AI inventa.

**Perché è fondamentale:** Lo stack trace contiene informazioni cruciali: dove è iniziato l'errore, come si è propagato, quali funzioni erano coinvolte. Il messaggio di errore spesso indica esattamente il problema. Il contesto del codice mostra cosa stava succedendo.

**Come applicarlo:** Copia TUTTO: il messaggio di errore completo, lo stack trace intero (non solo l'ultima riga), il codice circostante (non solo la riga incriminata). Più contesto dai, più precisa sarà l'analisi.

**Errore comune:** Parafrasare l'errore ("dice che c'è un problema con i tipi"). No. Copia il messaggio esatto. Le parole precise contano.`,
    prompts: [
      {
        text: `Richiesta: ANALISI BUG COMPLETA

ERRORE COMPLETO (non modificato, non parafrasato):
\`\`\`
[incolla qui il messaggio di errore ESATTO]
\`\`\`

STACK TRACE COMPLETO:
\`\`\`
[incolla qui TUTTO lo stack trace, dall'inizio alla fine]
\`\`\`

CODICE COINVOLTO (con contesto):
\`\`\`python
[incolla il codice, includi 5-10 righe prima e dopo l'errore]
\`\`\`

CONTESTO AGGIUNTIVO:
- Quando succede: [sempre / solo con certi input / random]
- Ultima modifica al codice: [cosa hai cambiato di recente]
- Funzionava prima? [sì/no, cosa è cambiato]

ISTRUZIONI:
- Analizza basandoti SOLO su ciò che vedi
- Non ipotizzare parti mancanti
- Se ti serve altro contesto, chiedi`
      }
    ]
  },
  {
    id: "analisi-senza-riscrittura",
    number: 26,
    title: "Analisi del bug senza riscrittura totale",
    icon: Search,
    description: `**Il problema:** L'AI adora "aiutare" riscrivendo tutto da zero. "Ecco una versione migliorata..." Ma tu non volevi una versione migliorata. Volevi capire cosa c'è di sbagliato in QUESTA versione.

**Perché è fondamentale:** Riscrivere nasconde il problema invece di risolverlo. Non impari nulla. Non capisci cosa era sbagliato. E spesso la riscrittura introduce nuovi bug mentre "risolve" quello vecchio.

**Come applicarlo:** Sii esplicito: "non riscrivere", "identifica solo il problema", "mostra la riga esatta". L'AI deve fare diagnosi, non chirurgia ricostruttiva. Prima capisci, poi decidi se riscrivere.

**Quando accettare la riscrittura:** Solo se il codice è irrecuperabilmente sbagliato. Ma questo è raro. Di solito il problema è localizzato e il fix è piccolo.`,
    prompts: [
      {
        text: `Modalità: DIAGNOSI SENZA RISCRITTURA

REGOLE FERREE:
❌ NON riscrivere il codice
❌ NON proporre "versioni migliorate"
❌ NON refactorare mentre analizzi
❌ NON aggiungere funzionalità

✅ Identifica la riga esatta del problema
✅ Spiega PERCHÉ quella riga è sbagliata
✅ Mostra cosa succede quando viene eseguita
✅ Indica il fix MINIMO (può essere 1 carattere)

FORMATO RISPOSTA:
1. RIGA PROBLEMATICA: [numero] [contenuto]
2. PROBLEMA: [spiegazione tecnica precisa]
3. CAUSA: [perché questo causa l'errore]
4. FIX: [modifica minima, solo quella riga]

Se il problema coinvolge più righe, elencale tutte
ma NON riscrivere l'intera funzione.`
      }
    ]
  },
  {
    id: "simulazione-esecuzione",
    number: 27,
    title: "Simulazione dell'esecuzione riga per riga",
    icon: PlayCircle,
    description: `**Il problema:** A volte il codice sembra corretto ma produce risultati sbagliati. Non c'è errore, non c'è crash, semplicemente il risultato non è quello atteso. Come trovi il bug?

**Perché è fondamentale:** L'esecuzione mentale riga per riga è il debug più potente. Vedi esattamente come cambiano le variabili, dove il flusso devia dalle aspettative, in quale momento il dato diventa sbagliato.

**Come applicarlo:** Fornisci un input specifico e chiedi all'AI di "eseguire" il codice passo-passo. Deve mostrare lo stato delle variabili dopo ogni riga. È come avere un debugger con breakpoint ovunque.

**Quando usarlo:** Bug logici (output sbagliato senza errori). Loop infiniti. Condizioni che non si comportano come atteso. Qualsiasi cosa dove "sembra giusto ma non funziona".`,
    prompts: [
      {
        text: `Richiesta: SIMULAZIONE ESECUZIONE STEP-BY-STEP

CODICE DA ANALIZZARE:
\`\`\`python
[incolla il codice]
\`\`\`

INPUT SPECIFICO DA USARE:
[specifica l'input esatto che causa il problema]

OUTPUT ATTESO:
[cosa DOVREBBE produrre]

OUTPUT EFFETTIVO:
[cosa produce INVECE]

ISTRUZIONI:
Esegui mentalmente il codice, riga per riga.

Per OGNI riga mostra:
| Riga | Codice | Variabili dopo esecuzione |
|------|--------|---------------------------|
| 1    | x = 5  | x=5                       |
| 2    | y = x*2| x=5, y=10                 |
| ...  | ...    | ...                       |

EVIDENZIA:
- Il momento esatto in cui il valore diventa sbagliato
- La riga dove il comportamento devia dalle aspettative
- Perché quella riga produce quel risultato`
      }
    ]
  },
  {
    id: "ipotesi-multiple",
    number: 28,
    title: "Ipotesi multiple sulle cause del problema",
    icon: HelpCircle,
    description: `**Il problema:** La prima ipotesi è spesso sbagliata. Se l'AI (o tu) si fissa sulla prima idea, perde tempo a cercare prove per una teoria sbagliata invece di esplorare alternative.

**Perché è fondamentale:** Un debugger esperto genera sempre più ipotesi. "Potrebbe essere A, potrebbe essere B, potrebbe essere C." Poi le verifica una per una. Questo approccio trova bug più velocemente.

**Come applicarlo:** Chiedi esplicitamente "almeno 3 cause possibili". L'AI deve ragionare come un detective: non saltare alle conclusioni, esplorare le alternative, valutare la probabilità di ciascuna.

**Bonus:** Dopo le ipotesi, puoi chiedere come verificare ciascuna. "Come posso testare se la causa è A? E se è B?" Questo ti dà un piano di debug strutturato.`,
    prompts: [
      {
        text: `Richiesta: ANALISI MULTI-IPOTESI

SINTOMO OSSERVATO:
[descrivi cosa succede / l'errore]

CODICE COINVOLTO:
\`\`\`python
[incolla il codice]
\`\`\`

ISTRUZIONI:
Genera ALMENO 3 ipotesi diverse sulle cause.
Non fermarti alla più ovvia.

PER OGNI IPOTESI:

## Ipotesi 1: [nome breve]
- **Descrizione**: cosa potrebbe essere sbagliato
- **Perché è plausibile**: evidenze che la supportano
- **Come verificarla**: test specifico per confermare/escludere
- **Probabilità stimata**: alta/media/bassa

## Ipotesi 2: [nome breve]
[stessa struttura]

## Ipotesi 3: [nome breve]
[stessa struttura]

ORDINE CONSIGLIATO:
Suggerisci in che ordine verificare le ipotesi
(dalla più probabile o dalla più facile da testare)`
      }
    ]
  },
  {
    id: "fix-minimale",
    number: 29,
    title: "Fix minimale e localizzato",
    icon: Minimize2,
    description: `**Il problema:** Ogni riga di codice modificata è una potenziale nuova fonte di bug. Più modifichi, più rischi regressioni. Il fix "giusto" che tocca 50 righe può introdurre 5 nuovi problemi.

**Perché è fondamentale:** Il fix minimale ha la minima superficie di rischio. Cambi solo ciò che è necessario. Puoi verificare facilmente che il cambiamento sia corretto. Se qualcosa va storto, sai esattamente cosa hai toccato.

**Come applicarlo:** Chiedi esplicitamente "il fix più piccolo possibile". L'AI deve resistere alla tentazione di "migliorare" altro codice. Un carattere cambiato è meglio di una funzione riscritta, se risolve il problema.

**Regola d'oro:** Se il fix funziona e tocca N righe, chiediti: "Posso farlo toccando N-1 righe?" Se sì, fallo.`,
    prompts: [
      {
        text: `Requisito: FIX MINIMALE ASSOLUTO

PRINCIPIO:
Il miglior fix è quello che tocca MENO codice possibile.
Ogni riga modificata è un rischio di regressione.

REGOLE:
- Modifica SOLO le righe necessarie a fixare il bug
- NON "migliorare" codice adiacente
- NON refactorare "già che ci sei"
- NON cambiare stile o formattazione
- NON aggiungere gestione errori extra

FORMATO RISPOSTA:

BUG IDENTIFICATO:
[spiegazione in 1-2 frasi]

FIX PROPOSTO:
\`\`\`diff
- riga originale
+ riga corretta
\`\`\`

RIGHE TOCCATE: [numero]

VERIFICA:
- Prima: [comportamento con bug]
- Dopo: [comportamento corretto]

Se il fix richiede più di 3-4 righe, 
spiega perché non è possibile farlo con meno.`
      }
    ]
  },
  {
    id: "verifica-correttezza",
    number: 30,
    title: "Verifica della correttezza del fix",
    icon: CheckCircle,
    description: `**Il problema:** "L'ho fixato" non significa nulla se non puoi dimostrare che il fix funziona. Spesso si cambia qualcosa, sembra funzionare, e si scopre dopo che il bug è solo nascosto, non risolto.

**Perché è fondamentale:** La verifica è parte del fix, non un'opzione. Devi poter spiegare: cosa faceva prima, cosa fa adesso, perché adesso è corretto. Se non puoi spiegarlo, non hai capito il bug.

**Come applicarlo:** Dopo ogni fix, chiedi all'AI di dimostrare che funziona. Deve mostrare il comportamento prima e dopo, spiegare la differenza, confermare che il problema originale non può più verificarsi.

**Test mentale:** Se qualcuno ti chiede "perché questo fix funziona?", devi poter rispondere in 30 secondi. Se non puoi, non hai capito abbastanza.`,
    prompts: [
      {
        text: `Richiesta: DIMOSTRAZIONE CHE IL FIX FUNZIONA

Dopo aver proposto il fix, devi DIMOSTRARE che risolve il problema.

STRUTTURA RICHIESTA:

## 1. COMPORTAMENTO PRIMA DEL FIX

Input: [input che causava il bug]
Esecuzione: [cosa succedeva step-by-step]
Output: [risultato errato]
Problema: [perché era sbagliato]

## 2. COMPORTAMENTO DOPO IL FIX

Input: [stesso input]
Esecuzione: [cosa succede ORA step-by-step]
Output: [risultato corretto]
Differenza chiave: [cosa cambia e perché]

## 3. CASI AGGIUNTIVI

Testa il fix con altri input:
- Input normale: [funziona?]
- Input limite: [funziona?]
- Input che prima funzionava: [ancora funziona?]

## 4. GARANZIA

Spiega perché il bug NON PUÒ PIÙ verificarsi
con questa modifica.`
      }
    ]
  },
  {
    id: "edge-cases",
    number: 31,
    title: "Prompt di edge case",
    icon: AlertTriangle,
    description: `**Il problema:** Il codice funziona con input "normali" ma crasha o produce risultati sbagliati con input "strani". Lista vuota, numeri negativi, stringhe con caratteri speciali, valori null. Questi sono gli edge case.

**Perché è fondamentale:** Gli edge case sono dove si nascondono i bug più insidiosi. Il codice sembra funzionare perfettamente finché un utente non inserisce qualcosa di "strano". In produzione, qualcuno inserirà sempre qualcosa di strano.

**Come applicarlo:** Chiedi all'AI di pensare come un tester malevolo. "Cosa potrebbe rompere questo codice?" Non i casi ovvi: quelli li vedi anche tu. I casi subdoli, quelli che sembrano innocui ma causano problemi.

**Categorie classiche:** Input vuoti/null. Valori ai limiti (0, -1, MAX_INT). Formati inattesi (spazi, caratteri speciali). Dimensioni estreme (lista con 1 milione di elementi).`,
    prompts: [
      {
        text: `Richiesta: ANALISI EDGE CASE APPROFONDITA

CODICE DA ANALIZZARE:
\`\`\`python
[incolla il codice]
\`\`\`

Pensa come un tester che vuole ROMPERE questo codice.
Non limitarti ai casi ovvi.

CATEGORIE DA ESPLORARE:

## 1. INPUT VUOTI/NULL
- Lista vuota: []
- Stringa vuota: ""
- None/null
- Dizionario vuoto: {}

## 2. VALORI LIMITE
- Zero, numeri negativi
- Valori molto grandi (overflow?)
- Valori molto piccoli (underflow?)
- Primo e ultimo elemento

## 3. FORMATI INATTESI
- Spazi iniziali/finali
- Caratteri speciali: @#$%^&*
- Unicode: emoji, caratteri non-ASCII
- Case misto: "AbCdE"

## 4. DIMENSIONI ESTREME
- Un solo elemento
- Migliaia/milioni di elementi
- Stringhe molto lunghe

## 5. STATI INCONSISTENTI
- Dati duplicati
- Ordine inatteso
- Riferimenti circolari

PER OGNI EDGE CASE TROVATO:
- Input specifico che rompe il codice
- Cosa succede (errore? risultato sbagliato?)
- Come fixarlo`
      }
    ]
  },
  {
    id: "test-driven",
    number: 32,
    title: "Test-driven prompting (test prima del codice)",
    icon: TestTube,
    description: `**Il problema:** Scrivi codice, poi cerchi di testarlo, poi scopri che non è testabile, poi lo riscrivi. Tempo perso. Oppure: scrivi codice, "sembra funzionare", non lo testi mai, in produzione esplode.

**Perché è fondamentale:** Scrivere i test PRIMA del codice forza a pensare chiaramente al comportamento atteso. I test diventano la specifica. Il codice diventa "ciò che fa passare i test". Nessuna ambiguità.

**Come applicarlo:** Inverti l'ordine naturale. Prima chiedi: "quali test deve superare questo codice?" L'AI produce i test. Tu li validi. Poi chiedi il codice che li supera. Garanzia di correttezza built-in.

**Bonus:** I test scritti prima sono test migliori. Coprono davvero il comportamento voluto, non "ciò che il codice fa per caso".`,
    prompts: [
      {
        text: `Approccio: TEST-DRIVEN DEVELOPMENT

REQUISITO FUNZIONALE:
[descrivi cosa deve fare il codice]

FASE 1 - SOLO TEST (niente codice ancora!)

Scrivi una suite completa di test:

\`\`\`python
import pytest

# Test caso base
def test_caso_normale():
    assert funzione(input_normale) == output_atteso

# Test input vuoto
def test_input_vuoto():
    assert funzione([]) == risultato_per_vuoto

# Test edge case
def test_valore_limite():
    assert funzione(valore_limite) == risultato_limite

# Test errore atteso
def test_input_invalido():
    with pytest.raises(TipoErrore):
        funzione(input_invalido)
\`\`\`

FASE 2 - ASPETTA MIA CONFERMA
Non scrivere codice finché non approvo i test.

FASE 3 - IMPLEMENTAZIONE (dopo conferma)
Scrivi il codice che fa passare TUTTI i test.
Verifica mentalmente che ogni test passi.`
      }
    ]
  },
  {
    id: "regressione",
    number: 33,
    title: "Prompt di regressione funzionale",
    icon: RotateCcw,
    description: `**Il problema:** Fixi un bug, ne crei un altro. Aggiungi una feature, rompi una vecchia. Questo si chiama regressione: qualcosa che funzionava smette di funzionare dopo una modifica.

**Perché è fondamentale:** Le regressioni sono bug particolarmente insidiosi perché riguardano funzionalità che "davamo per scontate". Nessuno pensa di testare ciò che ha sempre funzionato. Finché non smette di funzionare.

**Come applicarlo:** Dopo ogni modifica, chiedi esplicitamente: "questa modifica può rompere qualcosa che prima funzionava?" L'AI deve analizzare gli effetti collaterali, le dipendenze, i possibili impatti.

**Mindset:** Ogni modifica è colpevole finché non si dimostra innocente. Non assumere che "il resto continua a funzionare". Verificalo.`,
    prompts: [
      {
        text: `Richiesta: ANALISI DI REGRESSIONE

CODICE ORIGINALE (funzionante):
\`\`\`python
[incolla versione precedente]
\`\`\`

CODICE MODIFICATO (con fix/feature):
\`\`\`python
[incolla versione nuova]
\`\`\`

ANALISI RICHIESTA:

## 1. COSA È CAMBIATO
Lista precisa delle differenze:
- Riga X: [prima] → [dopo]
- Riga Y: [prima] → [dopo]

## 2. FUNZIONALITÀ DA VERIFICARE
Per ogni funzionalità esistente:
| Funzionalità | Prima funzionava? | Dopo funziona ancora? |
|--------------|-------------------|----------------------|
| [feature A]  | ✓                 | ✓ / ⚠️ / ❌          |
| [feature B]  | ✓                 | ✓ / ⚠️ / ❌          |

## 3. POTENZIALI REGRESSIONI
- [Descrivi scenari che potrebbero rompersi]
- [Per ognuno: probabilità e gravità]

## 4. TEST DI REGRESSIONE CONSIGLIATI
- [Input specifici da testare]
- [Comportamenti da verificare]`
      }
    ]
  },
  {
    id: "fallimento-controllato",
    number: 34,
    title: "Prompt di fallimento controllato (bug didattico)",
    icon: Bug,
    description: `**Il problema:** Imparare dagli errori è potente, ma aspettare di fare errori è inefficiente. Come puoi imparare a riconoscere bug se non ne fai?

**Perché è fondamentale:** Vedere codice "quasi giusto" che fallisce insegna a riconoscere pattern di errore. Sviluppi un "sesto senso" per bug comuni. Quando li incontri nel tuo codice, li riconosci subito.

**Come applicarlo:** Chiedi all'AI di scrivere codice intenzionalmente sbagliato ma plausibile. Poi chiedi di spiegare dove e perché fallisce. È come fare esercizi di "trova l'errore" ma con spiegazione.

**Quando usarlo:** Per imparare pattern di errore comuni. Per verificare di saper riconoscere bug. Per prepararti a code review. Per capire errori che hai fatto in passato.`,
    prompts: [
      {
        text: `Richiesta: BUG DIDATTICO INTENZIONALE

CONTESTO:
[descrivi cosa dovrebbe fare il codice]

ISTRUZIONI:

## FASE 1: CODICE SBAGLIATO (MA PLAUSIBILE)
Scrivi una versione del codice che:
- SEMBRA corretta a prima vista
- Passerebbe una review superficiale
- Contiene un bug SOTTILE (non ovvio)
- Il bug è del tipo che un junior farebbe

\`\`\`python
# Codice con bug nascosto
[codice]
\`\`\`

## FASE 2: SFIDA
"Riesci a trovare il bug?"
(Aspetta che io provi a trovarlo)

## FASE 3: SPIEGAZIONE (dopo mio tentativo)
- Dov'è esattamente il bug
- Perché è facile non vederlo
- Cosa succede quando si manifesta
- Come si sarebbe dovuto scrivere
- Pattern generale: dove si incontra questo tipo di bug

TIPI DI BUG DA ESPLORARE:
- Off-by-one errors
- Mutazione accidentale di parametri
- Problemi di scope
- Race conditions
- Errori di comparazione (== vs is)`
      }
    ]
  },
  {
    id: "isolamento-bug",
    number: 35,
    title: "Prompt di isolamento del bug",
    icon: Scissors,
    description: `**Il problema:** Il bug è in un sistema di 1000 righe. Dove? Testare tutto è impossibile. Serve isolare il problema: ridurlo alla minima quantità di codice che lo riproduce.

**Perché è fondamentale:** Un bug in 10 righe è risolvibile in minuti. Un bug in 1000 righe può richiedere giorni. L'isolamento trasforma problemi enormi in problemi piccoli. È la tecnica di debug più importante.

**Come applicarlo:** Chiedi all'AI di "ridurre il codice al minimo che riproduce il bug". Tutto ciò che può essere rimosso senza far sparire il bug, va rimosso. Ciò che resta è il problema.

**Processo:** Parti dal codice completo. Rimuovi metà. Il bug c'è ancora? Rimuovi un'altra metà. Continua finché ogni riga rimanente è necessaria per riprodurre il bug. Quello è il minimal reproducible example.`,
    prompts: [
      {
        text: `Richiesta: ISOLAMENTO DEL BUG

CODICE COMPLETO (con troppo contesto):
\`\`\`python
[incolla il codice completo]
\`\`\`

BUG DA ISOLARE:
[descrivi il comportamento errato]

OBIETTIVO:
Produci il MINIMAL REPRODUCIBLE EXAMPLE (MRE)

PROCESSO:
1. Identifica quali parti del codice NON sono coinvolte nel bug
2. Rimuovi tutto ciò che non è strettamente necessario
3. Semplifica le strutture dati (es: lista di 100 elementi → lista di 2)
4. Rimuovi import non usati
5. Rimuovi funzioni non chiamate
6. Sostituisci codice complesso con stub se non influenza il bug

RISULTATO ATTESO:
\`\`\`python
# Minimal Reproducible Example
# Questo codice riproduce ESATTAMENTE il bug
# con il MINIMO di righe possibile

[codice minimale]

# Output: [cosa produce]
# Atteso: [cosa dovrebbe produrre]
\`\`\`

RIGHE PRIMA: [numero]
RIGHE DOPO: [numero]
RIDUZIONE: [percentuale]`
      }
    ]
  },
  {
    id: "confronto-prima-dopo",
    number: 36,
    title: "Prompt di confronto prima/dopo",
    icon: GitCompare,
    description: `**Il problema:** Dopo un fix, vuoi capire cosa è effettivamente cambiato. Guardare due versioni di codice fianco a fianco è faticoso. È facile perdere differenze importanti nel rumore.

**Perché è fondamentale:** Il confronto esplicito evidenzia esattamente cosa è cambiato. Niente è nascosto. Puoi verificare che il fix sia quello che pensavi. Puoi spiegare la modifica a un collega.

**Come applicarlo:** Chiedi all'AI di mostrare le differenze in formato diff. Solo le righe modificate, con contesto minimo. Le aggiunte, le rimozioni, le modifiche. Niente altro.

**Formato preferito:** Diff style (+/- per aggiunte/rimozioni) è il più chiaro. Mostra il numero di riga, la versione vecchia, la versione nuova. Commento breve su perché il cambiamento risolve il problema.`,
    prompts: [
      {
        text: `Richiesta: CONFRONTO DETTAGLIATO PRIMA/DOPO

VERSIONE PRIMA (con bug):
\`\`\`python
[incolla codice originale]
\`\`\`

VERSIONE DOPO (con fix):
\`\`\`python
[incolla codice corretto]
\`\`\`

FORMATO RICHIESTO:

## DIFF VISUALE
\`\`\`diff
@@ riga X @@
- codice rimosso
+ codice aggiunto

@@ riga Y @@
- altra modifica vecchia
+ altra modifica nuova
\`\`\`

## TABELLA CAMBIAMENTI
| Riga | Prima | Dopo | Perché |
|------|-------|------|--------|
| 15   | x = a + b | x = a - b | Era somma invece di differenza |
| 23   | if x > 0: | if x >= 0: | Mancava caso x=0 |

## STATISTICHE
- Righe aggiunte: [N]
- Righe rimosse: [N]
- Righe modificate: [N]
- Impatto: [basso/medio/alto]

## VERIFICA
Per ogni modifica, conferma:
✓ Risolve il bug originale
✓ Non introduce nuovi problemi
✓ È il cambiamento minimo necessario`
      }
    ]
  }
];
