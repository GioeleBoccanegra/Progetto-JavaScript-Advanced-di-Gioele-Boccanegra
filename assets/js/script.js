function convertDate(date){
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
async function getHakerNewsId(){
  try{
    const response = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json")
    console.log(response.data[0]);
    for (let i = 0 ; i<10;i++){
      const result = await axios.get("https://hacker-news.firebaseio.com/v0/item/"+response.data[i]+".json ")
      console.log(result)
      console.log(result.data.title + result.data.url)
      console.log(convertDate(result.data.time))
    }
  } catch (error) {
    console.log(error)
  }
}

getHakerNewsId()