import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import getMovieImg from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [generos, setGeneros] = useState(null);

  const api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3ccffd6203db1f053eabb2aad1e9d918&language=en-US`;

  useEffect(() => {
    get(api).then((data) => {
      setMovie(data);
      setGeneros(data.genres);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie?.poster_path, 500);

  return (
    <div className="details-container">
      <img className="col movie-img" src={imageUrl} alt={movie?.title} />
      <div className="col movie-details">
        <p className="title">{movie?.title}</p>

        <div className="genres">
          <strong>Genres:</strong>
          {generos?.map((gen) => (
            <span key={gen?.id}> {gen?.name}, </span>
          ))}
        </div>

        <p className="description">
          <strong>Description: </strong>
          {movie?.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
