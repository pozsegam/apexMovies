import { Box, Link, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useSearchWiki } from '../../hooks/useSearchWiki';

const MovieDetail = () => {
  const { name } = useParams();
  const wikiContent = useSearchWiki(name) || [];

  return wikiContent.isLoading ? (
    <Spinner />
  ) : (
    <Box className="movie-detail-container">
      <Typography variant="h3">{wikiContent.data.title}</Typography>

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
