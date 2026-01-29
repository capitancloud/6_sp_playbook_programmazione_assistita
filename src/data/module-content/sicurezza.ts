import { Step } from "./mentalita";
import { ShieldAlert, KeyRound, Lock, Filter, Package, UserCheck, FileText, Server, Swords, UserCog } from "lucide-react";

export const sicurezzaSteps: Step[] = [
  {
    id: 1,
    number: 1,
    icon: ShieldAlert,
    title: "Non fidarsi dell'input",
    subtitle: "Ogni input è ostile fino a prova contraria",
    description: `**Regola base:** ogni input è ostile fino a prova contraria. Non importa da dove arriva, non importa chi lo manda.

Questa è la regola fondamentale della sicurezza. Ogni dato che entra nel tuo sistema può essere manipolato, falsificato, o usato per attaccare. "Tanto arriva dal frontend" non è una garanzia. "Tanto è interno" non è una protezione.

**Con l'AI questo è critico:**

L'AI tende a fidarsi del contesto. Genera codice che assume input validi. Tu devi essere paranoico. Ogni input non validato è una superficie d'attacco in attesa di essere sfruttata.

**Azioni concrete:**

Valida tipo: è davvero una stringa? Un numero? Valida formato: rispetta il pattern atteso? Valida range: è nei limiti accettabili? Valida lunghezza: non è troppo lungo o troppo corto?`,
    why: `Gli attacchi più comuni sfruttano input non validati: SQL injection, XSS, buffer overflow. Tutti nascono dalla fiducia implicita nell'input.

Con l'AI, il rischio aumenta: il codice generato assume contesti "normali" e non considera attacchi maliziosi.`,
    implementation: [
      "Valida TIPO: è il tipo di dato atteso?",
      "Valida FORMATO: rispetta il pattern richiesto?",
      "Valida RANGE: è nei limiti accettabili?",
      "Valida LUNGHEZZA: non è troppo lungo/corto?",
      "Mai fidarsi di 'arriva dal frontend' o 'è interno'"
    ],
    codeExample: {
      language: "typescript",
      filename: "input-validation.ts",
      code: `// ❌ Fiducia implicita nell'input
function processUser(data: any) {
  return db.query(\`SELECT * FROM users WHERE id = \${data.id}\`);
  // SQL Injection waiting to happen
}

// ✓ Validazione completa
import { z } from 'zod';

const userInputSchema = z.object({
  id: z.number().int().positive().max(999999),
  email: z.string().email().max(255),
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\\s]+$/)
});

function processUser(data: unknown) {
  const validated = userInputSchema.parse(data);
  return db.query('SELECT * FROM users WHERE id = ?', [validated.id]);
}`
    },
    rule: {
      text: "Se un input non è validato esplicitamente, è una superficie d'attacco.",
      warning: true
    },
    keyPoints: [
      "Ogni input è ostile fino a validazione",
      "Valida tipo, formato, range, lunghezza",
      "Non fidarti della provenienza",
      "L'AI non considera attacchi, tu devi farlo"
    ],
    commonMistakes: [
      "Fidarsi di input 'dal frontend'",
      "Assumere che input 'interni' siano sicuri",
      "Validare solo client-side",
      "Accettare qualsiasi cosa dall'AI senza aggiungere validazione"
    ],
    checklist: {
      title: "Validazione input",
      items: [
        "Tipo validato",
        "Formato validato",
        "Range validato",
        "Lunghezza limitata"
      ]
    }
  },
  {
    id: 2,
    number: 2,
    icon: KeyRound,
    title: "No credenziali hardcoded",
    subtitle: "Se finisce nel repo, non è un segreto",
    description: `Controlla tutto il codice per: **password, token, API key, secret di test.** Anche nei commenti, nei file temporanei, negli esempi generati dall'AI.

Le credenziali hardcoded sono uno degli errori più comuni e più pericolosi. Una volta nel repo, sono accessibili a chiunque abbia accesso al codice. E i repo vengono clonati, forkati, condivisi.

**Dove cercare:**

Negli esempi che l'AI genera. Nei file di configurazione. Nei commenti "temporanei". Nei file di test. Nelle variabili con nomi come \`password\`, \`secret\`, \`key\`, \`token\`.

**La regola:**

Usa sempre variabili d'ambiente. Usa file di configurazione esclusi dal repo (.gitignore). Mai, mai credenziali nel codice sorgente.`,
    why: `Le credenziali nel codice sono credenziali pubbliche. I repo vengono compromessi, clonati, condivisi. Una API key hardcoded è una API key regalata.

Con l'AI, il rischio aumenta: gli esempi generati spesso includono credenziali di esempio che sembrano reali.`,
    implementation: [
      "Cerca nel codice: password, token, key, secret",
      "Controlla commenti e file temporanei",
      "Verifica gli esempi generati dall'AI",
      "Usa variabili d'ambiente per tutti i segreti",
      "Aggiungi file sensibili a .gitignore"
    ],
    codeExample: {
      language: "typescript",
      filename: "no-hardcoded-secrets.ts",
      code: `// ❌ Credenziali hardcoded
const API_KEY = "sk-1234567890abcdef";
const DB_PASSWORD = "admin123";
// Anche in commenti: // vecchia key: sk-oldkey123

// ❌ Esempi AI pericolosi
const config = {
  stripe_key: "sk_test_abc123", // "solo per test"
};

// ✓ Variabili d'ambiente
const API_KEY = process.env.API_KEY;
const DB_PASSWORD = process.env.DB_PASSWORD;

// ✓ Verifica che esistano
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

// ✓ .gitignore
// .env
// .env.local
// config.secret.json`
    },
    rule: {
      text: "Se finisce nel repo, non è un segreto.",
      warning: true
    },
    keyPoints: [
      "Mai credenziali nel codice sorgente",
      "Controlla anche commenti e file temporanei",
      "Usa sempre variabili d'ambiente",
      "Verifica gli esempi generati dall'AI"
    ],
    commonMistakes: [
      "API key 'solo per test' nel codice",
      "Password nei commenti",
      "Secret in file di configurazione nel repo",
      "Esempi AI con credenziali realistiche"
    ],
    checklist: {
      title: "Controllo credenziali",
      items: [
        "Nessuna password hardcoded",
        "Nessun token nel codice",
        "Nessuna API key nei sorgenti",
        "File sensibili in .gitignore"
      ]
    }
  },
  {
    id: 3,
    number: 3,
    icon: Lock,
    title: "Segreti espliciti",
    subtitle: "Un segreto senza ciclo di vita è una bomba",
    description: `Non basta "non hardcodare". **Devi definire: dove sono i segreti, chi li legge, quando ruotano, cosa succede se leakano.**

La gestione dei segreti è un processo, non una singola azione. Ogni segreto ha un ciclo di vita: creazione, distribuzione, rotazione, revoca. Se non lo definisci, non lo controlli.

**Anche in prototipo:**

Annota come andrebbe fatto in produzione. Non lasciare che il prototipo diventi produzione senza un piano per i segreti.

**Con l'AI:**

Se non specifichi la gestione dei segreti, verrà ignorata. L'AI ottimizza per funzionalità, non per sicurezza operativa.`,
    why: `I segreti senza gestione diventano segreti permanenti. Mai ruotati, mai revocati, dimenticati. Quando leakano (e succederà), non sai nemmeno quali sono.

La gestione esplicita trasforma i segreti da bombe a orologeria a componenti controllati.`,
    implementation: [
      "Documenta DOVE sono i segreti (vault, env, config)",
      "Documenta CHI può accedervi",
      "Definisci QUANDO ruotano (frequenza)",
      "Pianifica COSA fare se leakano",
      "Anche in prototipo: annota il piano per produzione"
    ],
    codeExample: {
      language: "markdown",
      filename: "secrets-management.md",
      code: `# Gestione Segreti

## Inventario
| Segreto | Dove | Chi accede | Rotazione |
|---------|------|------------|-----------|
| DB_PASSWORD | Vault | Backend only | 90 giorni |
| API_KEY | .env.prod | CI/CD | 30 giorni |
| JWT_SECRET | Vault | Auth service | 7 giorni |

## Procedura leak
1. Revoca immediata del segreto compromesso
2. Rotazione di tutti i segreti correlati
3. Audit degli accessi recenti
4. Notifica al team

## Note prototipo
Attualmente in .env locale.
Prima di produzione: migrare a Vault.`
    },
    rule: {
      text: "Un segreto senza ciclo di vita è una bomba a orologeria.",
      warning: true
    },
    keyPoints: [
      "Documenta dove sono i segreti",
      "Definisci chi può accedervi",
      "Pianifica la rotazione",
      "Prepara procedura per leak"
    ],
    commonMistakes: [
      "Segreti senza documentazione",
      "Nessun piano di rotazione",
      "Nessuna procedura per leak",
      "Prototipo che diventa produzione senza piano"
    ],
    checklist: {
      title: "Gestione segreti",
      items: [
        "Inventario segreti documentato",
        "Accessi definiti",
        "Piano rotazione attivo",
        "Procedura leak pronta"
      ]
    }
  },
  {
    id: 4,
    number: 4,
    icon: Filter,
    title: "Sanitizzazione",
    subtitle: "Validare non basta, bisogna anche sanitizzare",
    description: `Ogni input esterno deve essere: **filtrato, normalizzato, validato prima dell'uso.** La validazione dice "è accettabile?". La sanitizzazione dice "è sicuro?".

La differenza è cruciale. Un input può essere valido (formato corretto) ma contenere payload malevoli. La sanitizzazione rimuove o neutralizza questi payload.

**Attenzione particolare a:**

Input testuali (HTML, script injection). Path (directory traversal). Comandi (command injection). Query (SQL injection, NoSQL injection).

**Con l'AI:**

Spesso propone sanitizzazione generica che non è adatta al contesto. Tu verifica che sia appropriata per l'uso specifico.`,
    why: `La validazione controlla il formato, la sanitizzazione neutralizza i pericoli. Sono complementari, non alternative. Un input valido può ancora essere pericoloso.

Il contesto determina la sanitizzazione: un input sicuro per il database potrebbe essere pericoloso per HTML.`,
    implementation: [
      "Filtra: rimuovi caratteri non permessi",
      "Normalizza: porta a forma canonica",
      "Valida: controlla formato e contenuto",
      "Sanitizza per contesto: HTML, SQL, path, ecc.",
      "Verifica che la sanitizzazione AI sia adatta al tuo caso"
    ],
    codeExample: {
      language: "typescript",
      filename: "sanitization.ts",
      code: `// ❌ Solo validazione, no sanitizzazione
function displayComment(text: string) {
  if (text.length < 1000) { // "validato"
    element.innerHTML = text; // XSS!
  }
}

// ✓ Validazione + Sanitizzazione per contesto
import DOMPurify from 'dompurify';

function displayComment(text: string) {
  // 1. Valida
  if (!text || text.length > 1000) {
    throw new Error("Invalid comment");
  }
  // 2. Sanitizza per HTML
  const clean = DOMPurify.sanitize(text);
  element.innerHTML = clean;
}

// Sanitizzazione per SQL
function queryUser(id: string) {
  // Usa prepared statements, non concatenazione
  return db.query('SELECT * FROM users WHERE id = ?', [id]);
}

// Sanitizzazione per path
function readFile(filename: string) {
  // Previeni directory traversal
  const safeName = path.basename(filename);
  return fs.readFile(path.join(SAFE_DIR, safeName));
}`
    },
    rule: {
      text: "Validare non basta, bisogna anche sanitizzare.",
      warning: false
    },
    keyPoints: [
      "Validazione ≠ sanitizzazione",
      "Sanitizza per contesto specifico",
      "HTML, SQL, path richiedono sanitizzazioni diverse",
      "Verifica che la sanitizzazione AI sia adatta"
    ],
    commonMistakes: [
      "Credere che validazione = sicurezza",
      "Sanitizzazione generica per tutti i contesti",
      "Concatenare input in query/comandi",
      "Fidarsi della sanitizzazione AI senza verificare"
    ],
    checklist: {
      title: "Sanitizzazione",
      items: [
        "Input filtrati",
        "Input normalizzati",
        "Sanitizzazione specifica per contesto",
        "Prepared statements per SQL"
      ]
    }
  },
  {
    id: 5,
    number: 5,
    icon: Package,
    title: "Dipendenze",
    subtitle: "Ogni dipendenza è una fiducia esterna",
    description: `Per ogni libreria usata chiediti: **è mantenuta? È necessaria? Ha CVE note?** Anche se suggerita dall'AI, anche se è "standard".

Ogni dipendenza è codice che non controlli ma che esegui. Ogni dipendenza ha bug, vulnerabilità, e potenziali sorprese. Meno dipendenze = meno superficie d'attacco.

**Azioni concrete:**

Controlla le versioni: sono aggiornate? Evita dipendenze inutili: serve davvero o c'è un'alternativa nativa? Preferisci standard library: meno dipendenze esterne, più controllo.

**Con l'AI:**

L'AI suggerisce librerie liberamente, senza considerare il costo di sicurezza. Tu valuta se ogni dipendenza è davvero necessaria.`,
    why: `Le dipendenze sono il vettore di attacco più comune nel software moderno. Una libreria compromessa compromette tutto il codice che la usa.

Minimizzare le dipendenze non è paranoia, è igiene di sicurezza.`,
    implementation: [
      "Per ogni dipendenza: è mantenuta attivamente?",
      "Ha vulnerabilità note (CVE)?",
      "È davvero necessaria o c'è alternativa nativa?",
      "Controlla versioni: sono aggiornate?",
      "Preferisci standard library quando possibile"
    ],
    codeExample: {
      language: "typescript",
      filename: "dependency-audit.ts",
      code: `// Controllo dipendenze
// npm audit
// npx npm-check-updates

// ❌ Dipendenza non necessaria
import leftPad from 'left-pad'; // Davvero?
const padded = leftPad(str, 10);

// ✓ Usa funzionalità native
const padded = str.padStart(10);

// ❌ Libreria non mantenuta
import oldLib from 'old-unmaintained-lib';
// Ultimo commit: 3 anni fa, CVE aperte

// ✓ Audit regolare
// package.json scripts:
{
  "scripts": {
    "audit": "npm audit",
    "audit:fix": "npm audit fix",
    "deps:check": "npx npm-check-updates"
  }
}

// ✓ Documenta le dipendenze critiche
// SECURITY.md
// Dipendenze con accesso a dati sensibili:
// - auth-lib: gestisce JWT, verificare CVE mensilmente`
    },
    rule: {
      text: "Ogni dipendenza è una fiducia esterna.",
      warning: false
    },
    keyPoints: [
      "Verifica manutenzione attiva",
      "Controlla CVE note",
      "Minimizza dipendenze non necessarie",
      "Preferisci funzionalità native"
    ],
    commonMistakes: [
      "Aggiungere librerie senza valutare necessità",
      "Non controllare vulnerabilità note",
      "Usare versioni obsolete",
      "Fidarsi ciecamente dei suggerimenti AI"
    ],
    checklist: {
      title: "Audit dipendenze",
      items: [
        "Audit sicurezza eseguito (npm audit)",
        "Dipendenze non necessarie rimosse",
        "Versioni aggiornate",
        "CVE note controllate"
      ]
    }
  },
  {
    id: 6,
    number: 6,
    icon: UserCheck,
    title: "Minimo privilegio",
    subtitle: "Privilegi extra oggi sono incidenti domani",
    description: `Verifica permessi, ruoli, accessi. **Il codice deve fare solo ciò che serve, con i privilegi minimi necessari.**

Il principio del minimo privilegio è semplice: dai solo i permessi strettamente necessari. Se un componente non ha bisogno di accesso admin, non darglielo "per comodità".

**Con l'AI:**

L'AI tende a usare permessi larghi "per semplicità". \`chmod 777\`, \`GRANT ALL\`, \`role: admin\` sono soluzioni rapide ma pericolose. Tu restringi sempre.

**Il test:**

Per ogni permesso chiediti: "Cosa succederebbe se questo componente fosse compromesso?" Se la risposta è "accesso a tutto", hai troppi privilegi.`,
    why: `Quando (non se) un componente viene compromesso, i danni sono proporzionali ai suoi privilegi. Privilegi minimi = danni minimi.

Il minimo privilegio non è paranoia, è contenimento del danno.`,
    implementation: [
      "Per ogni componente: quali permessi ha?",
      "Sono i minimi necessari per funzionare?",
      "Rimuovi privilegi 'per comodità'",
      "Separa i ruoli: admin, user, service",
      "Testa: cosa succede se questo componente è compromesso?"
    ],
    codeExample: {
      language: "typescript",
      filename: "least-privilege.ts",
      code: `// ❌ Troppi privilegi
const dbConnection = createConnection({
  user: 'root',
  password: process.env.DB_ROOT_PASSWORD,
  // Accesso a tutto il database come root
});

// ✓ Minimo privilegio
const dbConnection = createConnection({
  user: 'app_readonly',
  password: process.env.DB_APP_PASSWORD,
  // Solo lettura su tabelle specifiche
});

// ❌ Permessi larghi
await fs.chmod('/app/data', 0o777); // Tutti possono tutto

// ✓ Permessi minimi
await fs.chmod('/app/data', 0o640); // Owner read/write, group read

// ❌ API key con tutti gli scope
const api = new ApiClient({ 
  key: ADMIN_KEY, 
  scopes: ['*'] 
});

// ✓ Solo scope necessari
const api = new ApiClient({ 
  key: LIMITED_KEY, 
  scopes: ['read:users', 'write:own-data'] 
});`
    },
    rule: {
      text: "Privilegi extra oggi sono incidenti domani.",
      warning: true
    },
    keyPoints: [
      "Solo privilegi strettamente necessari",
      "Rimuovi permessi 'per comodità'",
      "Separa ruoli e responsabilità",
      "Testa: danni se compromesso?"
    ],
    commonMistakes: [
      "root/admin 'per semplicità'",
      "chmod 777 'per far funzionare'",
      "Tutti gli scope API 'così non ho problemi'",
      "Accettare privilegi larghi dall'AI"
    ],
    checklist: {
      title: "Verifica privilegi",
      items: [
        "Nessun accesso root non necessario",
        "Permessi file restrittivi",
        "API scope minimali",
        "Ruoli separati correttamente"
      ]
    }
  },
  {
    id: 7,
    number: 7,
    icon: FileText,
    title: "Log sicuri",
    subtitle: "Un log è spesso un leak silenzioso",
    description: `Controlla cosa viene loggato: input, errori, stack trace. **Evita: dati sensibili, credenziali, informazioni interne inutili.**

I log sono una finestra sul tuo sistema. Utili per debug, ma anche per attaccanti. Ogni dato loggato è un dato potenzialmente esposto.

**Cosa NON loggare mai:**

Password (anche hashate). Token e credenziali. Dati personali (PII). Numeri di carta. Stack trace completi in produzione.

**Cosa loggare con attenzione:**

Input utente (potrebbe contenere dati sensibili). Errori (potrebbero rivelare architettura). Request ID (per tracciabilità senza esporre dati).`,
    why: `I log sono spesso l'ultimo posto dove si pensa alla sicurezza. Ma sono persistenti, aggregati, e spesso accessibili a più persone del codice sorgente.

Un log con password è una password in chiaro salvata su disco.`,
    implementation: [
      "Audit: cosa viene loggato attualmente?",
      "Mai: password, token, credenziali",
      "Attenzione: input utente, errori dettagliati",
      "Usa: request ID per tracciabilità",
      "Riduci verbosità in produzione"
    ],
    codeExample: {
      language: "typescript",
      filename: "secure-logging.ts",
      code: `// ❌ Log pericolosi
console.log("User login:", { 
  email: user.email,
  password: user.password, // MAI!
  token: authToken // MAI!
});

console.error("Error:", error); // Stack trace completo in prod

// ✓ Log sicuri
console.log("User login:", { 
  email: maskEmail(user.email), // user***@domain.com
  requestId: req.id,
  timestamp: new Date().toISOString()
});

// ✓ Errori senza dettagli sensibili
console.error("Error:", {
  requestId: req.id,
  errorCode: error.code,
  // In dev: error.stack
  // In prod: solo codice errore
  ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
});

// ✓ Utility per mascherare
function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  return \`\${user.slice(0, 3)}***@\${domain}\`;
}`
    },
    rule: {
      text: "Un log è spesso un leak silenzioso.",
      warning: true
    },
    keyPoints: [
      "Mai loggare password o credenziali",
      "Mascherare dati personali",
      "Ridurre dettagli in produzione",
      "Usare request ID per tracciabilità"
    ],
    commonMistakes: [
      "Loggare password 'per debug'",
      "Stack trace completi in produzione",
      "Input utente non mascherato",
      "console.log dimenticati nel codice"
    ],
    checklist: {
      title: "Sicurezza log",
      items: [
        "Nessuna password loggata",
        "Nessun token loggato",
        "Dati personali mascherati",
        "Verbosità ridotta in produzione"
      ]
    }
  },
  {
    id: 8,
    number: 8,
    icon: Server,
    title: "Separazione ambienti",
    subtitle: "Dev non deve mai essere valido in prod",
    description: `Anche in piccolo, separa: **dev, test, prod.** Config diverse, segreti diversi, comportamenti diversi.

La separazione degli ambienti previene errori catastrofici. Il database di test non deve mai puntare a quello di produzione. Le credenziali di dev non devono funzionare in prod.

**Separazione minima:**

URL diversi. Credenziali diverse. Comportamenti diversi (logging, errori). Flag di ambiente espliciti.

**Con l'AI:**

Se non dichiari ambienti, verranno mescolati. L'AI non distingue tra dev e prod se non glielo dici esplicitamente.`,
    why: `La mescolanza di ambienti è la causa di innumerevoli incidenti. Database di produzione cancellati da script di test. Dati di test inviati a utenti reali.

La separazione chiara previene errori che altrimenti sono inevitabili.`,
    implementation: [
      "Definisci esplicitamente gli ambienti: dev, test, prod",
      "Config diverse per ogni ambiente",
      "Segreti diversi e non intercambiabili",
      "Comportamenti diversi (logging, errori)",
      "Verifica: dev non può accedere a prod"
    ],
    codeExample: {
      language: "typescript",
      filename: "environment-separation.ts",
      code: `// ❌ Nessuna separazione
const DB_URL = "postgres://prod-server/mydb";
// Usato sia in dev che in prod!

// ✓ Separazione esplicita
const config = {
  development: {
    dbUrl: "postgres://localhost/mydb_dev",
    apiUrl: "http://localhost:3000",
    logLevel: "debug",
    features: { testMode: true }
  },
  production: {
    dbUrl: process.env.DATABASE_URL, // Mai hardcoded
    apiUrl: "https://api.myapp.com",
    logLevel: "error",
    features: { testMode: false }
  }
};

const env = process.env.NODE_ENV || 'development';
export const currentConfig = config[env];

// ✓ Verifica ambiente
if (env === 'production') {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL required in production");
  }
  if (currentConfig.features.testMode) {
    throw new Error("testMode cannot be true in production");
  }
}`
    },
    rule: {
      text: "Ciò che funziona in dev non deve mai essere valido in prod per errore.",
      warning: false
    },
    keyPoints: [
      "Ambienti esplicitamente definiti",
      "Config separate e non intercambiabili",
      "Segreti diversi per ogni ambiente",
      "Verifica che dev non acceda a prod"
    ],
    commonMistakes: [
      "Stessi segreti in dev e prod",
      "Nessuna variabile di ambiente",
      "Test che puntano a prod 'per sbaglio'",
      "Flag di test attivi in produzione"
    ],
    checklist: {
      title: "Separazione ambienti",
      items: [
        "Ambienti definiti esplicitamente",
        "Config separate",
        "Segreti non intercambiabili",
        "Verifiche anti-mescolanza"
      ]
    }
  },
  {
    id: 9,
    number: 9,
    icon: Swords,
    title: "Mentalità offensiva",
    subtitle: "Se non lo attacchi tu, lo farà qualcun altro",
    description: `Rileggi il codice come se volessi romperlo. **Cosa puoi controllare? Cosa puoi forzare? Cosa puoi abusare?**

La mentalità offensiva è il test finale di sicurezza. Non basta scrivere codice difensivo, devi attivamente cercare di romperlo. Ogni falla che trovi tu è una falla che non troverà un attaccante.

**Cosa simulare:**

Input malevoli: cosa succede con caratteri speciali, lunghezze estreme? Uso improprio: cosa succede se chiamo le API nell'ordine sbagliato? Sequenze strane: cosa succede con timing inaspettati?

**Il vantaggio:**

Tu conosci il codice. Sai dove sono i punti deboli. Usalo.`,
    why: `Il codice che non è mai stato attaccato non è sicuro, è solo non testato. La mentalità offensiva trasforma la sicurezza da speranza a verifica.

Meglio trovare i problemi durante lo sviluppo che in produzione.`,
    implementation: [
      "Rileggi il codice come un attaccante",
      "Prova input malevoli: speciali, estremi, vuoti",
      "Testa uso improprio: ordini sbagliati, stati invalidi",
      "Simula timing strani: timeout, race condition",
      "Documenta ogni falla trovata e fixata"
    ],
    codeExample: {
      language: "typescript",
      filename: "offensive-testing.ts",
      code: `// Mentalità offensiva: cerca di rompere il tuo codice

function testAsAttacker(endpoint: string) {
  // Test 1: Input malevoli
  const maliciousInputs = [
    "'; DROP TABLE users; --",           // SQL injection
    "<script>alert('xss')</script>",     // XSS
    "../../../etc/passwd",                // Path traversal
    "A".repeat(1000000),                  // Buffer overflow
    null, undefined, {}, [],              // Tipi inaspettati
  ];
  
  for (const input of maliciousInputs) {
    console.log(\`Testing: \${input}\`);
    const result = callEndpoint(endpoint, input);
    // Il sistema crasha? Ritorna errori sensati?
  }
  
  // Test 2: Sequenze strane
  // Chiama logout prima di login
  // Chiama delete prima di create
  // Chiama 1000 volte in 1 secondo
  
  // Test 3: Race condition
  // Due richieste simultanee sullo stesso dato
  // Modifica durante lettura
}

// Documenta i risultati
// | Test | Risultato | Fix necessario |
// |------|-----------|----------------|
// | SQL injection | Bloccato | ✓ |
// | XSS | VULNERABILE | Aggiungere sanitization |`
    },
    rule: {
      text: "Se non provi ad attaccarlo tu, lo farà qualcun altro.",
      warning: true
    },
    keyPoints: [
      "Pensa come un attaccante",
      "Prova input malevoli attivamente",
      "Testa sequenze e timing strani",
      "Documenta e fixa ogni falla"
    ],
    commonMistakes: [
      "Testare solo il 'happy path'",
      "Fidarsi che 'funziona quindi è sicuro'",
      "Non simulare attacchi reali",
      "Non documentare i test di sicurezza"
    ],
    checklist: {
      title: "Test offensivo",
      items: [
        "Input malevoli testati",
        "Uso improprio simulato",
        "Timing strani verificati",
        "Falle documentate e fixate"
      ]
    }
  },
  {
    id: 10,
    number: 10,
    icon: UserCog,
    title: "Responsabilità umana",
    subtitle: "L'AI non è responsabile. Tu sì.",
    description: `Ultima regola, la più importante: **L'AI non è responsabile. Tu sì.**

Non "l'ha detto l'AI". Non "sembrava giusto". Non "funzionava nei test". Il codice che esce dal tuo editor è tuo. Ogni decisione, ogni bug, ogni vulnerabilità.

**Cosa significa in pratica:**

Rivedi ogni suggerimento AI come se l'avessi scritto tu. Verifica ogni claim sulla sicurezza. Non fidarti, verifica. Se non capisci, non accettare.

**Usare l'AI non riduce la responsabilità:**

La aumenta. Hai più potere, quindi hai più responsabilità. L'AI amplifica le tue capacità, ma anche le conseguenze delle tue scelte.`,
    why: `L'AI è uno strumento, non un esperto responsabile. Non può essere citata in tribunale, non può essere licenziata, non può pagare i danni. Tu sì.

La responsabilità finale è sempre umana. Ogni riga di codice che finisce in produzione è una tua scelta.`,
    implementation: [
      "Rivedi ogni suggerimento AI come codice tuo",
      "Verifica ogni claim sulla sicurezza",
      "Se non capisci, non accettare",
      "Documenta le decisioni e le motivazioni",
      "Ricorda: il codice che esce è TUO"
    ],
    codeExample: {
      language: "markdown",
      filename: "responsibility.md",
      code: `# Checklist Responsabilità

## Prima di accettare codice AI

□ Ho letto e capito ogni riga?
□ Ho verificato le claim sulla sicurezza?
□ Ho testato i casi edge?
□ Potrei difendere questo codice in una review?

## Domande da porsi

- "Perché funziona?" (non solo "funziona?")
- "Quali sono i rischi?" (non solo "passa i test?")
- "Cosa potrebbe andare storto?" (non solo "cosa va bene?")

## Responsabilità esplicita

Questo codice è stato:
- Generato con assistenza AI: ✓
- Rivisto da: [tuo nome]
- Verificato per sicurezza: [data]
- Approvato per produzione: [tuo nome]

L'AI ha assistito. La responsabilità è mia.`
    },
    rule: {
      text: "Usare l'AI non riduce la responsabilità, la aumenta.",
      warning: true
    },
    keyPoints: [
      "L'AI non è responsabile, tu sì",
      "Rivedi tutto come codice tuo",
      "Verifica, non fidarti",
      "Se non capisci, non accettare"
    ],
    commonMistakes: [
      "'L'ha detto l'AI'",
      "'Sembrava giusto'",
      "'Funzionava nei test'",
      "Accettare senza capire"
    ],
    checklist: {
      title: "Responsabilità",
      items: [
        "Ogni riga capita e verificata",
        "Claim sicurezza testate",
        "Decisioni documentate",
        "Responsabilità accettata"
      ]
    }
  }
];
