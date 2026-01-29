import { LucideIcon, Lightbulb, GitMerge, Target, FileEdit, Shield, RefreshCw, StopCircle, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

export interface Step {
  id: string | number;
  number?: number;
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  description: string;
  why?: string;
  implementation: string[];
  example?: {
    type: "code" | "comparison" | "checklist";
    content: any;
  };
  codeExample?: {
    language: string;
    filename: string;
    code: string;
  };
  comparison?: {
    wrong: string[];
    correct: string[];
  };
  rule: {
    text: string;
    warning?: boolean;
  };
  keyPoints: string[];
  commonMistakes?: string[];
  checklist?: {
    title: string;
    items: string[];
  };
}

export const mentalitaSteps: Step[] = [
  {
    id: 1,
    title: "Entrare in modalità intenzionale",
    subtitle: "Prima ancora di aprire l'editor",
    description: "Prima ancora di aprire VS Code, IntelliJ o qualunque editor, fermati. La tentazione di saltare subito nel codice è forte, ma è esattamente questo che porta a sessioni caotiche e improduttive. La modalità intenzionale significa sapere esattamente cosa vuoi ottenere prima di iniziare a interagire con l'AI.",
    why: "Quando inizi senza un obiettivo chiaro, l'AI diventa un distributore automatico di codice random. Fai domande vaghe, ottieni risposte vaghe. Peggio ancora: ti ritrovi a seguire tangenti interessanti ma inutili, perdendo ore su problemi che non dovevi nemmeno risolvere. L'intenzionalità ti protegge dalla dispersione.",
    implementation: [
      "Crea un file SESSION.md nella root del progetto (o usa un semplice notes.txt). Questo diventerà il tuo diario di sessione.",
      "Prima di ogni sessione di lavoro con l'AI, scrivi UNA SOLA FRASE che descrive cosa vuoi ottenere. Non due, non tre. Una.",
      "La frase deve essere così specifica che potresti verificare a fine sessione se l'hai raggiunta o no.",
      "Tieni il file aperto in una tab separata. Quando senti di star divagando, torna a leggerlo."
    ],
    example: {
      type: "code",
      content: {
        language: "markdown",
        filename: "SESSION.md",
        code: "# Sessione 14 Gennaio 2025\n\nObiettivo: Creare una funzione validateEmail() che:\n- Accetta una stringa\n- Ritorna true/false\n- Gestisce edge case (stringa vuota, null, formato invalido)\n\n---\nNOTE durante la sessione:\n- ..."
      }
    },
    rule: {
      text: "Se non riesci a scrivere l'obiettivo in una sola frase chiara, non sei pronto a chiedere nulla all'AI. Fermati e chiarisci prima cosa vuoi davvero.",
      warning: true
    },
    keyPoints: [
      "L'obiettivo scritto impedisce fisicamente di usare l'AI 'a caso' - devi confrontarti con quella frase",
      "Ti obbliga a decidere chi guida la sessione: tu o l'AI. La risposta deve essere sempre tu.",
      "Diventa un'ancora mentale: quando stai per perderti in una tangente, rileggi quella riga e chiediti 'questo mi avvicina all'obiettivo?'",
      "A fine sessione puoi verificare oggettivamente se hai raggiunto l'obiettivo o no"
    ],
    commonMistakes: [
      "Scrivere obiettivi vaghi come 'lavorare sul backend' o 'migliorare il codice'",
      "Saltare questo step perché 'tanto so cosa devo fare' - poi dopo 2 ore non sai più dove sei",
      "Cambiare obiettivo a metà sessione senza aggiornare il file"
    ]
  },
  {
    id: 2,
    title: "Separare creatività e improvvisazione",
    subtitle: "Non incollare mai subito",
    description: "L'AI ti propone una soluzione. Sembra buona. Il cursore lampeggia, pronto a incollare. STOP. Questo è il momento più pericoloso di tutta la sessione. L'impulso a incollare subito è fortissimo, ma è esattamente qui che perdi il controllo. Separare creatività (pensare alternative) da improvvisazione (accettare la prima cosa che arriva) è la differenza tra programmare con l'AI e farsi programmare dall'AI.",
    why: "Quando incolli subito, il tuo cervello si spegne. Non stai più ragionando sul problema, stai solo eseguendo. Peggio: inizi a costruire sopra codice che non hai veramente capito. E quando qualcosa si rompe (e si romperà), non saprai dove cercare. La pausa forzata mantiene attivo il tuo pensiero critico.",
    implementation: [
      "Ricevi la risposta dell'AI. NON toccare la tastiera per 30-60 secondi. Letteralmente, mani lontane.",
      "Durante questa pausa, leggi la soluzione proposta e chiediti: 'C'è un altro modo per fare questa cosa?'",
      "Scrivi almeno UN'alternativa. Può essere nel file di note, in un commento, su carta. L'importante è scriverla.",
      "Solo dopo aver annotato l'alternativa, decidi quale approccio seguire. Potrebbe essere quello dell'AI, potrebbe essere il tuo, potrebbe essere un ibrido."
    ],
    example: {
      type: "comparison",
      content: {
        left: {
          label: "Soluzione AI",
          text: "Validazione email tramite regex complessa: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/"
        },
        right: {
          label: "Alternativa annotata",
          text: "Validazione step-by-step: 1) Contiene @? 2) Ha testo prima e dopo @? 3) Il dominio ha un punto? - Più leggibile, più facile da debuggare"
        }
      }
    },
    rule: {
      text: "Se non riesci a pensare a nemmeno un'alternativa, significa che stai già seguendo l'AI alla cieca. Il tuo cervello si è spento. Riaccendilo.",
      warning: true
    },
    keyPoints: [
      "Non serve che l'alternativa sia migliore. Serve che esista. Il processo di pensarla è ciò che conta.",
      "Questo step mantiene attivo il tuo cervello invece di metterlo in modalità 'copia-incolla'",
      "Non stai delegando il pensiero architetturale all'AI - stai usando l'AI come uno dei tanti input",
      "Col tempo, le tue alternative diventeranno sempre più sofisticate e spesso migliori di quelle dell'AI"
    ],
    commonMistakes: [
      "Dire 'va bene così' senza pensare realmente ad alternative",
      "Pensare l'alternativa ma non scriverla - scriverla la rende reale e confrontabile",
      "Credere che l'AI abbia sempre ragione perché 'ne sa più di me'"
    ]
  },
  {
    id: 3,
    title: "Definire l'obiettivo prima di iniziare",
    subtitle: "Frasi verificabili, non intenti vaghi",
    description: "C'è una differenza enorme tra 'voglio gestire meglio gli errori' e 'quando l'utente inserisce un'email invalida, il sistema mostra il messaggio X e non salva nulla nel database'. La prima è un desiderio. La seconda è un obiettivo verificabile. Gli obiettivi vaghi portano a sessioni infinite dove non sai mai se hai finito. Gli obiettivi verificabili ti dicono esattamente quando fermarti.",
    why: "Il cervello umano è bravissimo a convincersi di aver fatto progressi anche quando non è vero. 'Ho migliorato la gestione errori' - davvero? Come lo sai? Cosa funziona ora che prima non funzionava? Senza criteri di verifica oggettivi, puoi passare ore a 'migliorare' senza mai finire nulla. Un obiettivo verificabile è il tuo test di realtà.",
    implementation: [
      "Prendi l'obiettivo che hai in mente e riformulalo come una frase che inizia con 'Quando...' o 'Se...'",
      "La frase deve descrivere un comportamento osservabile: cosa succede, in quali condizioni, qual è il risultato",
      "Fai il 'test del sì/no': a fine sessione, guardando il risultato, puoi dire chiaramente 'funziona' o 'non funziona'?",
      "Se la risposta è 'dipende' o 'più o meno', l'obiettivo è ancora troppo vago. Riformula."
    ],
    example: {
      type: "comparison",
      content: {
        left: {
          label: "❌ Sbagliato",
          items: [
            "Gestire meglio gli errori",
            "Rendere il codice più robusto", 
            "Migliorare la validazione",
            "Sistemare il form di login"
          ]
        },
        right: {
          label: "✓ Corretto",
          items: [
            "Quando passo una stringa vuota a validateEmail(), ritorna { valid: false, error: 'EMAIL_EMPTY' }",
            "Se l'utente clicca Login senza compilare la password, appare un bordo rosso sul campo e il testo 'Password obbligatoria'"
          ]
        }
      }
    },
    rule: {
      text: "Questa frase verificabile diventa il tuo oracolo di verità per tutta la sessione. Ogni decisione, ogni domanda all'AI, ogni riga di codice deve avvicinarti a rendere vera quella frase."
    },
    keyPoints: [
      "Un obiettivo verificabile elimina l'ambiguità: sai esattamente cosa devi costruire",
      "Ti permette di dire 'ho finito' con certezza, invece di continuare all'infinito",
      "Rende le tue domande all'AI molto più precise e quindi le risposte molto più utili",
      "È il tuo scudo contro lo scope creep - se qualcosa non serve a raggiungere quell'obiettivo, non lo fai"
    ],
    commonMistakes: [
      "Obiettivi che descrivono attività ('refactorare il modulo X') invece di risultati ('il modulo X fa Y')",
      "Obiettivi troppo ambiziosi per una singola sessione - meglio piccoli e completabili",
      "Cambiare obiettivo a metà perché 'ho scoperto che serve anche quest'altro' - annotalo per la prossima sessione"
    ]
  },
  {
    id: 4,
    title: "Accettare il codice imperfetto come bozza",
    subtitle: "Ogni output AI è una BOZZA",
    description: "L'AI ti dà codice che funziona. Fantastico. Ma 'funziona' non significa 'è pronto'. Ogni singolo output dell'AI va trattato come una bozza, una prima versione da rivedere e migliorare. Il problema non è il codice dell'AI - il problema è quando inizi a difenderlo come se fosse tuo, solo perché 'ormai funziona'.",
    why: "C'è un fenomeno psicologico potente: una volta che qualcosa funziona, diventa molto difficile cambiarlo. 'Non toccare, funziona!' Ma il codice che 'funziona e basta' è una bomba a orologeria. Non lo capisci veramente, non sai perché funziona, e quando smetterà di funzionare (e succederà) sarai nei guai. Trattarlo come bozza abbassa la barriera emotiva al refactoring.",
    implementation: [
      "Ogni volta che ricevi codice dall'AI, aggiungici immediatamente un commento: # BOZZA: prima versione AI",
      "Questo commento è un promemoria fisico che quel codice NON è ancora 'tuo' - è un punto di partenza",
      "Prima di rimuovere quel commento, devi aver fatto almeno una modifica consapevole al codice",
      "Non rimuovere il commento finché non puoi spiegare ogni riga senza guardare la risposta dell'AI"
    ],
    example: {
      type: "code",
      content: {
        language: "python",
        filename: "validation.py",
        code: "# BOZZA: prima versione generata con AI\n# TODO: capire perché usa questo pattern\n# TODO: aggiungere gestione null\n# TODO: verificare performance con input grandi\n\ndef validate_email(email: str) -> bool:\n    import re\n    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'\n    return bool(re.match(pattern, email))"
      }
    },
    rule: {
      text: "Se inizi a 'proteggere' il codice dell'AI perché 'ormai funziona' o 'ci ho già perso tempo', sei già fuori strada. Quel codice non è tuo finché non lo capisci e lo migliori.",
      warning: true
    },
    keyPoints: [
      "L'etichetta BOZZA abbassa la soglia emotiva - è più facile modificare una 'bozza' che un 'codice finito'",
      "Smetti di difendere codice mediocre solo perché l'hai già incollato",
      "Rende naturale e atteso il processo di refactoring - non è un fallimento, è il workflow normale",
      "Ti ricorda che il lavoro non è finito quando il codice funziona, ma quando lo capisci"
    ],
    commonMistakes: [
      "Rimuovere il commento BOZZA appena il codice funziona, senza averlo veramente rivisto",
      "Sentirsi in colpa a modificare codice 'che funziona' - è esattamente quello che devi fare",
      "Accumulare troppe bozze senza mai consolidarle - ogni sessione dovrebbe chiudere almeno una bozza"
    ]
  },
  {
    id: 5,
    title: "Tenere sotto controllo l'ego tecnico",
    subtitle: "Saprei spiegarlo senza guardare l'AI?",
    description: "Hai incollato il codice. Funziona. Ti senti produttivo. Ma fermati un secondo e fatti questa domanda, ad alta voce se necessario: 'Saprei spiegare questo codice a un collega senza guardare la risposta dell'AI?' Se la risposta è no, quel codice non è tuo. L'hai solo copiato. E codice copiato senza comprensione è un debito tecnico che pagherai con gli interessi.",
    why: "L'ego tecnico ci fa credere di capire cose che in realtà abbiamo solo visto. 'Sì, ho capito come funziona' - ma l'hai capito davvero o hai solo riconosciuto le parole? La differenza emerge quando qualcosa si rompe, o quando devi modificare quel codice, o quando un collega ti chiede 'perché hai fatto così?'. Il test della spiegazione è brutale ma onesto.",
    implementation: [
      "Per ogni blocco di codice AI che vuoi tenere, fermati e prova a spiegarlo a voce. Letteralmente, parla.",
      "Se inciampi, se dici 'ehm', se salti parti, non hai capito abbastanza. Torna indietro.",
      "Riscrivi almeno una riga con parole/variabili/strutture tue. Deve essere TUA, non una copia.",
      "Rinomina le variabili finché i nomi raccontano da soli cosa sta succedendo. Se non riesci, non hai capito."
    ],
    example: {
      type: "checklist",
      content: {
        question: "Prima di tenere questo codice, rispondi onestamente:",
        items: [
          { text: "Saprei spiegare ogni riga a un collega senza guardare l'AI?", checked: false },
          { text: "Capisco PERCHÉ è stata fatta questa scelta e non un'altra?", checked: false },
          { text: "Saprei modificare questo codice se i requisiti cambiassero?", checked: false },
          { text: "Saprei debuggare questo codice se smettesse di funzionare?", checked: false }
        ]
      }
    },
    rule: {
      text: "Codice non spiegabile = codice non accettabile. Non importa se funziona. Non importa se è elegante. Se non lo capisci, non è tuo e non dovrebbe essere nel tuo progetto.",
      warning: true
    },
    keyPoints: [
      "Se la risposta al test è 'no', quel codice non è tuo - anche se l'hai incollato tu",
      "Chiedere spiegazioni all'AI PRIMA di accettare il codice è sempre legittimo e utile",
      "Il refactoring non è optional: rinominare, ristrutturare, riscrivere finché è chiaro",
      "Meglio codice più semplice che capisci che codice 'elegante' che hai solo copiato"
    ],
    commonMistakes: [
      "Dire 'sì capisco' troppo in fretta - il vero test è spiegarlo ad alta voce",
      "Tenere nomi di variabili dell'AI anche quando non hanno senso nel tuo contesto",
      "Vergognarsi di chiedere spiegazioni all'AI - è esattamente ciò che devi fare"
    ]
  },
  {
    id: 6,
    title: "Lavorare per cicli brevi e verificabili",
    subtitle: "Micro-cicli, quasi banali",
    description: "La tentazione è fare 'tutto insieme' - un grande prompt, una grande risposta, un grande blocco di codice. Resisti. I cicli di lavoro devono essere piccoli, quasi banali. Così piccoli che ti sembra di perdere tempo. Ma non lo stai perdendo: stai costruendo su fondamenta solide invece che su sabbie mobili.",
    why: "I cicli grandi nascondono i problemi. Se fai 10 cose insieme e qualcosa non funziona, dove sta l'errore? Non lo sai. Devi debuggare tutto. I cicli piccoli isolano i problemi: se il ciclo 3 fallisce, sai esattamente dove cercare. Inoltre, i cicli piccoli ti danno feedback continuo - sai sempre a che punto sei.",
    implementation: [
      "Spezza l'obiettivo in micro-step. Ogni step deve essere verificabile in meno di 5 minuti.",
      "Ogni ciclo deve avere UN SOLO output osservabile: 'funziona' o 'non funziona', nessuna via di mezzo.",
      "Non passare al ciclo successivo finché quello attuale non è COMPLETAMENTE verde.",
      "Se un ciclo richiede più di una domanda complessa all'AI, è troppo grande. Spezzalo."
    ],
    example: {
      type: "checklist",
      content: {
        title: "Esempio: validazione email in micro-cicli",
        items: [
          { text: "Ciclo 1: La funzione esiste e non crasha quando la chiamo", checked: false },
          { text: "Ciclo 2: Con input valido ('test@email.com') ritorna true", checked: false },
          { text: "Ciclo 3: Con input vuoto ('') ritorna false", checked: false },
          { text: "Ciclo 4: Con input null ritorna false senza crashare", checked: false },
          { text: "Ciclo 5: Con input senza @ ritorna false", checked: false },
          { text: "Ciclo 6: Con input con @ ma senza dominio ritorna false", checked: false }
        ]
      }
    },
    rule: {
      text: "Se un ciclo richiede più di una richiesta complessa all'AI, è troppo grande. Spezzalo in cicli più piccoli. Non esistono cicli 'troppo piccoli'."
    },
    keyPoints: [
      "Cicli piccoli = feedback veloce = errori individuati subito = meno tempo perso in debugging",
      "Ogni ciclo completato è una vittoria concreta che puoi verificare - non 'sensazione di progresso'",
      "I cicli piccoli ti proteggono dal 'tutto funziona... ah no aspetta, non funziona niente'",
      "Puoi interrompere in qualsiasi momento sapendo esattamente a che punto sei"
    ],
    commonMistakes: [
      "Cicli che includono troppe cose: 'validazione + salvataggio + notifica' - sono TRE cicli",
      "Passare al ciclo successivo quando quello attuale funziona 'più o meno'",
      "Sentirsi lenti perché i cicli sono piccoli - in realtà stai andando più veloce perché non devi tornare indietro"
    ]
  },
  {
    id: 7,
    title: "Riconoscere il momento giusto per fermarsi",
    subtitle: "Regola meccanica, non emotiva",
    description: "C'è un momento in ogni sessione dove l'AI smette di essere utile. Le risposte diventano più lunghe ma meno precise. I miglioramenti sono marginali. Stai 'spremendo' l'AI cercando la risposta perfetta che non arriverà mai. Riconoscere questo momento e fermarsi è una delle skill più importanti - e più difficili - della programmazione AI-assistita.",
    why: "Dopo un certo punto, continuare a fare domande produce rendimenti decrescenti. Sprechi tempo, accumuli frustrazione, e spesso peggiori il codice invece di migliorarlo. Il problema è che 'la prossima domanda potrebbe essere quella giusta' - ma raramente lo è. Serve una regola meccanica, non basata su sensazioni, per sapere quando fermarsi.",
    implementation: [
      "Regola del 3: fai una richiesta all'AI, poi una seconda di chiarimento. Se la terza sarebbe solo una riformulazione delle prime due, STOP.",
      "Monitora questi segnali: risposte sempre più verbose, piccoli miglioramenti marginali, sensazione di 'spremere' l'AI.",
      "Quando riconosci i segnali: salva quello che hai, chiudi tutto, fai altro. Non 'ancora 5 minuti'.",
      "Riprendi dopo almeno 30 minuti di pausa. Spesso la soluzione ti verrà in mente mentre fai altro."
    ],
    example: {
      type: "checklist",
      content: {
        title: "Segnali che è ora di fermarsi",
        items: [
          { text: "Le risposte dell'AI sono sempre più lunghe ma non più utili", checked: false },
          { text: "Stai riformulando la stessa domanda sperando in una risposta diversa", checked: false },
          { text: "I miglioramenti al codice sono marginali (cambi cosmetici)", checked: false },
          { text: "Senti frustrazione crescente - 'perché non capisce cosa voglio?'", checked: false },
          { text: "Hai la sensazione di 'spremere' l'AI per l'ultima goccia", checked: false }
        ],
        warning: true
      }
    },
    rule: {
      text: "Fermarsi è parte del lavoro, non una sconfitta. Le migliori soluzioni spesso arrivano dopo una pausa, quando il cervello ha elaborato in background."
    },
    keyPoints: [
      "La regola del 3 è meccanica e non negoziabile - elimina il 'ancora un tentativo'",
      "Salvare e chiudere protegge il lavoro fatto e previene il deterioramento",
      "Le pause non sono tempo perso - il cervello continua a lavorare in background",
      "Tornare freschi spesso rivela soluzioni che non vedevi prima"
    ],
    commonMistakes: [
      "'Ancora 5 minuti' che diventano 2 ore di frustrazione crescente",
      "Credere che insistere porterà alla soluzione - dopo un certo punto, peggiora solo le cose",
      "Non salvare prima di chiudere - rischi di perdere i progressi fatti"
    ]
  },
  {
    id: 8,
    title: "Distinguere produttività da confusione",
    subtitle: "Obbligo di sintesi",
    description: "Hai scritto molto codice. Ti senti produttivo. Ma fermati: sai davvero cosa fa quel codice? La produttività vera è codice che capisci e che risolve un problema. La falsa produttività è tanto codice che 'sembra funzionare' ma che non sapresti spiegare. Il test della sintesi smaschera immediatamente la differenza.",
    why: "Il cervello è bravissimo a confondere 'ho fatto tanto' con 'ho fatto bene'. Scrivere codice dà una sensazione di produttività anche quando stai solo accumulando complessità. Il test della sintesi ti costringe a fermarti e verificare: capisco davvero cosa ho costruito? Se non riesci a spiegarlo in poche frasi, non l'hai capito - e probabilmente non funziona come pensi.",
    implementation: [
      "Fermati e prendi il codice che hai scritto nella sessione.",
      "Scrivi esattamente TRE FRASI che descrivono: 1) Cosa fa 2) Quando lo fa 3) Cosa succede se qualcosa va storto",
      "Se non riesci a scrivere queste tre frasi in modo chiaro, hai un problema: non è produttività, è confusione.",
      "Se le tre frasi sono confuse o vaghe, torna indietro e semplifica il codice finché diventano chiare."
    ],
    example: {
      type: "checklist",
      content: {
        title: "Test di sintesi: riesci a completare queste frasi?",
        items: [
          { text: "COSA FA: Questa funzione/modulo _____________", checked: false },
          { text: "QUANDO: Viene chiamata/usata quando _____________", checked: false },
          { text: "SE FALLISCE: In caso di errore, succede _____________", checked: false }
        ]
      }
    },
    rule: {
      text: "Se non riesci a sintetizzare in tre frasi, non è produttività: è accumulo di complessità. Fermati e semplifica prima di andare avanti.",
      warning: true
    },
    keyPoints: [
      "Il test delle tre frasi smaschera il falso senso di 'sto andando veloce'",
      "Codice che non sai spiegare è codice che non sai mantenere - è debito tecnico",
      "La sintesi forzata spesso rivela che il codice è più complicato del necessario",
      "Meglio poco codice che capisci che tanto codice che 'sembra funzionare'"
    ],
    commonMistakes: [
      "Saltare questo test perché 'non ho tempo' - ci vuole 1 minuto e può salvarne ore",
      "Scrivere frasi vaghe tipo 'gestisce i dati' - devono essere specifiche",
      "Continuare ad aggiungere codice quando non riesci a spiegare quello che hai già"
    ]
  },
  {
    id: 9,
    title: "Fidarsi del processo, non del risultato immediato",
    subtitle: "Anche se funziona, pianifica il prossimo step",
    description: "Il codice funziona. Tentazione fortissima: dichiarare vittoria e passare ad altro. Ma 'funziona' è solo l'inizio, non la fine. Il codice che 'funziona e basta' è sempre provvisorio. Il codice professionale è quello che non solo funziona, ma è chiaro, testato, mantenibile. Pianificare l'iterazione successiva ti mantiene in controllo e trasforma il codice in un processo evolutivo.",
    why: "L'effetto 'finito!' è pericoloso. Appena qualcosa funziona, il cervello vuole chiudere e passare oltre. Ma il codice che abbandoni 'perché funziona' tornerà a morderti. Sarà difficile da modificare, oscuro da debuggare, fragile ai cambiamenti. Annotare cosa migliorare SUBITO, mentre ce l'hai fresco, previene questo problema.",
    implementation: [
      "Anche se il codice funziona perfettamente, scrivi: 'Iterazione successiva prevista: migliorare X'",
      "X può essere qualsiasi cosa: leggibilità, gestione errori, test, performance, sicurezza, documentazione",
      "Non deve essere un miglioramento grande - anche 'rinominare le variabili per chiarezza' va bene",
      "Questa nota diventa il punto di partenza della prossima sessione su quel codice"
    ],
    example: {
      type: "code",
      content: {
        language: "markdown",
        filename: "TODO.md",
        code: "# validateEmail() - FUNZIONA ✓\n\nIterazioni successive previste:\n\n1. [ ] Aggiungere test per edge case (email con caratteri speciali)\n2. [ ] Migliorare messaggio di errore (ora dice solo 'invalid')\n3. [ ] Considerare validazione asincrona del dominio\n4. [ ] Documentare il pattern regex usato\n\nNote: funziona per il 90% dei casi, ma per email enterprise\npotrebbero servire regole più sofisticate."
      }
    },
    rule: {
      text: "Questo approccio trasforma il codice in processo evolutivo, non in prodotto finito. Il codice non è mai 'finito' - è solo alla sua versione attuale."
    },
    keyPoints: [
      "Evita l'effetto 'finito troppo presto' che porta ad abbandonare codice fragile",
      "Ti mantiene in controllo: sai sempre qual è il prossimo passo",
      "Trasforma ogni pezzo di codice in qualcosa che può crescere e migliorare",
      "Le note a caldo sono molto più utili di quelle scritte settimane dopo"
    ],
    commonMistakes: [
      "Non annotare nulla perché 'tanto me lo ricordo' - non te lo ricorderai",
      "Annotare cose troppo vaghe tipo 'migliorare' - deve essere specifico e actionable",
      "Rimandare le iterazioni all'infinito - pianifica anche QUANDO le farai"
    ]
  },
  {
    id: 10,
    title: "Chiudere ogni sessione in modo consapevole",
    subtitle: "Una sola etichetta: valido, da migliorare, da scartare",
    description: "La sessione finisce. Chiudi tutto e passi ad altro. Ma aspetta - in che stato è il codice che hai scritto? È pronto per la produzione? Ha bisogno di altro lavoro? È da buttare? Senza una chiusura esplicita, queste domande restano sospese e tornano a tormentarti. Una semplice etichetta chiude il loop cognitivo e rende il lavoro tracciabile.",
    why: "Il 'ci torno poi' è dove i progetti vanno a morire. Senza una chiusura esplicita, il codice resta in un limbo: non è finito, non è abbandonato, è solo... lì. Settimane dopo non ricorderai in che stato era. L'etichetta ti costringe a fare una valutazione onesta ORA, quando ce l'hai fresco, e a documentarla per il te futuro.",
    implementation: [
      "A fine sessione, prima di chiudere qualsiasi cosa, scegli UNA sola etichetta per il lavoro fatto:",
      "VALIDO = può andare in produzione così com'è, o comunque è completo per lo scopo attuale",
      "DA MIGLIORARE = funziona ma ha bisogno di altro lavoro prima di essere 'finito' (specifica COSA)",
      "DA SCARTARE = non funziona o ha preso una strada sbagliata, meglio ricominciare",
      "Scrivi l'etichetta nel file di sessione con una breve spiegazione (1-2 frasi)"
    ],
    example: {
      type: "code",
      content: {
        language: "markdown",
        filename: "SESSION.md",
        code: "# Sessione 14 Gennaio 2025\n\nObiettivo: Creare funzione validateEmail()\n\n## Stato finale: DA MIGLIORARE\n\nMotivo: La validazione base funziona, ma mancano:\n- Test su edge case (email con +, con subdomain)\n- Gestione errori più descrittiva\n- Documentazione del regex\n\nProssima sessione: completare i test e migliorare i messaggi di errore.\n\nTempo stimato per completare: 30 min"
      }
    },
    rule: {
      text: "L'etichetta chiude il loop cognitivo e impedisce il 'ci torno poi' indefinito. Ogni pezzo di codice deve avere uno stato chiaro."
    },
    keyPoints: [
      "Chiude il loop cognitivo: il cervello può 'archiviare' quella sessione invece di tenerla in sospeso",
      "Impedisce il 'ci torno poi' che diventa 'non ci torno mai' o 'non ricordo cosa dovevo fare'",
      "Rende il lavoro tracciabile: sai sempre lo stato di ogni pezzo di codice",
      "Il te futuro ti ringrazierà per la chiarezza quando tornerai su quel codice"
    ],
    commonMistakes: [
      "Non mettere nessuna etichetta perché 'è ovvio' - non lo sarà tra una settimana",
      "Mettere sempre 'valido' per non ammettere che c'è lavoro da fare",
      "Etichette senza spiegazione: 'da migliorare' non dice nulla, 'da migliorare (mancano test X e Y)' sì"
    ]
  }
];
