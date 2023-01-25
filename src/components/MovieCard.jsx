import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`;

  return (
    <li className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          className="movie-img"
          width={230}
          height={345}
          src={imgUrl}
          alt={movie.title}
        />
        <div className="title-card">{movie.title}</div>
      </Link>
    </li>
  );
}

export default MovieCard;
