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
  if (article.data.url) {
    LinkHtml.href = article.data.url;
    LinkHtml.setAttribute("target", "_blank");
    LinkHtml.setAttribute("rel", "noopener noreferrer");
  } else {
    LinkHtml.href = "#";
    LinkHtml.setAttribute("disabled", "true");
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
  newsTitle.textContent = articolo.data.title;
  creaLinkNews(articolo, newsLink);
  newsDate.textContent = convertiDate(articolo.data.time);
}

async function getHakersNwsData(response) {
  // Inizializza le prime 10 notizie
  for (let i = 0; i < 10; i++) {
    const result = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + response.data[i] + ".json");
    creaNews(result);
  }

  buttonMore.addEventListener("click", async () => {
    if (buttonMore.disabled) return;

    // Carica le notizie successive
    for (let i = count; i < count + 10; i++) {
      try {
        const result = await axios.get("https://hacker-news.firebaseio.com/v0/item/" + response.data[i] + ".json");
        if (result.data) {
          creaNews(result);
        } else {
          newsFinite();
          break;
        }
      } catch (error) {
        console.error("Error loading news:", error);
      }
    }
    count += 10;
  });
}

async function getHakerNewsId() {
  try {
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");
    console.log(response);
    getHakersNwsData(response);
  } catch (error) {
    console.log(error);
  }
}

getHakerNewsId();
