const newsContainer = document.querySelector("[data-news-container]")

function convertiDate(date){
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

  return dataItaliana
}

function creaNews(article){
  let news = document.createElement("article")
  let newsDataContainer = document.createElement("div")
  let newsTitle = document.createElement("h2")
  let newsLink = document.createElement("a")
  let newsDate = document.createElement("p")
  newsDataContainer.className="news-container"
  newsContainer.appendChild(news)
  news.appendChild(newsDataContainer)
  newsDataContainer.appendChild(newsTitle)
  newsDataContainer.appendChild(newsLink)
  newsDataContainer.appendChild(newsDate)
  newsTitle.textContent=article.data.title
  newsLink.textContent="Leggi notizia"
  newsLink.href=article.data.url
  newsLink.setAttribute("target", "_blank");
  newsLink.setAttribute("rel", "noopener noreferrer");
  newsDate.textContent=convertiDate(article.data.time)
}

async function getHakersNwsData(response) {
  for (let i = 0 ; i<10;i++){
    const result = await axios.get("https://hacker-news.firebaseio.com/v0/item/"+response.data[i]+".json ")
    creaNews(result)
  }
}


async function getHakerNewsId(){
  try{
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json")
    console.log(response.data[0]);
    getHakersNwsData(response)
  } catch (error) {
    console.log(error)
  }
}

getHakerNewsId()