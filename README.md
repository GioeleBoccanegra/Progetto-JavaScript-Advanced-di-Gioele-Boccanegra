# Progetto JavaScript Advanced di Gioele Boccanegra

Questo progetto è un'applicazione web che consente di visualizzare in tempo reale gli ultimi articoli pubblicati su Hacker News. Utilizza tecnologie avanzate come Webpack, Babel, e Axios per garantire un'esperienza fluida e reattiva.
Puoi utilizzare l'applicazione a questo link: https://gioele-boccanegra-ultime-news-hackers.netlify.app/

## Funzionalità principali

- **Caricamento dinamico degli articoli:** Gli articoli vengono caricati dinamicamente utilizzando l'API di Hacker News.
- **Responsive Design:** Interfaccia ottimizzata per desktop e dispositivi mobili.
- **Pulsante "Carica altre notizie":** Permette di caricare ulteriori articoli in modo incrementale.
- **Gestione errori:** Messaggi chiari vengono mostrati in caso di problemi con il caricamento dei dati.

## Struttura del progetto

La struttura del progetto è organizzata come segue:

```
progetto-javascript-advanced-di-gioele-boccanegra/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       ├── service.js
│   │       └── view.js
│   ├── index.html
│   └── index.js
├── dist/
├── package.json
├── webpack.config.js
└── README.md
```

## Tecnologie utilizzate

- **HTML5:** Struttura del documento.
- **CSS3:** Styling e layout responsive.
- **JavaScript ES6+:** Logica dell'applicazione e interazioni.
- **Webpack:** Bundling e gestione degli asset.
- **Babel:** Transpilazione del codice per compatibilità con i browser.
- **Axios:** Richieste HTTP verso l'API di Hacker News.
- **Lodash:** Utility per la manipolazione dei dati.

## Installazione

Segui questi passaggi per configurare l'applicazione in locale:

1. Clona il repository:
   ```bash
   git clone https://github.com/GioeleBoccanegra/Progetto-JavaScript-Advanced-di-Gioele-Boccanegra.git
   ```
2. Naviga nella directory del progetto:
   ```bash
   cd Progetto-JavaScript-Advanced-di-Gioele-Boccanegra
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```
4. Avvia l'applicazione in modalità sviluppo:
   ```bash
   npm start
   ```
5. Accedi all'applicazione tramite il browser all'indirizzo:
   ```
   http://localhost:8080
   ```

## Script npm

- `npm start`: Avvia il server di sviluppo con live-reload.
- `npm run build`: Crea un bundle ottimizzato per la produzione.

## API utilizzata

Questo progetto utilizza l'API pubblica di [Hacker News](https://github.com/HackerNews/API):
- **Endpoint per gli ID delle notizie:** `https://hacker-news.firebaseio.com/v0/newstories.json`
- **Endpoint per i dettagli della notizia:** `https://hacker-news.firebaseio.com/v0/item/<id>.json`

## Personalizzazioni

- **Stile:** Lo stile è definito in `src/assets/css/style.css`.
- **Configurazione Webpack:** La configurazione si trova in `webpack.config.js`. Puoi modificarla per adattarla alle tue esigenze.


Creato da Gioele Boccanegra.

