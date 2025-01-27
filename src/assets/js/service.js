import axios from 'axios';

// Funzione per ottenere gli ID delle notizie nuove
async function getHackerNewsId() {
  try {
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
    return response.data; 
  }catch (error) {
    console.error("Errore nel recupero degli ID delle notizie:", error);
    newsContainer.innerHTML = "<h2>Errore nel caricamento delle notizie. Riprova più tardi.</h2>";
    buttonMore.style.display = 'none';
  }
}


async function getNewsData(id) {
  try {
    const result = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return result.data;  
  } catch (error) {
    console.error("Errore nel recupero della notizia:", error);
    return null;  
  }
}

export { getHackerNewsId, getNewsData };