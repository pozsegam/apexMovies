import { Box, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { IMG_API_URL } from '../../constants/queries';
import { useMovie } from '../../hooks/useMovie';
import { useSearchWiki } from '../../hooks/useSearchWiki';

const MovieDetail = () => {
  const { id, name } = useParams();
  const movie = useMovie(id) || {};
  const wikiContent = useSearchWiki(name) || [];
  const POSTER = IMG_API_URL + movie.data?.poster?.file;
  return movie.isLoading || wikiContent.isLoading ? (
    <Spinner />
  ) : (
    <div className="wrapper">
      <Box className="movie-detail-container">
        <img className="poster" src={POSTER} alt="poster" />
        <div className="movie-detail-text-container">
          <h1 className="movie-title">{movie.data?.name}</h1>
          <p className="movie-overview">{movie.data?.overview}</p>
          <h3>Wikipedia Content</h3>
          <p className="wiki-extract">
            {`${wikiContent.data.extract.substring(0, 100)}...`}
          </p>
          <Link target="_blank" href={wikiContent.data.fullurl}>
            Go to Wikipedia page
          </Link>
        </div>
      </Box>
      <div>
        {movie.data?.similar.map(item => {
          return <h1>{item.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default MovieDetail;
