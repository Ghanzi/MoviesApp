const API_TOKEN = "c43156f4e5c1fa332d87a5d2d734768f";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }
  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }