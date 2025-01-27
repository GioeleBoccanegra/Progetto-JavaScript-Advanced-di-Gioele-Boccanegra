import _ from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js';
import { getNewsData } from './service.js';

const newsContainer = document.querySelector("[data-news-container]");
const buttonMore = document.querySelector("[data-load-more]");
let count = 10;

function convertiDate(date) {
  let data = new Date(date * 1000);
  const dataItaliana = data.toLocaleString('it-IT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return dataItaliana;
}

function creaLinkNews(article, LinkHtml) {
  LinkHtml.textContent = "Leggi notizia";
  const url = _.get(article, 'url', '#');
  LinkHtml.href = url;
  if (url === "#") {
    LinkHtml.setAttribute("disabled", "true");
  } else {
    LinkHtml.setAttribute("target", "_blank");
    LinkHtml.setAttribute("rel", "noopener noreferrer");
  }
}

function newsFinite() {
  let news = document.createElement("article");
  let newsDataContainer = document.createElement("div");
  newsDataContainer.className = "news-container";
  newsContainer.appendChild(news);
  news.appendChild(newsDataContainer);
  let newsEnd = document.createElement("h2");
  newsDataContainer.appendChild(newsEnd);
  newsEnd.textContent = "Hai visualizzato tutte le notizie. Torna più tardi!";
  buttonMore.style.display = 'none'; // Nascondi il pulsante
}

function creaNews(articolo) {
  let news = document.createElement("article");
  let newsDataContainer = document.createElement("div");
  let newsTitle = document.createElement("h3");
  let newsLink = document.createElement("a");
  let newsDate = document.createElement("p");

  newsDataContainer.className = "news-container";
  newsContainer.appendChild(news);
  news.appendChild(newsDataContainer);
  newsDataContainer.appendChild(newsTitle);
  newsDataContainer.appendChild(newsLink);
  newsDataContainer.appendChild(newsDate);

  newsTitle.textContent = _.get(articolo, 'title', 'Titolo non disponibile');
  creaLinkNews(articolo, newsLink);
  newsDate.textContent = convertiDate(_.get(articolo, 'time', 0));
}

async function loadNews(response) {
  // Inizializza le prime 10 notizie
  for (let i = 0; i < 10; i++) {
    const articleData = await getNewsData(response[i]);
    if (articleData) {
      creaNews(articleData);
    } else {
      creaNews({ title: "Errore nel caricamento della notizia." });
    }
  }

  buttonMore.addEventListener("click", async () => {
    if (buttonMore.disabled) return;

    // Disabilita il bottone e mostra "Caricamento..."
    buttonMore.disabled = true;
    buttonMore.textContent = "Caricamento...";

    // Carica le notizie successive
    for (let i = count; i < count + 10; i++) {
      const articleData = await getNewsData(response[i]);
      if (articleData) {
        creaNews(articleData);
      } else {
        newsFinite();
        break;
      }
    }

    // Ripristina il bottone
    count += 10;
    buttonMore.disabled = false;
    buttonMore.textContent = "Carica altre notizie";
  });
}

export { loadNews };
