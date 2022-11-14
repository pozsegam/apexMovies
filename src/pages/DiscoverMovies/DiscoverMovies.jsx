import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import Spinner from '../../components/Spinner';
import { useDiscoverMovies } from '../../hooks/useDiscoverMovies';
import { ROUTES } from '../../navigation/routes';

const DiscoverMovies = () => {
  const movies = useDiscoverMovies() || [];
  const navigate = useNavigate();

  return movies.isLoading ? (
    <Spinner />
  ) : (
    <Grid container gap={5} padding={5}>
      {movies.data.map(item => {
        return (
          <MovieCard
            navigation={() =>
              navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)
            }
            id={item.id}
            key={item.id}
            poster={item.poster?.large}
            name={item.name}
            overview={item.overview}
          />
        );
      })}
    </Grid>
  );
};

export default DiscoverMovies;
