import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import Spinner from '../../components/Spinner';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import { ROUTES } from '../../navigation/routes';

const PopularMovies = () => {
  const movies = usePopularMovies() || [];
  const navigate = useNavigate();

  return movies.isLoading ? (
    <Spinner />
  ) : (
    <Grid container gap={5} padding={5}>
      {movies.data?.map(item => {
        return (
          <MovieCard
            navigation={() =>
              navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)
            }
            id={item.id}
            poster={item.img.url}
            name={item.name}
            overview={item.overview}
          />
        );
      })}
    </Grid>
  );
};

export default PopularMovies;
