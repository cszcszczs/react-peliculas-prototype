import placeholder from "../img/film.png";

function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

export default getMovieImg;
