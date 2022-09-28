const getNews = async function () {
  const API_KEY = "d610f87f486f4f2c892578c04e1dc385";
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      //   throw new Error(`Somethind wen wrong ${res.status}`);
    }
    const data = await res.json();
    // console.log(data.articles);
    randerNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const randerNews = (news) => {
  console.log(news);
};
window.addEventListener("load", getNews);
