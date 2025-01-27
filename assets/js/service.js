import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

// Funzione per ottenere gli ID delle notizie nuove
async function getHackerNewsId() {
  try {
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
    return response.data;  // Restituisce gli ID delle notizie
  }catch (error) {
    console.error("Errore nel recupero degli ID delle notizie:", error);
    newsContainer.innerHTML = "<h2>Errore nel caricamento delle notizie. Riprova più tardi.</h2>";
    buttonMore.style.display = 'none';
  }
}

// Funzione per ottenere i dati di una singola notizia dato un ID
async function getNewsData(id) {
  try {
    const result = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return result.data;  // Restituisce i dati della notizia
  } catch (error) {
    console.error("Errore nel recupero della notizia:", error);
    return null;  // Ritorna null in caso di errore
  }
}

export { getHackerNewsId, getNewsData };