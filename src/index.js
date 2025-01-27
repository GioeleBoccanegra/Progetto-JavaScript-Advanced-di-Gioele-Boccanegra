import './assets/css/style.css'; // Importa lo stile
import { getHackerNewsId } from './assets/js/service.js'; // Importa il servizio
import { loadNews } from './assets/js/view.js'; // Importa la gestione della vista

// Esempio di inizializzazione
(async () => {
  const newsIds = await getHackerNewsId();
  if (newsIds) {
    loadNews(newsIds);
  }
})();