import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
          <Card
            className="card"
            onClick={() =>
              navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)
            }
            key={item.id}>
            <CardMedia
              component="img"
              height="500"
              image={item.img.url}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.overview}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Grid>
  );
};

export default PopularMovies;
