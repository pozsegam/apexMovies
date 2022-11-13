import { Box, Link, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { IMG_API } from '../../constants/queries';
import { useMovie } from '../../hooks/useMovie';
import { useSearchWiki } from '../../hooks/useSearchWiki';

const MovieDetail = () => {
  const { id, name } = useParams();
  const movie = useMovie(id) || {};
  const wikiContent = useSearchWiki(name) || [];

  return movie.isLoading || wikiContent.isLoading ? (
    <Spinner />
  ) : (
    <Box className="movie-detail-container">
      <Typography variant="h3">{wikiContent.data.title}</Typography>
      <img src={IMG_API + movie.poster?.file} alt="" />
      <Typography variant="p">{movie.overview}</Typography>
      <Typography className="movie-detail-body" variant="p">
        {wikiContent.data.extract}
      </Typography>
      <div>
        <Link target="_blank" href={wikiContent.data.fullurl}>
          Go to Wikipedia page
        </Link>
      </div>
    </Box>
  );
};

export default MovieDetail;
