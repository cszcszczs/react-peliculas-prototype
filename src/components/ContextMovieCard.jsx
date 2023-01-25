import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import MovieCard from "./MovieCard";
import "./ContextMovieCard.css";

function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=3ccffd6203db1f053eabb2aad1e9d918&language=en-US&page=${page}`;

    get(api).then((data) => {
      setMovies([...movies, ...data.results]);
    });
  }, [page]);

  function handleScroll() {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let innerHeight = window.innerHeight;

    if (innerHeight + scrollTop + 1 >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}

export default ContextMovieCard;
